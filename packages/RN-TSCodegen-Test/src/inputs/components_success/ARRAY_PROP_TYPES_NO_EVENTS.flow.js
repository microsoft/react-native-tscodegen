
// Automatically copied from components/__test_fixtures__/fixtures.js
// (/react-native/packages/react-native-codegen/src/parsers/flow)

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

import type {Int32, Double, Float, WithDefault} from 'CodegenTypes';
import type {ImageSource} from 'ImageSource';
import type {ColorValue, PointValue} from 'StyleSheetTypes';
import type {ViewProps} from 'ViewPropTypes';
import type {NativeComponent} from 'codegenNativeComponent';

type ObjectType = $ReadOnly<{| prop: string |}>;
type ArrayObjectType = $ReadOnlyArray<$ReadOnly<{| prop: string |}>>;

type ModuleProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  // Boolean props
  array_boolean_required: $ReadOnlyArray<boolean>,
  array_boolean_optional_key?: $ReadOnlyArray<boolean>,
  array_boolean_optional_value: ?$ReadOnlyArray<boolean>,
  array_boolean_optional_both?: ?$ReadOnlyArray<boolean>,

  // String props
  array_string_required: $ReadOnlyArray<string>,
  array_string_optional_key?: $ReadOnlyArray<string>,
  array_string_optional_value: ?$ReadOnlyArray<string>,
  array_string_optional_both?: ?$ReadOnlyArray<string>,

  // Double props
  array_double_required: $ReadOnlyArray<Double>,
  array_double_optional_key?: $ReadOnlyArray<Double>,
  array_double_optional_value: ?$ReadOnlyArray<Double>,
  array_double_optional_both?: ?$ReadOnlyArray<Double>,

  // Float props
  array_float_required: $ReadOnlyArray<Float>,
  array_float_optional_key?: $ReadOnlyArray<Float>,
  array_float_optional_value: ?$ReadOnlyArray<Float>,
  array_float_optional_both?: ?$ReadOnlyArray<Float>,

  // Int32 props
  array_int32_required: $ReadOnlyArray<Int32>,
  array_int32_optional_key?: $ReadOnlyArray<Int32>,
  array_int32_optional_value: ?$ReadOnlyArray<Int32>,
  array_int32_optional_both?: ?$ReadOnlyArray<Int32>,

  // String enum props
  array_enum_optional_key?: WithDefault<
    $ReadOnlyArray<'small' | 'large'>,
    'small',
  >,
  array_enum_optional_both?: WithDefault<
    $ReadOnlyArray<'small' | 'large'>,
    'small',
  >,

  // ImageSource props
  array_image_required: $ReadOnlyArray<ImageSource>,
  array_image_optional_key?: $ReadOnlyArray<ImageSource>,
  array_image_optional_value: ?$ReadOnlyArray<ImageSource>,
  array_image_optional_both?: ?$ReadOnlyArray<ImageSource>,

  // ColorValue props
  array_color_required: $ReadOnlyArray<ColorValue>,
  array_color_optional_key?: $ReadOnlyArray<ColorValue>,
  array_color_optional_value: ?$ReadOnlyArray<ColorValue>,
  array_color_optional_both?: ?$ReadOnlyArray<ColorValue>,

  // PointValue props
  array_point_required: $ReadOnlyArray<PointValue>,
  array_point_optional_key?: $ReadOnlyArray<PointValue>,
  array_point_optional_value: ?$ReadOnlyArray<PointValue>,
  array_point_optional_both?: ?$ReadOnlyArray<PointValue>,

  // Object props
  array_object_required: $ReadOnlyArray<$ReadOnly<{| prop: string |}>>,
  array_object_optional_key?: $ReadOnlyArray<$ReadOnly<{| prop: string |}>>,
  array_object_optional_value: ?ArrayObjectType,
  array_object_optional_both?: ?$ReadOnlyArray<ObjectType>,

  // Nested array object types
  array_of_array_object_required: $ReadOnlyArray<
    $ReadOnly<{|
      // This needs to be the same name as the top level array above
      array_object_required: $ReadOnlyArray<$ReadOnly<{| prop: string |}>>,
    |}>
  >,
  array_of_array_object_optional_key?: $ReadOnlyArray<
    $ReadOnly<{|
      // This needs to be the same name as the top level array above
      array_object_optional_key: $ReadOnlyArray<$ReadOnly<{| prop?: string |}>>,
    |}>
  >,
  array_of_array_object_optional_value: ?$ReadOnlyArray<
    $ReadOnly<{|
      // This needs to be the same name as the top level array above
      array_object_optional_value: $ReadOnlyArray<$ReadOnly<{| prop: ?string |}>>,
    |}>
  >,
  array_of_array_object_optional_both?: ?$ReadOnlyArray<
    $ReadOnly<{|
      // This needs to be the same name as the top level array above
      array_object_optional_both: $ReadOnlyArray<$ReadOnly<{| prop?: ?string |}>>,
    |}>
  >,
|}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeComponent<ModuleProps>);
