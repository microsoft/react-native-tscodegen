
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeSampleTurboModuleNullableAndOptional.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
import {RootTag} from 'react-native-tscodegen-types';
type Animal = (undefined | null | {
  name?: (undefined | null | string);
});

export interface Spec extends TurboModule {
  getConstants?(): {
    const1?: (undefined | null | boolean);
    const2?: (undefined | null | number);
    const3?: (undefined | null | string);
  };
  voidFunc?(): void;
  getBool?(arg?: (undefined | null | boolean)): (undefined | null | boolean);
  getNumber?(arg?: (undefined | null | number)): (undefined | null | number);
  getString?(arg?: (undefined | null | string)): (undefined | null | string);
  getArray?(arg?: (undefined | null | Array<any>)): (undefined | null | Array<any>);
  getObject?(arg?: (undefined | null | Object)): (undefined | null | Object);
  getObjectShape?(arg?: {
    prop?: (undefined | null | number);
  }): {
    prop?: (undefined | null | number);
  };
  getAlias?(arg?: (undefined | null | Animal)): (undefined | null | Animal);
  getRootTag?(arg?: (undefined | null | RootTag)): (undefined | null | RootTag);
  getValue?(x?: (undefined | null | number), y?: (undefined | null | string), z?: (undefined | null | Object)): (undefined | null | Object);
  getValueWithCallback?(callback?: (undefined | null | ((value?: (undefined | null | string)) => void))): void;
  getValueWithPromise?(error?: (undefined | null | boolean)): (undefined | null | Promise<string>);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModuleNullableAndOptional') as Spec);


