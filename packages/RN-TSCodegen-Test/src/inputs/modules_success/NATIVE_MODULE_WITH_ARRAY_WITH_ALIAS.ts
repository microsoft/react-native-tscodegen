
// Automatically generated from modules_success/NATIVE_MODULE_WITH_ARRAY_WITH_ALIAS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export type SomeString = string;

export interface Spec extends TurboModule {
  getArray(arg: Array<SomeString>): Array<string>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


