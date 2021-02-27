
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeSampleTurboModuleNullable.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ReactNull} from 'react-native-tscodegen-types';
import {RootTag} from 'react-native-tscodegen-types';
import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
'use strict';

type Animal = (ReactNull | {
  name: (ReactNull | string);
});

export interface Spec extends TurboModule {
  getConstants(): {
    const1: (ReactNull | boolean);
    const2: (ReactNull | number);
    const3: (ReactNull | string);
  };
  voidFunc(): void;
  getBool(arg: (ReactNull | boolean)): (ReactNull | boolean);
  getNumber(arg: (ReactNull | number)): (ReactNull | number);
  getString(arg: (ReactNull | string)): (ReactNull | string);
  getArray(arg: (ReactNull | Array<any>)): (ReactNull | Array<any>);
  getObject(arg: (ReactNull | Object)): (ReactNull | Object);
  getObjectShape(arg: (ReactNull | {
    prop: (ReactNull | number);
  })): (ReactNull | {
    prop: (ReactNull | number);
  });
  getAlias(arg: (ReactNull | Animal)): (ReactNull | Animal);
  getRootTag(arg: (ReactNull | RootTag)): (ReactNull | RootTag);
  getValue(x: (ReactNull | number), y: (ReactNull | string), z: (ReactNull | Object)): (ReactNull | Object);
  getValueWithCallback(callback: (value: (ReactNull | string)) => void): void;
  getValueWithPromise(error: (ReactNull | boolean)): (ReactNull | Promise<string>);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModuleNullable') as Spec);


