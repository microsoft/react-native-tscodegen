// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
import { typeScriptParser } from 'react-native-tscodegen';
import { typeScriptToCodeSchema } from 'react-native-tscodegen-parser';
import { testCaseIndex } from './TestCaseIndex';

testCaseIndex.modules.success.forEach((key: string) => {
    test(`module codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../src/inputs/modules_success/${key}.ts`);
        const snapshotFile = path.join(__dirname, `../../src/inputs/modules_success/${key}.json`);
        const schema = typeScriptToCodeSchema(inputFile, 'NativeSampleTurboModule', 'SampleTurboModule');
        const schema2 = typeScriptParser.parseString(readFileSync(inputFile, { encoding: 'utf-8' }), 'NativeSampleTurboModule.ts');
        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
        assert.deepStrictEqual(schema, snapshot);
        assert.deepStrictEqual(schema2, snapshot);
    });
});

//testCaseIndex.modules.success.forEach((key: string) => {
//    test(`module codegen (original): ${key}`, () => {
//        const inputFile = path.join(__dirname, `../../src/inputs/modules_success/${key}.ts`);
//        const snapshotFile = path.join(__dirname, `../../src/inputs/modules_success/${key}.json`);
//        const schema = typeScriptParser.parseString(readFileSync(inputFile, { encoding: 'utf-8' }), 'NativeSampleTurboModule.ts');
//        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
//        assert.deepStrictEqual(schema, snapshot);
//    });
//});
