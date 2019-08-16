import {Int32} from '../lib/CodegenTypes';import * as React from '../lib/React';import codegenNativeComponent = require('../lib/codegenNativeComponent');import codegenNativeCommands = require('../lib/codegenNativeCommands');
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
import {NativeComponent} from '../lib/codegenNativeComponent';

interface NativeCommands {
  hotspotUpdate (viewRef: React.Ref<'RCTView'>, x: Int32, y: Int32) : void;
  scrollTo: (
    viewRef: React.Ref<'RCTView'>;
    y: Int32;
    animated: boolean;
  ) => void;
}

export type ModuleProps = Readonly<ViewProps & {
  // No props or events
}>;

export const Commands = codegenNativeCommands<NativeCommands>();

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeComponent<ModuleProps>);
