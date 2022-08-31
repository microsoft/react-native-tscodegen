
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from InterfaceOnlyNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
import {ReactNull} from 'react-native-tscodegen-types';
type NativeProps = Readonly<ViewProps & {
  title?: WithDefault<string, ''>;
  onChange?: (ReactNull | BubblingEventHandler<Readonly<{
    value: boolean;
  }>>);
}>;

export default (codegenNativeComponent<NativeProps>('InterfaceOnlyNativeComponentView', {
  interfaceOnly: true,
  paperComponentName: 'RCTInterfaceOnlyComponent'
}) as HostComponent<NativeProps>);


