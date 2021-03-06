type WritablePropType<T> =
    T extends ReadonlyArray<infer E1> ? WritableObjectType<E1>[] :
    T extends (infer E2)[] ? WritableObjectType<E2>[] :
    WritableObjectType<T>;
export type WritableObjectType<T> = {
    - readonly [P in keyof T]: WritablePropType<T[P]>
};

export interface RNRawTypeCommon {
    isNullable: boolean;
    defaultValue?: boolean | number | string;
}

export interface RNRawObjectProperty {
    name: string;
    optional: boolean;
    propertyType: RNRawType;
}

export interface RNRawObjectType {
    kind: 'Object';
    properties: RNRawObjectProperty[];
}

export interface RNRawFunctionParameter {
    name: string;
    optional: boolean;
    parameterType: RNRawType;
}

export type RNRawType = (
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
        kind: 'rn:ColorPrimitive' | 'rn:ImageSourcePrimitive' | 'rn:PointPrimitive' | 'rn:EdgeInsetsPrimitive' | 'rn:RootTag';
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
        parameters: RNRawFunctionParameter[];
    }
    | {
        kind: 'Union' | 'Tuple';
        types: RNRawType[];
    }
    | {
        kind: 'Alias';
        name: string;
    }
) & RNRawTypeCommon;
