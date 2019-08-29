
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from MultiNativePropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ImageSource} from '../../lib/ImageSource';
import {ColorValue} from '../../lib/StyleSheetTypes';
import {PointValue} from '../../lib/StyleSheetTypes';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type NativeProps = Readonly<ViewProps & {
  thumbImage?: ImageSource;
  color?: ColorValue;
  thumbTintColor?: ColorValue;
  point?: PointValue;
}>;

export default (codegenNativeComponent<NativeProps>('MultiNativePropNativeComponentView') as NativeComponentType<NativeProps>);


