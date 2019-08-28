
// Automatically generated from modules_success/NATIVE_MODULE_WITH_BASIC_ARRAY.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export interface Spec extends TurboModule {
  getArray(arg: Array<string>): Array<string>;
  getArray(arg: ReadonlyArray<string>): ReadonlyArray<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


