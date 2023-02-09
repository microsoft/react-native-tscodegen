
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_PARTIALS_COMPLEX.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export type SomeObj = {
  a: string;
  b?: boolean;
};

export type PartialSomeObj = Partial<SomeObj>;

export interface Spec extends TurboModule {
  getPartialPartial(value1: Partial<SomeObj>, value2: PartialSomeObj): SomeObj;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


