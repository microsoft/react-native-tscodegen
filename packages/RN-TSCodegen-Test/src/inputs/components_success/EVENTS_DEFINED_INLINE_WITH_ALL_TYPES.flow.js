
// Automatically copied from components/__test_fixtures__/fixtures.js
// (/react-native/packages/react-native-codegen/src/parsers/flow)

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import type {HostComponent} from 'react-native';
const codegenNativeComponent = require('codegenNativeComponent');

import type {
  Int32,
  Double,
  Float,
  BubblingEventHandler,
  DirectEventHandler,
} from 'CodegenTypes';

import type {ViewProps} from 'ViewPropTypes';

type ModuleProps = $ReadOnly<{|
  ...ViewProps,
  // No Props

  // Events
  onDirectEventDefinedInline:
    DirectEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
    >,

  onDirectEventDefinedInlineOptionalKey?:
    DirectEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
    >,

  onDirectEventDefinedInlineOptionalValue: ?
    DirectEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
    >,

  onDirectEventDefinedInlineOptionalBoth?: ?
    DirectEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
    >,

  onDirectEventDefinedInlineWithPaperName?: ?
    DirectEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
      'paperDirectEventDefinedInlineWithPaperName',
    >,

  onBubblingEventDefinedInline:
    BubblingEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
    >,

  onBubblingEventDefinedInlineOptionalKey?:
    BubblingEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
    >,

  onBubblingEventDefinedInlineOptionalValue: ?
    BubblingEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
    >,

  onBubblingEventDefinedInlineOptionalBoth?: ?
    BubblingEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
    >,

  onBubblingEventDefinedInlineWithPaperName?: ?
    BubblingEventHandler<
      $ReadOnly<{|
        
  boolean_required: boolean,
  boolean_optional_key?: boolean,
  boolean_optional_value: ?boolean,
  boolean_optional_both?: ?boolean,

  string_required: string,
  string_optional_key?: string,
  string_optional_value: ?string,
  string_optional_both?: ?string,

  double_required: Double,
  double_optional_key?: Double,
  double_optional_value: ?Double,
  double_optional_both?: ?Double,

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
  },

  object_optional_key?: {
    string_optional_key?: string,
  },

  object_optional_value: ?{
    float_optional_value: ?Float,
  },

  object_optional_both?: ?{
    int32_optional_both?: ?Int32,
  },

  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: ?{
      boolean_required: Int32,
      string_optional_key?: string,
      double_optional_value: ?Double,
      float_optional_value: ?Float,
      int32_optional_both?: ?Int32,
    }
  },

  object_readonly_required: $ReadOnly<{
    boolean_required: boolean,
  }>,

  object_readonly_optional_key?: $ReadOnly<{
    string_optional_key?: string,
  }>,

  object_readonly_optional_value: ?$ReadOnly<{
    float_optional_value: ?Float,
  }>,

  object_readonly_optional_both?: ?$ReadOnly<{
    int32_optional_both?: ?Int32,
  }>,

      |}>,
      'paperBubblingEventDefinedInlineWithPaperName'
    >,
|}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): HostComponent<ModuleProps>);
