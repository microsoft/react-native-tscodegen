
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_CALLBACK.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export interface Spec extends TurboModule {
  getValueWithCallback(callback: (value: string, arr: Array<Array<string>>) => void): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


