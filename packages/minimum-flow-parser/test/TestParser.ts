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

test(`Test Optional Type`, () => {
  assert.deepStrictEqual(parseType(`?string`), {
    kind: 'OptionalType',
    elementType: {
      kind: 'PrimitiveType',
      name: 'string'
    }
  });

  assert.deepStrictEqual(parseType(`??string`), {
    kind: 'OptionalType',
    elementType: {
      kind: 'PrimitiveType',
      name: 'string'
    }
  });
});

test(`Test Array Type`, () => {
  assert.deepStrictEqual(parseType(`string[]`), {
    kind: 'ArrayType',
    isReadonly: false,
    elementType: {
      kind: 'PrimitiveType',
      name: 'string'
    }
  });

  assert.deepStrictEqual(parseType(`$ReadOnlyArray<string>`), {
    kind: 'ArrayType',
    isReadonly: true,
    elementType: {
      kind: 'PrimitiveType',
      name: 'string'
    }
  });

  assert.deepStrictEqual(parseType(`$ReadOnlyArray<string>[]`), {
    kind: 'ArrayType',
    isReadonly: false,
    elementType: {
      kind: 'ArrayType',
      isReadonly: true,
      elementType: {
        kind: 'PrimitiveType',
        name: 'string'
      }
    }
  });

  assert.deepStrictEqual(parseType(`$ReadOnlyArray<string[]>`), {
    kind: 'ArrayType',
    isReadonly: true,
    elementType: {
      kind: 'ArrayType',
      isReadonly: false,
      elementType: {
        kind: 'PrimitiveType',
        name: 'string'
      }
    }
  });
});

test(`Test Union Type`, () => {
  assert.deepStrictEqual(parseType(`$ReadOnlyArray<null>|string[]|$ReadOnly<number>|boolean`), {
    kind: 'UnionType',
    elementTypes: [
      {
        kind: 'ArrayType',
        isReadonly: true,
        elementType: {
          kind: 'PrimitiveType',
          name: 'null'
        }
      },
      {
        kind: 'ArrayType',
        isReadonly: false,
        elementType: {
          kind: 'PrimitiveType',
          name: 'string'
        }
      },
      {
        kind: 'DecoratedGenericType',
        name: '$ReadOnly',
        elementType: {
          kind: 'PrimitiveType',
          name: 'number'
        }
      }, {
        kind: 'PrimitiveType',
        name: 'boolean'
      }
    ]
  });
});
