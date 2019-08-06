
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

const codegenNativeComponent = require('codegenNativeComponent');
const codegenNativeCommands = require('codegenNativeCommands');

import type {
  Int32,
  BubblingEventHandler,
  DirectEventHandler,
} from 'CodegenTypes';

import type {ViewProps} from 'ViewPropTypes';

interface NativeCommands {
  +hotspotUpdate: (viewRef: React.Ref<'RCTView'>, x: Int32, y: Int32) => void;
  +scrollTo: (viewRef: React.Ref<'RCTView'>, y: Int32, animated: boolean) => void;
}

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,
  // No props or events
|}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate', 'scrollTo']
});

export default codegenNativeComponent<ModuleProps>('Module');
