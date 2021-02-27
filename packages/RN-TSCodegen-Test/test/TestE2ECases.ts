// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { existsSync, mkdirSync } from 'fs';
import * as path from 'path';
import { generator, SchemaType, typeScriptToCodeSchema } from 'react-native-tscodegen';
import { testCaseIndex } from './TestCaseIndex';

function generateFiles(libraryName: string, schema: SchemaType, category: string): void {
    const outputDirectory = path.join(__dirname, `../../src/inputs/${category}/output/${libraryName}/`);
    if (!existsSync(outputDirectory)) {
        mkdirSync(outputDirectory, { recursive: true });
    }

    generator.generate(
        {
            libraryName,
            schema,
            outputDirectory,
            moduleSpecName: 'ModuleSpec'
        },
        {
            generators: ['descriptors', 'events', 'props', 'tests', 'shadow-nodes', 'modulesAndroid', 'modulesCxx', 'modulesIOS']
        }
    );
}

testCaseIndex.e2e_components.success.forEach((key: string) => {
    test(`e2e components codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../src/inputs/e2e_components/${key}.ts`);
        const schema = typeScriptToCodeSchema(inputFile, 'E2EModule');
        generateFiles(key, schema, 'e2e_components');
    });
});

testCaseIndex.e2e_modules.success.forEach((key: string) => {
    test(`e2e modules codegen: ${key}`, () => {
        const inputFile = path.join(__dirname, `../../src/inputs/e2e_modules/${key}.ts`);
        const schema = typeScriptToCodeSchema(inputFile, 'E2ENativeModule');
        generateFiles(key, schema, 'e2e_modules');
    });
});
