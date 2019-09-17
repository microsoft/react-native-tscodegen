
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from StringPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponentType} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

type NativeProps = Readonly<ViewProps & {
  placeholder?: WithDefault<string, ''>;
  defaultValue?: string;
}>;

export default (codegenNativeComponent<NativeProps>('StringPropNativeComponentView') as NativeComponentType<NativeProps>);


