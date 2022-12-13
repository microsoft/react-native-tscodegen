
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/PROMISE_WITH_COMMONLY_USED_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export type Season =
  | 'Spring'
  | 'Summer'
  | 'Autumn'
  | 'Winter';

export type CustomObject = {
  field1: Array<Object>;
  field2: boolean;
  field3: string;
  type: 'A_String_Literal';
};

export interface Spec extends TurboModule {
  returnStringArray(): Promise<Array<string>>;
  returnObjectArray(): Promise<Array<Object>>;
  returnNullableNumber(): Promise<number | null>;
  returnEmpty(): Promise<never>;
  returnUnsupportedIndex(): Promise<{
    [key: string]: 'authorized' | 'denied' | 'undetermined' | true | false;
  }>;
  returnSupportedIndex(): Promise<{
    [key: string]: CustomObject;
  }>;
  returnEnum(): Promise<Season>;
  returnObject(): Promise<CustomObject>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


