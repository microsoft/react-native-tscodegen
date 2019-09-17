
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from FloatPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Float} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponentType} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

type NativeProps = Readonly<ViewProps & {
  blurRadius: Float;
  blurRadius2?: WithDefault<Float, 0.001>;
  blurRadius3?: WithDefault<Float, 2.1>;
  blurRadius4?: WithDefault<Float, 0>;
  blurRadius5?: WithDefault<Float, 1>;
  blurRadius6?: WithDefault<Float, -0.0>;
}>;

export default (codegenNativeComponent<NativeProps>('FloatPropsNativeComponentView') as NativeComponentType<NativeProps>);


