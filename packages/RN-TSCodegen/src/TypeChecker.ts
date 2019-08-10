// tslint:disable:no-conditional-assignment

import * as ts from 'typescript';

type WritablePropType<T> =
    T extends ReadonlyArray<infer E1> ? WritableObjectType<E1>[] :
    T extends (infer E2)[] ? WritableObjectType<E2>[] :
    WritableObjectType<T>;
export type WritableObjectType<T> = {
    - readonly [P in keyof T]: WritablePropType<T[P]>
};

export function isReactNull(tsType: ts.Type): boolean {
    return tsType.symbol !== undefined && tsType.symbol.name === 'ReactNull';
}

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

function isInt32NotExported(tsType: ts.Type): boolean {
    return tsType.symbol !== undefined && tsType.symbol.name === 'Int32NotExported';
}

function isFloatNotExported(tsType: ts.Type): boolean {
    return tsType.symbol !== undefined && tsType.symbol.name === 'FloatNotExported';
}

export type RNRawType = (
    {
        kind: 'BooleanLiteral';
        value: boolean;
    } | {
        kind: 'NumberLiteral';
        value: number;
    } | {
        kind: 'StringLiterals';
        values: string[];
    } | {
        kind: 'Boolean';
    } | {
        kind: 'Number';
    } | {
        kind: 'Float';
    } | {
        kind: 'Int32';
    } | {
        kind: 'String';
    } | {
        kind: 'rn:ColorPrimitive';
    } | {
        kind: 'rn:ImageSourcePrimitive';
    } | {
        kind: 'rn:PointPrimitive';
    } | {
        kind: 'Array';
        elementType: RNRawType;
    } | {
        kind: 'Object';
        properties: { name: string; propertyType: RNRawType }[];
    } | {
        kind: 'DirectEventHandler' | 'BubblingEventHandler';
        elementType: RNRawType;
        paperTopLevelNameDeprecated: string | undefined;
    } | {
        kind: 'Null';
    } | {
        kind: 'Void';
    } | {
        kind: 'Any';
    } | {
        kind: 'js:Object';
    } | {
        kind: 'js:Promise';
        elementType: RNRawType;
    } | {
        kind: 'Function';
        returnType: RNRawType;
        parameters: { name: string; parameterType: RNRawType }[];
    }
) & {
    isNullable: boolean;
    defaultValue?: boolean | number | string;
};

function eventTypeToRNRawType(typeArguments: readonly ts.Type[], kind: 'DirectEventHandler' | 'BubblingEventHandler', typeChecker: ts.TypeChecker): RNRawType {
    if (typeArguments === undefined || typeArguments.length < 1 || typeArguments.length > 2) {
        throw new Error(`${kind} should have one type argument and anoter optional string literal type argument.`);
    }

    const eventType = typeToRNRawType(typeArguments[0], typeChecker, true);
    const nameType = typeArguments.length === 1 ? undefined : typeToRNRawType(typeArguments[1], typeChecker, false);
    if (nameType !== undefined || nameType.kind !== 'StringLiterals' || nameType.values.length !== 1) {
        throw new Error(`${kind} should have one type argument and anoter optional string literal type argument.`);
    }

    return {
        kind: kind,
        elementType: eventType,
        paperTopLevelNameDeprecated: nameType === undefined ? undefined : nameType.values[0],
        isNullable: false
    };
}

