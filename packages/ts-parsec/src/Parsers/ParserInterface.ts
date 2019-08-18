import { Token } from './../Lexer';

export interface ParseResult<TKind, TResult> {
    readonly nextToken: Token<TKind>;
    readonly result: TResult;
}

export interface Parser<TKind, TResult> {
    parse(token: Token<TKind>): ParseResult<TKind, TResult>[];
}
