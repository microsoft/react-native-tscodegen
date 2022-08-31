
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/CXX_ONLY_NATIVE_MODULE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export interface Spec extends TurboModule {
  getCallback(): () => void;
  getMixed(arg: unknown): unknown;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModuleCxx');


