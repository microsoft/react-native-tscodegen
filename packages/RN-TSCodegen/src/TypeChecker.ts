// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:no-conditional-assignment

import * as ts from 'typescript';

type WritablePropType<T> =
    T extends ReadonlyArray<infer E1> ? WritableObjectType<E1>[] :
    T extends (infer E2)[] ? WritableObjectType<E2>[] :
    WritableObjectType<T>;
export type WritableObjectType<T> = {
    - readonly [P in keyof T]: WritablePropType<T[P]>
};

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

export function isVoid(tsType: ts.Type): boolean {
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

export interface RNRawTypeCommon {
    isNullable: boolean;
    defaultValue?: boolean | number | string;
}

export interface RNRawObjectType {
    kind: 'Object';
    properties: { name: string; propertyType: RNRawType }[];
}

export type RNRawType = (
    | {
        kind: 'BooleanLiteral';
        value: boolean;
    }
    | {
        kind: 'StringLiterals';
        values: string[];
    }
    | {
        kind: 'NumberLiterals';
        values: number[];
    }
    | {
        kind: 'Boolean' | 'Number' | 'Float' | 'Double' | 'Int32' | 'String' | 'Null' | 'Void' | 'Any';
    }
    | {
        kind: 'rn:ColorPrimitive' | 'rn:ImageSourcePrimitive' | 'rn:PointPrimitive' | 'rn:EdgeInsetsPrimitive';
    }
    | {
        kind: 'Array';
        elementType: RNRawType;
    }
    | RNRawObjectType
    | {
        kind: 'DirectEventHandler' | 'BubblingEventHandler';
        elementType: RNRawType;
        paperTopLevelNameDeprecated: string | undefined;
    }
    | {
        kind: 'js:Object';
    }
    | {
        kind: 'js:Promise';
        elementType: RNRawType;
    }
    | {
        kind: 'Function';
        returnType: RNRawType;
        parameters: { name: string; parameterType: RNRawType }[];
    }
    | {
        kind: 'Union' | 'Tuple';
        types: RNRawType[];
    }
) & RNRawTypeCommon;

function eventTypeToRNRawType(typeArguments: readonly ts.Type[], kind: 'DirectEventHandler' | 'BubblingEventHandler', typeChecker: ts.TypeChecker): RNRawType {
    if (typeArguments === undefined || typeArguments.length < 1 || typeArguments.length > 2) {
        throw new Error(`${kind} should have one type argument and another optional string literal type argument.`);
    }

    const eventType = typeToRNRawType(typeArguments[0], typeChecker, true);
    const nameType = typeArguments.length === 1 ? undefined : typeToRNRawType(typeArguments[1], typeChecker, false);
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

function tryReadMemberSignature(propSymbolDecl: ts.Declaration, typeChecker: ts.TypeChecker): [
    ts.MethodSignature | ts.CallSignatureDeclaration | ts.PropertySignature,
    ts.Type | undefined,
    ts.Type | undefined,
    readonly ts.ParameterDeclaration[] | undefined
] {
    let propDecl: ts.MethodSignature | ts.CallSignatureDeclaration | ts.PropertySignature | undefined;
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
    } else if (ts.isPropertySignature(propSymbolDecl)) {
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
        <ts.MethodSignature | ts.CallSignatureDeclaration | ts.PropertySignature>propDecl,
        propType,
        funcType === undefined ? undefined : funcType[0],
        funcType === undefined ? undefined : funcType[1]
    ];
}

function getRawFunctionType(funcReturnType: ts.Type, funcParameters: readonly ts.ParameterDeclaration[], typeChecker: ts.TypeChecker, allowObject: boolean): RNRawType {
    const funcRawType: RNRawType = {
        kind: 'Function',
        isNullable: false,
        returnType: typeToRNRawType(funcReturnType, typeChecker, allowObject),
        parameters: []
    };
    for (const paramDecl of funcParameters) {
        if (paramDecl.type !== undefined) {
            const paramRawType = {
                name: paramDecl.name.getText(),
                parameterType: typeToRNRawType(typeChecker.getTypeFromTypeNode(paramDecl.type), typeChecker, allowObject)
            };
            if (paramDecl.questionToken !== undefined) {
                paramRawType.parameterType.isNullable = true;
            }
            funcRawType.parameters.push(paramRawType);
        }
    }
    return funcRawType;
}

export function typeToRNRawType(tsType: ts.Type, typeChecker: ts.TypeChecker, allowObject: boolean): RNRawType {
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
        const currentDefaultValue = typeToRNRawType(defaultValueType, typeChecker, allowObject);

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
                                types: typeReference.typeArguments.map((value: ts.Type) => typeToRNRawType(value, typeChecker, allowObject))
                            });
                            continue;
                        } else if (typeReferenceTarget.symbol.name === 'Array' || typeReferenceTarget.symbol.name === 'ReadonlyArray') {
                            itemOthers.push({
                                kind: 'Array',
                                isNullable: false,
                                elementType: typeToRNRawType(typeReference.typeArguments[0], typeChecker, allowObject)
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
                    itemOthers.push({ kind: 'js:Promise', elementType: typeToRNRawType(promiseType, typeChecker, allowObject), isNullable: false });
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
                itemOthers.push(typeToRNRawType(typeArguments[0], typeChecker, allowObject));
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
                            const propRawType = typeToRNRawType(propType, typeChecker, allowObject);
                            if (propDecl.questionToken !== undefined) {
                                propRawType.isNullable = true;
                            }
                            objectRawType.properties.push({
                                name: (<ts.Node>propDecl.name).getText(),
                                propertyType: propRawType
                            });
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
            if (tsTypeText.indexOf('WithDefault<Float,') !== -1 || tsTypeText.indexOf('WithDefault<PrimitiveType<number, "Float">,') !== -1) {
                result.kind = 'Float';
            } else if (tsTypeText.indexOf('WithDefault<Double,') !== -1 || tsTypeText.indexOf('WithDefault<PrimitiveType<number, "Double">,') !== -1) {
                result.kind = 'Double';
            } else if (tsTypeText.indexOf('WithDefault<Int32,') !== -1 || tsTypeText.indexOf('WithDefault<PrimitiveType<number, "Int32">,') !== -1) {
                result.kind = 'Int32';
            }
        }
        return result;
    }
}
