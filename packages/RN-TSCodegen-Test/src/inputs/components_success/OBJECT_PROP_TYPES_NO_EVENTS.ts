
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
import {PointValue} from 'react-native-tscodegen-types';
import {EdgeInsetsValue} from 'react-native-tscodegen-types';
import {DimensionValue} from 'react-native-tscodegen-types';
'use strict';

interface ModuleProps extends ViewProps {
  readonly boolean_required: Readonly<{
    prop: boolean;
  }>;
  readonly boolean_optional: Readonly<{
    prop?: WithDefault<boolean, false>;
  }>;
  readonly string_required: Readonly<{
    prop: string;
  }>;
  readonly string_optional: Readonly<{
    prop?: WithDefault<string, ''>;
  }>;
  readonly double_required: Readonly<{
    prop: Double;
  }>;
  readonly double_optional: Readonly<{
    prop?: WithDefault<Double, 0.0>;
  }>;
  readonly float_required: Readonly<{
    prop: Float;
  }>;
  readonly float_optional: Readonly<{
    prop?: WithDefault<Float, 0.0>;
  }>;
  readonly int_required: Readonly<{
    prop: Int32;
  }>;
  readonly int_optional: Readonly<{
    prop?: WithDefault<Int32, 0>;
  }>;
  readonly enum_optional: Readonly<{
    prop?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  }>;
  readonly image_required: Readonly<{
    prop: ImageSource;
  }>;
  readonly image_optional_key: Readonly<{
    prop?: ImageSource;
  }>;
  readonly image_optional_value: Readonly<{
    prop: (undefined | null | ImageSource);
  }>;
  readonly image_optional_both: Readonly<{
    prop?: (undefined | null | ImageSource);
  }>;
  readonly color_required: Readonly<{
    prop: ColorValue;
  }>;
  readonly color_optional_key: Readonly<{
    prop?: ColorValue;
  }>;
  readonly color_optional_value: Readonly<{
    prop: (undefined | null | ColorValue);
  }>;
  readonly color_optional_both: Readonly<{
    prop?: (undefined | null | ColorValue);
  }>;
  readonly processed_color_required: Readonly<{
    prop: ProcessedColorValue;
  }>;
  readonly processed_color_optional_key: Readonly<{
    prop?: ProcessedColorValue;
  }>;
  readonly processed_color_optional_value: Readonly<{
    prop: (undefined | null | ProcessedColorValue);
  }>;
  readonly processed_color_optional_both: Readonly<{
    prop?: (undefined | null | ProcessedColorValue);
  }>;
  readonly point_required: Readonly<{
    prop: PointValue;
  }>;
  readonly point_optional_key: Readonly<{
    prop?: PointValue;
  }>;
  readonly point_optional_value: Readonly<{
    prop: (undefined | null | PointValue);
  }>;
  readonly point_optional_both: Readonly<{
    prop?: (undefined | null | PointValue);
  }>;
  readonly insets_required: Readonly<{
    prop: EdgeInsetsValue;
  }>;
  readonly insets_optional_key: Readonly<{
    prop?: EdgeInsetsValue;
  }>;
  readonly insets_optional_value: Readonly<{
    prop: (undefined | null | EdgeInsetsValue);
  }>;
  readonly insets_optional_both: Readonly<{
    prop?: (undefined | null | EdgeInsetsValue);
  }>;
  readonly dimension_required: Readonly<{
    prop: DimensionValue;
  }>;
  readonly dimension_optional_key: Readonly<{
    prop?: DimensionValue;
  }>;
  readonly dimension_optional_value: Readonly<{
    prop: (undefined | null | DimensionValue);
  }>;
  readonly dimension_optional_both: Readonly<{
    prop?: (undefined | null | DimensionValue);
  }>;
  readonly object_required: Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>;
  readonly object_optional_key?: Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>;
  readonly object_optional_value: (undefined | null | Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>);
  readonly object_optional_both?: (undefined | null | Readonly<{
    prop: Readonly<{
      nestedProp: string;
    }>;
  }>);
}

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


