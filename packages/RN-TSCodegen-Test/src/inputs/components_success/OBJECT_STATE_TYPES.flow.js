
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
import type {ColorValue, PointValue, EdgeInsetsValue} from 'StyleSheetTypes';
import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';

type ModuleProps = $ReadOnly<{|
  ...ViewProps,
|}>;

type ModuleNativeState = $ReadOnly<{|
    // Props
  // Boolean props
  boolean_required: $ReadOnly<{|prop: boolean|}>,
  boolean_optional: $ReadOnly<{|prop?: WithDefault<boolean, false>|}>,

  // String props
  string_required: $ReadOnly<{|prop: string|}>,
  string_optional: $ReadOnly<{|prop?: WithDefault<string, ''>|}>,

  // Double props
  double_required: $ReadOnly<{|prop: Double|}>,
  double_optional: $ReadOnly<{|prop?: WithDefault<Double, 0.0>|}>,

  // Float props
  float_required: $ReadOnly<{|prop: Float|}>,
  float_optional: $ReadOnly<{|prop?: WithDefault<Float, 0.0>|}>,

  // Int32 props
  int_required: $ReadOnly<{|prop: Int32|}>,
  int_optional: $ReadOnly<{|prop?: WithDefault<Int32, 0>|}>,

  // String enum props
  enum_optional: $ReadOnly<{|
    prop?: WithDefault<$ReadOnlyArray<'small' | 'large'>, 'small'>,
  |}>,

  // ImageSource props
  image_required: $ReadOnly<{|prop: ImageSource|}>,
  image_optional_key: $ReadOnly<{|prop?: ImageSource|}>,
  image_optional_value: $ReadOnly<{|prop: ?ImageSource|}>,
  image_optional_both: $ReadOnly<{|prop?: ?ImageSource|}>,

  // ColorValue props
  color_required: $ReadOnly<{|prop: ColorValue|}>,
  color_optional_key: $ReadOnly<{|prop?: ColorValue|}>,
  color_optional_value: $ReadOnly<{|prop: ?ColorValue|}>,
  color_optional_both: $ReadOnly<{|prop?: ?ColorValue|}>,

  // ProcessedColorValue props
  processed_color_required: $ReadOnly<{|prop: ProcessedColorValue|}>,
  processed_color_optional_key: $ReadOnly<{|prop?: ProcessedColorValue|}>,
  processed_color_optional_value: $ReadOnly<{|prop: ?ProcessedColorValue|}>,
  processed_color_optional_both: $ReadOnly<{|prop?: ?ProcessedColorValue|}>,

  // PointValue props
  point_required: $ReadOnly<{|prop: PointValue|}>,
  point_optional_key: $ReadOnly<{|prop?: PointValue|}>,
  point_optional_value: $ReadOnly<{|prop: ?PointValue|}>,
  point_optional_both: $ReadOnly<{|prop?: ?PointValue|}>,

  // EdgeInsetsValue props
  insets_required: $ReadOnly<{|prop: EdgeInsetsValue|}>,
  insets_optional_key: $ReadOnly<{|prop?: EdgeInsetsValue|}>,
  insets_optional_value: $ReadOnly<{|prop: ?EdgeInsetsValue|}>,
  insets_optional_both: $ReadOnly<{|prop?: ?EdgeInsetsValue|}>,

  // Nested object props
  object_required: $ReadOnly<{|prop: $ReadOnly<{nestedProp: string}>|}>,
  object_optional_key?: $ReadOnly<{|prop: $ReadOnly<{nestedProp: string}>|}>,
  object_optional_value: ?$ReadOnly<{|prop: $ReadOnly<{nestedProp: string}>|}>,
  object_optional_both?: ?$ReadOnly<{|prop: $ReadOnly<{nestedProp: string}>|}>,
|}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): HostComponent<ModuleProps>);
