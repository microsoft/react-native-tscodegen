import { Token, TokenPosition } from './../Lexer';

export interface ParseResult<TKind, TResult> {
    readonly nextToken: Token<TKind> | undefined;
    readonly result: TResult;
}

export interface ParseError {
    readonly kind: 'Error';
    readonly pos: TokenPosition;
    readonly message: string;
}

export interface Parser<TKind, TResult> {
    parse(token: Token<TKind> | undefined): ParseResult<TKind, TResult>[] | ParseError;
}
