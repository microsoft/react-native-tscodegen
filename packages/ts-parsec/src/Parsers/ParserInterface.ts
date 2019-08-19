import { Token } from './../Lexer';

export interface ParseResult<TKind, TResult> {
    readonly nextToken: Token<TKind> | undefined;
    readonly result: TResult;
}

export interface Parser<TKind, TResult> {
    parse(token: Token<TKind> | undefined): ParseResult<TKind, TResult>[];
}
