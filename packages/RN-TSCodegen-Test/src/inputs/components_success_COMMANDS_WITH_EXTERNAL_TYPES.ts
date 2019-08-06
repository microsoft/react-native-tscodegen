

import {
  BubblingEventHandler,
  DirectEventHandler,
  Float,
  Int32,
  NotString,
  Stringish,
  WithDefault,
} from '../lib/CodegenTypes';
import * as React from '../lib/React';


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

import codegenNativeComponent = require('../lib/codegenNativeComponent');
import codegenNativeCommands = require('../lib/codegenNativeCommands');



import {ViewProps} from '../lib/ViewPropTypes';

export type Boolean = boolean;
export type Int = Int32;
export type Void = void;

export type ScrollTo = (viewRef: React.Ref<'RCTView'>, y: Int, animated: Boolean) => Void

interface NativeCommands {
  scrollTo: ScrollTo;
}

export type ModuleProps = Readonly<ViewProps & {
  // No props or events
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['scrollTo']
});

export default codegenNativeComponent<ModuleProps>('Module');
