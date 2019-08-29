
// Automatically copied from components/__test_fixtures__/failures.js
// (/react-native/packages/react-native-codegen/src/parsers/flow)

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

import type {ViewProps} from 'ViewPropTypes';
import type {NativeComponent} from 'codegenNativeComponent';

const codegenNativeComponent = require('codegenNativeComponent');

type PropsInFile = $ReadOnly<{|
  isEnabled: boolean,
|}>;

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,

  ...PropsInFile,
  isEnabled: boolean,
|}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeComponent<ModuleProps>);
