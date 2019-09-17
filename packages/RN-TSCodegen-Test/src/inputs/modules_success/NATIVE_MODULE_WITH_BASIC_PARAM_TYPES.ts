
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_BASIC_PARAM_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {Stringish} from 'react-native-tscodegen-types';
import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
'use strict';

export interface Spec extends TurboModule {
  passBool?(arg: boolean): void;
  passNumber(arg: number): void;
  passString(arg: string): void;
  passStringish(arg: Stringish): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


