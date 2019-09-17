
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from StringPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {WithDefault} from 'react-native-tscodegen-types';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type NativeProps = Readonly<ViewProps & {
  placeholder?: WithDefault<string, ''>;
  defaultValue?: string;
}>;

export default (codegenNativeComponent<NativeProps>('StringPropNativeComponentView') as NativeComponentType<NativeProps>);


