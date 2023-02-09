
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_PARTIALS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export type SomeObj = {
  a: string;
  b?: boolean;
};

export interface Spec extends TurboModule {
  getSomeObj(): SomeObj;
  getPartialSomeObj(): Partial<SomeObj>;
  getSomeObjFromPartialSomeObj(value: Partial<SomeObj>): SomeObj;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


