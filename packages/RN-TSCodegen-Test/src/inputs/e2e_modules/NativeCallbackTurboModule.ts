
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeCallbackTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
export type String = string;

type CB = (value: String) => void;

export interface Spec extends TurboModule {
  getValueWithCallback(callback: (value: string) => void): void;
  getValueWithCallbackWithAlias(c: CB): void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


