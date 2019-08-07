
import * as assert from 'assert';
import { readFileSync } from 'fs';
import * as path from 'path';

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
        assert.deepStrictEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
    });
});
