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

test(`Test number with commas (multiple token)`, () => {
    enum TokenKind {
        Number,
        Comma,
    }

    const lexer = buildLexer<TokenKind>([
        [false, /^\d+/g, TokenKind.Number],
        [false, /^,/g, TokenKind.Comma]
    ]);

    let token = lexer.parse(`123,456`);

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Number);
    assert.equal(token.text, '123');
    token = token.next;

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Comma);
    assert.equal(token.text, ',');
    token = token.next;

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Number);
    assert.equal(token.text, '456');
    token = token.next;

    assert.equal(token, undefined);
});

test(`Test number with commas (discard commas)`, () => {
    enum TokenKind {
        Number,
        Comma,
    }

    const lexer = buildLexer<TokenKind>([
        [false, /^\d+/g, TokenKind.Number],
        [true, /^,/g, TokenKind.Comma]
    ]);

    let token = lexer.parse(`123,456,789`);

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Number);
    assert.equal(token.text, '123');
    token = token.next;

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Number);
    assert.equal(token.text, '456');
    token = token.next;

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Number);
    assert.equal(token.text, '789');
    token = token.next;

    assert.equal(token, undefined);
});

test(`Test identifiers and numbers with discardable commas and spaces`, () => {
    enum TokenKind {
        Number,
        Identifier,
        Comma,
        Space,
    }

    const lexer = buildLexer<TokenKind>([
        [false, /^\d+/g, TokenKind.Number],
        [false, /^[a-zA-Z]\w*/g, TokenKind.Identifier],
        [true, /^,/g, TokenKind.Comma],
        [true, /^\s+/g, TokenKind.Comma]
    ]);

    let token = lexer.parse(`123, abc, 456, def, `);

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Number);
    assert.equal(token.text, '123');
    token = token.next;

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Identifier);
    assert.equal(token.text, 'abc');
    token = token.next;

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Number);
    assert.equal(token.text, '456');
    token = token.next;

    assert.notEqual(token, undefined);
    assert.equal(token.kind, TokenKind.Identifier);
    assert.equal(token.text, 'def');
    token = token.next;

    assert.equal(token, undefined);
});
