import * as ts from 'typescript';

type WritablePropType<T> =
  T extends ReadonlyArray<infer E1> ? WritableObjectType<E1>[] :
  T extends (infer E2)[] ? WritableObjectType<E2>[] :
  WritableObjectType<T>;
export type WritableObjectType<T> = {
  - readonly [P in keyof T]: WritablePropType<T[P]>
};

export function isNull(tsType: ts.Type): boolean {
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

export function isBoolean(tsType: ts.Type): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.Boolean) !== 0;
}

export function isString(tsType: ts.Type): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.String) !== 0;
}

export function isInt32(tsType: ts.Type, program: ts.Program, tsNode: ts.TypeNode): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.Number) !== 0;
}
