
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_failure/MIXED_VALUES_ENUM_NATIVE_MODULE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/failures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

export enum SomeEnum {
  NUM = 1,
  STR = 'str',
}

export interface Spec extends TurboModule {
  getEnums(a: SomeEnum): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('MixedValuesEnumNativeModule');


