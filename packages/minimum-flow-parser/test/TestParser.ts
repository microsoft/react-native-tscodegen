import * as assert from 'assert';
import { expectEOF, expectSingleResult } from 'ts-parsec';
import * as ast from '../src/AST';
import { TYPE } from '../src/Parser';
import { tokenizer } from '../src/Tokenizer';

function parseType(input: string): ast.Type {
  return expectSingleResult(expectEOF(TYPE.parse(tokenizer.parse(input))));
}

test(`Test Primitive Types`, () => {
  assert.deepStrictEqual(parseType(`null`), {
    kind: 'PrimitiveType',
    name: 'null'
  });

  assert.deepStrictEqual(parseType(`number`), {
    kind: 'PrimitiveType',
    name: 'number'
  });

  assert.deepStrictEqual(parseType(`string`), {
    kind: 'PrimitiveType',
    name: 'string'
  });

  assert.deepStrictEqual(parseType(`boolean`), {
    kind: 'PrimitiveType',
    name: 'boolean'
  });

  assert.deepStrictEqual(parseType(`'Something'`), {
    kind: 'StringLiteralType',
    text: `'Something'`
  });
});
