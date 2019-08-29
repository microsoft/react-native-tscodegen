
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from IntegerPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Int32} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type NativeProps = Readonly<ViewProps & {
  progress1?: WithDefault<Int32, 0>;
  progress2?: WithDefault<Int32, -1>;
  progress3?: WithDefault<Int32, 10>;
}>;

export default (codegenNativeComponent<NativeProps>('IntegerPropNativeComponentView') as NativeComponentType<NativeProps>);


