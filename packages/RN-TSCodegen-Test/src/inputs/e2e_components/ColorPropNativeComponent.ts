
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from ColorPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ColorValue} from 'react-native-tscodegen-types';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type NativeProps = Readonly<ViewProps & {
  tintColor?: ColorValue;
}>;

export default (codegenNativeComponent<NativeProps>('ColorPropNativeComponentView') as NativeComponentType<NativeProps>);


