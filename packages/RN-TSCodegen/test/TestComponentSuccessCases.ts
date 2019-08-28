
import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
import { typeScriptToCodeSchema } from '../src';
import { testCaseIndex } from './TestCaseIndex';

testCaseIndex.components.success.forEach((key: string) => {
    test(`component codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/components_success/${key}.ts`);
        const snapshotFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/components_success/${key}.json`);
        const schema = typeScriptToCodeSchema(inputFile, 'Module');
        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
        assert.deepEqual(schema, snapshot);
    });
});
