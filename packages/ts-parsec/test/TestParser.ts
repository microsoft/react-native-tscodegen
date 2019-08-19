// tslint:disable:no-duplicate-imports
// tslint:disable:trailing-comma

import * as assert from 'assert';
import * as parsec from '../src/index';
import { alt, apply, buildLexer, opt, opt_sc, rep, rep_sc, repr, seq, str, tok, Token } from '../src/index';

function notUndefined<T>(t: T | undefined): T {
    assert.notStrictEqual(t, undefined);
    return <T>t;
}

function succeeded<TKind, TResult>(r: parsec.ParseResult<TKind, TResult>[] | parsec.ParseError): parsec.ParseResult<TKind, TResult>[] {
    if (!parsec.succeeded(r)) {
        assert.fail();
    }
    return <parsec.ParseResult<TKind, TResult>[]>r;
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
        const result = succeeded(str('123').parse(firstToken));
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].result.text, '123');
        assert.strictEqual(result[0].nextToken, firstToken.next);
    }
    {
        const result = str('456').parse(firstToken);
        assert.strictEqual(parsec.failed(result), true);
    }
});

test(`Parser: tok`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = succeeded(tok(TokenKind.Number).parse(firstToken));
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].result.text, '123');
        assert.strictEqual(result[0].nextToken, firstToken.next);
    }
    {
        const result = succeeded(tok(TokenKind.Identifier).parse(firstToken));
        assert.strictEqual(result.length, 0);
    }
});

test(`Parser: alt`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = succeeded(alt(tok(TokenKind.Number), tok(TokenKind.Identifier)).parse(firstToken));
        assert.strictEqual(result.length, 1);
        assert.strictEqual(result[0].result.text, '123');
        assert.strictEqual(result[0].nextToken, firstToken.next);
    }
});

test(`Parser: seq`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = succeeded(seq(tok(TokenKind.Number), tok(TokenKind.Identifier)).parse(firstToken));
        assert.strictEqual(result.length, 0);
    }
    {
        const result = succeeded(seq(tok(TokenKind.Number), tok(TokenKind.Number)).parse(firstToken));
        assert.strictEqual(result.length, 1);
        assert.deepStrictEqual(result[0].result.map((value: Token<TokenKind>) => value.text), ['123', '456']);
        assert.strictEqual(result[0].nextToken, undefined);
    }
});

test(`Parser: opt`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = succeeded(opt(tok(TokenKind.Number)).parse(firstToken));
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
        const result = succeeded(opt_sc(tok(TokenKind.Number)).parse(firstToken));
        assert.strictEqual(result.length, 1);
        assert.strictEqual((<Token<TokenKind>>result[0].result).text, '123');
        assert.strictEqual(result[0].nextToken, firstToken.next);
    }
});

test(`Parser: rep_sc`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = succeeded(rep_sc(tok(TokenKind.Number)).parse(firstToken));
        assert.strictEqual(result.length, 1);
        assert.deepStrictEqual(result[0].result.map((value: Token<TokenKind>) => value.text), ['123', '456']);
        assert.strictEqual(result[0].nextToken, undefined);
    }
});

test(`Parser: repr`, () => {
    const firstToken = notUndefined(lexer.parse(`123,456`));
    {
        const result = succeeded(repr(tok(TokenKind.Number)).parse(firstToken));
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
        const result = succeeded(rep(tok(TokenKind.Number)).parse(firstToken));
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
        const result = succeeded(
            apply(
                repr(tok(TokenKind.Number)),
                (values: Token<TokenKind>[]) => {
                    return values.map((value: Token<TokenKind>) => {
                        return value.text;
                    }).join(';');
                }
            ).parse(firstToken)
        );
        assert.strictEqual(result.length, 3);
        assert.strictEqual(result[0].result, '');
        assert.strictEqual(result[0].nextToken, firstToken);
        assert.strictEqual(result[1].result, '123');
        assert.strictEqual(result[1].nextToken, firstToken.next);
        assert.strictEqual(result[2].result, '123;456');
        assert.strictEqual(result[2].nextToken, undefined);
    }
});
