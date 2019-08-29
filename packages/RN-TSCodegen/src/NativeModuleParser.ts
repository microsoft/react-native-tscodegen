// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportNativeModuleInfo } from './ExportParser';
import { RNRawType, typeToRNRawType } from './TypeChecker';

function rawTypeToParamType(rawType: RNRawType): cs.FunctionTypeAnnotationParamTypeAnnotation {
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation' };
        case 'Number': return { type: 'NumberTypeAnnotation' };
        case 'Int32': return { type: 'Int32TypeAnnotation' };
        case 'Float': return { type: 'FloatTypeAnnotation' };
        case 'Double': return { type: 'DoubleTypeAnnotation' };
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        case 'js:Object': return { type: 'GenericObjectTypeAnnotation' };
        case 'Any': return { type: 'AnyTypeAnnotation' };
        case 'Array': {
            if (rawType.elementType.kind === 'Union' || rawType.elementType.kind === 'Tuple') {
                const result = { type: 'ArrayTypeAnnotation' };
                return <cs.FunctionTypeAnnotationParamTypeAnnotation>result;
            } else {
                return { type: 'ArrayTypeAnnotation', elementType: rawTypeToParamType(rawType.elementType) };
            }
        }
        case 'Object': return {
            type: 'ObjectTypeAnnotation',
            properties: rawType.properties.map((param: { name: string; propertyType: RNRawType }) => {
                return {
                    optional: param.propertyType.isNullable,
                    name: param.name,
                    typeAnnotation: rawTypeToParamType(param.propertyType)
                };
            })
        };
        // What happened?
        // case 'Function': return {
        //     type: 'FunctionTypeAnnotation',
        //     params: rawType.parameters.map((param: { name: string; parameterType: RNRawType }) => {
        //         return {
        //             nullable: param.parameterType.isNullable,
        //             name: param.name,
        //             typeAnnotation: rawTypeToParamType(param.parameterType)
        //         };
        //     }),
        //     returnTypeAnnotation: rawTypeToReturnType(rawType.returnType)
        // };
        case 'Function': return {
            type: 'FunctionTypeAnnotation'
        };
        default:
    }

    if (rawType.kind === 'Union' || rawType.kind === 'Tuple') {
        throw new Error(`${rawType.kind} is only allowed in arrays in native module.`);
    } else {
        throw new Error(`${rawType.kind} is not supported in native module.`);
    }
}

function rawTypeToReturnType(rawType: RNRawType): cs.FunctionTypeAnnotationReturn {
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation', nullable: rawType.isNullable };
        case 'Number': return { type: 'NumberTypeAnnotation', nullable: rawType.isNullable };
        case 'Int32': return { type: 'Int32TypeAnnotation', nullable: rawType.isNullable };
        case 'Float': return { type: 'FloatTypeAnnotation', nullable: rawType.isNullable };
        case 'Double': return { type: 'DoubleTypeAnnotation', nullable: rawType.isNullable };
        case 'Boolean': return { type: 'BooleanTypeAnnotation', nullable: rawType.isNullable };
        case 'js:Object': return { type: 'GenericObjectTypeAnnotation', nullable: rawType.isNullable };
        case 'Void': case 'Null': return { type: 'VoidTypeAnnotation', nullable: rawType.isNullable };
        case 'Array': {
            if (rawType.elementType.kind === 'Union' || rawType.elementType.kind === 'Tuple') {
                const result = { type: 'ArrayTypeAnnotation', nullable: rawType.isNullable };
                return <cs.FunctionTypeAnnotationReturn>result;
            } else {
                return { type: 'ArrayTypeAnnotation', nullable: rawType.isNullable, elementType: rawTypeToParamType(rawType.elementType) };
            }
        }
        // What happened?
        // case 'js:Promise': return { type: 'GenericPromiseTypeAnnotation', nullable: rawType.isNullable, resolvedType: rawTypeToReturnType(rawType.elementType) };
        case 'js:Promise': return { type: 'GenericPromiseTypeAnnotation', nullable: rawType.isNullable };
        case 'Object': return {
            type: 'ObjectTypeAnnotation',
            nullable: rawType.isNullable,
            properties: rawType.properties.map((param: { name: string; propertyType: RNRawType }) => {
                return {
                    optional: param.propertyType.isNullable,
                    name: param.name,
                    typeAnnotation: rawTypeToParamType(param.propertyType)
                };
            })
        };
        default:
    }

    if (rawType.kind === 'Union' || rawType.kind === 'Tuple') {
        throw new Error(`${rawType.kind} is only allowed in arrays in native module.`);
    } else {
        throw new Error(`${rawType.kind} is not supported in native module.`);
    }
}

function rawTypeToFunctionTypeAnnotation(rawType: RNRawType, propName: string, typeNode: ts.TypeNode): cs.FunctionTypeAnnotation {
    if (rawType.kind !== 'Function') {
        throw new Error(`Member ${propName} in a native module type ${typeNode.getText()} is expected to be a function.`);
    }
    return {
        type: 'FunctionTypeAnnotation',
        params: rawType.parameters.map((param: { name: string; parameterType: RNRawType }) => {
            return {
                nullable: param.parameterType.isNullable,
                name: param.name,
                typeAnnotation: rawTypeToParamType(param.parameterType)
            };
        }),
        returnTypeAnnotation: rawTypeToReturnType(rawType.returnType),
        optional: rawType.isNullable
    };
}

export function processNativeModule(info: ExportNativeModuleInfo): cs.NativeModuleShape {
    const rawType = typeToRNRawType(info.program.getTypeChecker().getTypeFromTypeNode(info.typeNode), info.program.getTypeChecker(), true);
    if (rawType.kind !== 'Object') {
        throw new Error(`An object type is expected as a native module: ${info.typeNode.getText()}.`);
    }

    const properties: cs.MethodTypeShape[] = [];
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
        properties.push({
            name: prop.name,
            typeAnnotation: rawTypeToFunctionTypeAnnotation(prop.propertyType, prop.name, info.typeNode)
        });
    }

    return { properties };
}
