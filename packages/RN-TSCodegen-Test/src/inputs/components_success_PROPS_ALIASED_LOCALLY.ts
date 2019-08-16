import codegenNativeComponent = require('../lib/codegenNativeComponent');
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

import {ViewProps} from '../lib/ViewPropTypes';
import {NativeComponent} from '../lib/codegenNativeComponent';



type DeepSpread = Readonly<{
  otherStringProp: string;
}>

export type PropsInFile = Readonly<DeepSpread & {
  isEnabled: boolean;
  label: string;
}>;

export type ModuleProps = Readonly<ViewProps & {

  ...PropsInFile

  localType: Readonly<{
    ...PropsInFile
  }>

  localArr: ReadonlyArray<PropsInFile>
}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeComponent<ModuleProps>);
