
// Automatically generated from components_failure/COMMANDS_DEFINED_WITH_NULLABLE_REF.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {Int32} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import * as React from '../../lib/React';
import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import codegenNativeCommands from '../../lib/codegenNativeCommands';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

interface NativeCommands {
  hotspotUpdate(viewRef: (ReactNull | React.Ref<'RCTView'>), x: Int32, y: Int32): void;
}

export type ModuleProps = Readonly<ViewProps & {
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


