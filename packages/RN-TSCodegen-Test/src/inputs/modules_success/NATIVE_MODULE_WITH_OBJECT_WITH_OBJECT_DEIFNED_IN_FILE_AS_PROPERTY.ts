
// Automatically generated from modules_success/NATIVE_MODULE_WITH_OBJECT_WITH_OBJECT_DEIFNED_IN_FILE_AS_PROPERTY.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

type DisplayMetricsAndroid = {
  width: number;
};

export interface Spec extends TurboModule {
  getConstants(): {
    readonly Dimensions: {
      windowPhysicalPixels: DisplayMetricsAndroid;
    };
  };
  getConstants2(): Readonly<{
    readonly Dimensions: {
      windowPhysicalPixels: DisplayMetricsAndroid;
    };
  }>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


