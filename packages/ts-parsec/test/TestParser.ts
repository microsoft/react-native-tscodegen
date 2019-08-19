// tslint:disable:trailing-comma

import * as assert from 'assert';
import { alt, buildLexer, str, tok } from '../src/index';

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
    const firstToken = lexer.parse(`123,345`);
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
    const firstToken = lexer.parse(`123,345`);
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
    const firstToken = lexer.parse(`123,345`);
    {
        const result = alt(tok(TokenKind.Number), tok(TokenKind.Identifier)).parse(firstToken);
        assert.equal(result.length, 1);
        assert.equal(result[0].result.text, '123');
        assert.equal(result[0].nextToken, firstToken.next);
    }
});
