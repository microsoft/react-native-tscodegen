// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as cs from './CodegenSchema';
import { ExportNativeModuleInfo } from './ExportParser';
import { RNRawFunctionParameter, RNRawObjectProperty, RNRawType } from './RNRawType';
import { typeToRNRawType } from './TypeChecker';

function rawTypeToBaseType(rawType: RNRawType, usedAliases: string[]): cs.NativeModuleBaseTypeAnnotation {
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation' };
        case 'Number': return { type: 'NumberTypeAnnotation' };
        case 'Int32': return { type: 'Int32TypeAnnotation' };
        case 'Float': return { type: 'FloatTypeAnnotation' };
        case 'Double': return { type: 'DoubleTypeAnnotation' };
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        case 'js:Object': return { type: 'GenericObjectTypeAnnotation' };
        case 'rn:RootTag': return { type: 'ReservedFunctionValueTypeAnnotation', name: 'RootTag' };
        case 'Array': {
            if (rawType.elementType.kind === 'Union' || rawType.elementType.kind === 'Tuple' || rawType.elementType.kind === 'Any') {
                return { type: 'ArrayTypeAnnotation' };
            } else {
                return { type: 'ArrayTypeAnnotation', elementType: rawTypeToBaseType(rawType.elementType, usedAliases) };
            }
        }
        case 'Object': return {
            type: 'ObjectTypeAnnotation',
            properties: rawType.properties.map((param: RNRawObjectProperty) => {
                const propertyType = rawTypeToBaseType(param.propertyType, usedAliases);
                return {
                    optional: param.optional,
                    name: param.name,
                    typeAnnotation: param.propertyType.isNullable ? { type: 'NullableTypeAnnotation', typeAnnotation: propertyType } : propertyType
                };
            })
        };
        case 'Alias': {
            usedAliases.push(rawType.name);
            return {
                type: 'TypeAliasTypeAnnotation',
                name: rawType.name
            };
        }
        default:
    }

    if (rawType.kind === 'Union' || rawType.kind === 'Tuple') {
        throw new Error(`${rawType.kind} is only allowed in arrays in native module.`);
    } else {
        throw new Error(`${rawType.kind} is not supported in native module.`);
    }
}

function rawTypeToParamType(rawType: RNRawType, usedAliases: string[]): cs.NativeModuleParamTypeAnnotation {
    switch (rawType.kind) {
        case 'Function': return {
            type: 'FunctionTypeAnnotation',
            params: rawType.parameters.map((param: RNRawFunctionParameter) => {
                const parameterType = rawTypeToParamType(param.parameterType, usedAliases);
                return {
                    optional: param.optional,
                    name: param.name,
                    typeAnnotation: param.parameterType.isNullable ? { type: 'NullableTypeAnnotation', typeAnnotation: parameterType } : parameterType
                };
            }),
            returnTypeAnnotation: rawTypeToReturnType(rawType.returnType, usedAliases)
        };
        default:
            return rawTypeToBaseType(rawType, usedAliases);
    }
}

