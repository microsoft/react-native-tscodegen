
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/ALL_PROP_TYPES_NO_EVENTS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {Float} from 'react-native-tscodegen-types';
import {Double} from 'react-native-tscodegen-types';
import {Int32} from 'react-native-tscodegen-types';
import {Stringish} from 'react-native-tscodegen-types';
import {ReactNull} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {ImageSource} from 'react-native-tscodegen-types';
import {ColorValue} from 'react-native-tscodegen-types';
import {ColorArrayValue} from 'react-native-tscodegen-types';
import {PointValue} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  boolean_required: boolean;
  boolean_optional_key?: WithDefault<boolean, true>;
  boolean_optional_both?: WithDefault<boolean, true>;
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
  int32_required: Int32;
  int32_optional_key?: WithDefault<Int32, 1>;
  int32_optional_both?: WithDefault<Int32, 1>;
  enum_optional_key?: WithDefault<'small' | 'large', 'small'>;
  enum_optional_both?: WithDefault<'small' | 'large', 'small'>;
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
  point_required: PointValue;
  point_optional_key?: PointValue;
  point_optional_value: (ReactNull | PointValue);
  point_optional_both?: (ReactNull | PointValue);
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


