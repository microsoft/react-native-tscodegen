// tslint:disable:max-line-length

import * as fs from 'fs';
import * as path from 'path';

function flowToTs(flowSourceCode: string): string {
  return `
${flowSourceCode
      .replace(/\$ReadOnly</g, `Readonly<`)                                                           // $ReadOnly<T> -> Readonly<T>
      .replace(/\$ReadOnlyArray</g, `ReadonlyArray<`)                                                 // $ReadOnlyArray<T> -> ReadonlyArray<T>
      .replace(/\{\|/g, `{`)                                                                          // {| ... |} -> { ... }
      .replace(/\|\}/g, `}`)                                                                          //
      .replace(/: \?/g, `: null | undefined | `)                                                      // ?T -> null | undefined | T
      .replace(/\+?([a-zA-Z_0-9$]+\??): ([^=]*?)(,|;)$/gm, '$1: $2;')                                 // {+a,b,c} -> {a; b; c;}
      .replace(/\}>,/g, `}>;`)                                                                        //
      .replace(/^(\s*)\+([a-zA-Z_0-9$]+\??):?(.*?)=>(.*?(,|;|\{))/gm, '$1$2$3:$4')                    //
      .replace(/\{(\s+)\.\.\.(\w+),/g, '$2 & {')                                                      // {...a, b; c;} -> a & {b; c;}
      .replace(/const (\w+) = require\('(\.\.\/)?([^']+)'\);/g, `import $1 = require('../lib/$3');`)  // const NAME = require('MODULE'); -> import NAME = require('../lib/MODULE');
      .replace(/import type \{/g, 'import {')                                                         // import type {x} from 'MODULE'; -> import {x} from '../lib/MODULE';
      .replace(/from '(\.\.\/)?([^']+)';/g, `from '../lib/$2';`)                                      //
    }`;
}

function convertCodegenSchema(): void {
  const inputPath = path.join(__dirname, `../../../react-native/packages/react-native-codegen/src/CodegenSchema.js`);
  const outputPath = path.join(__dirname, `../../RN-TSCodegen/src/CodegenSchema.ts`);
  console.log(`Converting ${inputPath} ...`);

  const flowSourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
  const tsSourceCode = flowToTs(flowSourceCode);
  fs.writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
}

type TestCaseModule = { [key: string]: string };

function convertTestInput(inputJsPath: string, outputFolder: string, prefix: string): TestCaseModule {
  console.log(`Converting ${inputJsPath} ...`);

  const testCases = <TestCaseModule>require(inputJsPath);
  Object.keys(testCases).forEach((key: string) => {
    const outputPath = path.join(outputFolder, `${prefix}${key}.ts`);
    const flowSourceCode = testCases[key];
    const tsSourceCode = flowToTs(flowSourceCode);
    fs.writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
  });

  return testCases;
}

convertCodegenSchema();

const testCaseInputFolder = path.join(__dirname, `../../../react-native/packages/react-native-codegen/src/parsers/flow`);
const testCaseOutputFolder = path.join(__dirname, `../../RN-TSCodegen-Test/src/inputs`);
convertTestInput(path.join(testCaseInputFolder, `./components/__test_fixtures__/fixtures.js`), testCaseOutputFolder, 'components_success_');
convertTestInput(path.join(testCaseInputFolder, `./components/__test_fixtures__/failures.js`), testCaseOutputFolder, 'components_failure_');
convertTestInput(path.join(testCaseInputFolder, `./modules/__test_fixtures__/fixtures.js`), testCaseOutputFolder, 'modules_success_');
convertTestInput(path.join(testCaseInputFolder, `./modules/__test_fixtures__/failures.js`), testCaseOutputFolder, 'modules_failure_');
