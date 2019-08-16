import {Float} from '../lib/CodegenTypes';import {Double} from '../lib/CodegenTypes';import {Int32} from '../lib/CodegenTypes';import {ReactNull} from '../lib/CodegenTypes';import {WithDefault} from '../lib/CodegenTypes';import codegenNativeComponent = require('../lib/codegenNativeComponent');
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




import {ImageSource} from '../lib/ImageSource';
import {ColorValue, PointValue} from '../lib/StyleSheetTypes';
import {ViewProps} from '../lib/ViewPropTypes';
import {NativeComponent} from '../lib/codegenNativeComponent';

type ObjectType = Readonly<{ prop: string }>;
type Array<any>ObjectType = ReadonlyArray<Readonly<{ prop: string }>>;

type ModuleProps = Readonly<ViewProps & {

  // Props
  // Boolean props
  array_boolean_required: ReadonlyArray<boolean>;
  array_boolean_optional_key?: ReadonlyArray<boolean>;
  array_boolean_optional_value: ReactNull | ReadonlyArray<boolean>;
  array_boolean_optional_both?: ReactNull | ReadonlyArray<boolean>;

  // String props
  array_string_required: ReadonlyArray<string>;
  array_string_optional_key?: ReadonlyArray<string>;
  array_string_optional_value: ReactNull | ReadonlyArray<string>;
  array_string_optional_both?: ReactNull | ReadonlyArray<string>;

  // Double props
  array_double_required: ReadonlyArray<Double>;
  array_double_optional_key?: ReadonlyArray<Double>;
  array_double_optional_value: ReactNull | ReadonlyArray<Double>;
  array_double_optional_both?: ReactNull | ReadonlyArray<Double>;

  // Float props
  array_float_required: ReadonlyArray<Float>;
  array_float_optional_key?: ReadonlyArray<Float>;
  array_float_optional_value: ReactNull | ReadonlyArray<Float>;
  array_float_optional_both?: ReactNull | ReadonlyArray<Float>;

  // Int32 props
  array_int32_required: ReadonlyArray<Int32>;
  array_int32_optional_key?: ReadonlyArray<Int32>;
  array_int32_optional_value: ReactNull | ReadonlyArray<Int32>;
  array_int32_optional_both?: ReactNull | ReadonlyArray<Int32>;

  // String enum props
  array_enum_optional_key?: WithDefault<
    ReadonlyArray<'small' | 'large'>;
    'small',
  >;
  array_enum_optional_both?: WithDefault<
    ReadonlyArray<'small' | 'large'>;
    'small',
  >;

  // ImageSource props
  array_image_required: ReadonlyArray<ImageSource>;
  array_image_optional_key?: ReadonlyArray<ImageSource>;
  array_image_optional_value: ReactNull | ReadonlyArray<ImageSource>;
  array_image_optional_both?: ReactNull | ReadonlyArray<ImageSource>;

  // ColorValue props
  array_color_required: ReadonlyArray<ColorValue>;
  array_color_optional_key?: ReadonlyArray<ColorValue>;
  array_color_optional_value: ReactNull | ReadonlyArray<ColorValue>;
  array_color_optional_both?: ReactNull | ReadonlyArray<ColorValue>;

  // PointValue props
  array_point_required: ReadonlyArray<PointValue>;
  array_point_optional_key?: ReadonlyArray<PointValue>;
  array_point_optional_value: ReactNull | ReadonlyArray<PointValue>;
  array_point_optional_both?: ReactNull | ReadonlyArray<PointValue>;

  // Object props
  array_object_required: ReadonlyArray<Readonly<{ prop: string }>>;
  array_object_optional_key?: ReadonlyArray<Readonly<{ prop: string }>>;
  array_object_optional_value: ReactNull | Array<any>ObjectType;
  array_object_optional_both?: ReactNull | ReadonlyArray<ObjectType>;
}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeComponent<ModuleProps>);
