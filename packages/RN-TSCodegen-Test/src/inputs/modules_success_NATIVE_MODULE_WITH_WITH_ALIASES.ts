import {TurboModule} from '../lib/RCTExport'import * as TurboModuleRegistry from '../lib/TurboModuleRegistry';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';




type NumNum = number;
export type Num = (arg: NumNum) => void;
type Num2 = Num;
export type Void = void;
export type A = number;
export type B = number;

export interface Spec extends TurboModule {
  // Exported methods.
  getNumber: Num2;
  getVoid () : Void;
  getArray (a : Array<A>) : { a: B };
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

