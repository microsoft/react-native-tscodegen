
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_WITH_FLOAT_AND_INT32.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {Float} from 'react-native-tscodegen-types';
import {Int32} from 'react-native-tscodegen-types';
import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export interface Spec extends TurboModule {
  getInt(arg: Int32): Int32;
  getFloat(arg: Float): Float;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


