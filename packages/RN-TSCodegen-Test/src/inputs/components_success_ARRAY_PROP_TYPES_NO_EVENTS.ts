

import {
  BubblingEventHandler,
  DirectEventHandler,
  Float,
  Int32,
  NotString,
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



import {ColorValue, PointValue} from '../lib/StyleSheetTypes';
import {ImageSource} from '../lib/ImageSource';
import {ViewProps} from '../lib/ViewPropTypes';

type ModuleProps = Readonly<ViewProps & {

  // Props
  // Boolean props
  array_boolean_required: ReadonlyArray<boolean>;
  array_boolean_optional_key?: ReadonlyArray<boolean>;
  array_boolean_optional_value: null | undefined | ReadonlyArray<boolean>;
  array_boolean_optional_both?: null | undefined | ReadonlyArray<boolean>;

  // String props
  array_string_required: ReadonlyArray<string>;
  array_string_optional_key?: ReadonlyArray<string>;
  array_string_optional_value: null | undefined | ReadonlyArray<string>;
  array_string_optional_both?: null | undefined | ReadonlyArray<string>;

  // Float props
  array_float_required: ReadonlyArray<Float>;
  array_float_optional_key?: ReadonlyArray<Float>;
  array_float_optional_value: null | undefined | ReadonlyArray<Float>;
  array_float_optional_both?: null | undefined | ReadonlyArray<Float>;

  // Int32 props
  array_int32_required: ReadonlyArray<Int32>;
  array_int32_optional_key?: ReadonlyArray<Int32>;
  array_int32_optional_value: null | undefined | ReadonlyArray<Int32>;
  array_int32_optional_both?: null | undefined | ReadonlyArray<Int32>;

  // String enum props
  array_enum_optional_key?: WithDefault<ReadonlyArray<('small' | 'large')>, 'small'>;
  array_enum_optional_both?: WithDefault<ReadonlyArray<('small' | 'large')>, 'small'>;

  // ImageSource props
  array_image_required: ReadonlyArray<ImageSource>;
  array_image_optional_key?: ReadonlyArray<ImageSource>;
  array_image_optional_value: null | undefined | ReadonlyArray<ImageSource>;
  array_image_optional_both?: null | undefined | ReadonlyArray<ImageSource>;

  // ColorValue props
  array_color_required: ReadonlyArray<ColorValue>;
  array_color_optional_key?: ReadonlyArray<ColorValue>;
  array_color_optional_value: null | undefined | ReadonlyArray<ColorValue>;
  array_color_optional_both?: null | undefined | ReadonlyArray<ColorValue>;

  // PointValue props
  array_point_required: ReadonlyArray<PointValue>;
  array_point_optional_key?: ReadonlyArray<PointValue>;
  array_point_optional_value: null | undefined | ReadonlyArray<PointValue>;
  array_point_optional_both?: null | undefined | ReadonlyArray<PointValue>;
}>;

export default codegenNativeComponent<ModuleProps>('Module');
