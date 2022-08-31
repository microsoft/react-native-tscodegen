// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export * from './CodegenSchema';
import * as rncodegen from './ExportRNCodegen';

export import flowParser = rncodegen.flowParser;
export import typeScriptParser = rncodegen.typeScriptParser;

export namespace generator {
    export import generate = rncodegen.generate;
    export import Config = rncodegen.Config;
    export import Generators = rncodegen.Generators;
    export import Options = rncodegen.Options;
}
