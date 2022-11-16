
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
import {ColorArrayValue} from 'react-native-tscodegen-types';
import {PointValue} from 'react-native-tscodegen-types';
import {EdgeInsetsValue} from 'react-native-tscodegen-types';
'use strict';

interface ModuleProps extends ViewProps {
  readonly boolean_required: boolean;
  readonly boolean_optional_key?: WithDefault<boolean, true>;
  readonly boolean_optional_both?: WithDefault<boolean, true>;
  readonly boolean_null_optional_key?: WithDefault<boolean, null>;
  readonly boolean_null_optional_both?: WithDefault<boolean, null>;
  readonly string_required: string;
  readonly string_optional_key?: WithDefault<string, ''>;
  readonly string_optional_both?: WithDefault<string, ''>;
  readonly string_null_optional_key?: WithDefault<string, null>;
  readonly string_null_optional_both?: WithDefault<string, null>;
  readonly stringish_required: Stringish;
  readonly stringish_optional_key?: WithDefault<Stringish, ''>;
  readonly stringish_optional_both?: WithDefault<Stringish, ''>;
  readonly stringish_null_optional_key?: WithDefault<Stringish, null>;
  readonly stringish_null_optional_both?: WithDefault<Stringish, null>;
  readonly double_required: Double;
  readonly double_optional_key?: WithDefault<Double, 1.1>;
  readonly double_optional_both?: WithDefault<Double, 1.1>;
  readonly float_required: Float;
  readonly float_optional_key?: WithDefault<Float, 1.1>;
  readonly float_optional_both?: WithDefault<Float, 1.1>;
  readonly float_null_optional_key?: WithDefault<Float, null>;
  readonly float_null_optional_both?: WithDefault<Float, null>;
  readonly int32_required: Int32;
  readonly int32_optional_key?: WithDefault<Int32, 1>;
  readonly int32_optional_both?: WithDefault<Int32, 1>;
  readonly enum_optional_key?: WithDefault<'small' | 'large', 'small'>;
  readonly enum_optional_both?: WithDefault<'small' | 'large', 'small'>;
  readonly int_enum_optional_key?: WithDefault<0 | 1, 0>;
  readonly object_optional_key?: Readonly<{
    prop: string;
  }>;
  readonly object_optional_both?: (undefined | null | Readonly<{
    prop: string;
  }>);
  readonly object_optional_value: (undefined | null | Readonly<{
    prop: string;
  }>);
  readonly image_required: ImageSource;
  readonly image_optional_value: (undefined | null | ImageSource);
  readonly image_optional_both?: (undefined | null | ImageSource);
  readonly color_required: ColorValue;
  readonly color_optional_key?: ColorValue;
  readonly color_optional_value: (undefined | null | ColorValue);
  readonly color_optional_both?: (undefined | null | ColorValue);
  readonly color_array_required: ColorArrayValue;
  readonly color_array_optional_key?: ColorArrayValue;
  readonly color_array_optional_value: (undefined | null | ColorArrayValue);
  readonly color_array_optional_both?: (undefined | null | ColorArrayValue);
  readonly processed_color_required: ProcessedColorValue;
  readonly processed_color_optional_key?: ProcessedColorValue;
  readonly processed_color_optional_value: (undefined | null | ProcessedColorValue);
  readonly processed_color_optional_both?: (undefined | null | ProcessedColorValue);
  readonly point_required: PointValue;
  readonly point_optional_key?: PointValue;
  readonly point_optional_value: (undefined | null | PointValue);
  readonly point_optional_both?: (undefined | null | PointValue);
  readonly insets_required: EdgeInsetsValue;
  readonly insets_optional_key?: EdgeInsetsValue;
  readonly insets_optional_value: (undefined | null | EdgeInsetsValue);
  readonly insets_optional_both?: (undefined | null | EdgeInsetsValue);
}

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


