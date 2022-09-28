// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
import { typeScriptParser } from 'react-native-tscodegen';
import { testCaseIndex } from './TestCaseIndex';

testCaseIndex.components.success.forEach((key: string) => {
    test(`component codegen (origin): ${key}`, () => {
        const inputFile = path.join(__dirname, `../../src/inputs/components_success/${key}.ts`);
        const snapshotFile = path.join(__dirname, `../../src/inputs/components_success/${key}.json`);
        const schema = typeScriptParser.parseString(readFileSync(inputFile, { encoding: 'utf-8' }), 'NativeSampleTurboModule.ts');
        for (const moduleName of Object.keys(schema.modules)) {
            const module = schema.modules[moduleName];
            if (module.type === 'Component') {
                for (const componentName of Object.keys(module.components)) {
                    const component = module.components[componentName];
                    delete (<{ state?: object }>component).state;
                }
            }
        }
        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
        assert.deepStrictEqual(schema, snapshot);
    });
});
