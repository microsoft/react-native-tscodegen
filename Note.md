# Sub module to https://github.com/facebook/react-native

- `git submodule add <url>`
- `git submodule init`
- `git submodule update`
- `git fetch` / `git merge origin/master` in `react-native` folder

## Files to consume

### Schema file

`.\react-native\packages\react-native-codegen\src\CodegenSchema.js`

### Component test cases
- good cases: `.\react-native\packages\react-native-codegen\src\parsers\flow\components\__test_fixtures__\fixtures.js`
- bad cases:  `.\react-native\packages\react-native-codegen\src\parsers\flow\components\__test_fixtures__\failures.js`
- output:     `.\react-native\packages\react-native-codegen\src\parsers\flow\components\__tests__\__snapshots__\component-parser-test.js.snap`

### Native Module test cases
- good cases: `.\react-native\packages\react-native-codegen\src\parsers\flow\modules\__test_fixtures__\fixtures.js`
- bad cases:  `.\react-native\packages\react-native-codegen\src\parsers\flow\modules\__test_fixtures__\failures.js`
- output:     `.\react-native\packages\react-native-codegen\src\parsers\flow\modules\__tests__\__snapshots__\module-parser-test.js.snap`
