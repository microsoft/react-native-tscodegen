// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as flow from '@react-native-tscodegen/minimum-flow-parser';
import * as fs from 'fs';
import * as path from 'path';
import { expectEOF, expectSingleResult } from 'typescript-parsec';
import { printTypeScript } from './PrintTS';

export function convertCodegenSchema(): void {
  const inputPath = path.join(__dirname, `../../../react-native/packages/react-native-codegen/src/CodegenSchema.js`);
  const outputPath = path.join(__dirname, `../../RN-TSCodegen/src/CodegenSchema.ts`);
  console.log(`Converting ${inputPath} ...`);

  const flowSourceCode = fs.readFileSync(inputPath, { encoding: 'utf-8' });
  const tsSourceCode = `
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from react-native/packages/react-native-codegen/src/CodegenSchema.js

${
    printTypeScript(
      expectSingleResult(expectEOF(flow.PROGRAM.parse(flow.tokenizer.parse(flowSourceCode)))),
      true,
      { useReactNull: false }
    )}`;
  fs.writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
}
