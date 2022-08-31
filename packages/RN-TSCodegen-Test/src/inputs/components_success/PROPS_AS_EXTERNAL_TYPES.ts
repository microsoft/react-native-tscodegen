
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/PROPS_AS_EXTERNAL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
'use strict';

export type String = string;

export type AnotherArray = ReadonlyArray<String>;

export type ModuleProps = Readonly<{
  disable: String;
  array: AnotherArray;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


