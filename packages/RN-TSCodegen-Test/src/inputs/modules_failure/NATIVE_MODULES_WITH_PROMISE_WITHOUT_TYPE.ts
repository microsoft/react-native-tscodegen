
// Automatically generated from modules_failure/NATIVE_MODULES_WITH_PROMISE_WITHOUT_TYPE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/failures.js)

import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export interface Spec extends TurboModule {
  getBool(arg: boolean): Promise;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


