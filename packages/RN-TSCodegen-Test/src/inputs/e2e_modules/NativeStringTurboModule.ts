
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeStringTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
export type String = string;

type AnotherString = String;

export interface Spec extends TurboModule {
  getString(arg: string): string;
  getStringWithAlias(arg: String): AnotherString;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


