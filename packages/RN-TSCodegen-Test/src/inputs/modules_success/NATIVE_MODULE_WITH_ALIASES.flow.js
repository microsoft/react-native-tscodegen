
// Automatically copied from modules/__test_fixtures__/fixtures.js
// (/react-native/packages/react-native-codegen/src/parsers/flow)

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import type {TurboModule} from '../RCTExport';
import * as TurboModuleRegistry from '../TurboModuleRegistry';

type NumNum = number;
export type Num = (arg: NumNum) => void;
type Num2 = Num;
export type Void = void;
export type A = number;
export type B = number;
export type ObjectAlias = {|
  x: number,
  y: number,
  label: string,
  truthy: boolean,
|}

export interface Spec extends TurboModule {
  // Exported methods.
  +getNumber: Num2;
  +getVoid: () => Void;
  +getArray: (a: Array<A>) => {| a: B |};
  +getStringFromAlias: (a: ObjectAlias) => string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

