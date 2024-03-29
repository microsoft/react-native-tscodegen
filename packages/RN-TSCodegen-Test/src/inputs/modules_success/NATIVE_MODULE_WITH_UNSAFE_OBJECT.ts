
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_UNSAFE_OBJECT.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
import {UnsafeObject} from 'react-native/Libraries/Types/CodegenTypes';
'use strict';

export interface Spec extends TurboModule {
  getUnsafeObject(o: UnsafeObject): UnsafeObject;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


