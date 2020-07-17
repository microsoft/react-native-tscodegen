// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { RNRawType, WritableObjectType } from './RNRawType';
import { typeToRNRawType } from './TypeChecker';

function checkEventType(eventType: ts.TypeNode, info: ExportComponentInfo, propDecl: ts.PropertySignature | ts.PropertyDeclaration): [boolean, ts.TypeNode, string, string | undefined] | undefined {
  if (ts.isParenthesizedTypeNode(eventType)) {
    return checkEventType(eventType.type, info, propDecl);
  } else if (ts.isUnionTypeNode(eventType)) {
    let result: [boolean, ts.TypeNode, string, string | undefined] | undefined;
    for (const elementType of eventType.types) {
      const elementResult = checkEventType(elementType, info, propDecl);
      if (elementResult !== undefined) {
        if (result === undefined) {
          result = elementResult;
        } else {
          throw new Error(`Event ${propDecl.name.getText()} in type ${info.typeNode.getText()} should have a correct event type.`);
        }
      }
    }
    if (result !== undefined) {
      result[0] = true;
    }
    return result;
  } else if (ts.isTypeReferenceNode(eventType)) {
    const typeName = eventType.typeName.getText();
    if (typeName !== 'DirectEventHandler' && typeName !== 'BubblingEventHandler') {
      return undefined;
    }

    const typeArguments = eventType.typeArguments;
    if (typeArguments === undefined || typeArguments.length < 1 || typeArguments.length > 2) {
      throw new Error(`Event ${propDecl.name.getText()} in type ${info.typeNode.getText()} should have one or two type parameters for ${typeName}.`);
    }

    if (typeArguments.length === 2) {
      const nameArgument = typeArguments[1];
      if (ts.isLiteralTypeNode(nameArgument) && ts.isStringLiteral(nameArgument.literal)) {
        return [false, typeArguments[0], typeName, nameArgument.literal.text];
      }
    }
    return [false, typeArguments[0], typeName, undefined];
  } else {
    return undefined;
  }
}

function rnRawTypeToObjectPropertyType(typeNode: ts.TypeNode, rawType: RNRawType): cs.ObjectPropertyType {
  const namePlaceholder = <string><unknown>undefined;
  switch (rawType.kind) {
    case 'Boolean': return { type: 'BooleanTypeAnnotation', name: namePlaceholder, optional: rawType.isNullable };
    case 'String': return { type: 'StringTypeAnnotation', name: namePlaceholder, optional: rawType.isNullable };
    case 'Float': return { type: 'FloatTypeAnnotation', name: namePlaceholder, optional: rawType.isNullable };
    case 'Double': return { type: 'DoubleTypeAnnotation', name: namePlaceholder, optional: rawType.isNullable };
    case 'Int32': return { type: 'Int32TypeAnnotation', name: namePlaceholder, optional: rawType.isNullable };
    case 'StringLiterals': return {
      type: 'StringEnumTypeAnnotation',
      name: namePlaceholder,
      optional: rawType.isNullable,
      options: rawType.values.map((name: string) => { return { name }; })
    };
    case 'Object': return {
      type: 'ObjectTypeAnnotation',
      name: namePlaceholder,
      optional: rawType.isNullable,
      properties: rawType.properties.map((rawProp: { name: string; propertyType: RNRawType }) => {
        const prop = <WritableObjectType<cs.ObjectPropertyType>>rnRawTypeToObjectPropertyType(typeNode, rawProp.propertyType);
        prop.name = rawProp.name;
        return prop;
      })
    };
    default:
  }
  throw new Error(`Component event type does not support ${typeNode.getText()}: ${JSON.stringify(rawType, undefined, 2)}.`);
}

export function tryParseEvent(info: ExportComponentInfo, propDecl: ts.PropertySignature | ts.PropertyDeclaration): cs.EventTypeShape | undefined {
  const propType = <ts.TypeNode>propDecl.type;
  const eventTypeTuple = checkEventType(propType, info, propDecl);
  if (eventTypeTuple === undefined) {
    return undefined;
  }

  const [optional, eventType, eventTypeName, paperTopLevelNameDeprecated] = eventTypeTuple;
  const rawType = typeToRNRawType(eventType, info.sourceFile, true);

  let eventProperties: readonly cs.ObjectPropertyType[] = [];
  if (rawType.kind !== 'Null') {
    const objectType = rnRawTypeToObjectPropertyType(propType, rawType);
    if (objectType.type === 'ObjectTypeAnnotation') {
      eventProperties = objectType.properties;
    } else {
      throw new Error(`Component event type does not support ${propType.getText()}: ${JSON.stringify(rawType, undefined, 2)}.`);
    }
  }

  const result: WritableObjectType<cs.EventTypeShape> = {
    name: propDecl.name.getText(),
    bubblingType: eventTypeName === 'DirectEventHandler' ? 'direct' : 'bubble',
    optional: (propDecl.questionToken !== undefined) || optional,
    typeAnnotation: {
      type: 'EventTypeAnnotation',
      argument: {
        type: 'ObjectTypeAnnotation',
        properties: <WritableObjectType<cs.ObjectPropertyType>[]>eventProperties
      }
    }
  };

  if (paperTopLevelNameDeprecated !== undefined) {
    result.paperTopLevelNameDeprecated = paperTopLevelNameDeprecated;
  }
  return result;
}
