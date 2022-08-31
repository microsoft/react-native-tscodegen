// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:no-unsafe-any
// tslint:disable:no-require-imports

import { SchemaType } from './CodegenSchema';

// Manually strong-typed from \react-native\packages\react-native-codegen\src\generators\RNCodegen.js

export type Options = Readonly<{
    libraryName: string;
    schema: SchemaType;
    outputDirectory: string;
    moduleSpecName: string;
}>;

export type Generators =
    | 'descriptors'
    | 'events'
    | 'props'
    | 'tests'
    | 'shadow-nodes'
    | 'modulesAndroid'
    | 'modulesCxx'
    | 'modulesIOS'
    ;

export type Config = Readonly<{
    generators: Generators[];
    test?: boolean;
}>;

type GeneratePrototype = (options: Options, config: Config) => boolean;

interface ParserModule {
    parseFile(filename: string): SchemaType;
    parseModuleFixture(filename: string): SchemaType;
    parseString(contents: string, filename: string): SchemaType;
}

export const generate = <GeneratePrototype>(require('./rncodegen/src/generators/RNCodegen.js').generate);
export const flowParser = <ParserModule>(require('./rncodegen/src/parsers/flow/index.js'));
export const typeScriptParser = <ParserModule>(require('./rncodegen/src/parsers/typescript/index.js'));
