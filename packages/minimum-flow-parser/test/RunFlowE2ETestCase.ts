// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { readdirSync, readFileSync } from 'fs';
import * as path from 'path';
import { expectEOF, expectSingleResult } from 'typescript-parsec';
import { PROGRAM, tokenizer } from '../src/index';

const testE2EInputFolder = path.join(__dirname, `../../../../react-native/packages/react-native-codegen/e2e/__test_fixtures__`);
export function testAgainE2ETestCases(inputFolderName: string): void {
    const inputFolder = path.join(testE2EInputFolder, `./${inputFolderName}`);
    for (const file of readdirSync(inputFolder)) {
        test(`Test e2e ${path.basename(inputFolder)}: ${file}`, () => {
            const flowSourceCode = readFileSync(path.join(inputFolder, file), { encoding: 'utf-8' });
            expectSingleResult(expectEOF(PROGRAM.parse(tokenizer.parse(flowSourceCode))));
        });
    }
}
