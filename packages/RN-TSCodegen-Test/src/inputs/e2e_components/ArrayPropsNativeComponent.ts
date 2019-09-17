
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from ArrayPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Float} from 'react-native-tscodegen-types';
import {Int32} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {ImageSource} from 'react-native-tscodegen-types';
import {ColorValue} from 'react-native-tscodegen-types';
import {PointValue} from 'react-native-tscodegen-types';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type NativeProps = Readonly<ViewProps & {
  names?: ReadonlyArray<string>;
  disableds?: ReadonlyArray<boolean>;
  progress?: ReadonlyArray<Int32>;
  radii?: ReadonlyArray<Float>;
  colors?: ReadonlyArray<ColorValue>;
  srcs?: ReadonlyArray<ImageSource>;
  points?: ReadonlyArray<PointValue>;
  sizes?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  object?: ReadonlyArray<Readonly<{
    prop: string;
  }>>;
}>;

export default (codegenNativeComponent<NativeProps>('ArrayPropsNativeComponentView') as NativeComponentType<NativeProps>);


