import { Token, TokenPosition } from './../Lexer';

/**
 * A ParseResult has to parts:
 *   result: The result object of this try.
 *   nextToken: The first unconsumed token.
 */
export interface ParseResult<TKind, TResult> {
    readonly nextToken: Token<TKind> | undefined;
    readonly result: TResult;
}

export interface ParseError {
    readonly kind: 'Error';
    readonly pos: TokenPosition | undefined;
    readonly message: string;
}

/**
 * A ParserOutput always has candidates and an error.
 * If successful===true, it means that the candidates field is valid, even when it is empty.
 * If successful===false, error will be not null
 * The error field stores the farest error that has even been seen, even when tokens are successfully parsed.
 */
export type ParserOutput<TKind, TResult> = {
    candidates: ParseResult<TKind, TResult>[];
    successful: true;
    error: ParseError | undefined;
} | {
    successful: false;
    error: ParseError;
};

export interface Parser<TKind, TResult> {
    parse(token: Token<TKind> | undefined): ParserOutput<TKind, TResult>;
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

export function resultOrError<TKind, TResult>(result: ParseResult<TKind, TResult>[], error: ParseError | undefined, successful: boolean): ParserOutput<TKind, TResult> {
    if (successful) {
        return {
            candidates: result,
            successful: true,
            error
        };
    } else {
        return {
            successful: false,
            error: <ParseError>error
        };
    }
}

export function unableToConsumeToken<TKind>(token: Token<TKind> | undefined): ParseError {
    return {
        kind: 'Error',
        pos: token === undefined ? undefined : token.pos,
        message: `Unable to consume token: ${token === undefined ? '<END-OF-FILE>' : token.text}`
    };
}
