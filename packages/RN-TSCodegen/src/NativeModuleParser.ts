// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as cs from './CodegenSchema';
import { ExportNativeModuleInfo } from './ExportParser';
import { RNRawType } from './RNRawType';
import { typeToRNRawType } from './TypeChecker';

function rawTypeToBaseType(rawType: RNRawType): cs.NativeModuleBaseTypeAnnotation {
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation' };
        case 'Number': return { type: 'NumberTypeAnnotation' };
        case 'Int32': return { type: 'Int32TypeAnnotation' };
        case 'Float': return { type: 'FloatTypeAnnotation' };
        case 'Double': return { type: 'DoubleTypeAnnotation' };
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        case 'js:Object': return { type: 'GenericObjectTypeAnnotation' };
        case 'Array': {
            if (rawType.elementType.kind === 'Union' || rawType.elementType.kind === 'Tuple') {
                const result = { type: 'ArrayTypeAnnotation' };
                return <cs.NativeModuleBaseTypeAnnotation>result;
            } else {
                return { type: 'ArrayTypeAnnotation', elementType: rawTypeToBaseType(rawType.elementType) };
            }
        }
        case 'Object': return {
            type: 'ObjectTypeAnnotation',
            properties: rawType.properties.map((param: { name: string; propertyType: RNRawType }) => {
                return {
                    optional: param.propertyType.isNullable,
                    name: param.name,
                    typeAnnotation: rawTypeToBaseType(param.propertyType)
                };
            })
        };
        case 'Alias': return {
            type: 'TypeAliasTypeAnnotation',
            name: rawType.name
        };
        default:
    }

    if (rawType.kind === 'Union' || rawType.kind === 'Tuple') {
        throw new Error(`${rawType.kind} is only allowed in arrays in native module.`);
    } else {
        throw new Error(`${rawType.kind} is not supported in native module.`);
    }
}

function rawTypeToParamType(rawType: RNRawType): cs.NativeModuleParamTypeAnnotation {
    switch (rawType.kind) {
        case 'Function': return {
            type: 'FunctionTypeAnnotation',
            params: rawType.parameters.map((param: { name: string; parameterType: RNRawType }) => {
                const parameterType = rawTypeToParamType(param.parameterType);
                if (param.parameterType.isNullable) {
                    return {
                        optional: false,
                        name: param.name,
                        typeAnnotation: { type: 'NullableTypeAnnotation', typeAnnotation: parameterType }
                    };
                } else {
                    return {
                        optional: false,
                        name: param.name,
                        typeAnnotation: parameterType
                    };
                }
            }),
            returnTypeAnnotation: rawTypeToReturnType(rawType.returnType)
        };
        default:
            return rawTypeToBaseType(rawType);
    }
}

function rawTypeToReturnType(rawType: RNRawType): cs.NativeModuleReturnTypeAnnotation {
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation' };
        case 'Number': return { type: 'NumberTypeAnnotation' };
        case 'Int32': return { type: 'Int32TypeAnnotation' };
        case 'Float': return { type: 'FloatTypeAnnotation' };
        case 'Double': return { type: 'DoubleTypeAnnotation' };
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        case 'js:Object': return { type: 'GenericObjectTypeAnnotation' };
        case 'Void': case 'Null': return { type: 'VoidTypeAnnotation' };
        case 'Array': {
            if (rawType.elementType.kind === 'Union' || rawType.elementType.kind === 'Tuple') {
                const result = { type: 'ArrayTypeAnnotation', nullable: rawType.isNullable };
                return <cs.NativeModuleReturnTypeAnnotation>result;
            } else {
                return { type: 'ArrayTypeAnnotation', elementType: rawTypeToBaseType(rawType.elementType) };
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
                    typeAnnotation: rawTypeToBaseType(param.propertyType)
                };
            })
        };
        case 'Alias': return {
            type: 'TypeAliasTypeAnnotation',
            name: rawType.name
        };
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
            optional: false,
            typeAnnotation: <cs.NativeModuleFunctionTypeAnnotation>rawTypeToParamType(prop.propertyType)
        });
    }

    const aliases: cs.NativeModuleAliasMap = {};
    const writableAliases = <{ [key: string]: cs.NativeModuleParamTypeAnnotation }>aliases;
    Object.keys(nativeModuleAliases.aliases).forEach((key: string) => {
        const rnRawType = nativeModuleAliases.aliases[key];
        if (rnRawType !== undefined) {
            writableAliases[key] = rawTypeToParamType(rnRawType);
        }
    });

    const spec: cs.NativeModuleSpec = { properties };
    const moduleNames: string[] = [info.name];
    const excludedPlatforms: cs.PlatformType[] = [];
    if (excludedPlatforms.length === 0) {
        return { type: 'NativeModule', aliases, spec, moduleNames };
    } else {
        return { type: 'NativeModule', aliases, spec, moduleNames, excludedPlatforms };
    }
}
