import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { isNull, WritableObjectType } from './TypeChecker';

export function tryParseEvent(info: ExportComponentInfo, propDecl: ts.PropertySignature): cs.EventTypeShape {
  if (!ts.isTypeReferenceNode(propDecl.type)) {
    return undefined;
  }

  let eventTypeName: string;
  let paperTopLevelNameDeprecated: string;

  if (ts.isIdentifier(propDecl.type.typeName)) {
    eventTypeName = propDecl.type.typeName.text;
  } else if (ts.isQualifiedName(propDecl.type.typeName)) {
    eventTypeName = propDecl.type.typeName.right.text;
  }
  if (eventTypeName !== 'DirectEventHandler' && eventTypeName !== 'BubblingEventHandler') {
    return undefined;
  }

  const wrongTypeArgumentError = new Error(`Event ${propDecl.name.getText()} in type ${info.typeNode.getText()} should have one or two type parameters for ${eventTypeName}.`);
  if (propDecl.type.typeArguments === undefined || propDecl.type.typeArguments.length < 1 || propDecl.type.typeArguments.length > 2) {
    throw wrongTypeArgumentError;
  }
  if (propDecl.type.typeArguments.length === 2) {
    const nameArgument = propDecl.type.typeArguments[1];
    if (!ts.isStringLiteral(nameArgument)) {
      throw wrongTypeArgumentError;
    }
    paperTopLevelNameDeprecated = nameArgument.text;
  }

  const typeChecker = info.program.getTypeChecker();
  const eventType = typeChecker.getTypeFromTypeNode(propDecl.type.typeArguments[0]);

  const result: WritableObjectType<cs.EventTypeShape> = {
    name: propDecl.name.getText(),
    bubblingType: eventTypeName === 'DirectEventHandler' ? 'direct' : 'bubble',
    optional: propDecl.questionToken !== undefined,
    typeAnnotation: {
      type: 'EventTypeAnnotation'
    }
  };

  if (paperTopLevelNameDeprecated === undefined) {
    result.paperTopLevelNameDeprecated = paperTopLevelNameDeprecated;
  }

  if (isNull(eventType)) {
    return result;
  } else {
    const eventProperties: WritableObjectType<cs.ObjectPropertyType>[] = [];
    result.typeAnnotation.argument = {
      type: 'ObjectTypeAnnotation',
      properties: eventProperties
    };
    return result;
  }
}
