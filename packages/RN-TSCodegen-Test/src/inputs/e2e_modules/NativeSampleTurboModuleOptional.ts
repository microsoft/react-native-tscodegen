
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeSampleTurboModuleOptional.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
import {RootTag} from 'react-native-tscodegen-types';
type Animal = {
  name?: string;
};

export interface Spec extends TurboModule {
  getConstants?(): {
    const1?: boolean;
    const2?: number;
    const3?: string;
  };
  voidFunc?(): void;
  getBool?(arg?: boolean): boolean;
  getNumber?(arg?: number): number;
  getString?(arg?: string): string;
  getArray?(arg?: Array<any>): Array<any>;
  getObject?(arg?: Object): Object;
  getObjectShape?(arg?: {
    prop?: number;
  }): {
    prop?: number;
  };
  getAlias?(arg?: Animal): Animal;
  getRootTag?(arg?: RootTag): RootTag;
  getValue?(x?: number, y?: string, z?: Object): Object;
  getValueWithCallback?(callback?: (value?: string) => void): void;
  getValueWithPromise?(error?: boolean): Promise<string>;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModuleOptional') as Spec);


