
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/ALL_PROP_TYPES_NO_EVENTS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ProcessedColorValue} from 'react-native';
import {ColorValue} from 'react-native';
import {ImageSourcePropType as ImageSource} from 'react-native';
import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import {Double} from 'react-native/Libraries/Types/CodegenTypes';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
import {Stringish} from 'react-native-tscodegen-types';
import {ReactNull} from 'react-native-tscodegen-types';
import {ColorArrayValue} from 'react-native-tscodegen-types';
import {PointValue} from 'react-native-tscodegen-types';
import {EdgeInsetsValue} from 'react-native-tscodegen-types';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  boolean_required: boolean;
  boolean_optional_key?: WithDefault<boolean, true>;
  boolean_optional_both?: WithDefault<boolean, true>;
  boolean_null_optional_key?: WithDefault<boolean, null>;
  boolean_null_optional_both?: WithDefault<boolean, null>;
  string_required: string;
  string_optional_key?: WithDefault<string, ''>;
  string_optional_both?: WithDefault<string, ''>;
  string_null_optional_key?: WithDefault<string, null>;
  string_null_optional_both?: WithDefault<string, null>;
  stringish_required: Stringish;
  stringish_optional_key?: WithDefault<Stringish, ''>;
  stringish_optional_both?: WithDefault<Stringish, ''>;
  stringish_null_optional_key?: WithDefault<Stringish, null>;
  stringish_null_optional_both?: WithDefault<Stringish, null>;
  double_required: Double;
  double_optional_key?: WithDefault<Double, 1.1>;
  double_optional_both?: WithDefault<Double, 1.1>;
  float_required: Float;
  float_optional_key?: WithDefault<Float, 1.1>;
  float_optional_both?: WithDefault<Float, 1.1>;
  float_null_optional_key?: WithDefault<Float, null>;
  float_null_optional_both?: WithDefault<Float, null>;
  int32_required: Int32;
  int32_optional_key?: WithDefault<Int32, 1>;
  int32_optional_both?: WithDefault<Int32, 1>;
  enum_optional_key?: WithDefault<'small' | 'large', 'small'>;
  enum_optional_both?: WithDefault<'small' | 'large', 'small'>;
  int_enum_optional_key?: WithDefault<0 | 1, 0>;
  object_optional_key?: Readonly<{
    prop: string;
  }>;
  object_optional_both?: (ReactNull | Readonly<{
    prop: string;
  }>);
  object_optional_value: (ReactNull | Readonly<{
    prop: string;
  }>);
  image_required: ImageSource;
  image_optional_value: (ReactNull | ImageSource);
  image_optional_both?: (ReactNull | ImageSource);
  color_required: ColorValue;
  color_optional_key?: ColorValue;
  color_optional_value: (ReactNull | ColorValue);
  color_optional_both?: (ReactNull | ColorValue);
  color_array_required: ColorArrayValue;
  color_array_optional_key?: ColorArrayValue;
  color_array_optional_value: (ReactNull | ColorArrayValue);
  color_array_optional_both?: (ReactNull | ColorArrayValue);
  processed_color_required: ProcessedColorValue;
  processed_color_optional_key?: ProcessedColorValue;
  processed_color_optional_value: (ReactNull | ProcessedColorValue);
  processed_color_optional_both?: (ReactNull | ProcessedColorValue);
  point_required: PointValue;
  point_optional_key?: PointValue;
  point_optional_value: (ReactNull | PointValue);
  point_optional_both?: (ReactNull | PointValue);
  insets_required: EdgeInsetsValue;
  insets_optional_key?: EdgeInsetsValue;
  insets_optional_value: (ReactNull | EdgeInsetsValue);
  insets_optional_both?: (ReactNull | EdgeInsetsValue);
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


