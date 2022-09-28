
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/STATE_ARRAY_MIXED_ENUM.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
'use strict';

export type ModuleProps = Readonly<ViewProps & {
}>;

export type ModuleNativeState = Readonly<{
  someProp?: WithDefault<ReadonlyArray<'foo' | 1>, 1>;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


