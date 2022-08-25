
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

import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';

const codegenNativeComponent = require('codegenNativeComponent');

type DeepSpread = $ReadOnly<{|
  otherStringProp: string,
|}>;

export type PropsInFile = $ReadOnly<{|
  ...DeepSpread,
  isEnabled: boolean,
  label: string,
|}>;

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,

  ...PropsInFile,

  localType: $ReadOnly<{|
    ...PropsInFile
  |}>,

  localArr: $ReadOnlyArray<PropsInFile>
|}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): HostComponent<ModuleProps>);
