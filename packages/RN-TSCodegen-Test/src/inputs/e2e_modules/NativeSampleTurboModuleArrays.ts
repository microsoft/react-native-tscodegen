
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeSampleTurboModuleArrays.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
import {ReactNull} from 'react-native-tscodegen-types';
import {RootTag} from 'react-native-tscodegen-types';
type Animal = {
  name: string;
};

export interface Spec extends TurboModule {
  getConstants(): {
    const1: Array<boolean>;
    const2: Array<number>;
    const3: Array<string>;
    id?: Array<(ReactNull | {
      prop: number;
    })>;
  };
  voidFunc(): void;
  getBool(id: Array<boolean>): Array<boolean>;
  getNumber(arg: Array<number>): Array<number>;
  getString(arg: Array<string>): Array<string>;
  getArray(arg: Array<Array<any>>): Array<Array<any>>;
  getObject(arg: Array<Object>): Array<Object>;
  getObjectShape(arg: Array<{
    prop: number;
  }>): Array<{
    prop: number;
  }>;
  getAlias(arg: Array<Animal>): Array<Animal>;
  getRootTag(arg: Array<RootTag>): Array<RootTag>;
  getValue(x: Array<number>, y: Array<string>, z: Array<Object>): Array<Object>;
  getValueWithCallback(callback: (value: Array<string>) => void): void;
  getValueWithPromise(error: Array<boolean>): Promise<Array<string>>;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModuleArrays') as Spec);


