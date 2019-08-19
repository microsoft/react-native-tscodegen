// tslint:disable:no-duplicate-imports
// tslint:disable:trailing-comma

import * as assert from 'assert';
import { Token } from '../src/index';
import { buildLexer, expectEOF, expectSingleResult, rule } from '../src/index';
import { alt, apply, lrec_sc, seq, str, tok } from '../src/index';

enum TokenKind {
    Number,
    Add,
    Sub,
    Mul,
    Div,
    LParen,
    RParen,
    Space,
}

const lexer = buildLexer([
    [true, /^\d+(\.\d+)?/g, TokenKind.Number],
    [true, /^\+/g, TokenKind.Add],
    [true, /^\-/g, TokenKind.Sub],
    [true, /^\*/g, TokenKind.Mul],
    [true, /^\//g, TokenKind.Div],
    [true, /^\(/g, TokenKind.LParen],
    [true, /^\)/g, TokenKind.RParen],
    [false, /^\s+/g, TokenKind.Space]
]);

function applyTerm1(value: Token<TokenKind.Number>): number {
    return +value.text;
}

function applyTerm2(value: [Token<TokenKind>, number, Token<TokenKind>]): number {
    return value[1];
}

function applyBinary(first: number, second: [Token<TokenKind>, number]): number {
    switch (second[0].text) {
        case '+': return first + second[1];
        case '-': return first - second[1];
        case '*': return first * second[1];
        case '/': return first / second[1];
        default: throw new Error(`Unknown binary operator: ${second[0].text}`);
    }
}

const TERM = rule<TokenKind, number>();
const FACTOR = rule<TokenKind, number>();
const EXP = rule<TokenKind, number>();

TERM.setPattern(
    alt(
        apply(tok(TokenKind.Number), applyTerm1),
        apply(seq(str('('), EXP, str(')')), applyTerm2)
    )
);

FACTOR.setPattern(
    lrec_sc(TERM, seq(alt(str('*'), str('/')), TERM), applyBinary)
);

EXP.setPattern(
    lrec_sc(FACTOR, seq(alt(str('+'), str('-')), FACTOR), applyBinary)
);

function evaluate(expr: string): number {
    return expectSingleResult(expectEOF(EXP.parse(lexer.parse(expr))));
}

test(`Parser: str`, () => {
    assert.strictEqual(evaluate('1'), 1);
});
