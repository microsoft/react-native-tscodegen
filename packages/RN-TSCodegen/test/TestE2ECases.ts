// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { existsSync, mkdirSync } from 'fs';
import * as path from 'path';
import { generate } from 'rn-codegen-backend';
import { typeScriptToCodeSchema } from '../src';
import { SchemaType } from '../src/CodegenSchema';
import { testCaseIndex } from './TestCaseIndex';

function generateFiles(libraryName: string, schema: SchemaType, category: string): void {
    const outputDirectory = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/${category}/output/${libraryName}/`);
    if (!existsSync(outputDirectory)) {
        mkdirSync(outputDirectory, { recursive: true });
    }

    generate(
        {
            libraryName,
            schema,
            outputDirectory,
            moduleSpecName: 'ModuleSpec'
        },
        {
            generators: ['descriptors', 'events', 'props', 'tests', 'shadow-nodes', 'modules']
        }
    );
}

testCaseIndex.e2e_components.success.forEach((key: string) => {
    test(`e2e components codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/e2e_components/${key}.ts`);
        const schema = typeScriptToCodeSchema(inputFile, 'E2EModule');
        generateFiles(key, schema, 'e2e_components');
    });
});

testCaseIndex.e2e_modules.success.forEach((key: string) => {
    test(`e2e modules codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../../RN-TSCodegen-Test/src/inputs/e2e_modules/${key}.ts`);
        const schema = typeScriptToCodeSchema(inputFile, 'E2ENativeModule');
        generateFiles(key, schema, 'e2e_modules');
    });
});
