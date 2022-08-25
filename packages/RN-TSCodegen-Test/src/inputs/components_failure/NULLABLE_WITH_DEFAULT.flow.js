
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

const codegenNativeComponent = require('codegenNativeComponent');

import type {WithDefault, Float} from 'CodegenTypes';
import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,
  nullable_with_default: ?WithDefault<Float, 1.0>,
|}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): HostComponent<ModuleProps>);
