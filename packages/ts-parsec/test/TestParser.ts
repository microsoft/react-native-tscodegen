// tslint:disable:trailing-comma

import * as assert from 'assert';
import { alt, apply, buildLexer, opt, opt_sc, rep, rep_sc, repr, seq, str, tok, Token } from '../src/index';

function notUndefined<T>(t: T | undefined): T {
    assert.notStrictEqual(t, undefined);
    return <T>t;
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

test(`Parser: str`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = str('123').parse(firstToken);
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].result.text, '123');
        assert.strictEqual(result[0].nextToken, firstToken.next);
    }
    {
        const result = str('456').parse(firstToken);
        assert.strictEqual(result.length, 0);
    }
});

test(`Parser: tok`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = tok(TokenKind.Number).parse(firstToken);
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].result.text, '123');
        assert.strictEqual(result[0].nextToken, firstToken.next);
    }
    {
        const result = tok(TokenKind.Identifier).parse(firstToken);
        assert.strictEqual(result.length, 0);
    }
});

test(`Parser: alt`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = alt(tok(TokenKind.Number), tok(TokenKind.Identifier)).parse(firstToken);
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].result.text, '123');
        assert.strictEqual(result[0].nextToken, firstToken.next);
    }
});

test(`Parser: seq`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = seq(tok(TokenKind.Number), tok(TokenKind.Identifier)).parse(firstToken);
        assert.strictEqual(result.length, 0);
    }
    {
        const result = seq(tok(TokenKind.Number), tok(TokenKind.Number)).parse(firstToken);
        assert.strictEqual(result.length, 1);
        assert.deepStrictEqual(result[0].result.map((value: Token<TokenKind>) => value.text), ['123', '456']);
        assert.strictEqual(result[0].nextToken, undefined);
    }
});

test(`Parser: opt`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = opt(tok(TokenKind.Number)).parse(firstToken);
        assert.strictEqual(result.length, 2);
        assert.strictEqual((<Token<TokenKind>>result[0].result).text, '123');
        assert.strictEqual(result[0].nextToken, firstToken.next);
        assert.strictEqual(result[1].result, undefined);
        assert.strictEqual(result[1].nextToken, firstToken);
    }
});

test(`Parser: opt_sc`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = opt_sc(tok(TokenKind.Number)).parse(firstToken);
        assert.strictEqual(result.length, 1);
        assert.strictEqual((<Token<TokenKind>>result[0].result).text, '123');
        assert.strictEqual(result[0].nextToken, firstToken.next);
    }
});

test(`Parser: rep_sc`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = rep_sc(tok(TokenKind.Number)).parse(firstToken);
        assert.strictEqual(result.length, 1);
        assert.deepStrictEqual(result[0].result.map((value: Token<TokenKind>) => value.text), ['123', '456']);
        assert.strictEqual(result[0].nextToken, undefined);
    }
});

test(`Parser: repr`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = repr(tok(TokenKind.Number)).parse(firstToken);
        assert.strictEqual(result.length, 3);
        assert.deepStrictEqual(result[0].result, []);
        assert.strictEqual(result[0].nextToken, firstToken);
        assert.deepStrictEqual(result[1].result.map((value: Token<TokenKind>) => value.text), ['123']);
        assert.strictEqual(result[1].nextToken, firstToken.next);
        assert.deepStrictEqual(result[2].result.map((value: Token<TokenKind>) => value.text), ['123', '456']);
        assert.strictEqual(result[2].nextToken, undefined);
    }
});

test(`Parser: rep`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = rep(tok(TokenKind.Number)).parse(firstToken);
        assert.strictEqual(result.length, 3);
        assert.deepStrictEqual(result[0].result.map((value: Token<TokenKind>) => value.text), ['123', '456']);
        assert.strictEqual(result[0].nextToken, undefined);
        assert.deepStrictEqual(result[1].result.map((value: Token<TokenKind>) => value.text), ['123']);
        assert.strictEqual(result[1].nextToken, firstToken.next);
        assert.deepStrictEqual(result[2].result, []);
        assert.strictEqual(result[2].nextToken, firstToken);
    }
});

test(`Parser: apply`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = apply(
            repr(tok(TokenKind.Number)),
            (values: Token<TokenKind>[]) => {
                return values.map((value: Token<TokenKind>) => {
                    return value.text;
                }).join(';');
            }
        ).parse(firstToken);
        assert.strictEqual(result.length, 3);
        assert.strictEqual(result[0].result, '');
        assert.strictEqual(result[0].nextToken, firstToken);
        assert.strictEqual(result[1].result, '123');
        assert.strictEqual(result[1].nextToken, firstToken.next);
        assert.strictEqual(result[2].result, '123;456');
        assert.strictEqual(result[2].nextToken, undefined);
    }
});
