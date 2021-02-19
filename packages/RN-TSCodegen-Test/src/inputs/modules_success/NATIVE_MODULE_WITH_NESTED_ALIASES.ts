
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_NESTED_ALIASES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
'use strict';

type Bar = {
  z: number;
};

type Foo = {
  bar1: Bar;
  bar2: Bar;
};

export interface Spec extends TurboModule {
  foo1(x: Foo): Foo;
  foo2(x: Foo): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


