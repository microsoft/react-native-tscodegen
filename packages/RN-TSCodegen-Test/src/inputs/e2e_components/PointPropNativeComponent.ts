
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from PointPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {PointValue} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

type NativeProps = Readonly<ViewProps & {
  startPoint?: PointValue;
}>;

export default (codegenNativeComponent<NativeProps>('PointPropNativeComponentView') as NativeComponentType<NativeProps>);


