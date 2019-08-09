// tslint:disable:no-null-keyword
// tslint:disable:no-reserved-keywords

import * as ts from 'typescript';
import * as cs from './CodegenSchema';
import { ExportComponentInfo } from './ExportParser';
import { isBoolean, isFloatNotExported, isInt32NotExported, isNumber, isReactNull, isString } from './TypeChecker';

type PrimitiveType = [boolean, cs.PropTypeTypeAnnotation];

function processPropertyPrimitiveType(argumentType: ts.Type, info: ExportComponentInfo, propDecl: ts.PropertySignature): PrimitiveType {
  const errorMessage = `${propDecl.type.getText()} is not a supported component property type, in property ${propDecl.name.getText()} in type ${info.typeNode.getText()}.`;
  const elementTypes = argumentType.isUnion() ? argumentType.types : [argumentType];

  let itemReactNull = false;
  let itemBoolean = false;
  let itemNumber = false;
  let itemFloatNotExported = false;
  let itemInt32NotExported = false;
  let itemString = false;
  const itemStringLiterals: string[] = [];
  const itemOthers: cs.PropTypeTypeAnnotation[] = [];
  let itemUnknown = false;
  let defaultValue: string;

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
    } else if (elementType.isIntersection()) {
      let currentDefaultValue: string;
      if (elementType.types.length === 2) {
        const literalType = elementType.types.find(
          (value: ts.Type) => value.flags === ts.TypeFlags.BooleanLiteral || value.flags === ts.TypeFlags.StringLiteral || value.flags === ts.TypeFlags.NumberLiteral
        );
        const objectType = elementType.types.find(
          (value: ts.Type) => value !== literalType
        );

        if (literalType !== undefined && objectType !== undefined) {
          if (objectType.getProperty('__DoNotUse__') !== undefined) {
            if (literalType.isStringLiteral()) {
              currentDefaultValue = literalType.value;
            } else {
              currentDefaultValue = info.program.getTypeChecker().typeToString(literalType);
            }
          }
        }
      }

      if (currentDefaultValue === undefined || defaultValue !== undefined) {
        throw new Error(errorMessage);
      } else {
        defaultValue = currentDefaultValue;
      }
    } else if (elementType.symbol !== undefined) {
      if (elementType.symbol.name === 'ColorValueNotExported') {
        itemOthers.push({
          type: 'NativePrimitiveTypeAnnotation',
          name: 'ColorPrimitive'
        });
      } else if (elementType.symbol.name === 'ImageSourceNotExported') {
        itemOthers.push({
          type: 'NativePrimitiveTypeAnnotation',
          name: 'ImageSourcePrimitive'
        });
      } else if (elementType.symbol.name === 'PointValue') {
        itemOthers.push({
          type: 'NativePrimitiveTypeAnnotation',
          name: 'PointPrimitive'
        });
      } else {
        // delete
        itemUnknown = true;
      }
    } else {
      // throw new Error(errorMessage);
      itemUnknown = true;
    }
  }

  if (itemBoolean) {
    itemOthers.push({
      type: 'BooleanTypeAnnotation',
      default: defaultValue === undefined ? false : defaultValue === 'true'
    });
  }

  if (itemString) {
    if (itemOthers.find((item: cs.PropTypeTypeAnnotation) => item.type === 'NativePrimitiveTypeAnnotation' && item.name === 'ColorPrimitive') === undefined) {
      itemOthers.push({
        type: 'StringTypeAnnotation',
        default: defaultValue === undefined ? null : defaultValue
      });
    }
  }

  if (itemNumber) {
    if (itemFloatNotExported && !itemInt32NotExported) {
      itemOthers.push({
        type: 'FloatTypeAnnotation',
        default: defaultValue === undefined ? 0 : +defaultValue
      });
    } else if (!itemFloatNotExported && itemInt32NotExported) {
      itemOthers.push({
        type: 'Int32TypeAnnotation',
        default: defaultValue === undefined ? 0 : +defaultValue
      });
    } else {
      throw new Error(errorMessage);
    }
  }

  if (itemOthers.length === 0 && itemUnknown) {
    itemOthers.push({
      type: 'NativePrimitiveTypeAnnotation',
      name: 'PointPrimitive'
    });
  }

  if (itemOthers.length === 1 && itemStringLiterals.length === 0) {
    return [itemReactNull, itemOthers[0]];
  } else if (itemOthers.length === 0 && itemStringLiterals.length > 0) {
    return [itemReactNull, {
      type: 'StringEnumTypeAnnotation',
      default: defaultValue === undefined ? null : defaultValue,
      options: itemStringLiterals.map((name: string) => { return { name }; })
    }];
  } else {
    throw new Error(errorMessage);
  }
}

export function parseProperty(info: ExportComponentInfo, propDecl: ts.PropertySignature): cs.PropTypeShape {
  const [optional, typeAnnotation] = processPropertyPrimitiveType(info.program.getTypeChecker().getTypeFromTypeNode(propDecl.type), info, propDecl);
  return {
    name: propDecl.name.getText(),
    optional: propDecl.questionToken !== undefined || optional,
    typeAnnotation
  };
}
