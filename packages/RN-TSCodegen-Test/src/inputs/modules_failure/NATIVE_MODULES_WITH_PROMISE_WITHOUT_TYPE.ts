
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_failure/NATIVE_MODULES_WITH_PROMISE_WITHOUT_TYPE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/failures.js)

import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
'use strict';

export interface Spec extends TurboModule {
  getBool(arg: boolean): Promise;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


