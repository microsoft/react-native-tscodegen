import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { isBoolean, isFloat, isInt32, isNull, isReactNull, isString, WritableObjectType } from './TypeChecker';

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
    let optional = argument.questionToken !== undefined;
    const stringLiterals: string[] = [];
    let result: WritableObjectType<cs.ObjectPropertyType>;

    for (const elementType of argumentType.types) {
      if (isReactNull(elementType)) {
        optional = true;
      } else if (elementType.isStringLiteral()) {
        if (result !== undefined) {
          throw new Error(`${argument.type.getText()} is not a supported event property type, in event ${propDecl.name.getText()} in type ${info.typeNode.getText()}.`);
        }
        stringLiterals.push(elementType.value);
      } else {
        if (result !== undefined || stringLiterals.length !== 0) {
          throw new Error(`${argument.type.getText()} is not a supported event property type, in event ${propDecl.name.getText()} in type ${info.typeNode.getText()}.`);
        }
        result = processEventArgumentType(argument, elementType, info, propDecl);
      }
    }

    if (result === undefined) {
      return {
        type: 'StringEnumTypeAnnotation',
        name: argument.name.getText(),
        optional,
        options: stringLiterals.map((name: string) => { return { name }; })
      };
    } else {
      result.optional = optional;
      return result;
    }
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
  if (argumentSymbol.declarations === undefined || !ts.isPropertySignature(argumentSymbol.declarations[0])) {
    throw new Error(`Member ${argumentSymbol.name} in event ${propDecl.name.getText()} in type ${info.typeNode.getText()} is expected to be a property.`);
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
      eventProperties.push(processEventArgument(argumentSymbol, info, propDecl));
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
