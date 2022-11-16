
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from FloatPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
type NativeProps = Readonly<ViewProps & {
  blurRadius: Float;
  blurRadius2?: WithDefault<Float, 0.001>;
  blurRadius3?: WithDefault<Float, 2.1>;
  blurRadius4?: WithDefault<Float, 0>;
  blurRadius5?: WithDefault<Float, 1>;
  blurRadius6?: WithDefault<Float, -0.0>;
  blurRadiusNullable?: WithDefault<Float, null>;
}>;

export default (codegenNativeComponent<NativeProps>('FloatPropsNativeComponentView') as HostComponent<NativeProps>);


