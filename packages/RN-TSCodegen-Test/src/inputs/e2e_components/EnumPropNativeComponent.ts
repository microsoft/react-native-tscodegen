
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from EnumPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponentType} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

type NativeProps = Readonly<ViewProps & {
  alignment?: WithDefault<'top' | 'center' | 'bottom-right', 'center'>;
}>;

export default (codegenNativeComponent<NativeProps>('EnumPropNativeComponentView') as NativeComponentType<NativeProps>);