function rawTypeToReturnType(rawType: RNRawType, usedAliases: string[]): cs.NativeModuleReturnTypeAnnotation {
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation' };
        case 'Number': return { type: 'NumberTypeAnnotation' };
        case 'Int32': return { type: 'Int32TypeAnnotation' };
        case 'Float': return { type: 'FloatTypeAnnotation' };
        case 'Double': return { type: 'DoubleTypeAnnotation' };
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        case 'js:Object': return { type: 'GenericObjectTypeAnnotation' };
        case 'rn:RootTag': return { type: 'ReservedFunctionValueTypeAnnotation', name: 'RootTag' };
        case 'Void': case 'Null': return { type: 'VoidTypeAnnotation' };
        case 'Array': {
            if (rawType.elementType.kind === 'Union' || rawType.elementType.kind === 'Tuple' || rawType.elementType.kind === 'Any') {
                return { type: 'ArrayTypeAnnotation' };
            } else {
                return { type: 'ArrayTypeAnnotation', elementType: rawTypeToBaseType(rawType.elementType, usedAliases) };
            }
        }
        // What happened?
        // case 'js:Promise': return { type: 'GenericPromiseTypeAnnotation', nullable: rawType.isNullable, resolvedType: rawTypeToReturnType(rawType.elementType) };
        case 'js:Promise': return { type: 'PromiseTypeAnnotation' };
        case 'Object': return {
            type: 'ObjectTypeAnnotation',
            properties: rawType.properties.map((param: { name: string; propertyType: RNRawType }) => {
                return {
                    optional: param.propertyType.isNullable,
                    name: param.name,
                    typeAnnotation: rawTypeToBaseType(param.propertyType, usedAliases)
                };
            })
        };
        case 'Alias': {
            usedAliases.push(rawType.name);
            return {
                type: 'TypeAliasTypeAnnotation',
                name: rawType.name
            };
        }
        default:
    }

    if (rawType.kind === 'Union' || rawType.kind === 'Tuple') {
        throw new Error(`${rawType.kind} is only allowed in arrays in native module.`);
    } else {
        throw new Error(`${rawType.kind} is not supported in native module.`);
    }
}

export interface NativeModuleAliases {
    aliases: { [key: string]: RNRawType };
}

export function processNativeModule(info: ExportNativeModuleInfo, nativeModuleAliases: NativeModuleAliases): cs.NativeModuleSchema {
    const rawType = typeToRNRawType(info.typeNode, info.sourceFile, { allowObject: true, knownAliases: Object.keys(nativeModuleAliases.aliases) });
    if (rawType.kind !== 'Object') {
        throw new Error(`An object type is expected as a native module: ${info.typeNode.getText()}.`);
    }

    const properties: cs.NativeModulePropertySchema[] = [];
    const usedAliases: string[] = [];
    for (const prop of rawType.properties) {
        if (prop.name === 'getConstants' &&
            prop.propertyType.isNullable === true &&
            prop.propertyType.kind === 'Function' &&
            prop.propertyType.parameters.length === 0 &&
            prop.propertyType.returnType.kind === 'Object' &&
            prop.propertyType.returnType.properties.length === 0) {
            // this function is from TurboModule
            continue;
        }

        if (prop.propertyType.kind !== 'Function') {
            throw new Error(`Member ${prop.name} in a native module type ${info.typeNode.getText()} is expected to be a function.`);
        }

        properties.push({
            name: prop.name,
            optional: prop.optional,
            typeAnnotation: <cs.NativeModuleFunctionTypeAnnotation>rawTypeToParamType(prop.propertyType, usedAliases)
        });
    }

    const aliases: cs.NativeModuleAliasMap = {};
    const writableAliases = <{ [key: string]: cs.NativeModuleParamTypeAnnotation }>aliases;
    Object.keys(nativeModuleAliases.aliases).forEach((key: string) => {
        const rnRawType = nativeModuleAliases.aliases[key];
        if (rnRawType !== undefined) {
            writableAliases[key] = rawTypeToParamType(rnRawType, usedAliases);
        }
    });
    Object.keys(nativeModuleAliases.aliases).forEach((key: string) => {
        if (usedAliases.indexOf(key) === -1) {
            delete writableAliases[key];
        }
    });

    const spec: cs.NativeModuleSpec = { properties };
    const moduleNames: string[] = [info.name];
    const excludedPlatforms: cs.PlatformType[] = [];
    if (info.name.endsWith('Android')) {
        excludedPlatforms.push('iOS');
    }
    if (info.name.endsWith('IOS')) {
        excludedPlatforms.push('android');
    }

    if (excludedPlatforms.length === 0) {
        return { type: 'NativeModule', aliases, spec, moduleNames };
    } else {
        return { type: 'NativeModule', aliases, spec, moduleNames, excludedPlatforms };
    }
}
