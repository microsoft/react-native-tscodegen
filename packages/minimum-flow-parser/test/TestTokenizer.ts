import * as assert from 'assert';
import { tokenizer, TokenKind } from '../src/Tokenizer';

test(`Test Tokenizer with Normal Tokens`, () => {
  const input = `boolean export null number string type Identifier $Identifier 'StringLiteral' =<>|{};:,`;
  let token = tokenizer.parse(input);

  const expecteds: [TokenKind, string][] = [
    [TokenKind.KEYWORD_boolean, `boolean`],
    [TokenKind.KEYWORD_export, `export`],
    [TokenKind.KEYWORD_null, `null`],
    [TokenKind.KEYWORD_number, `number`],
    [TokenKind.KEYWORD_string, `string`],
    [TokenKind.KEYWORD_type, `type`],
    [TokenKind.Identifier, `Identifier`],
    [TokenKind.$Identifier, `$Identifier`],
    [TokenKind.StringLiteral, `'StringLiteral'`],
    [TokenKind.EQ, `=`],
    [TokenKind.LT, `<`],
    [TokenKind.GT, `>`],
    [TokenKind.OR, `|`],
    [TokenKind.OpenBrace, `{`],
    [TokenKind.CloseBrace, `}`],
    [TokenKind.Semicolon, `;`],
    [TokenKind.Colon, `:`],
    [TokenKind.Comma, `,`]
  ];

  for (const expected of expecteds) {
    assert.notStrictEqual(token, undefined);
    assert.strictEqual(token.kind, expected[0]);
    assert.strictEqual(token.text, expected[1]);
    token = token.next;
  }
  assert.strictEqual(token, undefined);
});

test(`Test Tokenizer with Comments`, () => {
  // nothing
});
