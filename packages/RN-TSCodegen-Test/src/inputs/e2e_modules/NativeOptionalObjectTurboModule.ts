
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeOptionalObjectTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
import {ReactNull} from 'react-native-tscodegen-types';
export interface Spec extends TurboModule {
  getConstants(): {
    D?: (ReactNull | boolean);
    A?: Array<any>;
    E?: (ReactNull | {
      D?: (ReactNull | boolean);
      E?: (ReactNull | {
        D?: (ReactNull | boolean);
        E?: (ReactNull | {
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


