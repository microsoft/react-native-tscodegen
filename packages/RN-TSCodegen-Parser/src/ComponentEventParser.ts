// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { RNRawObjectProperty, RNRawType, WritableObjectType } from './RNRawType';
import { typeToRNRawType } from './TypeChecker';

export interface ComponentEventInfo {
  optional: boolean;
  eventType: ts.TypeNode;
  eventTypeName: string;
  paperTopLevelNameDeprecated?: string;
}

export function checkEventType(eventType: ts.TypeNode, info: ExportComponentInfo, propDecl: ts.PropertySignature | ts.PropertyDeclaration): ComponentEventInfo | undefined {
  if (ts.isParenthesizedTypeNode(eventType)) {
    return checkEventType(eventType.type, info, propDecl);
  } else if (ts.isUnionTypeNode(eventType)) {
    let result: ComponentEventInfo | undefined;
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
      result.optional = true;
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
        return {
          optional: false,
          eventType: typeArguments[0],
          eventTypeName: typeName,
          paperTopLevelNameDeprecated: nameArgument.literal.text
        };
      }
    }
    return {
      optional: false,
      eventType: typeArguments[0],
      eventTypeName: typeName
    };
  } else {
    return undefined;
  }
}

function rnRawTypeToObjectPropertyType(typeNode: ts.TypeNode, rawType: RNRawType): cs.EventTypeAnnotation {
  switch (rawType.kind) {
    case 'Boolean': return { type: 'BooleanTypeAnnotation' };
    case 'String': return { type: 'StringTypeAnnotation' };
    case 'Float': return { type: 'FloatTypeAnnotation' };
    case 'Double': return { type: 'DoubleTypeAnnotation' };
    case 'Int32': return { type: 'Int32TypeAnnotation' };
    case 'StringLiterals': return {
      type: 'StringEnumTypeAnnotation',
      options: rawType.values
    };
    case 'Object': return {
      type: 'ObjectTypeAnnotation',
      properties: rawType.properties.map((rawProp: RNRawObjectProperty) => {
        const prop = rnRawTypeToObjectPropertyType(typeNode, rawProp.propertyType);
        return {
          name: rawProp.name,
          optional: rawProp.optional || rawProp.propertyType.isNullable,
          typeAnnotation: prop
        };
      })
    };
    case 'Null': return {
      type: 'ObjectTypeAnnotation',
      properties: []
    };
    default:
  }
  throw new Error(`Component event type does not support ${typeNode.getText()}: ${JSON.stringify(rawType, undefined, 2)}.`);
}

export function parseEvent(info: ExportComponentInfo, propDecl: ts.PropertySignature | ts.PropertyDeclaration, eventInfo: ComponentEventInfo): cs.EventTypeShape {
  const propType = <ts.TypeNode>propDecl.type;
  const rawType = typeToRNRawType(eventInfo.eventType, info.sourceFile, { allowObject: true });

  let eventProperties: readonly cs.NamedShape<cs.EventTypeAnnotation>[] = [];
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
    bubblingType: eventInfo.eventTypeName === 'DirectEventHandler' ? 'direct' : 'bubble',
    optional: (propDecl.questionToken !== undefined) || eventInfo.optional,
    typeAnnotation: {
      type: 'EventTypeAnnotation',
      argument: {
        type: 'ObjectTypeAnnotation',
        properties: <WritableObjectType<cs.NamedShape<cs.EventTypeAnnotation>>[]>eventProperties
      }
    }
  };

  if (eventInfo.paperTopLevelNameDeprecated !== undefined) {
    result.paperTopLevelNameDeprecated = eventInfo.paperTopLevelNameDeprecated;
  }
  return result;
}
