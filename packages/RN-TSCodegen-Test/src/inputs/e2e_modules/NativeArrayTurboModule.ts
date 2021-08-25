
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeArrayTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
export type ArrayType = string;

type AnotherArray = Array<ArrayType>;

export interface Spec extends TurboModule {
  getArray(a: Array<any>): Array<string>;
  getReadOnlyArray(a: Array<any>): ReadonlyArray<string>;
  getArrayWithAlias(a: AnotherArray, b: Array<ArrayType>): AnotherArray;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


