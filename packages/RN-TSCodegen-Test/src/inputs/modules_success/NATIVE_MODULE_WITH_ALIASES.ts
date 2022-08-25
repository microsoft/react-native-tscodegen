
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_ALIASES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {ReactNull} from 'react-native-tscodegen-types';
import {TurboModule} from 'react-native-tscodegen-types'
import {TurboModuleRegistry} from 'react-native-tscodegen-types';
'use strict';

type NumNum = number;

export type Num = (arg: NumNum) => void;

type Num2 = Num;

export type Void = void;

export type A = number;

export type B = number;

export type ObjectAlias = {
  x: number;
  y: number;
  label: string;
  truthy: boolean;
};

export type ReadOnlyAlias = Readonly<ObjectAlias>;

export interface Spec extends TurboModule {
  readonly getNumber: Num2;
  getVoid(): Void;
  getArray(a: Array<A>): {
    a: B;
  };
  getStringFromAlias(a: ObjectAlias): string;
  getStringFromNullableAlias(a: (ReactNull | ObjectAlias)): string;
  getStringFromReadOnlyAlias(a: ReadOnlyAlias): string;
  getStringFromNullableReadOnlyAlias(a: (ReactNull | ReadOnlyAlias)): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


