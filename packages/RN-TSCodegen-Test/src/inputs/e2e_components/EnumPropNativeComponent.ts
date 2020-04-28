
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from EnumPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/../../../../../Libraries/Renderer/shims/ReactNativeTypes';

type NativeProps = Readonly<ViewProps & {
  alignment?: WithDefault<'top' | 'center' | 'bottom-right', 'center'>;
  intervals?: WithDefault<0 | 15 | 30 | 60, 0>;
}>;

export default (codegenNativeComponent<NativeProps>('EnumPropNativeComponentView') as HostComponent<NativeProps>);


