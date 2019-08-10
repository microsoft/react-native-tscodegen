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
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        case 'js:Object': return { type: 'GenericObjectTypeAnnotation' };
        case 'Any': return { type: 'AnyTypeAnnotation' };
        case 'Array': return { type: 'ArrayTypeAnnotation', elementType: rawTypeToParamType(rawType.elementType) };
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
        case 'Function': return {
            type: 'FunctionTypeAnnotation',
            params: rawType.parameters.map((param: { name: string; parameterType: RNRawType }) => {
                return {
                    nullable: param.parameterType.isNullable,
                    name: param.name,
                    typeAnnotation: rawTypeToParamType(param.parameterType)
                };
            }),
            returnTypeAnnotation: rawTypeToReturnType(rawType.returnType)
        };
        default: throw new Error(`${rawType.kind} is not supported in native module.`);
    }
}

function rawTypeToReturnType(rawType: RNRawType): cs.FunctionTypeAnnotationReturn {
    switch (rawType.kind) {
        case 'String': return { type: 'StringTypeAnnotation' };
        case 'Number': return { type: 'NumberTypeAnnotation' };
        case 'Int32': return { type: 'Int32TypeAnnotation' };
        case 'Float': return { type: 'FloatTypeAnnotation' };
        case 'Boolean': return { type: 'BooleanTypeAnnotation' };
        case 'js:Object': return { type: 'GenericObjectTypeAnnotation' };
        case 'Void': case 'Null': return { type: 'VoidTypeAnnotation' };
        case 'Array': return { type: 'ArrayTypeAnnotation', elementType: rawTypeToParamType(rawType.elementType) };
        case 'js:Promise': return { type: 'GenericPromiseTypeAnnotation', resolvedType: rawTypeToReturnType(rawType.elementType) };
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
        default: throw new Error(`${rawType.kind} is not supported in native module.`);
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
        if (prop.name !== 'getConstants') { // this function is from TurboModule
            try {
                properties.push({
                    name: prop.name,
                    typeAnnotation: rawTypeToFunctionTypeAnnotation(prop.propertyType, prop.name, info.typeNode)
                });
            } catch (error) {
                console.log(prop);
                throw error;
            }
        }
    }

    return { properties };
}
