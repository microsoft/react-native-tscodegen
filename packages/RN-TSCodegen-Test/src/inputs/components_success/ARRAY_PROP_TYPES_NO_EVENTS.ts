
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/ARRAY_PROP_TYPES_NO_EVENTS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ColorValue} from 'react-native';
import {ImageSourcePropType as ImageSource} from 'react-native';
import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import {Double} from 'react-native/Libraries/Types/CodegenTypes';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
import {PointValue} from 'react-native-tscodegen-types';
import {EdgeInsetsValue} from 'react-native-tscodegen-types';
'use strict';

interface ObjectType {
  readonly prop: string;
}

type ArrayObjectType = ReadonlyArray<Readonly<{
  prop: string;
}>>;

interface ModuleProps extends ViewProps {
  readonly array_boolean_required: ReadonlyArray<boolean>;
  readonly array_boolean_optional_key?: ReadonlyArray<boolean>;
  readonly array_boolean_optional_value: (undefined | null | ReadonlyArray<boolean>);
  readonly array_boolean_optional_both?: (undefined | null | ReadonlyArray<boolean>);
  readonly array_string_required: ReadonlyArray<string>;
  readonly array_string_optional_key?: ReadonlyArray<string>;
  readonly array_string_optional_value: (undefined | null | ReadonlyArray<string>);
  readonly array_string_optional_both?: (undefined | null | ReadonlyArray<string>);
  readonly array_double_required: ReadonlyArray<Double>;
  readonly array_double_optional_key?: ReadonlyArray<Double>;
  readonly array_double_optional_value: (undefined | null | ReadonlyArray<Double>);
  readonly array_double_optional_both?: (undefined | null | ReadonlyArray<Double>);
  readonly array_float_required: ReadonlyArray<Float>;
  readonly array_float_optional_key?: ReadonlyArray<Float>;
  readonly array_float_optional_value: (undefined | null | ReadonlyArray<Float>);
  readonly array_float_optional_both?: (undefined | null | ReadonlyArray<Float>);
  readonly array_int32_required: ReadonlyArray<Int32>;
  readonly array_int32_optional_key?: ReadonlyArray<Int32>;
  readonly array_int32_optional_value: (undefined | null | ReadonlyArray<Int32>);
  readonly array_int32_optional_both?: (undefined | null | ReadonlyArray<Int32>);
  readonly array_enum_optional_key?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  readonly array_enum_optional_both?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  readonly array_image_required: ReadonlyArray<ImageSource>;
  readonly array_image_optional_key?: ReadonlyArray<ImageSource>;
  readonly array_image_optional_value: (undefined | null | ReadonlyArray<ImageSource>);
  readonly array_image_optional_both?: (undefined | null | ReadonlyArray<ImageSource>);
  readonly array_color_required: ReadonlyArray<ColorValue>;
  readonly array_color_optional_key?: ReadonlyArray<ColorValue>;
  readonly array_color_optional_value: (undefined | null | ReadonlyArray<ColorValue>);
  readonly array_color_optional_both?: (undefined | null | ReadonlyArray<ColorValue>);
  readonly array_point_required: ReadonlyArray<PointValue>;
  readonly array_point_optional_key?: ReadonlyArray<PointValue>;
  readonly array_point_optional_value: (undefined | null | ReadonlyArray<PointValue>);
  readonly array_point_optional_both?: (undefined | null | ReadonlyArray<PointValue>);
  readonly array_insets_required: ReadonlyArray<EdgeInsetsValue>;
  readonly array_insets_optional_key?: ReadonlyArray<EdgeInsetsValue>;
  readonly array_insets_optional_value: (undefined | null | ReadonlyArray<EdgeInsetsValue>);
  readonly array_insets_optional_both?: (undefined | null | ReadonlyArray<EdgeInsetsValue>);
  readonly array_object_required: ReadonlyArray<Readonly<{
    prop: string;
  }>>;
  readonly array_object_optional_key?: ReadonlyArray<Readonly<{
    prop: string;
  }>>;
  readonly array_object_optional_value: (undefined | null | ArrayObjectType);
  readonly array_object_optional_both?: (undefined | null | ReadonlyArray<ObjectType>);
  readonly array_of_array_object_required: ReadonlyArray<Readonly<{
    array_object_required: ReadonlyArray<Readonly<{
      prop: string;
    }>>;
  }>>;
  readonly array_of_array_object_optional_key?: ReadonlyArray<Readonly<{
    array_object_optional_key: ReadonlyArray<Readonly<{
      prop?: string;
    }>>;
  }>>;
  readonly array_of_array_object_optional_value: (undefined | null | ReadonlyArray<Readonly<{
    array_object_optional_value: ReadonlyArray<Readonly<{
      prop: (undefined | null | string);
    }>>;
  }>>);
  readonly array_of_array_object_optional_both?: (undefined | null | ReadonlyArray<Readonly<{
    array_object_optional_both: ReadonlyArray<Readonly<{
      prop?: (undefined | null | string);
    }>>;
  }>>);
  readonly array_of_array_of_object_required: ReadonlyArray<ReadonlyArray<Readonly<{
    prop: string;
  }>>>;
  readonly array_of_array_of_object_required_in_file: ReadonlyArray<ReadonlyArray<ObjectType>>;
  readonly array_of_array_of_object_required_with_spread: ReadonlyArray<ReadonlyArray<Readonly<ObjectType & {
  }>>>;
}

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


