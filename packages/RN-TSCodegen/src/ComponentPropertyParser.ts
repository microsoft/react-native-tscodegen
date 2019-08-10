// tslint:disable:no-null-keyword
// tslint:disable:no-reserved-keywords

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { typeToRNRawType } from './TypeChecker';

function typeNodeToPropTypeTypeAnnotation(typeNode: ts.TypeNode, typeChecker: ts.TypeChecker): [boolean, cs.PropTypeTypeAnnotation] {
  try {
    const rawType = typeToRNRawType(typeChecker.getTypeFromTypeNode(typeNode), typeChecker, false);
    switch (rawType.kind) {
      case 'Boolean': return [rawType.isNullable, {
        type: 'BooleanTypeAnnotation',
        default: (rawType.defaultValue === undefined ? false : rawType.defaultValue === true)
      }];
      case 'String': return [rawType.isNullable, {
        type: 'StringTypeAnnotation',
        default: (rawType.defaultValue === undefined ? null : `${rawType.defaultValue}`)
      }];
      case 'Float': return [rawType.isNullable, {
        type: 'FloatTypeAnnotation',
        default: (rawType.defaultValue === undefined ? 0 : +rawType.defaultValue)
      }];
      case 'Int32': return [rawType.isNullable, {
        type: 'Int32TypeAnnotation',
        default: (rawType.defaultValue === undefined ? 0 : +rawType.defaultValue)
      }];
      case 'StringLiterals': return [rawType.isNullable, {
        type: 'StringEnumTypeAnnotation',
        options: rawType.values.map((name: string) => { return { name }; }),
        default: (rawType.defaultValue === undefined ? rawType.values[0] : `${rawType.defaultValue}`)
      }];
      case 'rn:ColorPrimitive': return [rawType.isNullable, {
        type: 'NativePrimitiveTypeAnnotation',
        name: 'ColorPrimitive'
      }];
      case 'rn:ImageSourcePrimitive': return [rawType.isNullable, {
        type: 'NativePrimitiveTypeAnnotation',
        name: 'ImageSourcePrimitive'
      }];
      case 'rn:PointPrimitive': return [rawType.isNullable, {
        type: 'NativePrimitiveTypeAnnotation',
        name: 'PointPrimitive'
      }];
      case 'Array':
        switch (rawType.elementType.kind) {
          case 'Boolean': return [rawType.isNullable, {
            type: 'ArrayTypeAnnotation',
            elementType: { type: 'BooleanTypeAnnotation' }
          }];
          case 'String': return [rawType.isNullable, {
            type: 'ArrayTypeAnnotation',
            elementType: { type: 'StringTypeAnnotation' }
          }];
          case 'Float': return [rawType.isNullable, {
            type: 'ArrayTypeAnnotation',
            elementType: { type: 'FloatTypeAnnotation' }
          }];
          case 'Int32': return [rawType.isNullable, {
            type: 'ArrayTypeAnnotation',
            elementType: { type: 'Int32TypeAnnotation' }
          }];
          case 'StringLiterals': return [rawType.isNullable, {
            type: 'ArrayTypeAnnotation',
            elementType: {
              type: 'StringEnumTypeAnnotation',
              options: rawType.elementType.values.map((name: string) => { return { name }; }),
              default: (rawType.defaultValue === undefined ? rawType.elementType.defaultValue === undefined ? null : `${rawType.elementType.defaultValue}` : `${rawType.defaultValue}`)
            }
          }];
          case 'rn:ColorPrimitive': return [rawType.isNullable, {
            type: 'ArrayTypeAnnotation',
            elementType: {
              type: 'NativePrimitiveTypeAnnotation',
              name: 'ColorPrimitive'
            }
          }];
          case 'rn:ImageSourcePrimitive': return [rawType.isNullable, {
            type: 'ArrayTypeAnnotation',
            elementType: {
              type: 'NativePrimitiveTypeAnnotation',
              name: 'ImageSourcePrimitive'
            }
          }];
          case 'rn:PointPrimitive': return [rawType.isNullable, {
            type: 'ArrayTypeAnnotation',
            elementType: {
              type: 'NativePrimitiveTypeAnnotation',
              name: 'PointPrimitive'
            }
          }];
          default:
        }
        break;
      default:
    }
  } catch (error) {
    // nothing
  }
  throw new Error(`Component command argument type does not support ${typeNode.getText()}.`);
}

export function parseProperty(info: ExportComponentInfo, propDecl: ts.PropertySignature): cs.PropTypeShape {
  const [optional, typeAnnotation] = typeNodeToPropTypeTypeAnnotation(propDecl.type, info.program.getTypeChecker());
  return {
    name: propDecl.name.getText(),
    optional: propDecl.questionToken !== undefined || optional,
    typeAnnotation
  };
}
