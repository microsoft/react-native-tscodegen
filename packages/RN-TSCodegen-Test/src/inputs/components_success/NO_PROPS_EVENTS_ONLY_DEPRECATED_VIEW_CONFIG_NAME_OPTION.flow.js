
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

import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';

type ModuleProps = $ReadOnly<{|
  ...ViewProps,
|}>;

export default (codegenNativeComponent<ModuleProps>('Module', {
  deprecatedViewConfigName: 'DeprecateModuleName',
}): HostComponent<ModuleProps>);
