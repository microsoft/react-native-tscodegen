
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from PointPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {PointValue} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/../../../../../Libraries/Renderer/shims/ReactNativeTypes';

type NativeProps = Readonly<ViewProps & {
  startPoint?: PointValue;
}>;

export default (codegenNativeComponent<NativeProps>('PointPropNativeComponentView') as HostComponent<NativeProps>);


