
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from EventNestedObjectPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {BubblingEventHandler} from '../../lib/CodegenTypes';
import {Int32} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

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

export default (codegenNativeComponent<NativeProps>('EventNestedObjectPropsNativeComponentView') as NativeComponentType<NativeProps>);


