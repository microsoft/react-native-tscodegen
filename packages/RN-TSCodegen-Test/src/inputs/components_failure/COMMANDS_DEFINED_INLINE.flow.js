
// Automatically copied from components/__test_fixtures__/failures.js
// (/react-native/packages/react-native-codegen/src/parsers/flow)

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
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

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,
  // No props
|}>;

export const Commands = codegenNativeCommands<{
  +hotspotUpdate: (ref: React.Ref<'RCTView'>, x: Int32, y: Int32) => void,
}>({
  supportedCommands: ['hotspotUpdate'],
});

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): HostComponent<ModuleProps>);
