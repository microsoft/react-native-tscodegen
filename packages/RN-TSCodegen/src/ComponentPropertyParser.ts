// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:no-null-keyword

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { RNRawType, typeToRNRawType } from './TypeChecker';

function rnRawTypeToPropTypeTypeAnnotation(rawType: RNRawType, typeNode: ts.TypeNode, typeChecker: ts.TypeChecker): [boolean, cs.PropTypeTypeAnnotation] {
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
    case 'Double': return [rawType.isNullable, {
      type: 'DoubleTypeAnnotation',
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
    case 'NumberLiterals': return [rawType.isNullable, {
      type: 'Int32EnumTypeAnnotation',
      options: rawType.values.map((value: number) => { return { value }; }),
      default: (rawType.defaultValue === undefined ? rawType.values[0] : +`${rawType.defaultValue}`)
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
    case 'rn:EdgeInsetsPrimitive': return [rawType.isNullable, {
      type: 'NativePrimitiveTypeAnnotation',
      name: 'EdgeInsetsPrimitive'
    }];
    case 'Object': return [rawType.isNullable, {
      type: 'ObjectTypeAnnotation',
      properties: rawType.properties.map((value: { name: string; propertyType: RNRawType }) => {
        const [optional, typeAnnotation] = rnRawTypeToPropTypeTypeAnnotation(value.propertyType, typeNode, typeChecker);
        return {
          name: value.name,
          optional,
          typeAnnotation
        };
      })
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
          elementType: { type: 'FloatTypeAnnotation', default: 0 }
        }];
        case 'Double': return [rawType.isNullable, {
          type: 'ArrayTypeAnnotation',
          elementType: { type: 'DoubleTypeAnnotation' }
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
            default: <string>(rawType.defaultValue === undefined ? rawType.elementType.defaultValue === undefined ? null : `${rawType.elementType.defaultValue}` : `${rawType.defaultValue}`)
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
        case 'rn:EdgeInsetsPrimitive': return [rawType.isNullable, {
          type: 'ArrayTypeAnnotation',
          elementType: {
            type: 'NativePrimitiveTypeAnnotation',
            name: 'EdgeInsetsPrimitive'
          }
        }];
        case 'Object': return [rawType.isNullable, {
          type: 'ArrayTypeAnnotation',
          elementType: {
            type: 'ObjectTypeAnnotation',
            properties: rawType.elementType.properties.map((value: { name: string; propertyType: RNRawType }) => {
              const [optional, typeAnnotation] = rnRawTypeToPropTypeTypeAnnotation(value.propertyType, typeNode, typeChecker);
              return {
                name: value.name,
                optional,
                typeAnnotation
              };
            })
          }
        }];
        default:
      }
      break;
    default:
  }
  throw new Error(`Component property argument type does not support ${typeNode.getText()}: ${JSON.stringify(rawType, undefined, 2)}.`);
}

export function parseProperty(info: ExportComponentInfo, propDecl: ts.PropertySignature): cs.PropTypeShape {
  const typeChecker = info.program.getTypeChecker();
  const propType = <ts.TypeNode>propDecl.type;
  const rawType = typeToRNRawType(typeChecker.getTypeFromTypeNode(propType), typeChecker, true);
  const [optional, typeAnnotation] = rnRawTypeToPropTypeTypeAnnotation(rawType, propType, info.program.getTypeChecker());
  return {
    name: propDecl.name.getText(),
    optional: propDecl.questionToken !== undefined || optional,
    typeAnnotation
  };
}
