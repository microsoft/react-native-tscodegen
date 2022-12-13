// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as cs from 'react-native-tscodegen';
import { ExportNativeModuleInfo } from './ExportParser';
import { RNRawFunctionParameter, RNRawFunctionType, RNRawObjectProperty, RNRawType } from './RNRawType';
import { typeToRNRawType } from './TypeChecker';

function rawTypeToBaseType(rawType: RNRawType, usedAliases: string[]): cs.NativeModuleBaseTypeAnnotation {
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation' };
        case 'Number': return { type: 'NumberTypeAnnotation' };
        case 'StringEnum': return { type: 'EnumDeclaration', memberType: 'StringTypeAnnotation' };
        case 'NumberEnum': return { type: 'EnumDeclaration', memberType: 'NumberTypeAnnotation' };
        case 'Int32': return { type: 'Int32TypeAnnotation' };
        case 'Float': return { type: 'FloatTypeAnnotation' };
        case 'Double': return { type: 'DoubleTypeAnnotation' };
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        case 'Unknown': return { type: 'MixedTypeAnnotation' };
        case 'js:Object': return { type: 'GenericObjectTypeAnnotation' };
        case 'rn:RootTag': return { type: 'ReservedTypeAnnotation', name: 'RootTag' };
        case 'rn:UnsafeObject': return { type: 'GenericObjectTypeAnnotation' };
        case 'StringLiterals': return { type: 'UnionTypeAnnotation', memberType: 'StringTypeAnnotation' };
        case 'NumberLiterals': return { type: 'UnionTypeAnnotation', memberType: 'NumberTypeAnnotation' };
        case 'Array': {
            if (rawType.elementType.kind === 'Union' || rawType.elementType.kind === 'Tuple' || rawType.elementType.kind === 'Any') {
                return { type: 'ArrayTypeAnnotation' };
            } else {
                return { type: 'ArrayTypeAnnotation', elementType: rawTypeToBaseType(rawType.elementType, usedAliases) };
            }
        }
        case 'Indexer': return { type: 'GenericObjectTypeAnnotation' };
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
        case 'Union': {
            const nonObjects = rawType.types.filter((elementType: RNRawType) => elementType.kind !== 'Object');
            if (nonObjects.length === 0) {
                return { type: 'UnionTypeAnnotation', memberType: 'ObjectTypeAnnotation' };
            } else {
                const nonObjectTypes = nonObjects.map((elementType: RNRawType) => elementType.kind);
                const nonObjectTypesText = nonObjectTypes.filter((name: RNRawType['kind'], index: number) => nonObjectTypes.indexOf(name) === index).join(', ');
                throw new Error(`${rawType.kind} of ${nonObjectTypesText}} is only allowed in arrays in native module.`);
            }
        }
        case 'Tuple': {
            throw new Error(`Tuple is only allowed in arrays in native module.`);
        }
        default:
            throw new Error(`${rawType.kind} is not supported in native module.`);
    }
}

function functionTypeToParamType(rawType: RNRawFunctionType, usedAliases: string[]): cs.NativeModuleParamTypeAnnotation {
    return {
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
}

function rawTypeToParamType(rawType: RNRawType, usedAliases: string[]): cs.NativeModuleParamTypeAnnotation {
    switch (rawType.kind) {
        case 'Function': return functionTypeToParamType(rawType, usedAliases);
        default:
            return rawTypeToBaseType(rawType, usedAliases);
    }
}

function rawTypeToReturnType(rawType: RNRawType, usedAliases: string[]): cs.NativeModuleReturnTypeAnnotation {
    switch (rawType.kind) {
        case 'Void': case 'Null': return { type: 'VoidTypeAnnotation' };
        case 'Function': return <cs.NativeModuleReturnTypeAnnotation>functionTypeToParamType(rawType, usedAliases);
        case 'js:Promise':
            if (rawType.elementType === undefined) {
                return { type: 'PromiseTypeAnnotation' };
            } else {
                return { type: 'PromiseTypeAnnotation', elementType: rawTypeToBaseType(rawType.elementType, usedAliases) };
            }
        default:
            return rawTypeToBaseType(rawType, usedAliases);
    }
}

export interface NativeModuleAliases {
    aliases: { [key: string]: RNRawType };
}

export function processNativeModule(info: ExportNativeModuleInfo, nativeModuleAliases: NativeModuleAliases): cs.NativeModuleSchema {
    const rawType = typeToRNRawType(info.typeNode, info.sourceFile, { allowObject: true, allowIndexer: true, knownAliases: Object.keys(nativeModuleAliases.aliases) });
    if (rawType.kind !== 'Object') {
        throw new Error(`An object type is expected as a native module: ${info.typeNode.getText()}.`);
    }

    const properties: cs.NativeModulePropertyShape[] = [];
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
    const excludedPlatforms: cs.PlatformType[] = [];
    if (info.name.endsWith('Android')) {
        excludedPlatforms.push('iOS');
    }
    if (info.name.endsWith('IOS')) {
        excludedPlatforms.push('android');
    }
    if (info.name.endsWith('Cxx')) {
        excludedPlatforms.push('iOS');
        excludedPlatforms.push('android');
    }

    if (excludedPlatforms.length === 0) {
        return { type: 'NativeModule', aliases, spec, moduleName: info.name };
    } else {
        return { type: 'NativeModule', aliases, spec, moduleName: info.name, excludedPlatforms };
    }
}
