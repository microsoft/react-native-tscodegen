// tslint:disable:max-line-length

import * as fs from 'fs';
import * as flow from 'minimum-flow-parser';
import * as path from 'path';
import { expectEOF, expectSingleResult } from 'ts-parsec';
import { printTypeScript } from './PrintTS';

const importMaps = {
  BubblingEventHandler: `import {BubblingEventHandler} from '../lib/CodegenTypes';`,
  DirectEventHandler: `import {DirectEventHandler} from '../lib/CodegenTypes';`,
  Float: `import {Float} from '../lib/CodegenTypes';`,
  Double: `import {Double} from '../lib/CodegenTypes';`,
  Int32: `import {Int32} from '../lib/CodegenTypes';`,
  NotString: `import {NotString} from '../lib/CodegenTypes';`,
  Stringish: `import {Stringish} from '../lib/CodegenTypes';`,
  ReactNull: `import {ReactNull} from '../lib/CodegenTypes';`,
  WithDefault: `import {WithDefault} from '../lib/CodegenTypes';`,
  React: `import * as React from '../lib/React';`,
  NativeComponent: `import {NativeComponent} from '../lib/codegenNativeComponent';`,
  codegenNativeComponent: `import codegenNativeComponent from '../lib/codegenNativeComponent';`,
  codegenNativeCommands: `import codegenNativeCommands from '../lib/codegenNativeCommands';`,
  TurboModule: `import {TurboModule} from '../lib/RCTExport'`,
  TurboModuleRegistry: `import * as TurboModuleRegistry from '../lib/TurboModuleRegistry';`
};

