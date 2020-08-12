// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:no-null-keyword

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { RNRawObjectType, RNRawType, RNRawTypeCommon } from './RNRawType';
import { typeToRNRawType } from './TypeChecker';

interface ObjectTypeAnnotation {
  type: 'ObjectTypeAnnotation';
  properties: ReadonlyArray<cs.PropTypeShape>;
}

function rnRawTypeToObjectTypeAnnotation(rawType: RNRawObjectType & RNRawTypeCommon, typeNode: ts.TypeNode): ObjectTypeAnnotation {
  return {
    type: 'ObjectTypeAnnotation',
    properties: rawType.properties.map((value: { name: string; propertyType: RNRawType }) => {
      const [optional, typeAnnotation] = rnRawTypeToPropTypeTypeAnnotation(value.propertyType, typeNode);
      return {
        name: value.name,
        optional,
        typeAnnotation
      };
    })
  };
}

function rnRawTypeToPropTypeTypeAnnotation(rawType: RNRawType, typeNode: ts.TypeNode): [boolean, cs.PropTypeTypeAnnotation] {
  switch (rawType.kind) {
    case 'Boolean': return [rawType.isNullable, {
      type: 'BooleanTypeAnnotation',
      default: (rawType.defaultValue === undefined ? (rawType.isNullable ? null : false) : rawType.defaultValue === true)
    }];
    case 'String': return [rawType.isNullable, {
      type: 'StringTypeAnnotation',
      default: (rawType.defaultValue === undefined ? null : `${rawType.defaultValue}`)
    }];
    case 'Float': return [rawType.isNullable, {
      type: 'FloatTypeAnnotation',
      default: (rawType.defaultValue === undefined ? (rawType.isNullable ? null : 0) : +rawType.defaultValue)
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
      default: (rawType.defaultValue === undefined ? rawType.values[0] : +rawType.defaultValue)
    }];
    case 'rn:ColorPrimitive': return [rawType.isNullable, {
      type: 'ReservedPropTypeAnnotation',
      name: 'ColorPrimitive'
    }];
    case 'rn:ImageSourcePrimitive': return [rawType.isNullable, {
      type: 'ReservedPropTypeAnnotation',
      name: 'ImageSourcePrimitive'
    }];
    case 'rn:PointPrimitive': return [rawType.isNullable, {
      type: 'ReservedPropTypeAnnotation',
      name: 'PointPrimitive'
    }];
    case 'rn:EdgeInsetsPrimitive': return [rawType.isNullable, {
      type: 'ReservedPropTypeAnnotation',
      name: 'EdgeInsetsPrimitive'
    }];
    case 'Object': return [rawType.isNullable, rnRawTypeToObjectTypeAnnotation(rawType, typeNode)];
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
            type: 'ReservedPropTypeAnnotation',
            name: 'ColorPrimitive'
          }
        }];
        case 'rn:ImageSourcePrimitive': return [rawType.isNullable, {
          type: 'ArrayTypeAnnotation',
          elementType: {
            type: 'ReservedPropTypeAnnotation',
            name: 'ImageSourcePrimitive'
          }
        }];
        case 'rn:PointPrimitive': return [rawType.isNullable, {
          type: 'ArrayTypeAnnotation',
          elementType: {
            type: 'ReservedPropTypeAnnotation',
            name: 'PointPrimitive'
          }
        }];
        case 'rn:EdgeInsetsPrimitive': return [rawType.isNullable, {
          type: 'ArrayTypeAnnotation',
          elementType: {
            type: 'ReservedPropTypeAnnotation',
            name: 'EdgeInsetsPrimitive'
          }
        }];
        case 'Object': return [rawType.isNullable, {
          type: 'ArrayTypeAnnotation',
          elementType: rnRawTypeToObjectTypeAnnotation(rawType.elementType, typeNode)
        }];
        case 'Array': {
          switch (rawType.elementType.elementType.kind) {
            case 'Object': return [rawType.isNullable, {
              type: 'ArrayTypeAnnotation',
              elementType: {
                type: 'ArrayTypeAnnotation',
                elementType: rnRawTypeToObjectTypeAnnotation(rawType.elementType.elementType, typeNode)
              }
            }];
            default:
          }
        }
        default:
      }
      break;
    default:
  }
  throw new Error(`Component property argument type does not support ${typeNode.getText()}: ${JSON.stringify(rawType, undefined, 2)}.`);
}

export function parseProperty(info: ExportComponentInfo, propDecl: ts.PropertySignature | ts.PropertyDeclaration): cs.PropTypeShape {
  const propType = <ts.TypeNode>propDecl.type;
  const rawType = typeToRNRawType(propType, info.sourceFile, true);
  const [optional, typeAnnotation] = rnRawTypeToPropTypeTypeAnnotation(rawType, propType);
  return {
    name: propDecl.name.getText(),
    optional: propDecl.questionToken !== undefined || optional,
    typeAnnotation
  };
}
