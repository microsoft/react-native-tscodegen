// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
import { NativeModuleSchema, typeScriptParser } from 'react-native-tscodegen';
import { testCaseIndex } from './TestCaseIndex';

interface WritableNativeModuleSchema {
    excludedPlatforms: NativeModuleSchema['excludedPlatforms'];
}

testCaseIndex.modules.success.forEach((key: string) => {
    test(`module codegen (original): ${key}`, () => {
        const inputFile = path.join(__dirname, `../../src/inputs/modules_success/${key}.ts`);
        const snapshotFile = path.join(__dirname, `../../src/inputs/modules_success/${key}.json`);
        const schema = typeScriptParser.parseString(readFileSync(inputFile, { encoding: 'utf-8' }), 'NativeSampleTurboModule.ts');
        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));

        for (const moduleName of Object.keys(schema.modules)) {
            const nativeModule = schema.modules[moduleName];
            if (nativeModule.type === 'NativeModule') {
                if (nativeModule.excludedPlatforms === undefined) {
                    delete (<WritableNativeModuleSchema>nativeModule).excludedPlatforms;
                }
            }
        }
        assert.deepStrictEqual(schema, snapshot);
    });
});