function withDefaultToRNRawType(elementType: ts.IntersectionType, typeChecker: ts.TypeChecker): RNRawType {
    if (elementType.types.length === 2) {
        const literalType = elementType.types.find(
            (value: ts.Type) => value.flags === ts.TypeFlags.BooleanLiteral || value.flags === ts.TypeFlags.StringLiteral || value.flags === ts.TypeFlags.NumberLiteral
        );
        const objectType = elementType.types.find(
            (value: ts.Type) => value !== literalType
        );

        if (literalType !== undefined && objectType !== undefined) {
            if (objectType.getProperty('__WithDefault__') !== undefined) {
                return typeToRNRawType(literalType, typeChecker, false);
            }
        }
    }
    throw new Error(`Type is not supported: ${typeChecker.typeToString(elementType)}.`);
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
    ts.Type,
    ts.Type,
    readonly ts.ParameterDeclaration[]
] {
    let propDecl: ts.MethodSignature | ts.CallSignatureDeclaration | ts.PropertySignature;
    let propType: ts.Type;
    let funcType: [ts.Type, readonly ts.ParameterDeclaration[]];

    if (ts.isMethodSignature(propSymbolDecl) || ts.isCallSignatureDeclaration(propSymbolDecl)) {
        if (propSymbolDecl.typeParameters !== undefined && propSymbolDecl.typeParameters.length !== 0) {
            throw new Error(`Generic function is not supported: ${propSymbolDecl.getText()}.`);
        }
        propDecl = propSymbolDecl;
        funcType = [typeChecker.getTypeFromTypeNode(propSymbolDecl.type), propSymbolDecl.parameters];
    } else if (ts.isPropertySignature(propSymbolDecl)) {
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
        propDecl,
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

    let itemReactNull = false;
    let itemTrue = false;
    let itemFalse = false;
    let itemNumber = false;
    let itemFloatNotExported = false;
    let itemInt32NotExported = false;
    let itemString = false;
    let itemDefaultValue: boolean | number | string;
    const itemUnknowns: ts.Type[] = [];
    const itemStringLiterals: string[] = [];
    const itemOthers: RNRawType[] = [];

    for (const elementType of tsItems) {
        let indexInfo: ts.IndexInfo;

        if (isReactNull(elementType)) {
            itemReactNull = true;
        } else if (isAny(elementType)) {
            itemOthers.push({ kind: 'Any', isNullable: true });
        } else if (isNull(elementType)) {
            itemOthers.push({ kind: 'Null', isNullable: true });
        } else if (isVoid(elementType)) {
            itemOthers.push({ kind: 'Null', isNullable: true });
        } else if (isBoolean(elementType)) {
            const value = typeChecker.typeToString(elementType);
            itemTrue = itemTrue || value !== 'false';
            itemFalse = itemFalse || value !== 'true';
        } else if (elementType.isStringLiteral()) {
            itemStringLiterals.push(elementType.value);
        } else if (elementType.isNumberLiteral()) {
            itemOthers.push({ kind: 'NumberLiteral', value: elementType.value, isNullable: false });
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
            const currentDefaultValue = withDefaultToRNRawType(elementType, typeChecker);

            switch (currentDefaultValue.kind) {
                case 'BooleanLiteral':
                case 'NumberLiteral': {
                    itemDefaultValue = currentDefaultValue.value;
                    break;
                }
                case 'StringLiterals': {
                    if (currentDefaultValue.values.length === 1) {
                        itemDefaultValue = currentDefaultValue.values[0];
                    }
                }
                default:
            }

            if (itemDefaultValue === undefined) {
                throw new Error(`Type is not supported: ${typeChecker.typeToString(elementType)}.`);
            }
        } else if ((indexInfo = typeChecker.getIndexInfoOfType(elementType, ts.IndexKind.Number)) !== undefined) {
            itemOthers.push({ kind: 'Array', elementType: typeToRNRawType(indexInfo.type, typeChecker, allowObject), isNullable: false });
        } else if (elementType.symbol !== undefined) {
            if (elementType.symbol.name === 'ColorValueNotExported') {
                itemOthers.push({ kind: 'rn:ColorPrimitive', isNullable: false });
            } else if (elementType.symbol.name === 'ImageSourceNotExported') {
                itemOthers.push({ kind: 'rn:ImageSourcePrimitive', isNullable: false });
            } else if (elementType.symbol.name === 'PointValue') {
                itemOthers.push({ kind: 'rn:PointPrimitive', isNullable: false });
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
            } else {
                itemUnknowns.push(elementType);
            }
        } else if (elementType.aliasSymbol !== undefined) {
            if (elementType.symbol.name === 'DirectEventHandler' || elementType.symbol.name === 'BubblingEventHandler') {
                itemOthers.push(eventTypeToRNRawType(elementType.aliasTypeArguments, elementType.symbol.name, typeChecker));
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
        if (itemFloatNotExported && !itemInt32NotExported) {
            itemOthers.push({ kind: 'Float', isNullable: false });
        } else if (!itemFloatNotExported && itemInt32NotExported) {
            itemOthers.push({ kind: 'Int32', isNullable: false });
        } else if (!itemFloatNotExported && !itemInt32NotExported) {
            itemOthers.push({ kind: 'Number', isNullable: false });
        } else {
            throw new Error(`Type is not supported: ${typeChecker.typeToString(tsType)}.`);
        }
    }

    if (itemStringLiterals.length > 0) {
        itemOthers.push({ kind: 'StringLiterals', values: itemStringLiterals, isNullable: false });
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

                    if (propSymbol.declarations.length === 1) {
                        const propSymbolDecl = propSymbol.declarations[0];
                        const [propDecl, propType, funcReturnType, funcParameters] = tryReadMemberSignature(propSymbolDecl, typeChecker);

                        if (propType !== undefined) {
                            const propRawType = typeToRNRawType(propType, typeChecker, true);
                            if (propDecl.questionToken !== undefined) {
                                propRawType.isNullable = true;
                            }
                            objectRawType.properties.push({
                                name: propDecl.name.getText(),
                                propertyType: propRawType
                            });
                        } else if (funcReturnType !== undefined) {
                            const funcRawType = getRawFunctionType(funcReturnType, funcParameters, typeChecker, true);
                            if (propDecl.questionToken !== undefined) {
                                funcRawType.isNullable = true;
                            }
                            objectRawType.properties.push({
                                name: propDecl.name.getText(),
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

    if (itemOthers.length === 1) {
        itemOthers[0].isNullable = itemReactNull;
        if (itemDefaultValue !== undefined) {
            itemOthers[0].defaultValue = itemDefaultValue;
        }
        return itemOthers[0];
    }
    throw new Error(`Type is not supported: ${typeChecker.typeToString(tsType)}.`);
}
