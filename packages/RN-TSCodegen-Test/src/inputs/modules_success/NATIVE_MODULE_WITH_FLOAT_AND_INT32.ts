
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_FLOAT_AND_INT32.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
'use strict';

export interface Spec extends TurboModule {
  getInt(arg: Int32): Int32;
  getFloat(arg: Float): Float;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


