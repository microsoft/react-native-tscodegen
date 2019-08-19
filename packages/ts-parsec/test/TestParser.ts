// tslint:disable:trailing-comma

import * as assert from 'assert';
import { alt, buildLexer, opt, opt_sc, seq, str, tok } from '../src/index';

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

test(`Parser: str`, () => {
    const firstToken = lexer.parse(`123,456`);
    {
        const result = str('123').parse(firstToken);
        assert.equal(result.length, 1);
        assert.equal(result[0].result.text, '123');
        assert.equal(result[0].nextToken, firstToken.next);
    }
    {
        const result = str('456').parse(firstToken);
        assert.equal(result.length, 0);
    }
});

test(`Parser: tok`, () => {
    const firstToken = lexer.parse(`123,456`);
    {
        const result = tok(TokenKind.Number).parse(firstToken);
        assert.equal(result.length, 1);
        assert.equal(result[0].result.text, '123');
        assert.equal(result[0].nextToken, firstToken.next);
    }
    {
        const result = tok(TokenKind.Identifier).parse(firstToken);
        assert.equal(result.length, 0);
    }
});

test(`Parser: alt`, () => {
    const firstToken = lexer.parse(`123,456`);
    {
        const result = alt(tok(TokenKind.Number), tok(TokenKind.Identifier)).parse(firstToken);
        assert.equal(result.length, 1);
        assert.equal(result[0].result.text, '123');
        assert.equal(result[0].nextToken, firstToken.next);
    }
});

test(`Parser: seq`, () => {
    const firstToken = lexer.parse(`123,456`);
    {
        const result = seq(tok(TokenKind.Number), tok(TokenKind.Identifier)).parse(firstToken);
        assert.equal(result.length, 0);
    }
    {
        const result = seq(tok(TokenKind.Number), tok(TokenKind.Number)).parse(firstToken);
        assert.equal(result.length, 1);
        assert.equal(result[0].result.length, 2);
        assert.equal(result[0].result[0].text, '123');
        assert.equal(result[0].result[1].text, '456');
        assert.equal(result[0].nextToken, undefined);
    }
});

test(`Parser: opt`, () => {
    const firstToken = lexer.parse(`123,456`);
    {
        const result = opt(tok(TokenKind.Number)).parse(firstToken);
        assert.equal(result.length, 2);
        assert.equal(result[0].result.text, '123');
        assert.equal(result[0].nextToken, firstToken.next);
        assert.equal(result[1].result, undefined);
        assert.equal(result[1].nextToken, firstToken);
    }
});

test(`Parser: opt_sc`, () => {
    const firstToken = lexer.parse(`123,456`);
    {
        const result = opt_sc(tok(TokenKind.Number)).parse(firstToken);
        assert.equal(result.length, 1);
        assert.equal(result[0].result.text, '123');
        assert.equal(result[0].nextToken, firstToken.next);
    }
});
