import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { isBoolean, isFloat, isFloatNotExported, isInt32, isInt32NotExported, isNull, isNumber, isReactNull, isString, WritableObjectType } from './TypeChecker';

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

function processEventArgumentUnionType(argument: ts.PropertySignature, argumentType: ts.UnionType, info: ExportComponentInfo, propDecl: ts.PropertySignature): WritableObjectType<cs.ObjectPropertyType> {
  let itemReactNull = argument.questionToken !== undefined;
  let itemBoolean = false;
  let itemNumber = false;
  let itemFloatNotExported = false;
  let itemInt32NotExported = false;
  const itemStringLiterals: string[] = [];
  const itemOthers: WritableObjectType<cs.ObjectPropertyType>[] = [];

  for (const elementType of argumentType.types) {
    if (isReactNull(elementType)) {
      itemReactNull = true;
    } else if (isBoolean(elementType)) {
      itemBoolean = true;
    } else if (isNumber(elementType)) {
      itemNumber = true;
    } else if (isFloatNotExported(elementType)) {
      itemFloatNotExported = true;
    } else if (isInt32NotExported(elementType)) {
      itemInt32NotExported = true;
    } else if (elementType.isStringLiteral()) {
      itemStringLiterals.push(elementType.value);
    } else {
      itemOthers.push(processEventArgumentType(argument, elementType, info, propDecl));
    }
  }

  if (itemBoolean) {
    itemOthers.push({
      type: 'BooleanTypeAnnotation',
      name: argument.name.getText(),
      optional: false
    });
  }

  if (itemNumber) {
    if (itemFloatNotExported && !itemInt32NotExported) {
      itemOthers.push({
        type: 'FloatTypeAnnotation',
        name: argument.name.getText(),
        optional: false
      });
    } else if (!itemFloatNotExported && itemInt32NotExported) {
      itemOthers.push({
        type: 'Int32TypeAnnotation',
        name: argument.name.getText(),
        optional: false
      });
    } else {
      throw new Error(`${argument.type.getText()} is not a supported event property type, in event ${propDecl.name.getText()} in type ${info.typeNode.getText()}.`);
    }
  }

  if (itemOthers.length === 1 && itemStringLiterals.length === 0) {
    itemOthers[0].optional = itemReactNull;
    return itemOthers[0];
  } else if (itemOthers.length === 0 && itemStringLiterals.length > 0) {
    return {
      type: 'StringEnumTypeAnnotation',
      name: argument.name.getText(),
      optional: itemReactNull,
      options: itemStringLiterals.map((name: string) => { return { name }; })
    };
  } else {
    throw new Error(`${argument.type.getText()} is not a supported event property type, in event ${propDecl.name.getText()} in type ${info.typeNode.getText()}.`);
  }
}

function processEventArgumentType(argument: ts.PropertySignature, argumentType: ts.Type, info: ExportComponentInfo, propDecl: ts.PropertySignature): WritableObjectType<cs.ObjectPropertyType> {
  if (isBoolean(argumentType)) {
    return {
      type: 'BooleanTypeAnnotation',
      name: argument.name.getText(),
      optional: argument.questionToken !== undefined
    };
  } else if (isString(argumentType)) {
    return {
      type: 'StringTypeAnnotation',
      name: argument.name.getText(),
      optional: argument.questionToken !== undefined
    };
  } else if (isFloat(argumentType)) {
    return {
      type: 'FloatTypeAnnotation',
      name: argument.name.getText(),
      optional: argument.questionToken !== undefined
    };
  } else if (isInt32(argumentType)) {
    return {
      type: 'Int32TypeAnnotation',
      name: argument.name.getText(),
      optional: argument.questionToken !== undefined
    };
  } else if (argumentType.isUnion()) {
    return processEventArgumentUnionType(argument, argumentType, info, propDecl);
  } else {
    return {
      type: 'ObjectTypeAnnotation',
      name: argument.name.getText(),
      optional: argument.questionToken !== undefined,
      properties: argumentType.getProperties().map((propSymbol: ts.Symbol) => {
        return processEventArgument(propSymbol, info, propDecl);
      })
    };
  }
}

function processEventArgument(argumentSymbol: ts.Symbol, info: ExportComponentInfo, propDecl: ts.PropertySignature): WritableObjectType<cs.ObjectPropertyType> {
  if (!ts.isPropertySignature(argumentSymbol.declarations[0])) {
    return undefined;
  }

  const argumentDecl = <ts.PropertySignature>argumentSymbol.declarations[0];
  if (argumentDecl.type === undefined) {
    throw new Error(`Member ${argumentSymbol.name} in event ${propDecl.name.getText()} in type ${info.typeNode.getText()} is expected to be a property.`);
  }
  return processEventArgumentType(argumentDecl, info.program.getTypeChecker().getTypeFromTypeNode(argumentDecl.type), info, propDecl);
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
    for (const argumentSymbol of eventType.getProperties()) {
      const eventProperty = processEventArgument(argumentSymbol, info, propDecl);
      if (eventProperty !== undefined) {
        eventProperties.push(eventProperty);
      }
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
        properties: eventProperties
      }
    }
  };

  if (paperTopLevelNameDeprecated !== undefined) {
    result.paperTopLevelNameDeprecated = paperTopLevelNameDeprecated;
  }
  return result;
}
