// tslint:disable:max-line-length

import * as fs from 'fs';
import * as flow from 'minimum-flow-parser';
import * as path from 'path';
import { expectEOF, expectSingleResult } from 'ts-parsec';
import { fixTestCase } from './FixTestCase';
import { printTypeScript } from './PrintTS';

const importMaps = {
  BubblingEventHandler: `import {BubblingEventHandler} from '../../lib/CodegenTypes';`,
  DirectEventHandler: `import {DirectEventHandler} from '../../lib/CodegenTypes';`,
  Float: `import {Float} from '../../lib/CodegenTypes';`,
  Double: `import {Double} from '../../lib/CodegenTypes';`,
  Int32: `import {Int32} from '../../lib/CodegenTypes';`,
  NotString: `import {NotString} from '../../lib/CodegenTypes';`,
  Stringish: `import {Stringish} from '../../lib/CodegenTypes';`,
  ReactNull: `import {ReactNull} from '../../lib/CodegenTypes';`,
  WithDefault: `import {WithDefault} from '../../lib/CodegenTypes';`,
  React: `import * as React from '../../lib/React';`,
  NativeComponent: `import {NativeComponent} from '../../lib/codegenNativeComponent';`,
  codegenNativeComponent: `import codegenNativeComponent from '../../lib/codegenNativeComponent';`,
  codegenNativeCommands: `import codegenNativeCommands from '../../lib/codegenNativeCommands';`,
  TurboModule: `import {TurboModule} from '../../lib/RCTExport'`,
  TurboModuleRegistry: `import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';`
};

function flowTestCaseToTypeScript(program: flow.FlowProgram, keyName?: string): string {
  fixTestCase(program);
  const tsSourceCode = printTypeScript(program, false, { useReactNull: true });

  let header = '';
  Object.keys(importMaps).forEach((key: string) => {
    if (tsSourceCode.match(new RegExp(`\\W${key}\\W`)) !== null) {
      header += `${importMaps[key]}\r\n`;
    }
  });

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
      true,
      { useReactNull: false }
    )}`;
  fs.writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
}

type TestCaseModule = { [key: string]: string };
type TestCaseSnapshot = { [key: string]: string };

function convertTestInput(inputFolder: string, inputPath: string, outputFolder: string, category: string): TestCaseModule {
  const inputJsPath = path.join(inputFolder, inputPath);
  console.log(`Converting ${inputJsPath} ...`);

  const testCases = <TestCaseModule>require(inputJsPath);
  Object.keys(testCases).forEach((key: string) => {
    const flowSourceCode = testCases[key];
    {
      const outputPath = path.join(outputFolder, `${category}/${key}.flow.js`);
      fs.writeFileSync(outputPath, flowSourceCode, { encoding: 'utf-8' });
    }
    {
      const outputPath = path.join(outputFolder, `${category}/${key}.ts`);
      const flowAst = expectSingleResult(expectEOF(flow.PROGRAM.parse(flow.tokenizer.parse(flowSourceCode))));
      const tsSourceCode = `
// Automatically generated from ${category}/${key}.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow${inputPath.substr(1)})

${flowTestCaseToTypeScript(flowAst, key)}
`;
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

  const successCategory = `${category}_success/`;
  const failureCategory = `${category}_failure/`;
  const successSnapshotPrefix = `RN Codegen Flow Parser can generate fixture `;
  const failureSnapshotPrefix = `RN Codegen Flow Parser Fails with error message `;
  const snapshot = <TestCaseSnapshot>(require(inputSnapshotPath));

  Object.keys(successCases).forEach((key: string) => {
    const outputPath = path.join(outputFolder, `${successCategory}/${key}.json`);
    const snapshotContent = snapshot[`${successSnapshotPrefix}${key} 1`];
    if (snapshotContent === undefined) {
      console.error(`ERROR: Cannot find snapshot for category "${category}" and success case "${key}".`);
    } else {
      fs.writeFileSync(outputPath, convertSuccessSnapshotContent(snapshotContent), { encoding: 'utf-8' });
    }
  });

  Object.keys(failureCases).forEach((key: string) => {
    const outputPath = path.join(outputFolder, `${failureCategory}/${key}.json`);
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
const csCases = convertTestInput(testCaseInputFolder, `./components/__test_fixtures__/fixtures.js`, testCaseOutputFolder, 'components_success');
const cfCases = convertTestInput(testCaseInputFolder, `./components/__test_fixtures__/failures.js`, testCaseOutputFolder, 'components_failure');
const msCases = convertTestInput(testCaseInputFolder, `./modules/__test_fixtures__/fixtures.js`, testCaseOutputFolder, 'modules_success');
const mfCases = convertTestInput(testCaseInputFolder, `./modules/__test_fixtures__/failures.js`, testCaseOutputFolder, 'modules_failure');
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
