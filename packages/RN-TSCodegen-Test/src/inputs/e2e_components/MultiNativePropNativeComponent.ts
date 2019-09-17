
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from MultiNativePropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ImageSource} from 'react-native-tscodegen-types';
import {ColorValue} from 'react-native-tscodegen-types';
import {PointValue} from 'react-native-tscodegen-types';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type NativeProps = Readonly<ViewProps & {
  thumbImage?: ImageSource;
  color?: ColorValue;
  thumbTintColor?: ColorValue;
  point?: PointValue;
}>;

export default (codegenNativeComponent<NativeProps>('MultiNativePropNativeComponentView') as NativeComponentType<NativeProps>);


