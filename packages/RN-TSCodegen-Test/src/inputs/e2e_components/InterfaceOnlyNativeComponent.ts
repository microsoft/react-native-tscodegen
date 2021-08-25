
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from InterfaceOnlyNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {BubblingEventHandler} from 'react-native-tscodegen-types';
import {ReactNull} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {HostComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
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


