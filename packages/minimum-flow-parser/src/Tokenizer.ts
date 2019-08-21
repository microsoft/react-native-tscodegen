// tslint:disable:trailing-comma

import { buildLexer } from 'ts-parsec';

export enum TokenKind {
  KEYWORD_boolean,
  KEYWORD_export,
  KEYWORD_false,
  KEYWORD_null,
  KEYWORD_number,
  KEYWORD_string,
  KEYWORD_true,
  KEYWORD_type,
  Identifier,
  $Identifier,

  StringLiteral,
  NumberLiteral,

  EQ,
  LT,
  GT,
  PLUS,
  OR,

  Ellipsis,
  OpenBrace,
  CloseBrace,
  OpenParen,
  CloseParen,
  Semicolon,
  Colon,
  Comma,
  QuestionMark,

  Comment1,
  Comment2,
  Space,
}

export const tokenizer = buildLexer([
  [true, /^boolean/g, TokenKind.KEYWORD_boolean],
  [true, /^false/g, TokenKind.KEYWORD_false],
  [true, /^export/g, TokenKind.KEYWORD_export],
  [true, /^null/g, TokenKind.KEYWORD_null],
  [true, /^number/g, TokenKind.KEYWORD_number],
  [true, /^string/g, TokenKind.KEYWORD_string],
  [true, /^true/g, TokenKind.KEYWORD_true],
  [true, /^type/g, TokenKind.KEYWORD_type],
  [true, /^[a-zA-z_][a-zA-Z0-9_]*/g, TokenKind.Identifier],
  [true, /^\$[a-zA-z_][a-zA-Z0-9_]*/g, TokenKind.$Identifier],

  [true, /^'([^']|\\.)*'/g, TokenKind.StringLiteral],
  [true, /^\d+(\.\d+)?/g, TokenKind.NumberLiteral],

  [true, /^\=/g, TokenKind.EQ],
  [true, /^\</g, TokenKind.LT],
  [true, /^\>/g, TokenKind.GT],
  [true, /^\+/g, TokenKind.PLUS],
  [true, /^\|/g, TokenKind.OR],

  [true, /^\.\.\./g, TokenKind.Ellipsis],
  [true, /^\{/g, TokenKind.OpenBrace],
  [true, /^\}/g, TokenKind.CloseBrace],
  [true, /^\(/g, TokenKind.OpenParen],
  [true, /^\)/g, TokenKind.CloseParen],
  [true, /^\;/g, TokenKind.Semicolon],
  [true, /^\:/g, TokenKind.Colon],
  [true, /^\,/g, TokenKind.Comma],
  [true, /^\?/g, TokenKind.QuestionMark],

  [false, /^[/][/][^\n]*\n/g, TokenKind.Comment1],
  [false, /^[/]\*([^*]|\*+[^/])*\*+[/]/g, TokenKind.Comment2],
  [false, /^\s+/g, TokenKind.Space]
]);
