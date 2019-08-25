// tslint:disable:no-duplicate-imports
// tslint:disable:trailing-comma

import * as assert from 'assert';
import * as parsec from '../src/index';
import { buildLexer, expectEOF, unableToConsumeToken } from '../src/index';
import { alt, apply, rep, rep_sc, seq, tok } from '../src/index';

function notUndefined<T>(t: T | undefined): T {
    assert.notStrictEqual(t, undefined);
    return <T>t;
}

function failToParse<TKind, TResult>(r: parsec.ParserOutput<TKind, TResult>): parsec.ParseError {
    if (!r.successful) {
        return r.error;
    }
    throw new Error(`The parsing does not fail.`);
}

function walkToken<T>(t: parsec.Token<T> | undefined, index: number): parsec.Token<T> | undefined {
    let current = t;
    for (let i = 0; i < index; i++) {
        current = notUndefined(current).next;
    }
    return current;
}

function assertError<TKind, TResult>(r: parsec.ParserOutput<TKind, TResult>, expectedError: parsec.ParseError): void {
    const actualError = failToParse(expectEOF(r));
    assert.deepStrictEqual(r.error, expectedError);
    assert.deepStrictEqual(actualError, expectedError);
}

enum TokenKind {
    Number,
    Identifier,
    Comma,
    Space,
}

const lexer = buildLexer([
    [true, /^\d+/g, TokenKind.Number],
    [true, /^[a-zA-Z]\w*/g, TokenKind.Identifier],
    [false, /^,/g, TokenKind.Comma],
    [false, /^\s+/g, TokenKind.Space]
]);

test(`Failure: alt`, () => {
    {
        const firstToken = notUndefined(lexer.parse(`123,456`));
        const output = alt(tok(TokenKind.Comma), tok(TokenKind.Space))
            .parse(firstToken);
        assertError(output, unableToConsumeToken(walkToken(firstToken, 0)));
    }
});

test(`Failure: seq`, () => {
    {
        const firstToken = notUndefined(lexer.parse(`123,456`));
        const output = seq(tok(TokenKind.Identifier), tok(TokenKind.Number))
            .parse(firstToken);
        assertError(output, unableToConsumeToken(walkToken(firstToken, 0)));
    }
    {
        const firstToken = notUndefined(lexer.parse(`123,456`));
        const output = seq(tok(TokenKind.Number), tok(TokenKind.Identifier))
            .parse(firstToken);
        assertError(output, unableToConsumeToken(walkToken(firstToken, 1)));
    }
});

test(`Failure: apply`, () => {
    {
        const firstToken = notUndefined(lexer.parse(`123,456`));
        const output = apply(tok(TokenKind.Comma), (value: parsec.Token<TokenKind.Comma>) => { return undefined; })
            .parse(firstToken);
        assertError(output, unableToConsumeToken(walkToken(firstToken, 0)));
    }
});

test(`Failure: rep_sc + seq`, () => {
    {
        const firstToken = notUndefined(lexer.parse(`1a 2b 3c d e`));
        const output = rep_sc(seq(tok(TokenKind.Number), tok(TokenKind.Identifier)))
            .parse(firstToken);

        assert.strictEqual(output.successful && output.candidates[0].result.length === 3, true);
        const expectedError = unableToConsumeToken(walkToken(firstToken, 6));
        assertError(output, expectedError);
    }
    {
        const firstToken = notUndefined(lexer.parse(`1a 2b 3c d e`));
        const output = rep(seq(tok(TokenKind.Number), tok(TokenKind.Identifier)))
            .parse(firstToken);

        assert.strictEqual(output.successful && output.candidates[0].result.length === 3, true);
        const expectedError = unableToConsumeToken(walkToken(firstToken, 6));
        assertError(output, expectedError);
    }
});

test(`Failure: rep_sc + alt`, () => {
    {
        const firstToken = notUndefined(lexer.parse(`1 a b 2 c 3`));
        const output = rep_sc(alt(tok(TokenKind.Number), seq(tok(TokenKind.Identifier), tok(TokenKind.Identifier))))
            .parse(firstToken);

        assert.strictEqual(output.successful && output.candidates[0].result.length === 3, true);
        const expectedError = unableToConsumeToken(walkToken(firstToken, 5));
        assertError(output, expectedError);
    }
    {
        const firstToken = notUndefined(lexer.parse(`1 a b 2 c 3`));
        const output = rep(alt(tok(TokenKind.Number), seq(tok(TokenKind.Identifier), tok(TokenKind.Identifier))))
            .parse(firstToken);

        assert.strictEqual(output.successful && output.candidates[0].result.length === 3, true);
        const expectedError = unableToConsumeToken(walkToken(firstToken, 5));
        assertError(output, expectedError);
    }
});
