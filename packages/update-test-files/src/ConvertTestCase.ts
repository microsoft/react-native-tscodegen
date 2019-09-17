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
  React: `import * as React from '../../lib/React';`,
  NativeComponent: `import {NativeComponent} from '../../lib/codegenNativeComponent';`,
  NativeComponentType: `import {NativeComponentType} from '../../lib/codegenNativeComponent';`,
  codegenNativeComponent: `import codegenNativeComponent from '../../lib/codegenNativeComponent';`,
  codegenNativeCommands: `import codegenNativeCommands from '../../lib/codegenNativeCommands';`,
  TurboModule: `import {TurboModule} from '../../lib/RCTExport'`,
  TurboModuleRegistry: `import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';`,
  ImageSource: `import {ImageSource} from '../../lib/ImageSource';`,
  ColorValue: `import {ColorValue} from '../../lib/StyleSheetTypes';`,
  ColorArrayValue: `import {ColorArrayValue} from '../../lib/StyleSheetTypes';`,
  PointValue: `import {PointValue} from '../../lib/StyleSheetTypes';`,
  ViewProps: `import {ViewProps} from '../../lib/ViewPropTypes';`
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
