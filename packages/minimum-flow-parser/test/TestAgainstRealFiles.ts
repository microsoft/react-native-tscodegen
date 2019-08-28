import * as assert from 'assert';
import { readdirSync, readFileSync } from 'fs';
import * as path from 'path';
import { expectEOF, expectSingleResult } from 'ts-parsec';
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
      isExact: true,
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
              keyName: 'module',
              keyType: { kind: 'PrimitiveType', name: 'string' },
              valueType: {
                kind: 'DecoratedGenericType',
                name: '$ReadOnly',
                elementType: {
                  kind: 'ObjectType',
                  isExact: true,
                  mixinTypes: [],
                  members: [{
                    kind: 'Prop',
                    isReadonly: false,
                    isOptional: true,
                    name: 'components',
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
                          keyName: 'component',
                          keyType: { kind: 'PrimitiveType', name: 'string' },
                          valueType: { kind: 'TypeReference', name: 'ComponentShape', typeArguments: [] }
                        }]
                      }
                    }
                  },
                  {
                    kind: 'Prop',
                    isReadonly: false,
                    isOptional: true,
                    name: 'nativeModules',
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
                          keyName: 'nativeModule',
                          keyType: { kind: 'PrimitiveType', name: 'string' },
                          valueType: { kind: 'TypeReference', name: 'NativeModuleShape', typeArguments: [] }
                        }]
                      }
                    }
                  }]
                }
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

  // if the code is successfully parsed, pick one random thing to compare
  const schemaTypeAst = flowAst.statements.filter((value: Statement) => {
    return value.kind === 'TypeAliasDecl' && value.name === 'SchemaType';
  })[0];

  assert.deepStrictEqual(schemaTypeAst, codegenSchemaLastStatement);
});

function testAgainstFlowTestCases(snapshotPath: string, category: string): void {
  const testCases = <{ [key: string]: string }>(require(snapshotPath));
  Object.keys(testCases).forEach((key: string) => {
    test(`Test ${category}: ${key}`, () => {
      expectSingleResult(expectEOF(PROGRAM.parse(tokenizer.parse(testCases[key]))));
    });
  });
}

const testCaseInputFolder = path.join(__dirname, `../../../../react-native/packages/react-native-codegen/src/parsers/flow`);
testAgainstFlowTestCases(path.join(testCaseInputFolder, `./components/__test_fixtures__/fixtures.js`), 'components_success');
testAgainstFlowTestCases(path.join(testCaseInputFolder, `./components/__test_fixtures__/failures.js`), 'components_failure');
testAgainstFlowTestCases(path.join(testCaseInputFolder, `./modules/__test_fixtures__/fixtures.js`), 'modules_success');
testAgainstFlowTestCases(path.join(testCaseInputFolder, `./modules/__test_fixtures__/failures.js`), 'modules_failure');

function testAgainE2ETestCases(inputFolder: string): void {
  for (const file of readdirSync(inputFolder)) {
    test(`Test e2e ${path.basename(inputFolder)}: ${file}`, () => {
      const flowSourceCode = readFileSync(path.join(inputFolder, file), { encoding: 'utf-8' });
      expectSingleResult(expectEOF(PROGRAM.parse(tokenizer.parse(flowSourceCode))));
    });
  }
}

const testE2EInputFolder = path.join(__dirname, `../../../../react-native/packages/react-native-codegen/e2e/__test_fixtures__`);
testAgainE2ETestCases(path.join(testE2EInputFolder, `./components`));
testAgainE2ETestCases(path.join(testE2EInputFolder, `./modules`));
