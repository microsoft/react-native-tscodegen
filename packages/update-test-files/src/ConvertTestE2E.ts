// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as flow from '@react-native-ts-codegen/minimum-flow-parser';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import * as path from 'path';
import { expectEOF, expectSingleResult } from 'typescript-parsec';
import { flowTestCaseToTypeScript } from './ConvertTestCase';

export function convertE2E(inputFolder: string, outputFolder: string): string[] {
    const result: string[] = [];
    for (const inputFile of readdirSync(inputFolder)) {
        const inputFilePath = path.join(inputFolder, inputFile);
        const key = path.basename(inputFile, '.js');
        result.push(key);

        const flowSourceCode = readFileSync(inputFilePath, { encoding: 'utf-8' });
        {
            const outputPath = path.join(outputFolder, inputFile);
            writeFileSync(
                outputPath,
                `
// Automatically copied from ${inputFile}
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)
${flowSourceCode}`,
                { encoding: 'utf-8' }
            );
        }
        {
            const outputPath = path.join(outputFolder, `${key}.ts`);
            const flowAst = expectSingleResult(expectEOF(flow.PROGRAM.parse(flow.tokenizer.parse(flowSourceCode))));
            const tsSourceCode = `
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from ${inputFile}
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

${flowTestCaseToTypeScript(flowAst, 'Others')}
`;
            writeFileSync(outputPath, tsSourceCode, { encoding: 'utf-8' });
        }
    }
    return result;
}
