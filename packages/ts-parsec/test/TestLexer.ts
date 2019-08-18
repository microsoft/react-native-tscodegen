// tslint:disable:trailing-comma

import * as assert from 'assert';
import { buildLexer } from '../src/index';

test(`Test number with commas (one token)`, () => {
    enum TokenKind {
        Number,
        Comma,
    }

    const lexer = buildLexer<TokenKind>([
        [false, /^\d+/g, TokenKind.Number],
        [false, /^,/g, TokenKind.Comma]
    ]);

    const token = lexer.parse(`123`);
    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Number);
    assert.equal(token.text, '123');
    assert.equal(token.next, undefined);
});
