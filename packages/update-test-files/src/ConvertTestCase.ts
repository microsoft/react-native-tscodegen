// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as flow from '@react-native-tscodegen/minimum-flow-parser';
import * as os from 'os';
import { fixTestCase } from './FixTestCase';
import { printTypeScript } from './PrintTS';

const importMaps = {
  ProcessedColorValue: `import {ProcessedColorValue} from 'react-native';`,
  ColorValue: `import {ColorValue} from 'react-native';`,
  ViewProps: `import {ViewProps} from 'react-native';`,
  NativeComponent: `import {NativeComponent} from 'react-native';`,
  NativeComponentType: `import {NativeComponentType} from 'react-native';`,
  HostComponent: `import {HostComponent} from 'react-native';`,
  TurboModule: `import {TurboModule} from 'react-native'`,
  TurboModuleRegistry: `import {TurboModuleRegistry} from 'react-native';`,

  BubblingEventHandler: `import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';`,
  DirectEventHandler: `import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';`,
  Float: `import {Float} from 'react-native/Libraries/Types/CodegenTypes';`,
  Double: `import {Double} from 'react-native/Libraries/Types/CodegenTypes';`,
  Int32: `import {Int32} from 'react-native/Libraries/Types/CodegenTypes';`,
  UnsafeObject: `import {UnsafeObject} from 'react-native/Libraries/Types/CodegenTypes';`,
  WithDefault: `import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';`,

  NotString: `import {NotString} from 'react-native-tscodegen-types';`,
  Stringish: `import {Stringish} from 'react-native-tscodegen-types';`,
  ReactNull: `import {ReactNull} from 'react-native-tscodegen-types';`,
  RootTag: `import {RootTag} from 'react-native-tscodegen-types';`,
  ImageSource: `import {ImageSource} from 'react-native-tscodegen-types';`,
  ColorArrayValue: `import {ColorArrayValue} from 'react-native-tscodegen-types';`,
  PointValue: `import {PointValue} from 'react-native-tscodegen-types';`,
  EdgeInsetsValue: `import {EdgeInsetsValue} from 'react-native-tscodegen-types';`,
  codegenNativeComponent: `import {codegenNativeComponent} from 'react-native-tscodegen-types';`,
  codegenNativeCommands: `import {codegenNativeCommands} from 'react-native-tscodegen-types';`,

  React: `import * as React from 'react';`
};

export function flowTestCaseToTypeScript(program: flow.FlowProgram, keyName?: string): string {
  fixTestCase(program);
  const tsSourceCode = printTypeScript(program, false, { forTestCase: true });

  let header = '';
  Object.keys(importMaps).forEach((key: string) => {
    if (tsSourceCode.match(new RegExp(`\\W${key}\\W`)) !== null) {
      header += `${importMaps[key]}${os.EOL}`;
    }
  });

  return header + tsSourceCode;
}
