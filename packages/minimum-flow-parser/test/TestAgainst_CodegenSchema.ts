// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
import { expectEOF, expectSingleResult } from 'typescript-parsec';
import { PROGRAM, Statement, tokenizer } from '../src/index';

const codegenSchemaLastStatement: Statement = {
  kind: 'TypeAliasDecl',
  hasExport: true,
  name: 'SchemaType',
  aliasedType: {
    kind: 'DecoratedGenericType',
    name: '$ReadOnly',
    elementType: {
      kind: 'ObjectType',
      isExact: false,
      mixinTypes: [],
      members: [{
        kind: 'Prop',
        isReadonly: false,
        isOptional: false,
        name: 'modules',
        propType: {
          kind: 'DecoratedGenericType',
          name: '$ReadOnly',
          elementType: {
            kind: 'ObjectType',
            isExact: false,
            mixinTypes: [],
            members: [{
              kind: 'Indexer',
              isReadonly: false,
              keyName: 'hasteModuleName',
              keyType: { kind: 'PrimitiveType', name: 'string' },
              valueType: {
                kind: 'UnionType',
                elementTypes: [
                  { kind: 'TypeReference', name: 'ComponentSchema', typeArguments: [] },
                  { kind: 'TypeReference', name: 'NativeModuleSchema', typeArguments: [] }
                ]
              }
            }]
          }
        }
      }]
    }
  }
};

test(`Test CodegenSchema.js`, () => {
  const inputPath = path.join(__dirname, `../../../../react-native/packages/react-native-codegen/src/CodegenSchema.js`);
  const flowSource = readFileSync(inputPath, { encoding: 'utf-8' });
  const flowAst = expectSingleResult(expectEOF(PROGRAM.parse(tokenizer.parse(flowSource))));

  // if the code is successfully parsed, test SchemaType
  const schemaTypeAst = flowAst.statements.filter((value: Statement) => {
    return value.kind === 'TypeAliasDecl' && value.name === 'SchemaType';
  })[0];

  assert.deepStrictEqual(schemaTypeAst, codegenSchemaLastStatement);
});
