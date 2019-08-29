
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_PROMISE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export type String = string;

export type SomeObj = {
  a: string;
};

export interface Spec extends TurboModule {
  getValueWithPromise(): Promise<string>;
  getValueWithPromiseDefinedSomewhereElse(): Promise<String>;
  getValueWithPromiseObjDefinedSomewhereElse(): Promise<SomeObj>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


