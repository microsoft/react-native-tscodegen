import {BubblingEventHandler} from '../lib/CodegenTypes';import {DirectEventHandler} from '../lib/CodegenTypes';import {ReactNull} from '../lib/CodegenTypes';import codegenNativeComponent = require('../lib/codegenNativeComponent');
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



type ModuleProps = Readonly<ViewProps & {

  // No props

  // Events defined inline
  onDirectEventDefinedInlineNull:DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalKey?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalValue: ReactNull | DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalBoth?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullWithPaperName?: ReactNull | 
    DirectEventHandler<
      null,
      'paperDirectEventDefinedInlineNullWithPaperName'
    >;

  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalKey?: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalValue: ReactNull | BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalBoth?: ReactNull | BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullWithPaperName?: ReactNull | 
    BubblingEventHandler<
      null,
      'paperBubblingEventDefinedInlineNullWithPaperName'
    >;
}>;

export default codegenNativeComponent<ModuleProps>('Module');
