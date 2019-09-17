
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from IntegerPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Int32} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

type NativeProps = Readonly<ViewProps & {
  progress1?: WithDefault<Int32, 0>;
  progress2?: WithDefault<Int32, -1>;
  progress3?: WithDefault<Int32, 10>;
}>;

export default (codegenNativeComponent<NativeProps>('IntegerPropNativeComponentView') as NativeComponentType<NativeProps>);


