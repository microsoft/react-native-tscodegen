// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Token, TokenError } from '../Lexer';
import { betterError, Parser, ParseResult, ParserOutput, resultOrError } from './ParserInterface';

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

export function expectEOF<TKind, TResult>(output: ParserOutput<TKind, TResult>): ParserOutput<TKind, TResult> {
    if (!output.successful) {
        return output;
    }

    if (output.candidates.length === 0) {
        return {
            successful: false,
            error: {
                kind: 'Error',
                pos: undefined,
                message: 'No result is returned.'
            }
        };
    }

    const filtered: ParseResult<TKind, TResult>[] = [];
    let error = output.error;

    for (const candidate of output.candidates) {
        if (candidate.nextToken === undefined) {
            filtered.push(candidate);
        } else {
            error = betterError(error, {
                kind: 'Error',
                pos: candidate.nextToken === undefined ? undefined : candidate.nextToken.pos,
                message: `The parser cannot reach the end of file, stops at "${candidate.nextToken.text}" at position ${JSON.stringify(candidate.nextToken.pos)}.`
            });
        }
    }

    return resultOrError(filtered, error, filtered.length !== 0);
}

export function expectSingleResult<TKind, TResult>(output: ParserOutput<TKind, TResult>): TResult {
    if (!output.successful) {
        throw new TokenError(output.error.pos, output.error.message);
    }

    if (output.candidates.length === 0) {
        throw new TokenError(undefined, 'No result is returned.');
    }

    if (output.candidates.length !== 1) {
        throw new TokenError(undefined, 'Multiple results are returned.');
    }

    return output.candidates[0].result;
}
