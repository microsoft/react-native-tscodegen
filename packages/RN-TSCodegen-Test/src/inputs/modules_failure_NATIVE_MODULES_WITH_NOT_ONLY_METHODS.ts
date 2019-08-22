
// Automatically generated from modules_failure_NATIVE_MODULES_WITH_NOT_ONLY_METHODS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/failures.js)

import {TurboModule} from '../lib/RCTExport'
import * as TurboModuleRegistry from '../lib/TurboModuleRegistry';
'use strict';

export interface Spec extends TurboModule {
  getBool(arg: boolean): boolean;
  getNumber(arg: number): number;
  getString(arg: string): string;
  sampleBool: boolean;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


