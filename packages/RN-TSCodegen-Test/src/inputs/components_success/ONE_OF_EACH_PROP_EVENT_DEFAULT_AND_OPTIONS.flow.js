
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

const codegenNativeComponent = require('codegenNativeComponent');

import type {
  BubblingEventHandler,
  DirectEventHandler,
  WithDefault,
} from 'CodegenTypes';
import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';

type ModuleProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  boolean_default_true_optional_both?: WithDefault<boolean, true>,

  // Events
  onDirectEventDefinedInlineNull: DirectEventHandler<null>,
  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>,
|}>;

export default (codegenNativeComponent<ModuleProps>('Module', {
  interfaceOnly: true,
  paperComponentName: 'RCTModule',
}): HostComponent<ModuleProps>);
