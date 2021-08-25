
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from EventNestedObjectPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {BubblingEventHandler} from 'react-native-tscodegen-types';
import {Int32} from 'react-native-tscodegen-types';
import {ReactNull} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {HostComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
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
  onChange?: (ReactNull | BubblingEventHandler<OnChangeEvent>);
}>;

export default (codegenNativeComponent<NativeProps>('EventNestedObjectPropsNativeComponentView') as HostComponent<NativeProps>);


