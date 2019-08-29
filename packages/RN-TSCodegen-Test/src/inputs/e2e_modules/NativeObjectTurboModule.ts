
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeObjectTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export type GenericObject = Object;

type AnotherGenericObject = GenericObject;

export interface Spec extends TurboModule {
  getGenericObject(arg: Object): Object;
  getGenericObjectReadOnly(arg: Object): Readonly<{
    a: string;
  }>;
  getGenericObjectWithAlias(arg: GenericObject): AnotherGenericObject;
  difficultObject(A: {
    D: boolean;
    E: {
      D: boolean;
      E: number;
      F: string;
    };
    F: string;
  }): {
    D: boolean;
    E: {
      D: boolean;
      E: {
        D: boolean;
        E: number;
        F: string;
      };
      F: string;
    };
    F: string;
  };
  getConstants(): {
    D: boolean;
    E: {
      D: boolean;
      E: {
        D: boolean;
        E: {
          D: boolean;
          E: number;
          F: string;
        };
        F: string;
      };
      F: string;
    };
    F: string;
  };
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


