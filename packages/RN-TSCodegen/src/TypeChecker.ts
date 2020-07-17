// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:no-conditional-assignment

import * as ts from 'typescript';
import { RNRawType } from './RNRawType';

function isAny(tsType: ts.Type): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.Any) !== 0;
}

function isNull(tsType: ts.Type): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.Null) !== 0;
}

function isUndefined(tsType: ts.Type): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.Undefined) !== 0;
}

function isVoid(tsType: ts.Type): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.VoidLike) !== 0;
}

function isBoolean(tsType: ts.Type): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.BooleanLike) !== 0;
}

function isString(tsType: ts.Type): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.StringLike) !== 0;
}

function isNumber(tsType: ts.Type): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.NumberLike) !== 0;
}

function isRNTag(tsType: ts.Type, tag:
    | 'ImageSource'
    | 'ColorValue'
): boolean {
    if (tsType.flags !== ts.TypeFlags.Object) {
        return false;
    }

    const objectType = <ts.ObjectType>tsType;
    if (objectType.objectFlags !== ts.ObjectFlags.Reference) {
        return false;
    }

    const typeRef = <ts.TypeReference>objectType;
    if (typeRef.target.symbol === undefined || typeRef.target.symbol.name !== 'RNTag') {
        return false;
    }
    if (typeRef.typeArguments === undefined || typeRef.typeArguments.length !== 1) {
        return false;
    }

    const tagType = typeRef.typeArguments[0];
    if (!tagType.isStringLiteral()) {
        return false;
    }

    return tagType.value === tag;
}

function isPrimitiveTypeRNTag(tsType: ts.Type, tag:
    | 'Float'
    | 'Double'
    | 'Int32'
): boolean {
    if (tsType.flags !== ts.TypeFlags.Object) {
        return false;
    }

    const objectType = <ts.ObjectType>tsType;
    if (objectType.objectFlags !== ts.ObjectFlags.Reference) {
        return false;
    }

    const typeRef = <ts.TypeReference>objectType;
    if (typeRef.target.symbol === undefined || typeRef.target.symbol.name !== 'PrimitiveTypeRNTag') {
        return false;
    }
    if (typeRef.typeArguments === undefined || typeRef.typeArguments.length !== 1) {
        return false;
    }

    const tagType = typeRef.typeArguments[0];
    if (!tagType.isStringLiteral()) {
        return false;
    }

    return tagType.value === tag;
}

function eventTypeToRNRawType(typeArguments: readonly ts.Type[], kind: 'DirectEventHandler' | 'BubblingEventHandler', typeChecker: ts.TypeChecker): RNRawType {
    if (typeArguments === undefined || typeArguments.length < 1 || typeArguments.length > 2) {
        throw new Error(`${kind} should have one type argument and another optional string literal type argument.`);
    }

    const eventType = typeToRNRawType2(typeArguments[0], typeChecker, true);
    const nameType = typeArguments.length === 1 ? undefined : typeToRNRawType2(typeArguments[1], typeChecker, false);
    if (nameType !== undefined && (nameType.kind !== 'StringLiterals' || nameType.values.length !== 1)) {
        throw new Error(`${kind} should have one type argument and another optional string literal type argument.`);
    }

    return {
        kind: kind,
        elementType: eventType,
        paperTopLevelNameDeprecated: nameType === undefined ? undefined : nameType.values[0],
        isNullable: false
    };
}

function readSignature(signature: ts.Signature, decl: ts.Declaration): [ts.Type, readonly ts.ParameterDeclaration[]] {
    let funcReturnType: ts.Type;
    const funcParameters: ts.ParameterDeclaration[] = [];

    if (signature.typeParameters !== undefined && signature.typeParameters.length !== 0) {
        throw new Error(`Generic function is not supported: ${decl.getText()}.`);
    }
    funcReturnType = signature.getReturnType();
    for (const parameterSymbol of signature.parameters) {
        if (parameterSymbol.declarations.length === 1 && ts.isParameter(parameterSymbol.declarations[0])) {
            funcParameters.push(<ts.ParameterDeclaration>parameterSymbol.declarations[0]);
        }
    }
    return [funcReturnType, funcParameters];
}

