// tslint:disable:no-reserved-keywords

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { isReactNull, RNRawType, typeToRNRawType, WritableObjectType } from './TypeChecker';

function checkEventType(eventType: ts.Type, info: ExportComponentInfo, propDecl: ts.PropertySignature): [boolean, ts.Type, string, string] {
  if (eventType.isUnion()) {
    let result: [boolean, ts.Type, string, string];
    for (const elementType of eventType.types) {
      if (!isReactNull(elementType)) {
        const elementResult = checkEventType(elementType, info, propDecl);
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
  } else {
    if (eventType.aliasSymbol === undefined || (eventType.aliasSymbol.name !== 'DirectEventHandler' && eventType.aliasSymbol.name !== 'BubblingEventHandler')) {
      return undefined;
    }

    const typeArguments = eventType.aliasTypeArguments;
    if (typeArguments === undefined || typeArguments.length < 1 || typeArguments.length > 2) {
      throw new Error(`Event ${propDecl.name.getText()} in type ${info.typeNode.getText()} should have one or two type parameters for ${eventType.aliasSymbol.name}.`);
    }

    if (typeArguments.length === 2) {
      const nameArgument = typeArguments[1];
      if (nameArgument.isStringLiteral()) {
        return [false, typeArguments[0], eventType.aliasSymbol.name, nameArgument.value];
      }
    }
    return [false, typeArguments[0], eventType.aliasSymbol.name, undefined];
  }
}

function rnRawTypeToObjectPropertyType(typeNode: ts.TypeNode, rawType: RNRawType): cs.ObjectPropertyType {
  switch (rawType.kind) {
    case 'Boolean': return { type: 'BooleanTypeAnnotation', name: undefined, optional: rawType.isNullable };
    case 'String': return { type: 'StringTypeAnnotation', name: undefined, optional: rawType.isNullable };
    case 'Float': return { type: 'FloatTypeAnnotation', name: undefined, optional: rawType.isNullable };
    case 'Int32': return { type: 'Int32TypeAnnotation', name: undefined, optional: rawType.isNullable };
    case 'StringLiterals': return {
      type: 'StringEnumTypeAnnotation',
      name: undefined,
      optional: rawType.isNullable,
      options: rawType.values.map((name: string) => { return { name }; })
    };
    case 'Object': return {
      type: 'ObjectTypeAnnotation',
      name: undefined,
      optional: rawType.isNullable,
      properties: rawType.properties.map((rawProp: { name: string; propertyType: RNRawType }) => {
        const prop = <WritableObjectType<cs.ObjectPropertyType>>rnRawTypeToObjectPropertyType(typeNode, rawProp.propertyType);
        prop.name = rawProp.name;
        return prop;
      })
    };
    default:
  }
  throw new Error(`Component event type does not support ${typeNode.getText()}.`);
}

export function tryParseEvent(info: ExportComponentInfo, propDecl: ts.PropertySignature): cs.EventTypeShape {
  const typeChecker = info.program.getTypeChecker();
  const eventTypeTuple = checkEventType(typeChecker.getTypeFromTypeNode(propDecl.type), info, propDecl);
  if (eventTypeTuple === undefined) {
    return undefined;
  }

  const [optional, eventType, eventTypeName, paperTopLevelNameDeprecated] = eventTypeTuple;
  const rawType = typeToRNRawType(eventType, typeChecker, true);

  let eventProperties: readonly cs.ObjectPropertyType[] = [];
  if (rawType.kind !== 'Null') {
    const objectType = rnRawTypeToObjectPropertyType(propDecl.type, rawType);
    if (objectType.type === 'ObjectTypeAnnotation') {
      eventProperties = objectType.properties;
    } else {
      throw new Error(`Component event type does not support ${propDecl.type.getText()}.`);
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
