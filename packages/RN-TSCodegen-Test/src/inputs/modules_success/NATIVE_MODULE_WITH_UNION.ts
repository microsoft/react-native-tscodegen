
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_UNION.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export type ChooseInt =
  | 1
  | 2
  | 3;

export type ChooseFloat =
  | 1.44
  | 2.88
  | 5.76;

export type ChooseObject =
  | {
    }
  | {
      low: string;
    };

export type ChooseString =
  | 'One'
  | 'Two'
  | 'Three';

export interface Spec extends TurboModule {
  getUnion(chooseInt: ChooseInt, chooseFloat: ChooseFloat, chooseObject: ChooseObject, chooseString: ChooseString): ChooseObject;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


