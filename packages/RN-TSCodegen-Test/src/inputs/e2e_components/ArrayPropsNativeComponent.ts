
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
import {EdgeInsetsValue} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {HostComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

type NativeProps = Readonly<ViewProps & {
  names?: ReadonlyArray<string>;
  disableds?: ReadonlyArray<boolean>;
  progress?: ReadonlyArray<Int32>;
  radii?: ReadonlyArray<Float>;
  colors?: ReadonlyArray<ColorValue>;
  srcs?: ReadonlyArray<ImageSource>;
  points?: ReadonlyArray<PointValue>;
  edgeInsets?: ReadonlyArray<EdgeInsetsValue>;
  sizes?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  object?: ReadonlyArray<Readonly<{
    prop: string;
  }>>;
}>;

export default (codegenNativeComponent<NativeProps>('ArrayPropsNativeComponentView') as HostComponent<NativeProps>);


