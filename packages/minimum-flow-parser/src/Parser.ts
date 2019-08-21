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

function applyLiteralType(value: Token): ast.Type {
  return { kind: 'LiteralType', text: value.text };
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

function applyDecoratedGenericType(value: [Token, Token, ast.Type, Token]): ast.Type {
  return {
    kind: 'DecoratedGenericType',
    elementType: value[2],
    name: '$ReadOnly'
  };
}

function applyArrayTypeLrec(value: [Token, Token]): ast.ArrayType {
  return {
    kind: 'ArrayType',
    isReadonly: false,
    elementType: <ast.Type>undefined
  };
}

function applyUnionTypeLrec(value: [Token, ast.Type]): ast.UnionType {
  return {
    kind: 'UnionType',
    elementTypes: [value[1]]
  };
}

function applyTypeLrec(first: ast.Type, second: ast.ArrayType | ast.UnionType): ast.Type {
  switch (second.kind) {
    case 'ArrayType': {
      second.elementType = first;
      return second;
    }
    case 'UnionType': {
      if (first.kind === 'UnionType') {
        first.elementTypes.push(...second.elementTypes);
        return first;
      } else {
        second.elementTypes.unshift(first);
        return second;
      }
    }
    default: throw new Error(`Unrecognized type AST.`);
  }
}

export const TYPE_TERM = rule<TokenKind, ast.Type>();
export const TYPE_ARRAY = rule<TokenKind, ast.Type>();
export const TYPE = rule<TokenKind, ast.Type>();

TYPE_TERM.setPattern(
  alt(
    apply(str('null'), applyNull),
    apply(str('number'), applyNumber),
    apply(str('string'), applyString),
    apply(str('boolean'), applyBoolean),
    apply(
      alt(tok(TokenKind.StringLiteral), tok(TokenKind.NumberLiteral), tok(TokenKind.KEYWORD_true), tok(TokenKind.KEYWORD_false)),
      applyLiteralType),
    apply(seq(str('?'), TYPE), applyOptionalType),
    apply(seq(str('$ReadOnlyArray'), str('<'), TYPE, str('>')), applyReadonlyArrayType),
    apply(seq(str('$ReadOnly'), str('<'), TYPE, str('>')), applyDecoratedGenericType)
  )
);

TYPE_ARRAY.setPattern(
  lrec_sc(
    TYPE_TERM,
    apply(seq(str('['), str(']')), applyArrayTypeLrec),
    applyTypeLrec
  )
);

TYPE.setPattern(
  lrec_sc(
    TYPE_ARRAY,
    apply(seq(str('|'), TYPE_ARRAY), applyUnionTypeLrec),
    applyTypeLrec
  )
);
