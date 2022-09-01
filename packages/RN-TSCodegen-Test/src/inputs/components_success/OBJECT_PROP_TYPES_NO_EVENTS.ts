
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/OBJECT_PROP_TYPES_NO_EVENTS.flow.js
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
import {ReactNull} from 'react-native-tscodegen-types';
import {PointValue} from 'react-native-tscodegen-types';
import {EdgeInsetsValue} from 'react-native-tscodegen-types';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  boolean_required: Readonly<{
    prop: boolean;
  }>;
  boolean_optional: Readonly<{
    prop?: WithDefault<boolean, false>;
  }>;
  string_required: Readonly<{
    prop: string;
  }>;
  string_optional: Readonly<{
    prop?: WithDefault<string, ''>;
  }>;
  double_required: Readonly<{
    prop: Double;
  }>;
  double_optional: Readonly<{
    prop?: WithDefault<Double, 0.0>;
  }>;
  float_required: Readonly<{
    prop: Float;
  }>;
  float_optional: Readonly<{
    prop?: WithDefault<Float, 0.0>;
  }>;
  int_required: Readonly<{
    prop: Int32;
  }>;
  int_optional: Readonly<{
    prop?: WithDefault<Int32, 0>;
  }>;
  enum_optional: Readonly<{
    prop?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  }>;
  image_required: Readonly<{
    prop: ImageSource;
  }>;
  image_optional_key: Readonly<{
    prop?: ImageSource;
  }>;
  image_optional_value: Readonly<{
    prop: (ReactNull | ImageSource);
  }>;
  image_optional_both: Readonly<{
    prop?: (ReactNull | ImageSource);
  }>;
  color_required: Readonly<{
    prop: ColorValue;
  }>;
  color_optional_key: Readonly<{
    prop?: ColorValue;
  }>;
  color_optional_value: Readonly<{
    prop: (ReactNull | ColorValue);
  }>;
  color_optional_both: Readonly<{
    prop?: (ReactNull | ColorValue);
  }>;
  processed_color_required: Readonly<{
    prop: ProcessedColorValue;
  }>;
  processed_color_optional_key: Readonly<{
    prop?: ProcessedColorValue;
  }>;
  processed_color_optional_value: Readonly<{
    prop: (ReactNull | ProcessedColorValue);
  }>;
  processed_color_optional_both: Readonly<{
    prop?: (ReactNull | ProcessedColorValue);
  }>;
  point_required: Readonly<{
    prop: PointValue;
  }>;
  point_optional_key: Readonly<{
    prop?: PointValue;
  }>;
  point_optional_value: Readonly<{
    prop: (ReactNull | PointValue);
  }>;
  point_optional_both: Readonly<{
    prop?: (ReactNull | PointValue);
  }>;
  insets_required: Readonly<{
    prop: EdgeInsetsValue;
  }>;
  insets_optional_key: Readonly<{
    prop?: EdgeInsetsValue;
  }>;
  insets_optional_value: Readonly<{
    prop: (ReactNull | EdgeInsetsValue);
  }>;
  insets_optional_both: Readonly<{
    prop?: (ReactNull | EdgeInsetsValue);
  }>;
  object_required: Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>;
  object_optional_key?: Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>;
  object_optional_value: (ReactNull | Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>);
  object_optional_both?: (ReactNull | Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>);
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


