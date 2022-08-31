// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export * from './CodegenSchema';
import * as rncodegen from './ExportRNCodegen';

export namespace generator {
    export import generate = rncodegen.generate;
    export import flowParser = rncodegen.flowParser;
    export import typescriptParser = rncodegen.typescriptParser;
    export import Config = rncodegen.Config;
    export import Generators = rncodegen.Generators;
    export import Options = rncodegen.Options;
}
