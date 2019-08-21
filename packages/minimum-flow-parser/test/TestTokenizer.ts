import * as assert from 'assert';
import { tokenizer, TokenKind } from '../src/Tokenizer';

function testTokenizer(input: string, expecteds: [TokenKind, string][]): void {
  let token = tokenizer.parse(input);

  for (const expected of expecteds) {
    assert.notStrictEqual(token, undefined);
    assert.strictEqual(token.kind, expected[0]);
    assert.strictEqual(token.text, expected[1]);
    token = token.next;
  }
  assert.strictEqual(token, undefined);
}

test(`Test Tokenizer with Normal Tokens`, () => {
  const input = `boolean export null number string type Identifier $Identifier 'StringLiteral' 123 123.456 true false =<>|{}();:,?`;

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
    [TokenKind.NumberLiteral, `123`],
    [TokenKind.NumberLiteral, `123.456`],
    [TokenKind.KEYWORD_true, `true`],
    [TokenKind.KEYWORD_false, `false`],
    [TokenKind.EQ, `=`],
    [TokenKind.LT, `<`],
    [TokenKind.GT, `>`],
    [TokenKind.OR, `|`],
    [TokenKind.OpenBrace, `{`],
    [TokenKind.CloseBrace, `}`],
    [TokenKind.OpenParen, `(`],
    [TokenKind.CloseParen, `)`],
    [TokenKind.Semicolon, `;`],
    [TokenKind.Colon, `:`],
    [TokenKind.Comma, `,`],
    [TokenKind.QuestionMark, `?`]
  ];

  testTokenizer(input, expecteds);
});

test(`Test Tokenizer with Comments`, () => {
  const input = `
I // this is a comment
like /* this is another comment
John Wick */ movie
  `;

  const expecteds: [TokenKind, string][] = [
    [TokenKind.Identifier, `I`],
    [TokenKind.Identifier, `like`],
    [TokenKind.Identifier, `movie`]
  ];

  testTokenizer(input, expecteds);
});
