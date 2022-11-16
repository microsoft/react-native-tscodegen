
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/DOUBLE_STATE_IN_FILE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
'use strict';

export type ModuleProps = Readonly<ViewProps & {
}>;

type SecondNativeState = Readonly<{
  someProp: boolean;
}>;

export type FirstNativeState = Readonly<{
  someOtherProp: boolean;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


