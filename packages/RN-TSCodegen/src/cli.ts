// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { existsSync, mkdirSync, readFileSync } from 'fs';
import { generator, typeScriptToCodeSchema } from './index';

try {
    if (process.argv.length !== 3) {
        throw new Error(`Incorrect arguments:${JSON.stringify(process.argv)}\nUsage: react-native-tscodegen <INPUT-JSON-PATH>`);
    }

    if (!existsSync(process.argv[2])) {
        throw new Error(`Configuration file not exist: ${process.argv[2]}.`);
    }

    interface ConfigJson {
        libraryName: string;
        outputDirectory: string;
        moduleSpecName: string;
        generators: generator.Generators[];
        inputFile: string;
    }

    const allGenerators: generator.Generators[] = [
        'descriptors',
        'events',
        'props',
        'tests',
        'shadow-nodes',
        'modules'
    ];

    const config = <ConfigJson>JSON.parse(readFileSync(process.argv[2], { encoding: 'utf-8' }));
    if (typeof config.libraryName !== 'string') {
        throw new Error('Property "libraryName" does not exist or is not a string.');
    }
    if (typeof config.outputDirectory !== 'string') {
        throw new Error('Property "outputDirectory" does not exist or is not a string.');
    }
    if (typeof config.moduleSpecName !== 'string') {
        throw new Error('Property "moduleSpecName" does not exist or is not a string.');
    }

    if (config.generators === undefined) {
        config.generators = allGenerators;
    } else if (!(config.generators instanceof Array)) {
        throw new Error('Property "generators" does not exist or is not a string array.');
    } else {
        for (const value of config.generators) {
            if (typeof value !== 'string') {
                throw new Error('Property "generators" does not exist or is not a string array.');
            }
            if (!allGenerators.includes(value)) {
                throw new Error(`Value ${value} found in property "generators" is not one of ${JSON.stringify(allGenerators)}.`);
            }
        }
    }

    if (typeof config.inputFile !== 'string') {
        throw new Error('Property "inputFile" does not exist or is not a string.');
    } else if (!existsSync(config.inputFile)) {
        throw new Error(`Input file not exist: ${config.inputFile}.`);
    }

    if (!existsSync(config.outputDirectory)) {
        mkdirSync(config.outputDirectory, { recursive: true });
    }

    const schema = typeScriptToCodeSchema(config.inputFile, config.libraryName);
    generator.generate(
        {
            libraryName: config.libraryName,
            schema,
            outputDirectory: config.outputDirectory,
            moduleSpecName: config.moduleSpecName
        },
        {
            generators: config.generators
        }
    );

} catch (err) {
    if (err instanceof Error) {
        console.error(err.message);
        process.exitCode = 1;
    } else {
        throw err;
    }
}
