
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

const codegenNativeCommands = require('codegenNativeCommands');
const codegenNativeComponent = require('codegenNativeComponent');

import type {Int32, Double, Float} from 'CodegenTypes';
import type {ViewProps} from 'ViewPropTypes';
import type {NativeComponent} from 'codegenNativeComponent';

interface NativeCommands {
  +hotspotUpdate: (viewRef: React.Ref<'RCTView'>, x: Int32, y: Int32) => void;
  +scrollTo: (
    viewRef: React.Ref<'RCTView'>,
    x: Float,
    y: Int32,
    z: Double,
    animated: boolean,
  ) => void;
}

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,
  // No props or events
|}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate', 'scrollTo'],
});

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeComponent<ModuleProps>);
