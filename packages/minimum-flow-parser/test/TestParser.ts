// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as assert from 'assert';
import { expectEOF, expectSingleResult } from 'typescript-parsec';
import * as ast from '../src/AST';
import { EXPR, PROGRAM, STAT, TYPE } from '../src/Parser';
import { tokenizer } from '../src/Tokenizer';

function parseType(input: string): ast.Type {
  return expectSingleResult(expectEOF(TYPE.parse(tokenizer.parse(input))));
}

function parseExpr(input: string): ast.Expression {
  return expectSingleResult(expectEOF(EXPR.parse(tokenizer.parse(input))));
}

function parseStat(input: string): ast.Statement {
  return expectSingleResult(expectEOF(STAT.parse(tokenizer.parse(input))));
}

/*****************************************************************
 * Types
 ****************************************************************/

test(`Test Primitive Types`, () => {
  assert.deepStrictEqual(parseType(`void`), {
    kind: 'PrimitiveType',
    name: 'void'
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

test(`Test Tuple Type`, () => {
  assert.deepStrictEqual(parseType(`[1,2,3]`), {
    kind: 'TupleType',
    types: [
      { kind: 'LiteralType', text: '1' },
      { kind: 'LiteralType', text: '2' },
      { kind: 'LiteralType', text: '3' }
    ]
  });
});

test(`Test Union Type`, () => {
  assert.deepStrictEqual(parseType(`$ReadOnlyArray<void>|string[]|$ReadOnly<number>|boolean`), {
    kind: 'UnionType',
    elementTypes: [
      {
        kind: 'ArrayType',
        isReadonly: true,
        elementType: {
          kind: 'PrimitiveType',
          name: 'void'
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

  assert.deepStrictEqual(parseType(`react.native.WithDefault<('a' | 'b'), ('a' | 123 | true | false | undefined | null)>`), {
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
            },
            {
              kind: 'LiteralType',
              text: `undefined`
            },
            {
              kind: 'LiteralType',
              text: `null`
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

test(`Test Function Type`, () => {
  assert.deepStrictEqual(parseType(`(a:string, b?:number)=>void`), {
    kind: 'FunctionType',
    returnType: { kind: 'PrimitiveType', name: 'void' },
    parameters: [{
      name: 'a',
      optional: false,
      parameterType: { kind: 'PrimitiveType', name: 'string' }
    },
    {
      name: 'b',
      optional: true,
      parameterType: { kind: 'PrimitiveType', name: 'number' }
    }]
  });
});

/*****************************************************************
 * Expressions
 ****************************************************************/

test(`Test Expr Reference`, () => {
  assert.deepStrictEqual(parseExpr(`name`), {
    kind: 'ExprReference',
    name: 'name',
    typeArguments: []
  });

  assert.deepStrictEqual(parseExpr(`react.codegenNativeComponent<ModuleProps,Options<string>>`), {
    kind: 'ExprReference',
    name: { parent: 'react', name: 'codegenNativeComponent' },
    typeArguments: [{
      kind: 'TypeReference',
      name: 'ModuleProps',
      typeArguments: []
    },
    {
      kind: 'TypeReference',
      name: 'Options',
      typeArguments: [{ kind: 'PrimitiveType', name: 'string' }]
    }]
  });
});

test(`Test Call Expression`, () => {
  assert.deepStrictEqual(parseExpr(`a(123,(456:string),undefined,null):number`), {
    kind: 'TypeCastExpr',
    expr: {
      kind: 'CallExpr',
      expr: {
        kind: 'ExprReference',
        name: 'a',
        typeArguments: []
      },
      funcArguments: [{
        kind: 'LiteralExpr',
        text: '123'
      },
      {
        kind: 'ParenExpr',
        expr: {
          kind: 'TypeCastExpr',
          expr: { kind: 'LiteralExpr', text: '456' },
          toType: { kind: 'PrimitiveType', name: 'string' }
        }
      },
      {
        kind: 'LiteralExpr',
        text: 'undefined'
      },
      {
        kind: 'LiteralExpr',
        text: 'null'
      }]
    },
    toType: { kind: 'PrimitiveType', name: 'number' }
  });
});

test(`Test Object Literal Expression`, () => {
  assert.deepStrictEqual(
    parseExpr(`{
      interfaceOnly: true,
      paperComponentName: 'RCTModule',
    }`),
    {
      kind: 'ObjectLiteralExpr',
      properties: [{
        key: 'interfaceOnly',
        value: { kind: 'LiteralExpr', text: 'true' }
      },
      {
        key: 'paperComponentName',
        value: { kind: 'LiteralExpr', text: `'RCTModule'` }
      }]
    });
});

test(`Test Array Literal Expression`, () => {
  assert.deepStrictEqual(parseExpr(`[1,2,3]`), {
    kind: 'ArrayLiteralExpr',
    values: [
      { kind: 'LiteralExpr', text: '1' },
      { kind: 'LiteralExpr', text: '2' },
      { kind: 'LiteralExpr', text: '3' }
    ]
  });
});

/*****************************************************************
 * Statements
 ****************************************************************/

test(`Test Import`, () => {
  assert.deepStrictEqual(parseStat(`const codegenNativeComponent = require('codegenNativeComponent');`), {
    kind: 'ImportEqualStat',
    name: 'codegenNativeComponent',
    source: `'codegenNativeComponent'`
  });

  assert.deepStrictEqual(parseStat(`import * as codegenNativeComponent from 'codegenNativeComponent';`), {
    kind: 'ImportAsStat',
    name: 'codegenNativeComponent',
    source: `'codegenNativeComponent'`
  });

  assert.deepStrictEqual(parseStat(`import type {Int32, Double, Float, WithDefault} from 'CodegenTypes';`), {
    kind: 'ImportNameStat',
    names: ['Int32', 'Double', 'Float', 'WithDefault'],
    source: `'CodegenTypes'`
  });
});

/*****************************************************************
 * Flow Program AST
 ****************************************************************/

test(`Test Simple Program`, () => {
  const input = `
'use strict';

import {func} from 'func';

type Int32 = number;
type Float = number;
type Double = number;

interface Point {
  x: Double;
  y: Double;
  z: Double;
}

export interface Inheritance extends a, b, c {
}

export type Point = $ReadOnly<{|
  x: Double,
  y: Double,
  z: Double,
|}>;

export type PointList<+T:Point> = {
  ps: T[];
};

export const Zero = 0;
export default (func<string>('abc'):number);
  `;

  const output: ast.FlowProgram = {
    statements: [
      { kind: 'UseStrictStat' },
      { kind: 'ImportNameStat', names: ['func'], source: `'func'` },
      { kind: 'TypeAliasDecl', hasExport: false, name: 'Int32', aliasedType: { kind: 'PrimitiveType', name: 'number' } },
      { kind: 'TypeAliasDecl', hasExport: false, name: 'Float', aliasedType: { kind: 'PrimitiveType', name: 'number' } },
      { kind: 'TypeAliasDecl', hasExport: false, name: 'Double', aliasedType: { kind: 'PrimitiveType', name: 'number' } },
      {
        kind: 'InterfaceDecl',
        hasExport: false,
        name: 'Point',
        baseTypes: [],
        interfaceType: {
          kind: 'ObjectType',
          isExact: false,
          mixinTypes: [],
          members: [{
            kind: 'Prop',
            isReadonly: false,
            isOptional: false,
            name: 'x',
            propType: { kind: 'TypeReference', name: 'Double', typeArguments: [] }
          },
          {
            kind: 'Prop',
            isReadonly: false,
            isOptional: false,
            name: 'y',
            propType: { kind: 'TypeReference', name: 'Double', typeArguments: [] }
          },
          {
            kind: 'Prop',
            isReadonly: false,
            isOptional: false,
            name: 'z',
            propType: { kind: 'TypeReference', name: 'Double', typeArguments: [] }
          }]
        }
      },
      {
        kind: 'InterfaceDecl',
        hasExport: true,
        name: 'Inheritance',
        baseTypes: [
          { kind: 'TypeReference', name: 'a', typeArguments: [] },
          { kind: 'TypeReference', name: 'b', typeArguments: [] },
          { kind: 'TypeReference', name: 'c', typeArguments: [] }
        ],
        interfaceType: {
          kind: 'ObjectType',
          isExact: false,
          mixinTypes: [],
          members: []
        }
      },
      {
        kind: 'TypeAliasDecl',
        hasExport: true,
        name: 'Point',
        aliasedType: {
          kind: 'DecoratedGenericType',
          name: '$ReadOnly',
          elementType: {
            kind: 'ObjectType',
            isExact: true,
            mixinTypes: [],
            members: [{
              kind: 'Prop',
              isReadonly: false,
              isOptional: false,
              name: 'x',
              propType: { kind: 'TypeReference', name: 'Double', typeArguments: [] }
            },
            {
              kind: 'Prop',
              isReadonly: false,
              isOptional: false,
              name: 'y',
              propType: { kind: 'TypeReference', name: 'Double', typeArguments: [] }
            },
            {
              kind: 'Prop',
              isReadonly: false,
              isOptional: false,
              name: 'z',
              propType: { kind: 'TypeReference', name: 'Double', typeArguments: [] }
            }]
          }
        }
      },
      {
        kind: 'TypeAliasDecl',
        hasExport: true,
        name: 'PointList',
        generic: {
          parameters: [{
            name: 'T',
            baseType: {
              kind: 'TypeReference',
              name: 'Point',
              typeArguments: []
            }
          }]
        },
        aliasedType: {
          kind: 'ObjectType',
          isExact: false,
          mixinTypes: [],
          members: [{
            kind: 'Prop',
            isReadonly: false,
            isOptional: false,
            name: 'ps',
            propType: {
              kind: 'ArrayType',
              isReadonly: false,
              elementType: { kind: 'TypeReference', name: 'T', typeArguments: [] }
            }
          }]
        }
      },
      {
        kind: 'ExportEqualStat',
        name: 'Zero',
        expr: { kind: 'LiteralExpr', text: '0' }
      },
      {
        kind: 'ExportDefaultStat',
        expr: {
          kind: 'ParenExpr',
          expr: {
            kind: 'TypeCastExpr',
            toType: { kind: 'PrimitiveType', name: 'number' },
            expr: {
              kind: 'CallExpr',
              expr: {
                kind: 'ExprReference',
                name: 'func',
                typeArguments: [{ kind: 'PrimitiveType', name: 'string' }]
              },
              funcArguments: [{ kind: 'LiteralExpr', text: `'abc'` }]
            }
          }
        }
      }
    ]
  };

  assert.deepStrictEqual(expectSingleResult(expectEOF(PROGRAM.parse(tokenizer.parse(input)))), output);
});
