import * as flow from 'minimum-flow-parser';
import { fixTestCase } from './FixTestCase';
import { printTypeScript } from './PrintTS';

const importMaps = {
  BubblingEventHandler: `import {BubblingEventHandler} from '../../lib/CodegenTypes';`,
  DirectEventHandler: `import {DirectEventHandler} from '../../lib/CodegenTypes';`,
  Float: `import {Float} from '../../lib/CodegenTypes';`,
  Double: `import {Double} from '../../lib/CodegenTypes';`,
  Int32: `import {Int32} from '../../lib/CodegenTypes';`,
  NotString: `import {NotString} from '../../lib/CodegenTypes';`,
  Stringish: `import {Stringish} from '../../lib/CodegenTypes';`,
  ReactNull: `import {ReactNull} from '../../lib/CodegenTypes';`,
  WithDefault: `import {WithDefault} from '../../lib/CodegenTypes';`,
  React: `import * as React from '../../lib/React';`,
  NativeComponent: `import {NativeComponent} from '../../lib/codegenNativeComponent';`,
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
      header += `${importMaps[key]}\r\n`;
    }
  });

  return header + tsSourceCode;
}
