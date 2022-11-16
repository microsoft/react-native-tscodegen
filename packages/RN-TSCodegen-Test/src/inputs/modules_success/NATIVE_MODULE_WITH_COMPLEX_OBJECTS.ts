
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_COMPLEX_OBJECTS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export type String = string;

export interface Spec extends TurboModule {
  getObject(arg: {
    const1: {
      const1: boolean;
    };
  }): {
    const1: {
      const1: boolean;
    };
  };
  getReadOnlyObject(arg: Readonly<{
    const1: Readonly<{
      const1: boolean;
    }>;
  }>): Readonly<{
    const1: {
      const1: boolean;
    };
  }>;
  getObject2(arg: {
    a: String;
  }): Object;
  getObjectInArray(arg: {
    const1: {
      const1: boolean;
    };
  }): Array<{
    const1: {
      const1: boolean;
    };
  }>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


