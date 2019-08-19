import { Token, TokenError } from '../Lexer';
import { betterError, failed, ParseError, Parser, ParseResult, ParserOutput } from './ParserInterface';

export interface Rule<TKind, TResult> extends Parser<TKind, TResult> {
    setPattern(parser: Parser<TKind, TResult>): void;
}

class RuleImpl<TKind, TResult> implements Rule<TKind, TResult> {
    private parser: Parser<TKind, TResult>;

    constructor() {
        // nothing
    }

    public setPattern(parser: Parser<TKind, TResult>): void {
        this.parser = parser;
    }

    public parse(token: Token<TKind> | undefined): ParserOutput<TKind, TResult> {
        if (this.parser === undefined) {
            throw new Error(`Rule has not been initialized. setPattern is required before calling parse.`);
        }
        return this.parser.parse(token);
    }
}

export function rule<TKind, TResult>(): Rule<TKind, TResult> {
    return new RuleImpl<TKind, TResult>();
}

export function expectEOF<TKind, TResult>(r: ParserOutput<TKind, TResult>): ParserOutput<TKind, TResult> {
    if (failed(r)) {
        return r;
    }

    if (r.length === 0) {
        return {
            kind: 'Error',
            pos: undefined,
            message: 'No result is returned.'
        };
    }

    const filtered: ParseResult<TKind, TResult>[] = [];
    for (const candidate of r) {
        if (candidate.nextToken === undefined) {
            filtered.push(candidate);
        }
    }

    if (filtered.length === 0) {
        let error: ParseError | undefined;
        for (const candidate of r) {
            error = betterError(error, {
                kind: 'Error',
                pos: candidate.nextToken === undefined ? undefined : candidate.nextToken.pos,
                message: 'The parser cannot reach the end of file.'
            });
        }
        return <ParseError>error;
    }
    return filtered;
}

export function expectSingleResult<TKind, TResult>(r: ParserOutput<TKind, TResult>): TResult {
    if (failed(r)) {
        throw new TokenError(r.pos, r.message);
    }

    if (r.length === 0) {
        throw new TokenError(undefined, 'No result is returned.');
    }

    if (r.length !== 1) {
        throw new TokenError(undefined, 'Multiple results are returned.');
    }

    return r[0].result;
}
