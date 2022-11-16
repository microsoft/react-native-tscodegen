
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

import type {Int32, Double, Float} from 'CodegenTypes';
import type {RootTag} from 'RCTExport';
import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';


export type ModuleProps = $ReadOnly<{|
  ...ViewProps,
  // No props or events
|}>;

type NativeType = HostComponent<ModuleProps>;

interface NativeCommands {
  +handleRootTag: (viewRef: React.ElementRef<NativeType>, rootTag: RootTag) => void;
  +hotspotUpdate: (viewRef: React.ElementRef<NativeType>, x: Int32, y: Int32) => void;
  scrollTo(
    viewRef: React.ElementRef<NativeType>,
    x: Float,
    y: Int32,
    z: Double,
    animated: boolean,
  ): void;
}

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['handleRootTag', 'hotspotUpdate', 'scrollTo'],
});

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeType);
