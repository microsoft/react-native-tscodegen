
// Automatically generated from components_success_COMMANDS_DEFINED_WITH_ALL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {Float} from '../lib/CodegenTypes';
import {Double} from '../lib/CodegenTypes';
import {Int32} from '../lib/CodegenTypes';
import * as React from '../lib/React';
import {NativeComponent} from '../lib/codegenNativeComponent';
import codegenNativeComponent from '../lib/codegenNativeComponent';
import codegenNativeCommands from '../lib/codegenNativeCommands';
'use strict';

import {ViewProps} from '../lib/ViewPropTypes';

interface NativeCommands {
  hotspotUpdate(viewRef: React.Ref<'RCTView'>, x: Int32, y: Int32): void;
  scrollTo(viewRef: React.Ref<'RCTView'>, x: Float, y: Int32, z: Double, animated: boolean): void;
}

export type ModuleProps = Readonly<ViewProps & {
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate', 'scrollTo']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


