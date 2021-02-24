// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:no-conditional-assignment

import * as ts from 'typescript';
import { getMembersFromType, resolveType } from './ExportParser';
import { RNRawObjectType, RNRawType, RNRawTypeCommon } from './RNRawType';

function functionToRNRawType(typeNode: ts.SignatureDeclarationBase, sourceFile: ts.SourceFile, allowObject: boolean): RNRawType {
    if (typeNode.typeParameters !== undefined && typeNode.typeParameters.length !== 0) {
        throw new Error(`Type is not supported: ${typeNode.getText()}.`);
    }

    return {
        kind: 'Function',
        isNullable: false,
        returnType: typeNode.type === undefined
            ? { kind: 'Void', isNullable: false }
            : typeToRNRawType(typeNode.type, sourceFile, allowObject),
        parameters: typeNode.parameters.map((decl: ts.ParameterDeclaration) => ({
            name: decl.name.getText(),
            parameterType: decl.type === undefined
                ? { kind: 'Any', isNullable: false }
                : typeToRNRawType(decl.type, sourceFile, allowObject)
        }))
    };
}

export function typeToRNRawType(typeNode: ts.TypeNode, sourceFile: ts.SourceFile, allowObject: boolean): RNRawType {
    let itemNullable = false;
    let itemDefaultValue: string | number | boolean | undefined;
    const itemStringLiterals: string[] = [];
    const itemNumberLiterals: number[] = [];
    const itemOthers: RNRawType[] = [];

    const scannedItems: ts.TypeNode[] = [typeNode];
    for (let i = 0; i < scannedItems.length; i++) {
        let recognized = true;

        const item = scannedItems[i];
        if (ts.isTypeReferenceNode(item)) {
            const typeReferenceName = item.typeName.getText();
            switch (typeReferenceName) {
                case 'ReactNull':
                    itemNullable = true;
                    break;
                case 'Stringish':
                    itemOthers.push({ kind: 'String', isNullable: false });
                    break;
                case 'Float':
                    itemOthers.push({ kind: 'Float', isNullable: false });
                    break;
                case 'Double':
                    itemOthers.push({ kind: 'Double', isNullable: false });
                    break;
                case 'Int32':
                    itemOthers.push({ kind: 'Int32', isNullable: false });
                    break;
                case 'ProcessedColorValue':
                case 'ColorValue':
                    itemOthers.push({ kind: 'rn:ColorPrimitive', isNullable: false });
                    break;
                case 'ColorArrayValue':
                    itemOthers.push({ kind: 'Array', isNullable: false, elementType: { kind: 'rn:ColorPrimitive', isNullable: false } });
                    break;
                case 'ImageSource':
                    itemOthers.push({ kind: 'rn:ImageSourcePrimitive', isNullable: false });
                    break;
                case 'PointValue':
                    itemOthers.push({ kind: 'rn:PointPrimitive', isNullable: false });
                    break;
                case 'EdgeInsetsValue':
                    itemOthers.push({ kind: 'rn:EdgeInsetsPrimitive', isNullable: false });
                    break;
                case 'Object':
                    itemOthers.push({ kind: 'js:Object', isNullable: false });
                    break;
                case 'Promise': {
                    if (item.typeArguments === undefined || item.typeArguments.length !== 1) {
                        throw new Error(`${typeNode.getText()} should have one type argument.`);
                    }
                    itemOthers.push({ kind: 'js:Promise', isNullable: false, elementType: typeToRNRawType(item.typeArguments[0], sourceFile, allowObject) });
                    break;
                }
                case 'DirectEventHandler':
                case 'BubblingEventHandler': {
                    if (item.typeArguments === undefined || item.typeArguments.length < 1 || item.typeArguments.length > 2) {
                        throw new Error(`${typeNode.getText()} should have one type argument and another optional string literal type argument.`);
                    }

                    const eventType = typeToRNRawType(item.typeArguments[0], sourceFile, true);
                    let nameType: string | undefined;
                    if (item.typeArguments.length === 2) {
                        const nameNode = item.typeArguments[1];
                        if (ts.isLiteralTypeNode(nameNode) && ts.isStringLiteral(nameNode.literal)) {
                            nameType = nameNode.literal.text;
                        } else {
                            throw new Error(`${typeNode.getText()} should have one type argument and another optional string literal type argument.`);
                        }
                    }

                    itemOthers.push({
                        kind: typeReferenceName,
                        elementType: eventType,
                        paperTopLevelNameDeprecated: nameType,
                        isNullable: false
                    });
                    break;
                }
                case 'WithDefault': {
                    if (item.typeArguments === undefined || item.typeArguments.length !== 2) {
                        throw new Error(`${typeNode.getText()} should have one type argument and another default value.`);
                    }
                    itemNullable = true;
                    itemOthers.push(typeToRNRawType(item.typeArguments[0], sourceFile, allowObject));

                    const defaultValue = item.typeArguments[1];
                    switch (defaultValue.kind) {
                        case ts.SyntaxKind.UndefinedKeyword:
                        case ts.SyntaxKind.NullKeyword:
                        case ts.SyntaxKind.VoidKeyword:
                            itemDefaultValue = undefined;
                            break;
                        case ts.SyntaxKind.TrueKeyword:
                            itemDefaultValue = true;
                            break;
                        case ts.SyntaxKind.FalseKeyword:
                            itemDefaultValue = false;
                            break;
                        default:
                            if (ts.isLiteralTypeNode(defaultValue)) {
                                if (ts.isStringLiteral(defaultValue.literal)) {
                                    itemDefaultValue = defaultValue.literal.text;
                                } else if (ts.isNumericLiteral(defaultValue.literal)) {
                                    itemDefaultValue = +defaultValue.literal.text;
                                } else if (ts.isPrefixUnaryExpression(defaultValue.literal)) {
                                    itemDefaultValue = +defaultValue.literal.getText();
                                } else {
                                    switch (defaultValue.literal.kind) {
                                        case ts.SyntaxKind.UndefinedKeyword:
                                        case ts.SyntaxKind.NullKeyword:
                                        case ts.SyntaxKind.VoidKeyword:
                                            itemDefaultValue = undefined;
                                            break;
                                        case ts.SyntaxKind.TrueKeyword:
                                            itemDefaultValue = true;
                                            break;
                                        case ts.SyntaxKind.FalseKeyword:
                                            itemDefaultValue = false;
                                            break;
                                        default:
                                            throw new Error(`Type is not supported: ${typeNode.getText()}, because ${defaultValue.getText()} is not a valid default value.`);
                                    }
                                }
                            } else {
                                throw new Error(`Type is not supported: ${typeNode.getText()}, because ${defaultValue.getText()} is not a valid default value.`);
                            }
                    }
                    break;
                }
                case 'Readonly': {
                    if (item.typeArguments === undefined || item.typeArguments.length !== 1) {
                        throw new Error(`${typeNode.getText()} should have one type argument.`);
                    }
                    itemOthers.push(typeToRNRawType(item.typeArguments[0], sourceFile, allowObject));
                    break;
                }
                case 'Array':
                case 'ReadonlyArray': {
                    if (item.typeArguments === undefined || item.typeArguments.length !== 1) {
                        throw new Error(`${typeNode.getText()} should have one type argument.`);
                    }
                    itemOthers.push({ kind: 'Array', isNullable: false, elementType: typeToRNRawType(item.typeArguments[0], sourceFile, allowObject) });
                    break;
                }
                default: {
                    const resolvedType = resolveType(item, sourceFile);
                    if (resolvedType !== item) {
                        scannedItems.push(resolvedType);
                    } else {
                        recognized = false;
                    }
                }
            }
        } else if (ts.isParenthesizedTypeNode(item)) {
            scannedItems.push(item.type);
        } else if (ts.isUnionTypeNode(item)) {
            for (const unionItem of item.types) {
                scannedItems.push(unionItem);
            }
        } else if (ts.isArrayTypeNode(item)) {
            itemOthers.push({ kind: 'Array', isNullable: false, elementType: typeToRNRawType(item.elementType, sourceFile, allowObject) });
        } else if (ts.isLiteralTypeNode(item)) {
            if (ts.isStringLiteral(item.literal)) {
                itemStringLiterals.push(item.literal.text);
            } else if (ts.isNumericLiteral(item.literal)) {
                itemNumberLiterals.push(+item.literal.text);
            } else if (ts.isPrefixUnaryExpression(item.literal)) {
                itemNumberLiterals.push(+item.literal.getText());
            } else if (item.literal.kind === ts.SyntaxKind.NullKeyword) {
                itemNullable = true;
            } else {
                throw new Error(`Type is not supported: ${typeNode.getText()}, because ${item.literal} is not a valid literal type.`);
            }
        } else if (ts.isFunctionTypeNode(item)) {
            itemOthers.push(functionToRNRawType(item, sourceFile, allowObject));
        } else if (ts.isTupleTypeNode(item)) {
            itemOthers.push({
                kind: 'Tuple',
                isNullable: false,
                types: item.elements.map((elementType: ts.TypeNode) => typeToRNRawType(elementType, sourceFile, allowObject))
            });
        } else {
            switch (item.kind) {
                case ts.SyntaxKind.UndefinedKeyword:
                case ts.SyntaxKind.NullKeyword:
                    itemNullable = true;
                    break;
                case ts.SyntaxKind.StringKeyword:
                    itemOthers.push({ kind: 'String', isNullable: false });
                    break;
                case ts.SyntaxKind.BooleanKeyword:
                    itemOthers.push({ kind: 'Boolean', isNullable: false });
                    break;
                case ts.SyntaxKind.NumberKeyword:
                    itemOthers.push({ kind: 'Number', isNullable: false });
                    break;
                case ts.SyntaxKind.VoidKeyword:
                    itemOthers.push({ kind: 'Void', isNullable: false });
                    break;
                case ts.SyntaxKind.AnyKeyword:
                    itemOthers.push({ kind: 'Any', isNullable: false });
                    break;
                default:
                    recognized = false;
            }
        }

        if (!recognized) {
            if (allowObject) {
                const members = getMembersFromType(item, sourceFile);
                if (members === undefined) {
                    throw new Error(`Type is not supported: ${typeNode.getText()}, because ${item.getText()} is not an interface.`);
                }

                const rawObjectType: RNRawObjectType & RNRawTypeCommon = {
                    kind: 'Object',
                    isNullable: false,
                    properties: []
                };
                for (const member of members) {
                    if (member.name !== undefined) {
                        const name = member.name.getText();
                        let propertyType: RNRawType | undefined;

                        if (ts.isMethodSignature(member) || ts.isCallSignatureDeclaration(member)) {
                            propertyType = functionToRNRawType(member, sourceFile, allowObject);
                        } else if (ts.isPropertySignature(member) || ts.isPropertyDeclaration(member)) {
                            propertyType = member.type === undefined
                                ? { kind: 'Any', isNullable: false }
                                : typeToRNRawType(member.type, sourceFile, allowObject);
                        }

                        if (propertyType !== undefined) {
                            if (member.questionToken !== undefined) {
                                propertyType.isNullable = true;
                            }
                            rawObjectType.properties.push({
                                name,
                                propertyType
                            });
                        }
                    }
                }
                itemOthers.push(rawObjectType);
            } else {
                throw new Error(`Type is not supported: ${typeNode.getText()}, because ${item.getText()} is not an interface, or object is not allowed.`);
            }
        }
    }

    if (itemStringLiterals.length > 0) {
        itemOthers.push({ kind: 'StringLiterals', values: itemStringLiterals, isNullable: false });
    }

    if (itemNumberLiterals.length > 0) {
        itemOthers.push({ kind: 'NumberLiterals', values: itemNumberLiterals, isNullable: false });
    }

    if (itemOthers.length === 0) {
        if (itemNullable) {
            return { kind: 'Null', isNullable: true };
        } else {
            const scannedItemsInText = scannedItems.map((t: ts.TypeNode) => t.getText());
            throw new Error(`Type is not supported: ${typeNode.getText()}, because nothing is resolved from this type. Scanned types: ${JSON.stringify(scannedItemsInText, undefined, 4)}`);
        }
    } else {
        const result: RNRawType = itemOthers.length === 1 ? itemOthers[0] : {
            kind: 'Union',
            isNullable: itemNullable,
            types: itemOthers
        };

        result.isNullable = itemNullable;
        if (itemDefaultValue !== undefined) {
            result.defaultValue = itemDefaultValue === null ? undefined : itemDefaultValue;
        }
        return result;
    }
}
