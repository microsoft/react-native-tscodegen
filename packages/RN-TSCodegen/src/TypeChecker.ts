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
    throw new Error(`typeToRNRawType:NotSupported`);
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
        } else if (isNull(elementType)) {
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

            if (itemDefaultValue !== undefined) {
                throw new Error(`typeToRNRawType:NotSupported`);
            }

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
                throw new Error(`typeToRNRawType:NotSupported`);
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
            throw new Error(`typeToRNRawType:NotSupported`);
        }
    }

    if (itemStringLiterals.length > 0) {
        itemOthers.push({ kind: 'StringLiterals', values: itemStringLiterals, isNullable: false });
    }

    if (itemOthers.length === 0 && allowObject) {
        if (itemUnknowns.length === 1) {
            itemOthers.push({
                kind: 'Object',
                isNullable: false,
                properties: itemUnknowns[0].getProperties()
                    .filter((propSymbol: ts.Symbol) => {
                        if (propSymbol.declarations.length !== 1) {
                            return false;
                        }
                        const propDecl = propSymbol.declarations[0];
                        return ts.isPropertySignature(propDecl) && propDecl.type !== undefined;
                    }).map((propSymbol: ts.Symbol) => {
                        const propDecl = <ts.PropertySignature>propSymbol.declarations[0];
                        const propertyType = typeToRNRawType(typeChecker.getTypeFromTypeNode(propDecl.type), typeChecker, true);
                        if (propDecl.questionToken !== undefined) {
                            propertyType.isNullable = true;
                        }
                        return {
                            name: propDecl.name.getText(),
                            propertyType
                        };
                    })
            });
        } else if (itemUnknowns.length > 1) {
            throw new Error(`typeToRNRawType:NotSupported`);
        }
    }

    if (itemOthers.length === 1) {
        itemOthers[0].isNullable = itemReactNull;
        if (itemDefaultValue !== undefined) {
            itemOthers[0].defaultValue = itemDefaultValue;
        }
        return itemOthers[0];
    }
    throw new Error(`typeToRNRawType:NotSupported`);
}
