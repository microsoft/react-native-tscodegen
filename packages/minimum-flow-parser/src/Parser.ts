// tslint:disable:no-duplicate-imports

import * as parsec from 'ts-parsec';
import { rule } from 'ts-parsec';
import { alt, apply, tok } from 'ts-parsec';
import * as ast from './AST';
import { TokenKind } from './Tokenizer';

type Token = parsec.Token<TokenKind>;

function applyNull(token: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'null' };
}

function applyNumber(token: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'number' };
}

function applyString(token: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'string' };
}

function applyBoolean(token: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'boolean' };
}

function applyStringLiteral(token: Token): ast.Type {
  return { kind: 'StringLiteralType', text: token.text };
}

export const TYPE = rule<TokenKind, ast.Type>();

TYPE.setPattern(
  alt(
    apply(tok(TokenKind.KEYWORD_null), applyNull),
    apply(tok(TokenKind.KEYWORD_number), applyNumber),
    apply(tok(TokenKind.KEYWORD_string), applyString),
    apply(tok(TokenKind.KEYWORD_boolean), applyBoolean),
    apply(tok(TokenKind.StringLiteral), applyStringLiteral)
  )
);
