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
- **generator.generate** function
  - **options** argument:
    - **libraryName** property: A string that becomes part of type names in generated files.
    - **schema** property: Result from `typeScriptToCodeSchema`
    - **outputDirectory** property: Full path to a folder to write files. Multiple files will be generated and most of the file names are hard-coded.
    - **moduleSpecName** property: Name of **the entry header file**, no file extension.
  - **config** arguments:
    - **generators** property: An array that is or a subset of `['descriptors', 'events', 'props', 'tests', 'shadow-nodes', 'modules']` to control what files are generated.

### RN-TSCodegen-Test

This package contains all test cases for RN-TSCodegen, with unit test code.

### playground/Playground (not ready)

This project template is created following [the react-native-windows document](https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/ConsumingRNW.md).

The following files is for building turbo module, they are not generated automatically:
- `src\turboModule.ts`: The API description of the turbo module
- `react-native-tscodegen.json`: C++ Codegen Configuration
- `tslint.json` and `tsconfig.json`: TypeScript configuration
- `cpp\react\modules\PlaygroundModule\*`: Generated C++ code

Building this package

- `npm run build`: Build the TypeScript turbo module
- `npm run codegen`: Generate C++ code from the TypeScript turbo module
- Open `windows\Playground.sln` in Visual Studio 2019 [with these installed](https://github.com/microsoft/react-native-windows/blob/master/vnext/docs/GettingStarted.md#dependencies).

### minimum-flow-parser

This is a Flow parser, just enough to convert necessary files to TypeScript for this repo.

### update-test-files

Get generated files sync to `facebook/react-native`

## Deploying

- [npm install react-native-tscodegen-types](https://www.npmjs.com/package/react-native-tscodegen-types)
- [npm install react-native-tscodegen](https://www.npmjs.com/package/react-native-tscodegen)
  - Follow the description to build your first Turbo Module program!

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
