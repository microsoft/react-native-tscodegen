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

type ModuleProps = Readonly<ViewProps & {

  // Props
  // Boolean props
  boolean_required: Readonly<{prop: boolean}>;
  boolean_optional: Readonly<{prop?: WithDefault<boolean, false>}>;

  // String props
  string_required: Readonly<{prop: string}>;
  string_optional: Readonly<{prop?: WithDefault<string, ''>}>;

  // Double props
  double_required: Readonly<{prop: Double}>;
  double_optional: Readonly<{prop?: WithDefault<Double, 0.0>}>;

  // Float props
  float_required: Readonly<{prop: Float}>;
  float_optional: Readonly<{prop?: WithDefault<Float, 0.0>}>;

  // Int32 props
  int_required: Readonly<{prop: Int32}>;
  int_optional: Readonly<{prop?: WithDefault<Int32, 0>}>;

  // String enum props
  enum_optional: Readonly<{
    prop?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  }>;

  // ImageSource props
  image_required: Readonly<{prop: ImageSource}>;
  image_optional_key: Readonly<{prop?: ImageSource}>;
  image_optional_value: Readonly<{prop: ReactNull | ImageSource}>;
  image_optional_both: Readonly<{prop?: ReactNull | ImageSource}>;

  // ColorValue props
  color_required: Readonly<{prop: ColorValue}>;
  color_optional_key: Readonly<{prop?: ColorValue}>;
  color_optional_value: Readonly<{prop: ReactNull | ColorValue}>;
  color_optional_both: Readonly<{prop?: ReactNull | ColorValue}>;

  // PointValue props
  point_required: Readonly<{prop: PointValue}>;
  point_optional_key: Readonly<{prop?: PointValue}>;
  point_optional_value: Readonly<{prop: ReactNull | PointValue}>;
  point_optional_both: Readonly<{prop?: ReactNull | PointValue}>;

  // Nested object props
  object_required: Readonly<{prop: Readonly<{nestedProp: string}>}>;
  object_optional_key?: Readonly<{prop: Readonly<{nestedProp: string}>}>;
  object_optional_value: ReactNull | Readonly<{prop: Readonly<{nestedProp: string}>}>;
  object_optional_both?: ReactNull | Readonly<{prop: Readonly<{nestedProp: string}>}>;
}>;

export default (codegenNativeComponent<ModuleProps>(
  'Module',
): NativeComponent<ModuleProps>);