type MemberSignature = ts.MethodSignature | ts.CallSignatureDeclaration | ts.PropertySignature | ts.PropertyDeclaration;

function tryReadMemberSignature(propSymbolDecl: ts.Declaration, typeChecker: ts.TypeChecker): [
    MemberSignature,
    ts.Type | undefined,
    ts.Type | undefined,
    readonly ts.ParameterDeclaration[] | undefined
] {
    let propDecl: MemberSignature | undefined;
    let propType: ts.Type | undefined;
    let funcType: [ts.Type, readonly ts.ParameterDeclaration[]] | undefined;

    if (ts.isMethodSignature(propSymbolDecl) || ts.isCallSignatureDeclaration(propSymbolDecl)) {
        if (propSymbolDecl.typeParameters !== undefined && propSymbolDecl.typeParameters.length !== 0) {
            throw new Error(`Generic function is not supported: ${propSymbolDecl.getText()}.`);
        }
        if (propSymbolDecl.type === undefined) {
            throw new Error(`Member should have a type: ${propSymbolDecl.getText()}.`);
        }
        propDecl = propSymbolDecl;
        funcType = [typeChecker.getTypeFromTypeNode(propSymbolDecl.type), propSymbolDecl.parameters];
    } else if (ts.isPropertySignature(propSymbolDecl) || ts.isPropertyDeclaration(propSymbolDecl)) {
        if (propSymbolDecl.type === undefined) {
            throw new Error(`Member should have a type: ${propSymbolDecl.getText()}.`);
        }
        propDecl = propSymbolDecl;
        propType = typeChecker.getTypeFromTypeNode(propSymbolDecl.type);
        const signatures = propType.getCallSignatures();
        if (signatures !== undefined && signatures.length > 0) {
            propType = undefined;
            if (signatures.length === 1) {
                funcType = readSignature(signatures[0], propSymbolDecl);
            }
        }
    }

    return [
        // propDecl will not be undefined if propTYpe or funcType is not undefined. This will be checked outside.
        <MemberSignature>propDecl,
        propType,
        funcType === undefined ? undefined : funcType[0],
        funcType === undefined ? undefined : funcType[1]
    ];
}

function getRawFunctionType(funcReturnType: ts.Type, funcParameters: readonly ts.ParameterDeclaration[], typeChecker: ts.TypeChecker, allowObject: boolean): RNRawType {
    const funcRawType: RNRawType = {
        kind: 'Function',
        isNullable: false,
        returnType: typeToRNRawType2(funcReturnType, typeChecker, allowObject),
        parameters: []
    };
    for (const paramDecl of funcParameters) {
        if (paramDecl.type !== undefined) {
            const paramRawType = {
                name: paramDecl.name.getText(),
                parameterType: typeToRNRawType(paramDecl.type, typeChecker, allowObject)
            };
            if (paramDecl.questionToken !== undefined) {
                paramRawType.parameterType.isNullable = true;
            }
            funcRawType.parameters.push(paramRawType);
        }
    }
    return funcRawType;
}

