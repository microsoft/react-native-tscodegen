import * as ts from 'typescript';

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

export function isInt32(tsType: ts.Type, program?: ts.Program, tsNode?: ts.TypeNode): boolean {
    if (tsType === undefined) {
        return false;
    }
    return (tsType.flags & ts.TypeFlags.Number) !== 0;
}
