# react-native-tscodegen

TypeScript Code Generation for React Native Turbo Module

- Index
  - Contributing
  - Building this repo
  - Packages
  - Deploying
  - Development

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Building this repo

```cmd
yarn
yarn build
yarn test
```

## Packages

### tslint-shared

This is the shared tslint configuration for all other packages.

### RN-TSCodegen

This is the TypeScript code generation for TurboModule in react native.

There are two important exported functions:

- **typeScriptToCodeSchema** function:
  - **fileName** argument: Full path to a TypeScript source file, a module name.
  - **moduleName** argument: The module name. It is not reflected in generated files.
  - **targetName** argument (optional): It will be used in **the entry header file**, if this TypeScript source file registers a native module.
  - Output: A `SchemaType` data structure.
- **generateNativeFiles** function
  - **options** argument:
    - **libraryName** property: A string that becomes part of type names in generated files.
    - **schema** property: Result from `typeScriptToCodeSchema`
    - **outputDirectory** property: Full path to a folder to write files. Multiple files will be generated and most of the file names are hard-coded.
    - **moduleSpecName** property: Name of **the entry header file**, no file extension.
  - **config** arguments:
    - **generators** property: An array that is or a subset of `['descriptors', 'events', 'props', 'tests', 'shadow-nodes', 'modules']` to control what files are generated.

### RN-TSCodegen-Test

This package contains all test cases for RN-TSCodegen, with unit test code.

### minimum-flow-parser

This is a Flow parser, just enough to convert necessary files to TypeScript for this repo.

### update-test-files

Get generated files sync to `facebook/react-native`

## Deploying

- Import `typeScriptToCodeSchema` and `generateNativeFiles` from **RN-TSCodegen** package. This package is not published to any external or internal source yet. You need to make your code accessible to this package manually.
- Call these two functions on your TypeScript files. You can learn the details by reading this [simple test case](./packages/RN-TSCodegen-Test/test/TestE2ECases.ts).

## Notice

At this moment, no effort of integrating RN-TSCodegen to facebook/react-native has been made.
There is also no official TypeScript description files for react-native.
In order to make RN-TSCodegen run, I authored a few of them to get input TypeScript source files compile.
**You need to merge important things from my description files to one that you are using**.
There is several things that need to do before doing this:

- In [this folder](../../tree/master/packages/RN-TSCodegen-Test/src/lib) you will see 3 files. You either use them directly, or merge them into third-party description files.
  - [CodegenTypes.ts](/packages/RN-TSCodegen-Test/src/lib/CodegenTypes.ts)
  - [ImageSource.ts](/packages/RN-TSCodegen-Test/src/lib/ImageSource.ts)
  - [StyleSheetTypes.ts](/packages/RN-TSCodegen-Test/src/lib/StyleSheetTypes.ts)
- `RNTag<T>` and `WithDefaultRNTag` that are used in above files are very important classes that help RN-TSCodegen recognize react native required features that TypeScript does not have. This approach may change in the future.
- `ReactNull | T` is used to represent nullable types. This approach may change in the future.
  - When `--strictNullChecks` is off (by default), TypeScript compiler will ignore `null` and `undefined` in a union type, because they are subtype of all other types. The currently implementation uses `typeChecker` in TypeScript Compiler API to do type inference, necessary information will be lost when `--strictNullChecks` is off.

## Development

### Sync react-native after pull

```cmd
git submodule update
```

### Sync react-native to a new version

```cmd
pushd react-native
git fetch
git merge origin/master
popd
git status
```

### Works to do after updating react-native

```cmd
yarn
yarn build
pushd update-test-files
npm run start
popd
git status
```

### Improvements

- Remove `RNTag<T>`
- Remove `ignoredProperties` from `ComponentParser.ts`
