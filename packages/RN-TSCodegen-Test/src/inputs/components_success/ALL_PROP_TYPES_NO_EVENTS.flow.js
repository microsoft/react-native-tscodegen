
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

const codegenNativeComponent = require('codegenNativeComponent');

import type {Int32, Double, Float, WithDefault} from 'CodegenTypes';
import type {ImageSource} from 'ImageSource';
import type {ColorValue, ColorArrayValue, PointValue, EdgeInsetsValue, DimensionValue} from 'StyleSheetTypes';
import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';

type ModuleProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  // Boolean props
  boolean_required: boolean,
  boolean_optional_key?: WithDefault<boolean, true>,
  boolean_optional_both?: WithDefault<boolean, true>,

  // Boolean props, null default
  boolean_null_optional_key?: WithDefault<boolean, null>,
  boolean_null_optional_both?: WithDefault<boolean, null>,

  // String props
  string_required: string,
  string_optional_key?: WithDefault<string, ''>,
  string_optional_both?: WithDefault<string, ''>,

  // String props, null default
  string_null_optional_key?: WithDefault<string, null>,
  string_null_optional_both?: WithDefault<string, null>,

  // Stringish props
  stringish_required: Stringish,
  stringish_optional_key?: WithDefault<Stringish, ''>,
  stringish_optional_both?: WithDefault<Stringish, ''>,

  // Stringish props, null default
  stringish_null_optional_key?: WithDefault<Stringish, null>,
  stringish_null_optional_both?: WithDefault<Stringish, null>,

  // Double props
  double_required: Double,
  double_optional_key?: WithDefault<Double, 1.1>,
  double_optional_both?: WithDefault<Double, 1.1>,

  // Float props
  float_required: Float,
  float_optional_key?: WithDefault<Float, 1.1>,
  float_optional_both?: WithDefault<Float, 1.1>,

  // Float props, null default
  float_null_optional_key?: WithDefault<Float, null>,
  float_null_optional_both?: WithDefault<Float, null>,

  // Int32 props
  int32_required: Int32,
  int32_optional_key?: WithDefault<Int32, 1>,
  int32_optional_both?: WithDefault<Int32, 1>,

  // String enum props
  enum_optional_key?: WithDefault<'small' | 'large', 'small'>,
  enum_optional_both?: WithDefault<'small' | 'large', 'small'>,

  // Int enum props
  int_enum_optional_key?: WithDefault<0 | 1, 0>,

  // Object props
  object_optional_key?: $ReadOnly<{| prop: string |}>,
  object_optional_both?: ?$ReadOnly<{| prop: string |}>,
  object_optional_value: ?$ReadOnly<{| prop: string |}>,

  // ImageSource props
  image_required: ImageSource,
  image_optional_value: ?ImageSource,
  image_optional_both?: ?ImageSource,

  // ColorValue props
  color_required: ColorValue,
  color_optional_key?: ColorValue,
  color_optional_value: ?ColorValue,
  color_optional_both?: ?ColorValue,

  // ColorArrayValue props
  color_array_required: ColorArrayValue,
  color_array_optional_key?: ColorArrayValue,
  color_array_optional_value: ?ColorArrayValue,
  color_array_optional_both?: ?ColorArrayValue,

  // ProcessedColorValue props
  processed_color_required: ProcessedColorValue,
  processed_color_optional_key?: ProcessedColorValue,
  processed_color_optional_value: ?ProcessedColorValue,
  processed_color_optional_both?: ?ProcessedColorValue,

  // PointValue props
  point_required: PointValue,
  point_optional_key?: PointValue,
  point_optional_value: ?PointValue,
  point_optional_both?: ?PointValue,

  // EdgeInsets props
  insets_required: EdgeInsetsValue,
  insets_optional_key?: EdgeInsetsValue,
  insets_optional_value: ?EdgeInsetsValue,
  insets_optional_both?: ?EdgeInsetsValue,

  // DimensionValue props
  dimension_required: DimensionValue,
  dimension_optional_key?: DimensionValue,
  dimension_optional_value: ?DimensionValue,
  dimension_optional_both?: ?DimensionValue,
|}>;

export default (codegenNativeComponent<ModuleProps, Options>(
  'Module',
): HostComponent<ModuleProps>);
