
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeNullableTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
export interface Spec extends TurboModule {
  getBool(a: (undefined | null | boolean)): (undefined | null | boolean);
  getNumber(a: (undefined | null | number)): (undefined | null | number);
  getString(a: (undefined | null | number)): (undefined | null | string);
  getArray(a: (undefined | null | Array<any>)): (undefined | null | Array<any>);
  getObject(a: (undefined | null | Object)): (undefined | null | Object);
  getValueWithPromise(): (undefined | null | Promise<string>);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


