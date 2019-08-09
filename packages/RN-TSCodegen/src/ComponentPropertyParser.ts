// tslint:disable:no-null-keyword
// tslint:disable:no-reserved-keywords

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { isBoolean, isFloatNotExported, isInt32NotExported, isNumber, isReactNull, isString } from './TypeChecker';

type PrimitiveType = [boolean, cs.PropTypeTypeAnnotation];

function processPropertyPrimitiveType(argumentType: ts.Type, info: ExportComponentInfo, propDecl: ts.PropertySignature): PrimitiveType {
  const elementTypes = argumentType.isUnion() ? argumentType.types : [argumentType];

  let itemReactNull = false;
  let itemBoolean = false;
  let itemNumber = false;
  let itemFloatNotExported = false;
  let itemInt32NotExported = false;
  let itemString = false;
  const itemStringLiterals: string[] = [];
  const itemOthers: cs.PropTypeTypeAnnotation[] = [];

  for (const elementType of elementTypes) {
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
    } else if (isString(elementType)) {
      itemString = true;
    } else {
      // throw new Error(`${argument.type.getText()} is not a supported component property type, in property ${propDecl.name.getText()} in type ${info.typeNode.getText()}.`);
      itemOthers.push({
        type: 'NativePrimitiveTypeAnnotation',
        name: null
      });
    }
  }

  if (itemBoolean) {
    itemOthers.push({
      type: 'BooleanTypeAnnotation',
      default: false
    });
  }

  if (itemString) {
    itemOthers.push({
      type: 'StringTypeAnnotation',
      default: null
    });
  }

  if (itemNumber) {
    if (itemFloatNotExported && !itemInt32NotExported) {
      itemOthers.push({
        type: 'FloatTypeAnnotation',
        default: 0
      });
    } else if (!itemFloatNotExported && itemInt32NotExported) {
      itemOthers.push({
        type: 'Int32TypeAnnotation',
        default: 0
      });
    } else {
      throw new Error(`${propDecl.type.getText()} is not a supported component property type, in property ${propDecl.name.getText()} in type ${info.typeNode.getText()}.`);
    }
  }

  if (itemOthers.length === 1 && itemStringLiterals.length === 0) {
    return [itemReactNull, itemOthers[0]];
  } else if (itemOthers.length === 0 && itemStringLiterals.length > 0) {
    return [itemReactNull, {
      type: 'StringEnumTypeAnnotation',
      default: null,
      options: itemStringLiterals.map((name: string) => { return { name }; })
    }];
  } else {
    throw new Error(`${propDecl.type.getText()} is not a supported component property type, in property ${propDecl.name.getText()} in type ${info.typeNode.getText()}.`);
  }
}

export function parseProperty(info: ExportComponentInfo, propDecl: ts.PropertySignature): cs.PropTypeShape {
  const [optional, typeAnnotation] = processPropertyPrimitiveType(info.program.getTypeChecker().getTypeFromTypeNode(propDecl.type), info, propDecl);
  return {
    name: propDecl.name.getText(),
    optional,
    typeAnnotation
  };
}
