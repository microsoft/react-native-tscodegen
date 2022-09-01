
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeOptionalObjectTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
export interface Spec extends TurboModule {
  getConstants(): {
    D?: (undefined | null | boolean);
    A?: Array<any>;
    E?: (undefined | null | {
      D?: (undefined | null | boolean);
      E?: (undefined | null | {
        D?: (undefined | null | boolean);
        E?: (undefined | null | {
          D?: boolean;
          E?: number;
          F?: string;
        });
        F?: string;
      });
      F?: string;
    });
    F?: string;
  };
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


