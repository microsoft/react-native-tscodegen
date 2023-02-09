// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as flow from '@react-native-ts-codegen/minimum-flow-parser';
import * as os from 'os';
import { fixTestCase } from './FixTestCase';
import { PrintTypeConfig, printTypeScript } from './PrintTS';

const importMaps = {
  ProcessedColorValue: `import {ProcessedColorValue} from 'react-native';`,
  ColorValue: `import {ColorValue} from 'react-native';`,
  ImageSource: `import {ImageSourcePropType as ImageSource} from 'react-native';`,
  ViewProps: `import {ViewProps} from 'react-native';`,
  NativeComponent: `import {NativeComponent} from 'react-native';`,
  HostComponent: `import {HostComponent} from 'react-native';`,
  TurboModule: `import {TurboModule} from 'react-native'`,
  TurboModuleRegistry: `import {TurboModuleRegistry} from 'react-native';`,

  NativeComponentType: `import {NativeComponentType} from 'react-native/Libraries/Utilities/codegenNativeComponent';`,
  codegenNativeCommands: `import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';`,
  codegenNativeComponent: `import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';`,

  BubblingEventHandler: `import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';`,
  DirectEventHandler: `import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';`,
  Float: `import {Float} from 'react-native/Libraries/Types/CodegenTypes';`,
  Double: `import {Double} from 'react-native/Libraries/Types/CodegenTypes';`,
  Int32: `import {Int32} from 'react-native/Libraries/Types/CodegenTypes';`,
  UnsafeObject: `import {UnsafeObject} from 'react-native/Libraries/Types/CodegenTypes';`,
  WithDefault: `import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';`,

  NotString: `import {NotString} from 'react-native-tscodegen-types';`,
  Stringish: `import {Stringish} from 'react-native-tscodegen-types';`,
  RootTag: `import {RootTag} from 'react-native-tscodegen-types';`,
  ColorArrayValue: `import {ColorArrayValue} from 'react-native-tscodegen-types';`,
  PointValue: `import {PointValue} from 'react-native-tscodegen-types';`,
  EdgeInsetsValue: `import {EdgeInsetsValue} from 'react-native-tscodegen-types';`,
  DimensionValue: `import {DimensionValue} from 'react-native-tscodegen-types';`,

  React: `import * as React from 'react';`
};

export function flowTestCaseToTypeScript(program: flow.FlowProgram, forScenario: PrintTypeConfig['forScenario']): string {
  fixTestCase(program);
  const tsSourceCode = printTypeScript(program, false, { forTestCase: true, forScenario });

  let header = '';
  Object.keys(importMaps).forEach((key: string) => {
    if (tsSourceCode.match(new RegExp(`\\W${key}\\W`)) !== null) {
      header += `${importMaps[key]}${os.EOL}`;
    }
  });

  return header + tsSourceCode;
}
