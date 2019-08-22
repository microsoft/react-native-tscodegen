
// Automatically generated from components_failure_COMMANDS_DEFINED_INLINE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {Int32} from '../lib/CodegenTypes';
import * as React from '../lib/React';
import {NativeComponent} from '../lib/codegenNativeComponent';
import codegenNativeComponent from '../lib/codegenNativeComponent';
import codegenNativeCommands from '../lib/codegenNativeCommands';
'use strict';

import {ViewProps} from '../lib/ViewPropTypes';

export type ModuleProps = Readonly<ViewProps & {
}>;

export const Commands = codegenNativeCommands<{
  readonly hotspotUpdate: (ref: React.Ref<'RCTView'>, x: Int32, y: Int32) => void;
}>({
  supportedCommands: ['hotspotUpdate']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


