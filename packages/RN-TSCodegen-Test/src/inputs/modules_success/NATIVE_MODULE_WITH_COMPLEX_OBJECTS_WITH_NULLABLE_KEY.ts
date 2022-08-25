
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_COMPLEX_OBJECTS_WITH_NULLABLE_KEY.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {ReactNull} from 'react-native-tscodegen-types';
import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
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

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


