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
    kind: 'LiteralType',
    text: `'Something'`
  });

  assert.deepStrictEqual(parseType(`123`), {
    kind: 'LiteralType',
    text: '123'
  });

  assert.deepStrictEqual(parseType(`true`), {
    kind: 'LiteralType',
    text: 'true'
  });

  assert.deepStrictEqual(parseType(`false`), {
    kind: 'LiteralType',
    text: 'false'
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

test(`Test Type Reference`, () => {
  assert.deepStrictEqual(parseType(`Int32`), {
    kind: 'TypeReference',
    name: 'Int32',
    typeArguments: []
  });

  assert.deepStrictEqual(parseType(`react.native.WithDefault<('a' | 'b'), ('a' | 123 | true | false)>`), {
    kind: 'TypeReference',
    name: { parent: { parent: 'react', name: 'native' }, name: 'WithDefault' },
    typeArguments: [
      {
        kind: 'ParenType',
        elementType: {
          kind: 'UnionType',
          elementTypes: [
            {
              kind: 'LiteralType',
              text: `'a'`
            }, {
              kind: 'LiteralType',
              text: `'b'`
            }
          ]
        }
      },
      {
        kind: 'ParenType',
        elementType: {
          kind: 'UnionType',
          elementTypes: [
            {
              kind: 'LiteralType',
              text: `'a'`
            },
            {
              kind: 'LiteralType',
              text: `123`
            },
            {
              kind: 'LiteralType',
              text: `true`
            },
            {
              kind: 'LiteralType',
              text: `false`
            }
          ]
        }
      }
    ]
  });
});

test(`Test Empty Object Type`, () => {
  assert.deepStrictEqual(parseType(`{}`), {
    kind: 'ObjectType',
    isExact: false,
    mixinTypes: [],
    members: []
  });

  assert.deepStrictEqual(parseType(`{||}`), {
    kind: 'ObjectType',
    isExact: true,
    mixinTypes: [],
    members: []
  });
});

test(`Test Object Type with Mixins`, () => {
  assert.deepStrictEqual(parseType(`{...A,...B}`), {
    kind: 'ObjectType',
    isExact: false,
    mixinTypes: [{
      kind: 'TypeReference',
      name: 'A',
      typeArguments: []
    },
    {
      kind: 'TypeReference',
      name: 'B',
      typeArguments: []
    }],
    members: []
  });

  assert.deepStrictEqual(parseType(`{|...A,...B,|}`), {
    kind: 'ObjectType',
    isExact: true,
    mixinTypes: [{
      kind: 'TypeReference',
      name: 'A',
      typeArguments: []
    },
    {
      kind: 'TypeReference',
      name: 'B',
      typeArguments: []
    }],
    members: []
  });
});

test(`Test Object Type with Properties`, () => {
  assert.deepStrictEqual(parseType(`{a:number,+b?:?string}`), {
    kind: 'ObjectType',
    isExact: false,
    mixinTypes: [],
    members: [{
      kind: 'Prop',
      isReadonly: false,
      isOptional: false,
      name: 'a',
      propType: { kind: 'PrimitiveType', name: 'number' }
    },
    {
      kind: 'Prop',
      isReadonly: true,
      isOptional: true,
      name: 'b',
      propType: { kind: 'OptionalType', elementType: { kind: 'PrimitiveType', name: 'string' } }
    }]
  });

  assert.deepStrictEqual(parseType(`{|a:number,+b?:?string,|}`), {
    kind: 'ObjectType',
    isExact: true,
    mixinTypes: [],
    members: [{
      kind: 'Prop',
      isReadonly: false,
      isOptional: false,
      name: 'a',
      propType: { kind: 'PrimitiveType', name: 'number' }
    },
    {
      kind: 'Prop',
      isReadonly: true,
      isOptional: true,
      name: 'b',
      propType: { kind: 'OptionalType', elementType: { kind: 'PrimitiveType', name: 'string' } }
    }]
  });
});

test(`Test Object Type with Indexers`, () => {
  assert.deepStrictEqual(parseType(`{[key:string]:number}`), {
    kind: 'ObjectType',
    isExact: false,
    mixinTypes: [],
    members: [{
      kind: 'Indexer',
      isReadonly: false,
      keyName: 'key',
      keyType: { kind: 'PrimitiveType', name: 'string' },
      valueType: { kind: 'PrimitiveType', name: 'number' }
    }]
  });

  assert.deepStrictEqual(parseType(`{|+[key:string]:number,|}`), {
    kind: 'ObjectType',
    isExact: true,
    mixinTypes: [],
    members: [{
      kind: 'Indexer',
      isReadonly: true,
      keyName: 'key',
      keyType: { kind: 'PrimitiveType', name: 'string' },
      valueType: { kind: 'PrimitiveType', name: 'number' }
    }]
  });
});
