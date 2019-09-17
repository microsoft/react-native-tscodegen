
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_failure/NATIVE_MODULES_WITH_NOT_ONLY_METHODS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/failures.js)

import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
'use strict';

export interface Spec extends TurboModule {
  getBool(arg: boolean): boolean;
  getNumber(arg: number): number;
  getString(arg: string): string;
  sampleBool: boolean;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


