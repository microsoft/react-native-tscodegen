
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from BooleanPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {WithDefault} from 'react-native-tscodegen-types';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type NativeProps = Readonly<ViewProps & {
  disabled?: WithDefault<boolean, false>;
}>;

export default (codegenNativeComponent<NativeProps>('BooleanPropNativeComponentView') as NativeComponentType<NativeProps>);


