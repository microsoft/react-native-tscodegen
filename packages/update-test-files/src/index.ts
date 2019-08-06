// tslint:disable:max-line-length

import * as fs from 'fs';
import * as path from 'path';

const importMaps = {
  BubblingEventHandler: `import {BubblingEventHandler} from '../lib/CodegenTypes';`,
  DirectEventHandler: `import {DirectEventHandler} from '../lib/CodegenTypes';`,
  Float: `import {Float} from '../lib/CodegenTypes';`,
  Int32: `import {Int32} from '../lib/CodegenTypes';`,
  NotString: `import {NotString} from '../lib/CodegenTypes';`,
  Stringish: `import {Stringish} from '../lib/CodegenTypes';`,
  WithDefault: `import {WithDefault} from '../lib/CodegenTypes';`,
  React: `import * as React from '../lib/React';`,
  codegenNativeComponent: `import codegenNativeComponent = require('../lib/codegenNativeComponent');`,
  codegenNativeCommands: `import codegenNativeCommands = require('../lib/codegenNativeCommands');`,
  TurboModule: `import {TurboModule} from '../lib/RCTExport'`,
  TurboModuleRegistry: `import * as TurboModuleRegistry from '../lib/TurboModuleRegistry';`
};

function flowToTs(flowSourceCode: string, importCodegenTypes: boolean): string {
  const tsSourceCode = `
${flowSourceCode
      .replace(/\$ReadOnly</g, `Readonly<`)                                                           // $ReadOnly<T> -> Readonly<T>
      .replace(/\$ReadOnlyArray</g, `ReadonlyArray<`)                                                 // $ReadOnlyArray<T> -> ReadonlyArray<T>
      .replace(/\{\|/g, `{`)                                                                          // {| ... |} -> { ... }
      .replace(/\|\}/g, `}`)                                                                          //
      .replace(/: \?/g, `: null | undefined | `)                                                      // ?T -> null | undefined | T
      .replace(/\+?([a-zA-Z_0-9$]+\??): ([^=]*?)(,|;)$/gm, '$1: $2;')                                 // {+a,b,c} -> {a; b; c;}
      .replace(/(\}?)>,$/gm, `$1>;`)                                                                  //
      .replace(/^(\s*)\+([a-zA-Z_0-9$]+\??):?(.*?)=>(.*?((void)|,|;|\{))/gm, '$1$2$3:$4')             //
      .replace(/\{(\s+)\.\.\.(\w+),/g, '$2 & {')                                                      // {...a, b; c;} -> a & {b; c;}
      .replace(/const (\w+) = require\('(\.\.\/)?([^']+)'\);/g, `import $1 = require('../lib/$3');`)  // const NAME = require('MODULE'); -> import NAME = require('../lib/MODULE');
      .replace(/import type \{/g, 'import {')                                                         // import type {x} from 'MODULE'; -> import {x} from '../lib/MODULE';
      .replace(/from '(\.\.\/)?([^']+)';/g, `from '../lib/$2';`)                                      //
      .replace(/([^a-zA-Z'])Array([^<])/g, '$1Array<any>$2')                                          // Array -> Array<any>
      .replace(/([^a-zA-Z'])Promise([^<])/g, '$1Promise<any>$2')                                      // Promise -> Promise<any>
      .replace(/import [^']*?'.*?CodegenTypese?';/g, '')                                              // replace unnecessary imports
      .replace(/import [^']*?'.*?RCTExport?';/g, '')                                                  //
      .replace(/import [^']*?'.*?TurboModuleRegistry?';/g, '')                                        //
      .replace(/import [^']*?'.*?codegenNativeComponent'\);/g, '')                                    //
      .replace(/import [^']*?'.*?codegenNativeCommands'\);/g, '')                                     //
      .replace(/<ModuleProps, Options>/g, '<ModuleProps>')                                            // ad-hoc fix mistakes in test cases
      .replace(/interfaceOnly: ([^;]+);/g, 'interfaceOnly: $1,')                                      //
      .replace(/paperComponentName: ([^;]+);/g, 'paperComponentName: $1,')                            //
      .replace(/paperComponentNameDeprecated: ([^;]+);/g, 'paperComponentNameDeprecated: $1,')        //
      .replace(/deprecatedViewConfigName: ([^;]+);/g, 'deprecatedViewConfigName: $1,')                //
      .replace(/\+getValueWithCallback: \(/g, 'getValueWithCallback: (')                              //
      .replace(/null;(\s+)'paper(\w+)EventDefinedInlineNullWithPaperName',/g, `null,$1'paper$2EventDefinedInlineNullWithPaperName'`)
    }`;

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
  const tsSourceCode = flowToTs(flowSourceCode, false);
  fs.writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
}

type TestCaseModule = { [key: string]: string };

function convertTestInput(inputJsPath: string, outputFolder: string, prefix: string): TestCaseModule {
  console.log(`Converting ${inputJsPath} ...`);

  const testCases = <TestCaseModule>require(inputJsPath);
  Object.keys(testCases).forEach((key: string) => {
    const outputPath = path.join(outputFolder, `${prefix}${key}.ts`);
    const flowSourceCode = testCases[key];
    const tsSourceCode = flowToTs(flowSourceCode, true);
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
