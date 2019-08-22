
// Automatically generated from components_success_COMMANDS_WITH_EXTERNAL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {Int32} from '../lib/CodegenTypes';
import * as React from '../lib/React';
import {NativeComponent} from '../lib/codegenNativeComponent';
import codegenNativeComponent from '../lib/codegenNativeComponent';
import codegenNativeCommands from '../lib/codegenNativeCommands';
'use strict';

import {ViewProps} from '../lib/ViewPropTypes';

export type Boolean = boolean;

export type Int = Int32;

export type Void = void;

export type ScrollTo = (viewRef: React.Ref<'RCTView'>, y: Int, animated: Boolean) => Void;

interface NativeCommands {
  readonly scrollTo: ScrollTo;
}

export type ModuleProps = Readonly<ViewProps & {
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['scrollTo']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


