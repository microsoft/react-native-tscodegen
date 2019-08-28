
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
    e2e_components: TestCaseCategory;
    e2e_modules: TestCaseCategory;
}

const testCaseIndex = <TestCaseIndex>JSON.parse(readFileSync(
    path.join(__dirname, '../../../RN-TSCodegen-Test/src/inputs/__index__.json'),
    { encoding: 'utf-8' }
));

testCaseIndex.components.success.forEach((key: string) => {
    test(`component codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/components_success/${key}.ts`);
        const snapshotFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/components_success/${key}.json`);
        const schema = typeScriptToCodeSchema(inputFile, 'Module');
        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
        assert.deepEqual(schema, snapshot);
    });
});

testCaseIndex.modules.success.forEach((key: string) => {
    test(`module codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/modules_success/${key}.ts`);
        const snapshotFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/modules_success/${key}.json`);
        const schema = typeScriptToCodeSchema(inputFile, 'NativeSampleTurboModule', 'SampleTurboModule');
        const snapshot = JSON.parse(readFileSync(snapshotFile, { encoding: 'utf-8' }));
        assert.deepEqual(schema, snapshot);
    });
});

testCaseIndex.e2e_components.success.forEach((key: string) => {
    test(`e2e components codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/e2e_components/${key}.ts`);
        typeScriptToCodeSchema(inputFile, 'E2EModule');
    });
});

testCaseIndex.e2e_modules.success.forEach((key: string) => {
    test(`e2e modules codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/e2e_modules/${key}.ts`);
        typeScriptToCodeSchema(inputFile, 'E2ENativeModule');
    });
});
