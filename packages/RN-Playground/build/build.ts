// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { existsSync, mkdirSync } from 'fs';
import * as path from 'path';
import { generateNativeFiles, typeScriptToCodeSchema } from 'react-native-tscodegen';

console.log('After RN-TSCodegen becomes a cli tool, I will be deleted.');

const inputFile = path.join(__dirname, '../../src/turboModule.ts');
const outputDirectory = path.join(__dirname, '../cpp-generated/');
if (!existsSync(outputDirectory)) {
    mkdirSync(outputDirectory, { recursive: true });
}

const schema = typeScriptToCodeSchema(inputFile, 'PlaygroundModule');
generateNativeFiles(
    {
        libraryName: 'PlaygroundModule',
        schema,
        outputDirectory,
        moduleSpecName: 'PlaygroundModuleSpec'
    },
    {
        generators: ['descriptors', 'events', 'props', 'tests', 'shadow-nodes', 'modules']
    }
);
