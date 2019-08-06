
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

const codegenNativeComponent = require('codegenNativeComponent');

import type {
  BubblingEventHandler,
  DirectEventHandler,
} from 'CodegenTypese';

import type {ViewProps} from 'ViewPropTypes';

const codegenNativeComponent = require('codegenNativeComponent');

type ModuleProps = $ReadOnly<{|
  ...ViewProps,

  // No props

  // Events defined inline
  onDirectEventDefinedInlineNull:DirectEventHandler<null>,
  onDirectEventDefinedInlineNullOptionalKey?: DirectEventHandler<null>,
  onDirectEventDefinedInlineNullOptionalValue: ?DirectEventHandler<null>,
  onDirectEventDefinedInlineNullOptionalBoth?: DirectEventHandler<null>,
  onDirectEventDefinedInlineNullWithPaperName?: ?
    DirectEventHandler<
      null,
      'paperDirectEventDefinedInlineNullWithPaperName',
    >,

  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>,
  onBubblingEventDefinedInlineNullOptionalKey?: BubblingEventHandler<null>,
  onBubblingEventDefinedInlineNullOptionalValue: ?BubblingEventHandler<null>,
  onBubblingEventDefinedInlineNullOptionalBoth?: ?BubblingEventHandler<null>,
  onBubblingEventDefinedInlineNullWithPaperName?: ?
    BubblingEventHandler<
      null,
      'paperBubblingEventDefinedInlineNullWithPaperName',
    >,
|}>;

export default codegenNativeComponent<ModuleProps>('Module');
