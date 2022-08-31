
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from BooleanPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
type NativeProps = Readonly<ViewProps & {
  disabled?: WithDefault<boolean, false>;
  disabledNullable?: WithDefault<boolean, null>;
}>;

export default (codegenNativeComponent<NativeProps>('BooleanPropNativeComponentView') as HostComponent<NativeProps>);


