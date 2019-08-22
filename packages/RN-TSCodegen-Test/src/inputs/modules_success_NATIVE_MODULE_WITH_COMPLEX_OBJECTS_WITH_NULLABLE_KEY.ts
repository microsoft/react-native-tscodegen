
// Automatically generated from modules_success_NATIVE_MODULE_WITH_COMPLEX_OBJECTS_WITH_NULLABLE_KEY.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {ReactNull} from '../lib/CodegenTypes';
import {TurboModule} from '../lib/RCTExport'
import * as TurboModuleRegistry from '../lib/TurboModuleRegistry';
'use strict';

export interface Spec extends TurboModule {
  getConstants(): {
    isTesting: boolean;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch?: number;
      prerelease: (ReactNull | number);
    };
    forceTouchAvailable: boolean;
    osVersion: string;
    systemName: string;
    interfaceIdiom: string;
  };
}

export default TurboModuleRegistry.getEnforcing<Spec>('PlatformConstants');


