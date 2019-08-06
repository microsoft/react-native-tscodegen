

import {
  BubblingEventHandler,
  DirectEventHandler,
  Float,
  Int32,
  NotString,
  Stringish,
  WithDefault,
} from '../lib/CodegenTypes';
import * as React from '../lib/React';


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

import codegenNativeComponent = require('../lib/codegenNativeComponent');

export type EventInFile = Readonly<{
  
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: null | undefined | boolean;
  boolean_optional_both?: null | undefined | boolean;

  string_required: string;
  string_optional_key?: string;
  string_optional_value: null | undefined | string;
  string_optional_both?: null | undefined | string;

  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: null | undefined | Float;
  float_optional_both?: null | undefined | Float;

  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: null | undefined | Int32;
  int32_optional_both?: null | undefined | Int32;

  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: null | undefined | ('small' | 'large');
  enum_optional_both?: null | undefined | ('small' | 'large');

  object_required: {
    boolean_required: boolean;
  }

  object_optional_key?: {
    string_optional_key?: string;
  }

  object_optional_value: null | undefined | {
    float_optional_value: null | undefined | Float;
  }

  object_optional_both?: null | undefined | {
    int32_optional_both?: null | undefined | Int32;
  }

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: null | undefined | {
      boolean_required: Int32;
      string_optional_key?: string;
      float_optional_value: null | undefined | Float;
      int32_optional_both?: null | undefined | Int32;
    }
  }

}>;

export type ModuleProps = Readonly<ViewProps & {

  // No props

  // Events defined inline
  onBubblingEventDefinedInline: BubblingEventHandler<EventInFile>;
  onBubblingEventDefinedInlineWithPaperName: BubblingEventHandler<EventInFile, 'paperBubblingEventDefinedInlineWithPaperName'>;
  onDirectEventDefinedInline: DirectEventHandler<EventInFile>;
  onDirectEventDefinedInlineWithPaperName: DirectEventHandler<EventInFile, 'paperDirectEventDefinedInlineWithPaperName'>;
}>;

export default codegenNativeComponent<ModuleProps>('Module');
