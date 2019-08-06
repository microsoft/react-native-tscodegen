
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

import type {
  BubblingEventHandler,
  DirectEventHandler,
} from 'CodegenTypes';

import type {ViewProps} from 'ViewPropTypes';

const codegenNativeComponent = require('codegenNativeComponent');

export type EventInFile = $ReadOnly<{|
  
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  float_required: Float,
  float_optional_key?: Float,
  float_optional_value: ?Float,
  float_optional_both?: ?Float,

  int32_required: Int32,
  int32_optional_key?: Int32,
  int32_optional_value: ?Int32,
  int32_optional_both?: ?Int32,

  enum_required: ('small' | 'large'),
  enum_optional_key?: ('small' | 'large'),
  enum_optional_value: ?('small' | 'large'),
  enum_optional_both?: ?('small' | 'large'),

  object_required: {
    boolean_required: boolean,
  }

  object_optional_key?: {
    string_optional_key?: string,
  }

  object_optional_value: ?{
    float_optional_value: ?Float,
  }

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  }

|}>;

export type ModuleProps = $ReadOnly<{|
  ...ViewProps,

  // No props

  // Events defined inline
  onBubblingEventDefinedInline: BubblingEventHandler<EventInFile>,
  onBubblingEventDefinedInlineWithPaperName: BubblingEventHandler<EventInFile, 'paperBubblingEventDefinedInlineWithPaperName'>,
  onDirectEventDefinedInline: DirectEventHandler<EventInFile>,
  onDirectEventDefinedInlineWithPaperName: DirectEventHandler<EventInFile, 'paperDirectEventDefinedInlineWithPaperName'>,
|}>;

export default codegenNativeComponent<ModuleProps>('Module');
