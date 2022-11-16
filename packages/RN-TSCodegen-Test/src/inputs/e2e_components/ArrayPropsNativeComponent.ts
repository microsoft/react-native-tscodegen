
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from ArrayPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ColorValue} from 'react-native';
import {ImageSourcePropType as ImageSource} from 'react-native';
import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
import {PointValue} from 'react-native-tscodegen-types';
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

export default (codegenNativeComponent<NativeProps>('ArrayPropsNativeComponentView') as HostComponent<NativeProps>);