function typeToRNRawType2(tsType: ts.Type, typeChecker: ts.TypeChecker, allowObject: boolean): RNRawType {
    const tsItems = tsType.isUnion() ? tsType.types : [tsType];

    let itemNullable = false;
    let itemTrue = false;
    let itemFalse = false;
    let itemNumber = false;
    let itemFloatRNTag = false;
    let itemDoubleRNTag = false;
    let itemInt32RNTag = false;
    let itemString = false;
    let itemDefaultValue: boolean | number | string | undefined;
    const itemUnknowns: ts.Type[] = [];
    const itemStringLiterals: string[] = [];
    const itemNumberLiterals: number[] = [];
    let itemOthers: RNRawType[] = [];

    for (let i = 0; i < tsItems.length; i++) {
        const tsItem = tsItems[i];
        if (tsItem.isIntersection()) {
            let originalType: ts.Type | undefined;
            LOOP_INTERSECTION_TYPE:
            for (const intersectionItem of tsItem.types) {
                if (isPrimitiveTypeRNTag(intersectionItem, 'Float')) {
                    itemFloatRNTag = true;
                } else if (isPrimitiveTypeRNTag(intersectionItem, 'Double')) {
                    itemDoubleRNTag = true;
                } else if (isPrimitiveTypeRNTag(intersectionItem, 'Int32')) {
                    itemInt32RNTag = true;
                } else if (originalType === undefined) {
                    originalType = intersectionItem;
                } else {
                    throw new Error(`Intersection type is not supported: ${typeChecker.typeToString(tsType)}.`);
                }
            }

            if (originalType === undefined) {
                throw new Error(`Intersection type is not supported: ${typeChecker.typeToString(tsType)}.`);
            } else {
                tsItems[i] = originalType;
            }
        }
    }

    function setDefaultValue(elementType: ts.Type, defaultValueType: ts.Type): void {
        const currentDefaultValue = typeToRNRawType2(defaultValueType, typeChecker, allowObject);

        switch (currentDefaultValue.kind) {
            case 'BooleanLiteral': {
                itemDefaultValue = currentDefaultValue.value;
                break;
            }
            case 'NumberLiterals': {
                if (currentDefaultValue.values.length === 1) {
                    itemDefaultValue = currentDefaultValue.values[0];
                }
                break;
            }
            case 'StringLiterals': {
                if (currentDefaultValue.values.length === 1) {
                    itemDefaultValue = currentDefaultValue.values[0];
                }
                break;
            }
            default:
        }

        if (itemDefaultValue === undefined && currentDefaultValue.kind !== 'Null') {
            throw new Error(`Default value should be null, true, false, number literal or string literal: ${typeChecker.typeToString(defaultValueType)}.`);
        }
    }

    for (const elementType of tsItems) {
        // test tuple, array, readonly array
        // these are all represented as a generic TypeReference to a type
        if (elementType.flags === ts.TypeFlags.Object) {
            if (((<ts.ObjectType>elementType).objectFlags & ts.ObjectFlags.Reference) !== 0) {
                const typeReference = <ts.TypeReference>elementType;
                if (typeReference.typeArguments !== undefined && typeReference.typeArguments.length > 0) {
                    if (typeReference.target.flags === ts.TypeFlags.Object) {
                        const typeReferenceTarget = <ts.ObjectType>typeReference.target;
                        if ((typeReferenceTarget.objectFlags & ts.ObjectFlags.Tuple) !== 0) {
                            itemOthers.push({
                                kind: 'Tuple',
                                isNullable: false,
                                types: typeReference.typeArguments.map((value: ts.Type) => typeToRNRawType2(value, typeChecker, allowObject))
                            });
                            continue;
                        } else if (typeReferenceTarget.symbol.name === 'Array' || typeReferenceTarget.symbol.name === 'ReadonlyArray') {
                            itemOthers.push({
                                kind: 'Array',
                                isNullable: false,
                                elementType: typeToRNRawType2(typeReference.typeArguments[0], typeChecker, allowObject)
                            });
                            continue;
                        }
                    }
                }
            }
        }

        if (isNull(elementType) || isUndefined(elementType)) {
            itemNullable = true;
        } else if (isAny(elementType)) {
            itemOthers.push({ kind: 'Any', isNullable: true });
        } else if (isVoid(elementType)) {
            itemOthers.push({ kind: 'Null', isNullable: true });
        } else if (isBoolean(elementType)) {
            const value = typeChecker.typeToString(elementType);
            itemTrue = itemTrue || value !== 'false';
            itemFalse = itemFalse || value !== 'true';
        } else if (elementType.isStringLiteral()) {
            itemStringLiterals.push(elementType.value);
        } else if (elementType.isNumberLiteral()) {
            itemNumberLiterals.push(elementType.value);
        } else if (isNumber(elementType)) {
            itemNumber = true;
        } else if (isString(elementType)) {
            itemString = true;
        } else if (isRNTag(elementType, 'ImageSource')) {
            itemOthers.push({ kind: 'rn:ImageSourcePrimitive', isNullable: false });
        } else if (isRNTag(elementType, 'ColorValue')) {
            itemOthers.push({ kind: 'rn:ColorPrimitive', isNullable: false });
        } else if (elementType.symbol !== undefined) {
            if (elementType.symbol.name === 'PointValue') {
                itemOthers.push({ kind: 'rn:PointPrimitive', isNullable: false });
            } else if (elementType.symbol.name === 'EdgeInsetsValue') {
                itemOthers.push({ kind: 'rn:EdgeInsetsPrimitive', isNullable: false });
            } else if (elementType.symbol.name === 'Object') {
                itemOthers.push({ kind: 'js:Object', isNullable: false });
            } else if (elementType.symbol.name === 'Promise') {
                const typeReference = <ts.TypeReference>elementType;
                if (typeReference.typeArguments !== undefined && typeReference.typeArguments.length === 1) {
                    const promiseType = typeReference.typeArguments[0];
                    itemOthers.push({ kind: 'js:Promise', elementType: typeToRNRawType2(promiseType, typeChecker, allowObject), isNullable: false });
                } else {
                    throw new Error(`Unable to extract type from ${typeChecker.typeToString(elementType)}.`);
                }
            } else if (elementType.symbol.name === 'WithDefaultRNTag') {
                const typeReference = <ts.TypeReference>elementType;
                if (typeReference.typeArguments !== undefined && typeReference.typeArguments.length === 1) {
                    itemNullable = true;
                    setDefaultValue(elementType, typeReference.typeArguments[0]);
                } else {
                    throw new Error(`Unable to extract type from ${typeChecker.typeToString(elementType)}.`);
                }
            } else {
                itemUnknowns.push(elementType);
            }
        } else if (elementType.aliasSymbol !== undefined) {
            if (elementType.aliasSymbol.name === 'DirectEventHandler' || elementType.aliasSymbol.name === 'BubblingEventHandler') {
                itemOthers.push(eventTypeToRNRawType(<ReadonlyArray<ts.Type>>elementType.aliasTypeArguments, elementType.aliasSymbol.name, typeChecker));
            } else if (elementType.aliasSymbol.name === 'WithDefault') {
                const typeArguments = elementType.aliasTypeArguments;
                if (typeArguments === undefined || typeArguments.length !== 2) {
                    throw new Error(`WithDefault should have one type argument and one literal of that type.`);
                }

                itemNullable = true;
                itemOthers.push(typeToRNRawType2(typeArguments[0], typeChecker, allowObject));
                setDefaultValue(elementType, typeArguments[1]);
            } else {
                itemUnknowns.push(elementType);
            }
        } else {
            itemUnknowns.push(elementType);
        }
    }

    if (itemTrue && itemFalse) {
        itemOthers.push({ kind: 'Boolean', isNullable: false });
    } else if (itemTrue) {
        itemOthers.push({ kind: 'BooleanLiteral', value: true, isNullable: false });
    } else if (itemFalse) {
        itemOthers.push({ kind: 'BooleanLiteral', value: false, isNullable: false });
    }

    if (itemString) {
        if (itemOthers.find((item: RNRawType) => item.kind === 'rn:ColorPrimitive') === undefined) {
            itemOthers.push({ kind: 'String', isNullable: false });
        }
    }

    if (itemNumber) {
        if (itemOthers.find((item: RNRawType) => item.kind === 'rn:ColorPrimitive') === undefined) {
            if (itemFloatRNTag && !itemDoubleRNTag && !itemInt32RNTag) {
                itemOthers.push({ kind: 'Float', isNullable: false });
            } else if (!itemFloatRNTag && itemDoubleRNTag && !itemInt32RNTag) {
                itemOthers.push({ kind: 'Double', isNullable: false });
            } else if (!itemFloatRNTag && !itemDoubleRNTag && itemInt32RNTag) {
                itemOthers.push({ kind: 'Int32', isNullable: false });
            } else if (!itemFloatRNTag && !itemDoubleRNTag && !itemInt32RNTag) {
                itemOthers.push({ kind: 'Number', isNullable: false });
            } else {
                throw new Error(`Type is not supported: ${typeChecker.typeToString(tsType)}.`);
            }
        }
    }

    if (itemStringLiterals.length > 0) {
        itemOthers.push({ kind: 'StringLiterals', values: itemStringLiterals, isNullable: false });
    }

    if (itemNumberLiterals.length > 0) {
        itemOthers.push({ kind: 'NumberLiterals', values: itemNumberLiterals, isNullable: false });
    }

    if (itemOthers.length === 0 && allowObject) {
        if (itemUnknowns.length === 1) {

            let isFunction = false;
            const itemSignatures = itemUnknowns[0].getCallSignatures();
            if (itemSignatures !== undefined && itemSignatures.length === 1) {
                const signature = itemSignatures[0];
                const signatureDecl = signature.getDeclaration();
                if (signatureDecl !== undefined && signatureDecl.name === undefined) {
                    const [funcReturnType, funcParameters] = readSignature(signature, signatureDecl);
                    itemOthers.push(getRawFunctionType(funcReturnType, funcParameters, typeChecker, true));
                    isFunction = true;
                }
            }

            if (!isFunction) {
                const objectRawType: RNRawType = {
                    kind: 'Object',
                    isNullable: false,
                    properties: []
                };
                itemOthers.push(objectRawType);

                for (const propSymbol of itemUnknowns[0].getProperties()) {
                    for (const propSymbolDecl of propSymbol.declarations) {
                        const [propDecl, propType, funcReturnType, funcParameters] = tryReadMemberSignature(propSymbolDecl, typeChecker);

                        if (propType !== undefined) {
                            const propRawType = typeToRNRawType2(propType, typeChecker, allowObject);
                            if (propDecl.questionToken !== undefined) {
                                propRawType.isNullable = true;
                            }

                            const pushedProperty = {
                                name: (<ts.Node>propDecl.name).getText(),
                                propertyType: propRawType
                            };
                            objectRawType.properties.push(pushedProperty);

                            if (pushedProperty.propertyType.kind === 'Number') {
                                // sometimes when the compiler see underfined | null | PrimitiveType<number, 'TYPE'>
                                // the __primitive_type__ member is lost
                                const propSymbolDeclText = propSymbolDecl.getText();
                                if (propSymbolDeclText.match(/\WFloat\W/) !== null) {
                                    pushedProperty.propertyType.kind = 'Float';
                                } else if (propSymbolDeclText.match(/\WDouble\W/) !== null) {
                                    pushedProperty.propertyType.kind = 'Double';
                                } else if (propSymbolDeclText.match(/\WInt32\W/) !== null) {
                                    pushedProperty.propertyType.kind = 'Int32';
                                }
                            }
                        } else if (funcReturnType !== undefined && funcParameters !== undefined) {
                            const funcRawType = getRawFunctionType(funcReturnType, funcParameters, typeChecker, true);
                            if (propDecl.questionToken !== undefined) {
                                funcRawType.isNullable = true;
                            }
                            objectRawType.properties.push({
                                name: (<ts.Node>propDecl.name).getText(),
                                propertyType: funcRawType
                            });
                        } else {
                            throw new Error(`Only properties and functions are allowed: ${propSymbolDecl.getText()}.`);
                        }
                    }
                }
            }
        } else if (itemUnknowns.length > 1) {
            throw new Error(`Type is not supported: ${typeChecker.typeToString(tsType)}.`);
        }
    }

    {
        const imageSources = itemOthers.filter((value: RNRawType) => { return value.kind === 'rn:ImageSourcePrimitive'; });
        if (imageSources.length !== 0) {
            itemOthers = itemOthers.filter((value: RNRawType) => {
                // export type ImageSource = ImageURISource | number | Array<ImageURISource> | RNTag<'ImageSource'>;
                // ImageURISource is ignored in the if statement above
                return value.kind !== 'Number' && value.kind !== 'rn:ImageSourcePrimitive' && (value.kind !== 'Array' || value.elementType.kind !== 'Object');
            }).concat([imageSources[0]]);
        }
    }

    if (itemOthers.length === 0) {
        if (itemNullable) {
            return { kind: 'Null', isNullable: true };
        } else {
            throw new Error(`Type is not supported: ${typeChecker.typeToString(tsType)}.`);
        }
    } else {
        const result: RNRawType = itemOthers.length === 1 ? itemOthers[0] : {
            kind: 'Union',
            isNullable: itemNullable,
            types: itemOthers
        };

        result.isNullable = itemNullable;
        if (itemDefaultValue !== undefined) {
            result.defaultValue = itemDefaultValue;
        }

        if (result.kind === 'Number') {
            const tsTypeText = typeChecker.typeToString(tsType);
            // sometimes when the compiler see underfined | null | PrimitiveType<number, 'TYPE'>
            // the __primitive_type__ member is lost
            if (tsTypeText.match(/\WFloat\W/) !== null) {
                result.kind = 'Float';
            } else if (tsTypeText.match(/\WDouble\W/) !== null) {
                result.kind = 'Double';
            } else if (tsTypeText.match(/\WInt32\W/) !== null) {
                result.kind = 'Int32';
            }
        }
        return result;
    }
}

