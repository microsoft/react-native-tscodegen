import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { isNull, isVoid, WritableObjectType } from './TypeChecker';

function checkEventType(eventType: ts.Type, info: ExportComponentInfo, propDecl: ts.PropertySignature): [boolean, ts.Type, string, string] {
  if (eventType.isUnion()) {
    let result: [boolean, ts.Type, string, string];
    for (const elementType of eventType.types) {
      if (!isNull(elementType) && !isVoid(elementType)) {
        const elementResult = checkEventType(elementType, info, propDecl);
        if (result === undefined) {
          result = elementResult;
        } else {
          throw new Error(`Event ${propDecl.name.getText()} in type ${info.typeNode.getText()} should have a correct event type.`);
        }
      }
    }
    result[0] = true;
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

export function tryParseEvent(info: ExportComponentInfo, propDecl: ts.PropertySignature): cs.EventTypeShape {
  const typeChecker = info.program.getTypeChecker();
  const eventTypeTuple = checkEventType(typeChecker.getTypeFromTypeNode(propDecl.type), info, propDecl);
  if (eventTypeTuple === undefined) {
    return undefined;
  }
  const [optional, eventType, eventTypeName, paperTopLevelNameDeprecated] = eventTypeTuple;

  const eventProperties: WritableObjectType<cs.ObjectPropertyType>[] = [];
  if (!isNull(eventType)) {
    // nothing;
  }

  const result: WritableObjectType<cs.EventTypeShape> = {
    name: propDecl.name.getText(),
    bubblingType: eventTypeName === 'DirectEventHandler' ? 'direct' : 'bubble',
    optional: (propDecl.questionToken !== undefined) || optional,
    typeAnnotation: {
      type: 'EventTypeAnnotation',
      argument: {
        type: 'ObjectTypeAnnotation',
        properties: eventProperties
      }
    }
  };

  if (paperTopLevelNameDeprecated !== undefined) {
    result.paperTopLevelNameDeprecated = paperTopLevelNameDeprecated;
  }
  return result;
}
