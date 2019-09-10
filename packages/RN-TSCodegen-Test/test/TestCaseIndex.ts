// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { readFileSync } from 'fs';
import * as path from 'path';

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

export const testCaseIndex = <TestCaseIndex>JSON.parse(readFileSync(
    path.join(__dirname, '../../src/inputs/__index__.json'),
    { encoding: 'utf-8' }
));
