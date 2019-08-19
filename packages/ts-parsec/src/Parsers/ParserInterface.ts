import { Token, TokenPosition } from './../Lexer';

export interface ParseResult<TKind, TResult> {
    readonly nextToken: Token<TKind> | undefined;
    readonly result: TResult;
}

export interface ParseError {
    readonly kind: 'Error';
    readonly pos: TokenPosition | undefined;
    readonly message: string;
}

export interface Parser<TKind, TResult> {
    parse(token: Token<TKind> | undefined): ParseResult<TKind, TResult>[] | ParseError;
}

export function succeeded<TKind, TResult>(r: ParseResult<TKind, TResult>[] | ParseError): r is ParseResult<TKind, TResult>[] {
    return r instanceof Array;
}

export function failed<TKind, TResult>(r: ParseResult<TKind, TResult>[] | ParseError): r is ParseError {
    return !(r instanceof Array);
}

export function betterError(e1: ParseError | undefined, e2: ParseError | undefined): ParseError | undefined {
    if (e1 === undefined) { return e2; }
    if (e2 === undefined) { return e1; }
    if (e1.pos === undefined) { return e1; }
    if (e2.pos === undefined) { return e2; }

    if (e1.pos.index < e2.pos.index) {
        return e2;
    } else if (e1.pos.index > e2.pos.index) {
        return e1;
    } else {
        return e1;
    }
}
