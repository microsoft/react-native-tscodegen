
// Automatically generated from NativeNumberTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export type Number = number;

type AnotherNumber = Number;

export interface Spec extends TurboModule {
  getNumber(arg: number): number;
  getNumberWithAlias(arg: Number): AnotherNumber;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


