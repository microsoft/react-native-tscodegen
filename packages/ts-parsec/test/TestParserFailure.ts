// tslint:disable:no-duplicate-imports
// tslint:disable:trailing-comma

import * as assert from 'assert';
import * as parsec from '../src/index';
import { buildLexer, seq, tok, unableToConsumeToken } from '../src/index';

function notUndefined<T>(t: T | undefined): T {
    assert.notStrictEqual(t, undefined);
    return <T>t;
}

function failToParse<TKind, TResult>(r: parsec.ParseResult<TKind, TResult>[] | parsec.ParseError): parsec.ParseError {
    if (parsec.succeeded(r)) {
        assert.fail();
    }
    return <parsec.ParseError>r;
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
    [false, /^\s+/g, TokenKind.Comma]
]);

test(`Failure: seq`, () => {
    {
        const firstToken = notUndefined(lexer.parse(`123,456`));
        const error = failToParse(seq(tok(TokenKind.Identifier), tok(TokenKind.Number)).parse(firstToken));
        assert.deepStrictEqual(error, unableToConsumeToken(firstToken));
    }
    {
        const firstToken = notUndefined(lexer.parse(`123,456`));
        const error = failToParse(seq(tok(TokenKind.Number), tok(TokenKind.Identifier)).parse(firstToken));
        assert.deepStrictEqual(error, unableToConsumeToken(firstToken.next));
    }
});