export function typeToRNRawType(typeNode: ts.TypeNode, allowObject: boolean): RNRawType {
    let itemNullable = false;
    let itemDefaultValue: string | number | boolean | undefined;
    const itemStringLiterals: string[] = [];
    const itemNumberLiterals: number[] = [];
    const itemOthers: RNRawType[] = [];

    const scannedItems: ts.TypeNode[] = [typeNode];
    for (let i = 0; i < scannedItems.length; i++) {
        const item = scannedItems[i];
        if (ts.isParenthesizedTypeNode(item)) {
            scannedItems.push(item);
        } else if (ts.isTypeReferenceNode(item)) {
            const typeReferenceName = item.typeName.getText();
            switch (typeReferenceName) {
                case 'ReactNull':
                    itemNullable = true;
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
                case 'ColorValueArray':
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
                    itemOthers.push({ kind: 'js:Promise', isNullable: false, elementType: typeToRNRawType(item.typeArguments[0], allowObject) });
                    break;
                }
                case 'DirectEventHandler':
                case 'BubblingEventHandler': {
                    if (item.typeArguments === undefined || item.typeArguments.length < 1 || item.typeArguments.length > 2) {
                        throw new Error(`${typeNode.getText()} should have one type argument and another optional string literal type argument.`);
                    }

                    const eventType = typeToRNRawType(item.typeArguments[0], true);
                    let nameType: string | undefined;
                    if (item.typeArguments.length == 2) {
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
                    itemOthers.push(typeToRNRawType(item.typeArguments[0], allowObject));

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
                                    itemDefaultValue = +`${defaultValue.literal.text}`;
                                } else {
                                    throw new Error(`Type is not supported: ${typeNode.getText()}.`);
                                }
                            } else {
                                throw new Error(`Type is not supported: ${typeNode.getText()}.`);
                            }
                    }
                }
                case 'Readonly': {
                    if (item.typeArguments === undefined || item.typeArguments.length !== 1) {
                        throw new Error(`${typeNode.getText()} should have one type argument.`);
                    }
                    itemOthers.push(typeToRNRawType(item.typeArguments[0], allowObject));
                    break;
                }
                default:
            }
        } else if (ts.isLiteralTypeNode(item)) {
            if (ts.isStringLiteral(item.literal)) {
                itemStringLiterals.push(item.literal.text);
            } else if (ts.isNumericLiteral(item.literal)) {
                itemNumberLiterals.push(+`item.literal.text`);
            } else {
                throw new Error(`Type is not supported: ${typeNode.getText()}.`);
            }
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
            }
        }
    }
}
