
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativePromiseTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
export type String = string;

type AnotherPromise = Promise<String>;

export interface Spec extends TurboModule {
  getValueWithPromise(error: boolean): Promise<string>;
  getValueWithPromiseWithAlias(arg: String): AnotherPromise;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


