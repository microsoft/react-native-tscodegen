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
