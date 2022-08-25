
// Automatically copied from components/__test_fixtures__/fixtures.js
// (/react-native/packages/react-native-codegen/src/parsers/flow)

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

const codegenNativeCommands = require('codegenNativeCommands');
const codegenNativeComponent = require('codegenNativeComponent');

import type {Int32} from 'CodegenTypes';
import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';

export type Boolean = boolean;
export type Int = Int32;
export type Void = void;

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,
  // No props or events
|}>;

type NativeType = HostComponent<ModuleProps>;

export type ScrollTo = (
  viewRef: React.ElementRef<NativeType>,
  y: Int,
  animated: Boolean,
) => Void;

interface NativeCommands {
  +scrollTo: ScrollTo;
}

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['scrollTo'],
});

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeType);
