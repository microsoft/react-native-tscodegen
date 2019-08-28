
import * as path from 'path';
import { typeScriptToCodeSchema } from '../src';
import { testCaseIndex } from './TestCaseIndex';

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
