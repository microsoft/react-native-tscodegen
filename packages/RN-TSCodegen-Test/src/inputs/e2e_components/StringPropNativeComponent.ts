
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from StringPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {WithDefault} from '../../lib/CodegenTypes';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type NativeProps = Readonly<ViewProps & {
  accessibilityHint?: WithDefault<string, ''>;
  accessibilityRole?: string;
}>;

export default (codegenNativeComponent<NativeProps>('StringPropNativeComponentView') as NativeComponentType<NativeProps>);


