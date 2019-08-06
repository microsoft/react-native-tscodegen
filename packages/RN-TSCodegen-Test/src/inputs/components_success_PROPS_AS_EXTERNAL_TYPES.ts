
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

export type String = string;
export type AnotherArray = $ReadOnlyArray<String>;

export type ModuleProps = $ReadOnly<{|
  disable: String,
  array: AnotherArray,
|}>;

export default codegenNativeComponent<ModuleProps>('Module');
