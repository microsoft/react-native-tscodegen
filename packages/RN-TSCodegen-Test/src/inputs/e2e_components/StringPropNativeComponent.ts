
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from StringPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
type NativeProps = Readonly<ViewProps & {
  placeholder?: WithDefault<string, ''>;
  defaultValue?: string;
}>;

export default (codegenNativeComponent<NativeProps>('StringPropNativeComponentView') as HostComponent<NativeProps>);


