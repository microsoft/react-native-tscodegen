
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeNumberTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
export type Number = number;

type AnotherNumber = Number;

export interface Spec extends TurboModule {
  getNumber(arg: number): number;
  getNumberWithAlias(arg: Number): AnotherNumber;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


