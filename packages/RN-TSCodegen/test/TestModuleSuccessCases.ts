// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
import { typeScriptToCodeSchema } from '../src';
import { testCaseIndex } from './TestCaseIndex';

testCaseIndex.modules.success.forEach((key: string) => {
    test(`module codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/modules_success/${key}.ts`);
        const snapshotFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/modules_success/${key}.json`);
        const schema = typeScriptToCodeSchema(inputFile, 'NativeSampleTurboModule', 'SampleTurboModule');
        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
        assert.deepEqual(schema, snapshot);
    });
});
