
// Automatically generated from modules_success_NATIVE_MODULE_WITH_WITH_FLOAT_AND_INT32.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {Float} from '../lib/CodegenTypes';
import {Int32} from '../lib/CodegenTypes';
import {TurboModule} from '../lib/RCTExport'
import * as TurboModuleRegistry from '../lib/TurboModuleRegistry';
'use strict';

export interface Spec extends TurboModule {
  getInt(arg: Int32): Int32;
  getFloat(arg: Float): Float;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


