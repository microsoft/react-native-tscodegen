// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as flow from 'minimum-flow-parser';
import * as os from 'os';
import { fixTestCase } from './FixTestCase';
import { printTypeScript } from './PrintTS';

const importMaps = {
  BubblingEventHandler: `import {BubblingEventHandler} from 'react-native-tscodegen-types';`,
  DirectEventHandler: `import {DirectEventHandler} from 'react-native-tscodegen-types';`,
  Float: `import {Float} from 'react-native-tscodegen-types';`,
  Double: `import {Double} from 'react-native-tscodegen-types';`,
  Int32: `import {Int32} from 'react-native-tscodegen-types';`,
  NotString: `import {NotString} from 'react-native-tscodegen-types';`,
  Stringish: `import {Stringish} from 'react-native-tscodegen-types';`,
  ReactNull: `import {ReactNull} from 'react-native-tscodegen-types';`,
  WithDefault: `import {WithDefault} from 'react-native-tscodegen-types';`,

  ImageSource: `import {ImageSource} from 'react-native-tscodegen-types';`,
  ColorValue: `import {ColorValue} from 'react-native-tscodegen-types';`,
  ColorArrayValue: `import {ColorArrayValue} from 'react-native-tscodegen-types';`,
  PointValue: `import {PointValue} from 'react-native-tscodegen-types';`,
  EdgeInsetsValue: `import {EdgeInsetsValue} from 'react-native-tscodegen-types';`,

  React: `import {React} from 'react-native-tscodegen-types';`,
  ViewProps: `import {ViewProps} from 'react-native-tscodegen-types';`,

  NativeComponent: `import {NativeComponent} from 'react-native-tscodegen-types';`,
  NativeComponentType: `import {NativeComponentType} from 'react-native-tscodegen-types';`,
  HostComponent: `import {HostComponent} from 'react-native-tscodegen-types';`,
  codegenNativeComponent: `import {codegenNativeComponent} from 'react-native-tscodegen-types';`,
  codegenNativeCommands: `import {codegenNativeCommands} from 'react-native-tscodegen-types';`,
  TurboModule: `import {TurboModule} from 'react-native-tscodegen-types'`,
  TurboModuleRegistry: `import {TurboModuleRegistry} from 'react-native-tscodegen-types';`
};

export function flowTestCaseToTypeScript(program: flow.FlowProgram, keyName?: string): string {
  fixTestCase(program);
  const tsSourceCode = printTypeScript(program, false, { useReactNull: true });

  let header = '';
  Object.keys(importMaps).forEach((key: string) => {
    if (tsSourceCode.match(new RegExp(`\\W${key}\\W`)) !== null) {
      header += `${importMaps[key]}${os.EOL}`;
    }
  });

  return header + tsSourceCode;
}
