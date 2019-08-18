// tslint:disable:trailing-comma

import * as assert from 'assert';
import { buildLexer, str, tok } from '../src/index';

test(`Parser: str`, () => {
    enum TokenKind {
        Number,
        Comma,
    }

    const firstToken = buildLexer([
        [true, /^\d+/g, TokenKind.Number],
        [false, /^,/g, TokenKind.Comma]
    ]).parse(`123,345`);

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
    enum TokenKind {
        Number,
        Comma,
    }

    const firstToken = buildLexer([
        [true, /^\d+/g, TokenKind.Number],
        [false, /^,/g, TokenKind.Comma]
    ]).parse(`123,345`);

    {
        const result = tok(TokenKind.Number).parse(firstToken);
        assert.equal(result.length, 1);
        assert.equal(result[0].result.text, '123');
        assert.equal(result[0].nextToken, firstToken.next);
    }

    {
        const result = tok(TokenKind.Comma).parse(firstToken);
        assert.equal(result.length, 0);
    }
});
