// tslint:disable:no-duplicate-imports

import * as parsec from 'ts-parsec';
import { rule } from 'ts-parsec';
import { alt, apply, lrec_sc, seq, str, tok } from 'ts-parsec';
import * as ast from './AST';
import { TokenKind } from './Tokenizer';

type Token = parsec.Token<TokenKind>;

function applyNull(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'null' };
}

function applyNumber(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'number' };
}

function applyString(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'string' };
}

function applyBoolean(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'boolean' };
}

function applyStringLiteral(value: Token): ast.Type {
  return { kind: 'StringLiteralType', text: value.text };
}

function applyOptionalType(value: [Token, ast.Type]): ast.Type {
  const elementType = value[1];
  if (elementType.kind === 'OptionalType') {
    return elementType;
  } else {
    return { kind: 'OptionalType', elementType };
  }
}

function applyReadonlyArrayType(value: [Token, Token, ast.Type, Token]): ast.Type {
  return {
    kind: 'ArrayType',
    isReadonly: true,
    elementType: value[2]
  };
}

function applyArrayTypeLrec(value: [Token, Token]): ast.ArrayType {
  return {
    kind: 'ArrayType',
    isReadonly: false,
    elementType: <ast.Type>undefined
  };
}

function applyTypeLrec(first: ast.Type, seconds: ast.ArrayType): ast.Type {
  seconds.elementType = first;
  return seconds;
}

export const TYPE_TERM = rule<TokenKind, ast.Type>();
export const TYPE = rule<TokenKind, ast.Type>();

TYPE_TERM.setPattern(
  alt(
    apply(str('null'), applyNull),
    apply(str('number'), applyNumber),
    apply(str('string'), applyString),
    apply(str('boolean'), applyBoolean),
    apply(tok(TokenKind.StringLiteral), applyStringLiteral),
    apply(seq(str('?'), TYPE), applyOptionalType),
    apply(seq(str('$ReadOnlyArray'), str('<'), TYPE, str('>')), applyReadonlyArrayType)
  )
);

TYPE.setPattern(
  lrec_sc(
    TYPE_TERM,
    apply(seq(str('['), str(']')), applyArrayTypeLrec),
    applyTypeLrec
  )
);
