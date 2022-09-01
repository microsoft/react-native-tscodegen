// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
//import { typeScriptParser } from 'react-native-tscodegen';
import { typeScriptToCodeSchema } from 'react-native-tscodegen-parser';
import { testCaseIndex } from './TestCaseIndex';

testCaseIndex.components.success.forEach((key: string) => {
    test(`component codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../src/inputs/components_success/${key}.ts`);
        const snapshotFile = path.join(__dirname, `../../src/inputs/components_success/${key}.json`);
        const schema = typeScriptToCodeSchema(inputFile, 'Module');
        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
        assert.deepStrictEqual(schema, snapshot);
    });
});

//testCaseIndex.components.success.forEach((key: string) => {
//    test(`component codegen: ${key}`, () => {
//        const inputFile = path.join(__dirname, `../../src/inputs/components_success/${key}.ts`);
//        const snapshotFile = path.join(__dirname, `../../src/inputs/components_success/${key}.json`);
//        const schema = typeScriptParser.parseString(readFileSync(inputFile, { encoding: 'utf-8' }), 'NativeSampleTurboModule.ts');
//        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
//        assert.deepStrictEqual(schema, snapshot);
//    });
//});
