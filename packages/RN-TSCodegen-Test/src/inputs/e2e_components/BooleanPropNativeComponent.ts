
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from BooleanPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/../../../../../Libraries/Renderer/shims/ReactNativeTypes';

type NativeProps = Readonly<ViewProps & {
  disabled?: WithDefault<boolean, false>;
  disabledNullable?: WithDefault<boolean, null>;
}>;

export default (codegenNativeComponent<NativeProps>('BooleanPropNativeComponentView') as HostComponent<NativeProps>);


