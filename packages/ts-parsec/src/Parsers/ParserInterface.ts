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

export type ParserOutput<TKind, TResult> = ParseResult<TKind, TResult>[] | ParseError;

export interface Parser<TKind, TResult> {
    parse(token: Token<TKind> | undefined): ParserOutput<TKind, TResult>;
}

export function succeeded<TKind, TResult>(r: ParserOutput<TKind, TResult>): r is ParseResult<TKind, TResult>[] {
    return r instanceof Array;
}

export function failed<TKind, TResult>(r: ParserOutput<TKind, TResult>): r is ParseError {
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

export function resultOrError<TKind, TResult>(result: ParseResult<TKind, TResult>[], error: ParseError | undefined): ParserOutput<TKind, TResult> {
    return result.length === 0 && error !== undefined ? error : result;
}

export function unableToConsumeToken<TKind>(token: Token<TKind> | undefined): ParseError {
    return {
        kind: 'Error',
        pos: token === undefined ? undefined : token.pos,
        message: `Unable to consume token: ${token === undefined ? '<END-OF-FILE>' : token.text}`
    };
}
