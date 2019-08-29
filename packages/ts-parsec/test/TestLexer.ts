// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:trailing-comma

import * as assert from 'assert';
import { buildLexer } from '../src/index';

function notUndefined<T>(t: T | undefined): T {
    assert.notStrictEqual(t, undefined);
    return <T>t;
}

test(`Lexer: number with commas (one token)`, () => {
    enum TokenKind {
        Number,
        Comma,
    }

    const lexer = buildLexer([
        [true, /^\d+/g, TokenKind.Number],
        [true, /^,/g, TokenKind.Comma]
    ]);

    let token = lexer.parse(`123`);

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Number);
    assert.strictEqual(token.text, '123');
    token = token.next;

    assert.strictEqual(token, undefined);
});

test(`Lexer: number with commas (multiple token)`, () => {
    enum TokenKind {
        Number,
        Comma,
    }

    const lexer = buildLexer([
        [true, /^\d+/g, TokenKind.Number],
        [true, /^,/g, TokenKind.Comma]
    ]);

    let token = lexer.parse(`123,456`);

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Number);
    assert.strictEqual(token.text, '123');
    token = token.next;

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Comma);
    assert.strictEqual(token.text, ',');
    token = token.next;

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Number);
    assert.strictEqual(token.text, '456');
    token = token.next;

    assert.strictEqual(token, undefined);
});

test(`Lexer: number with commas (discard commas)`, () => {
    enum TokenKind {
        Number,
        Comma,
    }

    const lexer = buildLexer([
        [true, /^\d+/g, TokenKind.Number],
        [false, /^,/g, TokenKind.Comma]
    ]);

    let token = lexer.parse(`123,456,789`);

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Number);
    assert.strictEqual(token.text, '123');
    token = token.next;

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Number);
    assert.strictEqual(token.text, '456');
    token = token.next;

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Number);
    assert.strictEqual(token.text, '789');
    token = token.next;

    assert.strictEqual(token, undefined);
});

test(`Lexer: identifiers and numbers with discardable commas and spaces`, () => {
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

    let token = lexer.parse(`123, abc, 456, def, `);

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Number);
    assert.strictEqual(token.text, '123');
    token = token.next;

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Identifier);
    assert.strictEqual(token.text, 'abc');
    token = token.next;

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Number);
    assert.strictEqual(token.text, '456');
    token = token.next;

    token = notUndefined(token);
    assert.strictEqual(token.kind, TokenKind.Identifier);
    assert.strictEqual(token.text, 'def');
    token = token.next;

    assert.strictEqual(token, undefined);
});
