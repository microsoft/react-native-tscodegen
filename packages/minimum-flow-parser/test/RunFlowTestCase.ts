// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as path from 'path';
import { expectEOF, expectSingleResult } from 'typescript-parsec';
import { PROGRAM, tokenizer } from '../src/index';

const testCaseInputFolder = path.join(__dirname, `../../../../react-native/packages/react-native-codegen/src/parsers/flow`);
export function testAgainstFlowTestCases(snapshotPath: string, category: string): void {
  const testCases = <{ [key: string]: string }>(require(path.join(testCaseInputFolder, snapshotPath)));
  Object.keys(testCases).forEach((key: string) => {
    test(`Test ${category}: ${key}`, () => {
      expectSingleResult(expectEOF(PROGRAM.parse(tokenizer.parse(testCases[key]))));
    });
  });
}
