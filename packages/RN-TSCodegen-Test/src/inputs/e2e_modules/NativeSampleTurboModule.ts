
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeSampleTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
'use strict';

export interface Spec extends TurboModule {
  getConstants(): {
    const1: boolean;
    const2: number;
    const3: string;
  };
  voidFunc(): void;
  getBool(arg: boolean): boolean;
  getNumber(arg: number): number;
  getString(arg: string): string;
  getArray(arg: Array<any>): Array<any>;
  getObject(arg: Object): Object;
  getValue(x: number, y: string, z: Object): Object;
  getValueWithCallback(callback: (value: string) => void): void;
  getValueWithPromise(error: boolean): Promise<string>;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


