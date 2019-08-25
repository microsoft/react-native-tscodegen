// tslint:disable:no-duplicate-imports
// tslint:disable:trailing-comma

import * as assert from 'assert';
import * as parsec from '../src/index';
import { buildLexer, expectEOF, unableToConsumeToken } from '../src/index';
import { alt, apply, rep_sc, seq, tok } from '../src/index';

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
    for (let i = 1; i < index; i++) {
        current = notUndefined(current).next;
    }
    return current;
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
        const error = failToParse(
            alt(tok(TokenKind.Comma), tok(TokenKind.Space))
                .parse(firstToken)
        );
        assert.deepStrictEqual(error, unableToConsumeToken(firstToken));
    }
});

test(`Failure: seq`, () => {
    {
        const firstToken = notUndefined(lexer.parse(`123,456`));
        const error = failToParse(
            seq(tok(TokenKind.Identifier), tok(TokenKind.Number))
                .parse(firstToken)
        );
        assert.deepStrictEqual(error, unableToConsumeToken(firstToken));
    }
    {
        const firstToken = notUndefined(lexer.parse(`123,456`));
        const error = failToParse(
            seq(tok(TokenKind.Number), tok(TokenKind.Identifier))
                .parse(firstToken)
        );
        assert.deepStrictEqual(error, unableToConsumeToken(firstToken.next));
    }
});

test(`Failure: apply`, () => {
    {
        const firstToken = notUndefined(lexer.parse(`123,456`));
        const error = failToParse(
            apply(tok(TokenKind.Comma), (value: parsec.Token<TokenKind.Comma>) => { return undefined; })
                .parse(firstToken)
        );
        assert.deepStrictEqual(error, unableToConsumeToken(firstToken));
    }
});

test(`Failure: rep_sc + seq`, () => {
    {
        const firstToken = notUndefined(lexer.parse(`1a 2b 3c d e`));
        const output = rep_sc(seq(tok(TokenKind.Number), tok(TokenKind.Identifier)))
            .parse(firstToken);

        assert.strictEqual(output.successful, true);
        assert.strictEqual(output.successful && output.candidates[0].result.length === 3, true);
        const expectError = unableToConsumeToken(walkToken(firstToken, 7));

        const actualError = failToParse(expectEOF(output));
        assert.deepStrictEqual(output.error, expectError);
        assert.deepStrictEqual(actualError, expectError);
    }
});
