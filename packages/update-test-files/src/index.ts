// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as fs from 'fs';
import * as path from 'path';
import { convertCodegenSchema } from './ConvertCodegenSchema';
import { convertE2E } from './ConvertTestE2E';
import { convertTestInput, convertTestOutput } from './ConvertTestInoutOutput';

convertCodegenSchema();

const testCaseInputFolder = path.join(__dirname, `../../../react-native/packages/react-native-codegen/src/parsers/flow`);
const testCaseOutputFolder = path.join(__dirname, `../../RN-TSCodegen-Test/src/inputs`);
const csCases = convertTestInput(testCaseInputFolder, `./components/__test_fixtures__/fixtures.js`, testCaseOutputFolder, 'components_success', 'ComponentSuccess');
const cfCases = convertTestInput(testCaseInputFolder, `./components/__test_fixtures__/failures.js`, testCaseOutputFolder, 'components_failure', 'Others');
const msCases = convertTestInput(testCaseInputFolder, `./modules/__test_fixtures__/fixtures.js`, testCaseOutputFolder, 'modules_success', 'ModuleSuccess');
const mfCases = convertTestInput(testCaseInputFolder, `./modules/__test_fixtures__/failures.js`, testCaseOutputFolder, 'modules_failure', 'Others');
convertTestOutput(path.join(testCaseInputFolder, `./components/__tests__/__snapshots__/component-parser-test.js.snap`), testCaseOutputFolder, 'components', csCases, cfCases);
convertTestOutput(path.join(testCaseInputFolder, `./modules/__tests__/__snapshots__/module-parser-snapshot-test.js.snap`), testCaseOutputFolder, 'modules', msCases, mfCases);

const testE2EInputFolder = path.join(__dirname, `../../../react-native/packages/react-native-codegen/e2e/__test_fixtures__`);
const testE2EOutputFolder = path.join(__dirname, `../../RN-TSCodegen-Test/src/inputs`);
const e2eC = convertE2E(path.join(testE2EInputFolder, `./components`), path.join(testE2EOutputFolder, `./e2e_components`));
const e2eM = convertE2E(path.join(testE2EInputFolder, `./modules`), path.join(testE2EOutputFolder, `./e2e_modules`));

const testCaseIndex = {
  components: {
    success: Object.keys(csCases),
    failure: Object.keys(cfCases)
  },
  modules: {
    success: Object.keys(msCases),
    failure: Object.keys(mfCases)
  },
  e2e_components: {
    success: e2eC,
    failure: []
  },
  e2e_modules: {
    success: e2eM,
    failure: []
  }
};
fs.writeFileSync(path.join(testCaseOutputFolder, `__index__.json`), JSON.stringify(testCaseIndex, undefined, 2), { encoding: 'utf-8' });
