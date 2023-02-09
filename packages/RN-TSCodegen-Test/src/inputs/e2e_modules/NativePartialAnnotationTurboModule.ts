
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativePartialAnnotationTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export type SomeObj = {
  a: string;
  b?: boolean;
};

export type PartialSomeObj = Partial<SomeObj>;

export interface Spec extends TurboModule {
  getSomeObj(): SomeObj;
  getPartialSomeObj(): Partial<SomeObj>;
  getSomeObjFromPartialSomeObj(value: Partial<SomeObj>): SomeObj;
  getPartialPartial(value1: Partial<SomeObj>, value2: PartialSomeObj): SomeObj;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('NativePartialAnnotationTurboModule') as Spec);


