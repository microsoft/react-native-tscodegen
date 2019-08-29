
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/ARRAY_PROP_TYPES_NO_EVENTS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {Float} from '../../lib/CodegenTypes';
import {Double} from '../../lib/CodegenTypes';
import {Int32} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ImageSource} from '../../lib/ImageSource';
import {ColorValue} from '../../lib/StyleSheetTypes';
import {PointValue} from '../../lib/StyleSheetTypes';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type ObjectType = Readonly<{
  prop: string;
}>;

type ArrayObjectType = ReadonlyArray<Readonly<{
  prop: string;
}>>;

type ModuleProps = Readonly<ViewProps & {
  array_boolean_required: ReadonlyArray<boolean>;
  array_boolean_optional_key?: ReadonlyArray<boolean>;
  array_boolean_optional_value: (ReactNull | ReadonlyArray<boolean>);
  array_boolean_optional_both?: (ReactNull | ReadonlyArray<boolean>);
  array_string_required: ReadonlyArray<string>;
  array_string_optional_key?: ReadonlyArray<string>;
  array_string_optional_value: (ReactNull | ReadonlyArray<string>);
  array_string_optional_both?: (ReactNull | ReadonlyArray<string>);
  array_double_required: ReadonlyArray<Double>;
  array_double_optional_key?: ReadonlyArray<Double>;
  array_double_optional_value: (ReactNull | ReadonlyArray<Double>);
  array_double_optional_both?: (ReactNull | ReadonlyArray<Double>);
  array_float_required: ReadonlyArray<Float>;
  array_float_optional_key?: ReadonlyArray<Float>;
  array_float_optional_value: (ReactNull | ReadonlyArray<Float>);
  array_float_optional_both?: (ReactNull | ReadonlyArray<Float>);
  array_int32_required: ReadonlyArray<Int32>;
  array_int32_optional_key?: ReadonlyArray<Int32>;
  array_int32_optional_value: (ReactNull | ReadonlyArray<Int32>);
  array_int32_optional_both?: (ReactNull | ReadonlyArray<Int32>);
  array_enum_optional_key?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  array_enum_optional_both?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  array_image_required: ReadonlyArray<ImageSource>;
  array_image_optional_key?: ReadonlyArray<ImageSource>;
  array_image_optional_value: (ReactNull | ReadonlyArray<ImageSource>);
  array_image_optional_both?: (ReactNull | ReadonlyArray<ImageSource>);
  array_color_required: ReadonlyArray<ColorValue>;
  array_color_optional_key?: ReadonlyArray<ColorValue>;
  array_color_optional_value: (ReactNull | ReadonlyArray<ColorValue>);
  array_color_optional_both?: (ReactNull | ReadonlyArray<ColorValue>);
  array_point_required: ReadonlyArray<PointValue>;
  array_point_optional_key?: ReadonlyArray<PointValue>;
  array_point_optional_value: (ReactNull | ReadonlyArray<PointValue>);
  array_point_optional_both?: (ReactNull | ReadonlyArray<PointValue>);
  array_object_required: ReadonlyArray<Readonly<{
    prop: string;
  }>>;
  array_object_optional_key?: ReadonlyArray<Readonly<{
    prop: string;
  }>>;
  array_object_optional_value: (ReactNull | ArrayObjectType);
  array_object_optional_both?: (ReactNull | ReadonlyArray<ObjectType>);
  array_of_array_object_required: ReadonlyArray<Readonly<{
    array_object_required: ReadonlyArray<Readonly<{
      prop: string;
    }>>;
  }>>;
  array_of_array_object_optional_key?: ReadonlyArray<Readonly<{
    array_object_optional_key: ReadonlyArray<Readonly<{
      prop?: string;
    }>>;
  }>>;
  array_of_array_object_optional_value: (ReactNull | ReadonlyArray<Readonly<{
    array_object_optional_value: ReadonlyArray<Readonly<{
      prop: (ReactNull | string);
    }>>;
  }>>);
  array_of_array_object_optional_both?: (ReactNull | ReadonlyArray<Readonly<{
    array_object_optional_both: ReadonlyArray<Readonly<{
      prop?: (ReactNull | string);
    }>>;
  }>>);
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


