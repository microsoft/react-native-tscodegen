
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from MultiNativePropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ImageSource} from 'react-native-tscodegen-types';
import {ColorValue} from 'react-native-tscodegen-types';
import {PointValue} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/../../../../../Libraries/Renderer/shims/ReactNativeTypes';

type NativeProps = Readonly<ViewProps & {
  thumbImage?: ImageSource;
  color?: ColorValue;
  thumbTintColor?: ColorValue;
  point?: PointValue;
}>;

export default (codegenNativeComponent<NativeProps>('MultiNativePropNativeComponentView') as HostComponent<NativeProps>);


