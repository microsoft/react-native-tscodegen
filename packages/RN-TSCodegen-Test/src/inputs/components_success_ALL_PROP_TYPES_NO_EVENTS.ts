

import {
  BubblingEvent,
  BubblingEventHandler,
  DirectEvent,
  DirectEventHandler,
  Float,
  Int32,
  NotString,
  Options,
  Stringish,
  WithDefault,
} from '../lib/CodegenTypes';
import * as React from '../lib/React';


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

import codegenNativeComponent = require('../lib/codegenNativeComponent');



import {ColorValue, ColorArrayValue, PointValue} from '../lib/StyleSheetTypes';
import {ImageSource} from '../lib/ImageSource';
import {ViewProps} from '../lib/ViewPropTypes';

type ModuleProps = Readonly<ViewProps & {

  // Props
  // Boolean props
  boolean_required: boolean;
  boolean_optional_key?: WithDefault<boolean, true>;
  boolean_optional_both?: WithDefault<boolean, true>;

  // String props
  string_required: string;
  string_optional_key?: WithDefault<string, ''>;
  string_optional_both?: WithDefault<string, ''>;

  // String props, null default
  string_null_optional_key?: WithDefault<string, null>;
  string_null_optional_both?: WithDefault<string, null>;

  // Stringish props
  stringish_required: Stringish;
  stringish_optional_key?: WithDefault<Stringish, ''>;
  stringish_optional_both?: WithDefault<Stringish, ''>;

  // Stringish props, null default
  stringish_null_optional_key?: WithDefault<Stringish, null>;
  stringish_null_optional_both?: WithDefault<Stringish, null>;

  // Float props
  float_required: Float;
  float_optional_key?: WithDefault<Float, 1.1>;
  float_optional_both?: WithDefault<Float, 1.1>;

  // Int32 props
  int32_required: Int32;
  int32_optional_key?: WithDefault<Int32, 1>;
  int32_optional_both?: WithDefault<Int32, 1>;

  // String enum props
  enum_optional_key?: WithDefault<('small' | 'large'), 'small'>;
  enum_optional_both?: WithDefault<('small' | 'large'), 'small'>;

  // ImageSource props
  image_required: ImageSource;
  image_optional_value: null | undefined | ImageSource;
  image_optional_both?: null | undefined | ImageSource;

  // ColorValue props
  color_required: ColorValue;
  color_optional_key?: ColorValue;
  color_optional_value: null | undefined | ColorValue;
  color_optional_both?: null | undefined | ColorValue;

  // ColorArrayValue props
  color_array_required: ColorArrayValue;
  color_array_optional_key?: ColorArrayValue;
  color_array_optional_value: null | undefined | ColorArrayValue;
  color_array_optional_both?: null | undefined | ColorArrayValue;

  // PointValue props
  point_required: PointValue;
  point_optional_key?: PointValue;
  point_optional_value: null | undefined | PointValue;
  point_optional_both?: null | undefined | PointValue;
}>;

export default codegenNativeComponent<ModuleProps, Options>('Module');
