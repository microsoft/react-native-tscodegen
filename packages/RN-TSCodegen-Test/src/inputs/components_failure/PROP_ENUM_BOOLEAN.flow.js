
// Automatically copied from components/__test_fixtures__/failures.js
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

import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';

const codegenNativeComponent = require('codegenNativeComponent');

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,

  someProp?: WithDefault<false | true, false>
|}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): HostComponent<ModuleProps>);
