

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

import codegenNativeComponent = require('../lib/codegenNativeComponent');

import {ViewProps} from '../lib/ViewPropTypes';

type ModuleProps = Readonly<ViewProps & {
}>;

export default codegenNativeComponent<ModuleProps>('Module', {
  deprecatedViewConfigName: 'DeprecateModuleName';
});
