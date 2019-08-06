
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
  BubblingEvent,
  DirectEvent,
} from 'CodegenTypes';

import type {ViewProps} from 'ViewPropTypes';

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,
  // No props
|}>;

export const Commands = codegenNativeCommands<{
  +hotspotUpdate: (ref: React.Ref<'RCTView'>, x: Int32, y: Int32) => void;
}>({
  supportedCommands: ['hotspotUpdate']
});

export default codegenNativeComponent<ModuleProps>('Module');
