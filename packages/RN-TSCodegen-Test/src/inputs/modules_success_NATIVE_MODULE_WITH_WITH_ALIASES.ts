
// Automatically generated from modules_success_NATIVE_MODULE_WITH_WITH_ALIASES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from '../lib/RCTExport'
import * as TurboModuleRegistry from '../lib/TurboModuleRegistry';
'use strict';

type NumNum = number;

export type Num = (arg: NumNum) => void;

type Num2 = Num;

export type Void = void;

export type A = number;

export type B = number;

export interface Spec extends TurboModule {
  readonly getNumber: Num2;
  getVoid(): Void;
  getArray(a: Array<A>): {
    a: B;
  };
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


