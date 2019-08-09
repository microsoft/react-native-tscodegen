
import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';
import { typeScriptToCodeSchema } from '../src';

interface TestCaseCategory {
    success: string[];
    failure: string[];
}

interface TestCaseIndex {
    components: TestCaseCategory;
    modules: TestCaseCategory;
}

const testCaseIndex = <TestCaseIndex>JSON.parse(readFileSync(
    path.join(__dirname, '../../../RN-TSCodegen-Test/src/inputs/__index__.json'),
    { encoding: 'utf-8' }
));

testCaseIndex.components.success.forEach((key: string) => {
    test(`component codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/components_success_${key}.ts`);
        const snapshotFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/components_success_${key}.json`);
        const schema = typeScriptToCodeSchema(inputFile);
        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
        assert.deepEqual(schema, snapshot);
    });
});
