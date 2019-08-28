import * as fs from 'fs';
import * as flow from 'minimum-flow-parser';
import * as path from 'path';
import { expectEOF, expectSingleResult } from 'ts-parsec';
import { printTypeScript } from './PrintTS';

export function convertCodegenSchema(): void {
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
