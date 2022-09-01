
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from EventNestedObjectPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
type OnChangeEvent = Readonly<{
  location: {
    source: {
      url: string;
    };
    x: Int32;
    y: Int32;
  };
}>;

type NativeProps = Readonly<ViewProps & {
  disabled?: WithDefault<boolean, false>;
  onChange?: (undefined | null | BubblingEventHandler<OnChangeEvent>);
}>;

export default (codegenNativeComponent<NativeProps>('EventNestedObjectPropsNativeComponentView') as HostComponent<NativeProps>);


