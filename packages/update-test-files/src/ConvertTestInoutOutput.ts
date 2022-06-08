// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/* tslint:disable:no-eval */

import { writeFileSync } from 'fs';
import * as flow from '@react-native-tscodegen/minimum-flow-parser';
import * as path from 'path';
import { expectEOF, expectSingleResult } from 'typescript-parsec';
import { flowTestCaseToTypeScript } from './ConvertTestCase';

type TestCaseModule = { [key: string]: string };
type TestCaseSnapshot = { [key: string]: string };

export function convertTestInput(inputFolder: string, inputPath: string, outputFolder: string, category: string): TestCaseModule {
  const inputJsPath = path.join(inputFolder, inputPath);
  console.log(`Converting ${inputJsPath} ...`);

  const testCases = <TestCaseModule>require(inputJsPath);
  Object.keys(testCases).forEach((key: string) => {
    const flowSourceCode = testCases[key];
    {
      const outputPath = path.join(outputFolder, `${category}/${key}.flow.js`);
      writeFileSync(
        outputPath,
        `
// Automatically copied from ${inputPath.substr(2)}
// (/react-native/packages/react-native-codegen/src/parsers/flow)
${flowSourceCode}`,
        { encoding: 'utf-8' }
      );
    }
    {
      const outputPath = path.join(outputFolder, `${category}/${key}.ts`);
      const flowAst = expectSingleResult(expectEOF(flow.PROGRAM.parse(flow.tokenizer.parse(flowSourceCode))));
      const tsSourceCode = `
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from ${category}/${key}.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow${inputPath.substr(1)})

${flowTestCaseToTypeScript(flowAst, key)}
`;
      writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
    }
  });

  return testCases;
}

function convertSuccessSnapshotContent(snapshotContent: string): string {
  const normalizedJson = snapshotContent
    .replace(/Object \{/g, '{')
    .replace(/Array \[/g, '[')
    .replace(/"\{/g, '{')
    .replace(/\}"/g, '}')
    ;

  return JSON.stringify(
    eval(`(${normalizedJson})`),
    undefined,
    2
  );
}

function convertFailureSnapshotContent(snapshotContent: string): string {
  return `{"error": ${snapshotContent}}`;
}

export function convertTestOutput(inputSnapshotPath: string, outputFolder: string, category: string, successCases: TestCaseModule, failureCases: TestCaseModule): void {
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
      writeFileSync(outputPath, convertSuccessSnapshotContent(snapshotContent), { encoding: 'utf-8' });
    }
  });

  Object.keys(failureCases).forEach((key: string) => {
    const outputPath = path.join(outputFolder, `${failureCategory}/${key}.json`);
    const snapshotContent = snapshot[`${failureSnapshotPrefix}${key} 1`];
    if (snapshotContent === undefined) {
      console.error(`ERROR: Cannot find snapshot for category "${category}" and failure case "${key}".`);
    } else {
      writeFileSync(outputPath, convertFailureSnapshotContent(snapshotContent), { encoding: 'utf-8' });
    }
  });
}
