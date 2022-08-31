
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeNullableTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
import {ReactNull} from 'react-native-tscodegen-types';
export interface Spec extends TurboModule {
  getBool(a: (ReactNull | boolean)): (ReactNull | boolean);
  getNumber(a: (ReactNull | number)): (ReactNull | number);
  getString(a: (ReactNull | number)): (ReactNull | string);
  getArray(a: (ReactNull | Array<any>)): (ReactNull | Array<any>);
  getObject(a: (ReactNull | Object)): (ReactNull | Object);
  getValueWithPromise(): (ReactNull | Promise<string>);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


