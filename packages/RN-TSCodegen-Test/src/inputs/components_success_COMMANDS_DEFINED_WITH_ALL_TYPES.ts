import {Float} from '../lib/CodegenTypes';
import {Double} from '../lib/CodegenTypes';
import {Int32} from '../lib/CodegenTypes';
import * as React from '../lib/React';
import {NativeComponent} from '../lib/codegenNativeComponent';
import codegenNativeComponent from '../lib/codegenNativeComponent';
import codegenNativeCommands from '../lib/codegenNativeCommands';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';





import {ViewProps} from '../lib/ViewPropTypes';


interface NativeCommands {
  hotspotUpdate (viewRef: React.Ref<'RCTView'>, x: Int32, y: Int32) : void;
  scrollTo: (
    viewRef: React.Ref<'RCTView'>,
    x: Float,
    y: Int32,
    z: Double,
    animated: boolean,
  ) => void;
}

export type ModuleProps = Readonly<ViewProps & {
  // No props or events
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate', 'scrollTo']
});

export default (codegenNativeComponent<ModuleProps>(
  'Module',
) as NativeComponent<ModuleProps>);
