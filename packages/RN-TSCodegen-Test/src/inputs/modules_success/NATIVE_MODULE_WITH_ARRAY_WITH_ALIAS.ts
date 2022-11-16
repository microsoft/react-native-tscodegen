
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_ARRAY_WITH_ALIAS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export type SomeString = string;

export interface Spec extends TurboModule {
  getArray(arg: Array<SomeString>): Array<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