function flowToTs(flowSourceCode: string, importCodegenTypes: boolean, keyName?: string): string {
  let tsSourceCode = flowSourceCode
    .replace(/\$ReadOnly</g, `Readonly<`)                                                           // $ReadOnly<T> -> Readonly<T>
    .replace(/\$ReadOnlyArray</g, `ReadonlyArray<`)                                                 // $ReadOnlyArray<T> -> ReadonlyArray<T>
    .replace(/\{\|/g, `{`)                                                                          // {| ... |} -> { ... }
    .replace(/\|\}/g, `}`)                                                                          //
    .replace(/: \?/g, (importCodegenTypes ? `: ReactNull | ` : `: `))                               // ?T -> ReactNull | T
    .replace(/\+?([a-zA-Z_0-9$]+\??): ([^=]*?)(,|;)$/gm, '$1: $2;')                                 // {+a,b,c} -> {a; b; c;}
    .replace(/(\}?)>,$/gm, `$1>;`)                                                                  //
    .replace(/^(\s*)\+([a-zA-Z_0-9$]+\??):?(.*?)=>(.*?((void)|,|;|\{))/gm, '$1$2$3:$4')             //
    .replace(/\{(\s+)\.\.\.(\w+),/g, '$2 & {')                                                      // {...a, b; c;} -> a & {b; c;}
    .replace('): NativeComponent<ModuleProps>);', ') as NativeComponent<ModuleProps>);')            // export default ((...):NativeCoponent<T>); -> export default ((...) as NativeCoponent<T>);
    .replace(/const (\w+) = require\('(\.\.\/)?([^']+)'\);/g, `import $1 = require('../lib/$3');`)  // const NAME = require('MODULE'); -> import NAME = require('../lib/MODULE');
    .replace(/import type \{/g, 'import {')                                                         // import type {x} from 'MODULE'; -> import {x} from '../lib/MODULE';
    .replace(/from '(\.\.\/)?([^']+)';/g, `from '../lib/$2';`)                                      //
    .replace(/import [^']*?'.*?CodegenTypese?';/g, '')                                              // replace unnecessary imports
    .replace(/import [^']*?'.*?RCTExport?';/g, '')                                                  //
    .replace(/import [^']*?'.*?TurboModuleRegistry?';/g, '')                                        //
    .replace(/import [^']*?'.*?codegenNativeComponent?';/g, '')                                     //
    .replace(/import [^']*?'.*?codegenNativeComponent'\);/g, '')                                    //
    .replace(/import [^']*?'.*?codegenNativeCommands'\);/g, '')                                     //
    .replace(/<ModuleProps, Options>/g, '<ModuleProps>')                                            // ad-hoc fix mistakes in test cases
    .replace(/interfaceOnly: ([^;]+);/g, 'interfaceOnly: $1,')                                      //
    .replace(/paperComponentName: ([^;]+);/g, 'paperComponentName: $1,')                            //
    .replace(/paperComponentNameDeprecated: ([^;]+);/g, 'paperComponentNameDeprecated: $1,')        //
    .replace(/deprecatedViewConfigName: ([^;]+);/g, 'deprecatedViewConfigName: $1,')                //
    .replace(/\+getValueWithCallback: \(/g, 'getValueWithCallback: (')                              //
    .replace(/null;(\s+)'paper(\w+)EventDefinedInlineNullWithPaperName',/g, `null,$1'paper$2EventDefinedInlineNullWithPaperName'`)
    ;

  if (keyName === 'EVENTS_DEFINED_INLINE_WITH_ALL_TYPES') {
    tsSourceCode = tsSourceCode
      .replace(/^(\s+)\}>;$/gm, `$1}>`)
      .replace(/'paperDirectEventDefinedInlineWithPaperName',/g, `'paperDirectEventDefinedInlineWithPaperName'`)
      .replace(/\}>(\s+)'paperDirectEventDefinedInlineWithPaperName'/g, `}>,$1'paperDirectEventDefinedInlineWithPaperName'`)
      .replace(/\}>(\s+)'paperBubblingEventDefinedInlineWithPaperName'/g, `}>,$1'paperBubblingEventDefinedInlineWithPaperName'`)
      ;
  }

  let header = '';
  if (importCodegenTypes) {
    Object.keys(importMaps).forEach((key: string) => {
      if (tsSourceCode.match(new RegExp(`\\W${key}\\W`)) !== null) {
        header += `${importMaps[key]}\r`;
      }
    });
  }

  return header + tsSourceCode;
}

function convertCodegenSchema(): void {
  const inputPath = path.join(__dirname, `../../../react-native/packages/react-native-codegen/src/CodegenSchema.js`);
  const outputPath = path.join(__dirname, `../../RN-TSCodegen/src/CodegenSchema.ts`);
  console.log(`Converting ${inputPath} ...`);

  const flowSourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
  const tsSourceCode = `
// Automatically generated from react-native/packages/react-native-codegen/src/CodegenSchema.js

${
    printTypeScript(
      expectSingleResult(expectEOF(flow.PROGRAM.parse(flow.tokenizer.parse(flowSourceCode)))),
      true)
    }`;
  fs.writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
}

type TestCaseModule = { [key: string]: string };
type TestCaseSnapshot = { [key: string]: string };

function convertTestInput(inputJsPath: string, outputFolder: string, prefix: string): TestCaseModule {
  console.log(`Converting ${inputJsPath} ...`);

  const testCases = <TestCaseModule>require(inputJsPath);
  Object.keys(testCases).forEach((key: string) => {
    {
      const outputPath = path.join(outputFolder, `${prefix}${key}.flow.js`);
      const flowSourceCode = testCases[key];
      fs.writeFileSync(outputPath, flowSourceCode, { encoding: 'utf-8' });
    }
    {
      const outputPath = path.join(outputFolder, `${prefix}${key}.ts`);
      const flowSourceCode = testCases[key];
      const tsSourceCode = flowToTs(flowSourceCode, true, key);
      fs.writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
    }
  });

  return testCases;
}

function convertSuccessSnapshotContent(snapshotContent: string): string {
  const normalizedJson = snapshotContent
    .replace(/Object \{/g, '{')
    .replace(/Array \[/g, '[')
    ;

  return JSON.stringify(
    // tslint:disable-next-line:no-eval
    eval(`(${normalizedJson})`),
    undefined,
    2
  );
}

function convertFailureSnapshotContent(snapshotContent: string): string {
  return `{"error": ${snapshotContent}}`;
}

function convertTestOutput(inputSnapshotPath: string, outputFolder: string, category: string, successCases: TestCaseModule, failureCases: TestCaseModule): void {
  console.log(`Converting ${inputSnapshotPath} ...`);

  const successCasePrefix = `${category}_success_`;
  const failureCasePrefix = `${category}_failure_`;
  const successSnapshotPrefix = `RN Codegen Flow Parser can generate fixture `;
  const failureSnapshotPrefix = `RN Codegen Flow Parser Fails with error message `;
  const snapshot = <TestCaseSnapshot>(require(inputSnapshotPath));

  Object.keys(successCases).forEach((key: string) => {
    const outputPath = path.join(outputFolder, `${successCasePrefix}${key}.json`);
    const snapshotContent = snapshot[`${successSnapshotPrefix}${key} 1`];
    if (snapshotContent === undefined) {
      console.error(`ERROR: Cannot find snapshot for category "${category}" and success case "${key}".`);
    } else {
      fs.writeFileSync(outputPath, convertSuccessSnapshotContent(snapshotContent), { encoding: 'utf-8' });
    }
  });

  Object.keys(failureCases).forEach((key: string) => {
    const outputPath = path.join(outputFolder, `${failureCasePrefix}${key}.json`);
    const snapshotContent = snapshot[`${failureSnapshotPrefix}${key} 1`];
    if (snapshotContent === undefined) {
      console.error(`ERROR: Cannot find snapshot for category "${category}" and failure case "${key}".`);
    } else {
      fs.writeFileSync(outputPath, convertFailureSnapshotContent(snapshotContent), { encoding: 'utf-8' });
    }
  });
}

convertCodegenSchema();

const testCaseInputFolder = path.join(__dirname, `../../../react-native/packages/react-native-codegen/src/parsers/flow`);
const testCaseOutputFolder = path.join(__dirname, `../../RN-TSCodegen-Test/src/inputs`);
const csCases = convertTestInput(path.join(testCaseInputFolder, `./components/__test_fixtures__/fixtures.js`), testCaseOutputFolder, 'components_success_');
const cfCases = convertTestInput(path.join(testCaseInputFolder, `./components/__test_fixtures__/failures.js`), testCaseOutputFolder, 'components_failure_');
const msCases = convertTestInput(path.join(testCaseInputFolder, `./modules/__test_fixtures__/fixtures.js`), testCaseOutputFolder, 'modules_success_');
const mfCases = convertTestInput(path.join(testCaseInputFolder, `./modules/__test_fixtures__/failures.js`), testCaseOutputFolder, 'modules_failure_');
convertTestOutput(path.join(testCaseInputFolder, `./components/__tests__/__snapshots__/component-parser-test.js.snap`), testCaseOutputFolder, 'components', csCases, cfCases);
convertTestOutput(path.join(testCaseInputFolder, `./modules/__tests__/__snapshots__/module-parser-test.js.snap`), testCaseOutputFolder, 'modules', msCases, mfCases);

const testCaseIndex = {
  components: {
    success: Object.keys(csCases),
    failure: Object.keys(cfCases)
  },
  modules: {
    success: Object.keys(msCases),
    failure: Object.keys(mfCases)
  }
};
fs.writeFileSync(path.join(testCaseOutputFolder, `__index__.json`), JSON.stringify(testCaseIndex, undefined, 2), { encoding: 'utf-8' });
