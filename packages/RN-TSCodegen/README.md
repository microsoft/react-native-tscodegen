# Welcome to react-native-tscodegen (alpha)!

This library enable people to write react-native Turbo Module in TypeScript, and generate native code in C++, Objective C++ and Java!

## Authoring a Turbo Module

At this moment, the new Turbo Module API is not published by Facebook,
you need npm package `react-native-tscodegen-types` to access these new APIs.
Here is an example of a very simple Turbo Module TypeScript file:

```typescript
import { TurboModule, TurboModuleRegistry } from 'react-native-tscodegen-types';

export interface Spec extends TurboModule {
  getHello(name: string): string;
}

// tslint:disable-next-line
export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);
```

## Code generation

In order to do code generation, you need an extra JSON file for this TypeScript file.
They are one-to-one mapping for now,
if you have multiple TypeScript files, you need multiple JSON files
This will be improved in the future.

Name the following file as `react-native-tscodegen.json`

```json
{
    "libraryName": "PlaygroundModule",
    "outputDirectory": "./lib/cpp-generated",
    "moduleSpecName": "PlaygroundModuleSpec",
    "generators": [
        "descriptors",
        "events",
        "props",
        "tests",
        "shadow-nodes",
        "modules"
    ],
    "inputFile": "./src/turboModule.ts"
}
```

And add this script to your `package.json`

```json
{
  "scripts": {
    "codegen": "react-native-tscodegen ./react-native-tscodegen.json"
  }
}
```

After running `npm run codegen`, you will see files get generated in `./lib/cpp-generated`.

## Building C++ files

(still writing)
