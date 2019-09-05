
// Automatically copied from modules/__test_fixtures__/fixtures.js
// (/react-native/packages/react-native-codegen/src/parsers/flow)

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

import type {TurboModule} from '../RCTExport';
import * as TurboModuleRegistry from '../TurboModuleRegistry';

export type String = string;

export interface Spec extends TurboModule {
  // Exported methods.
  +getObject: (arg: {|const1: {|const1: boolean|}|}) => {|
    const1: {|const1: boolean|},
  |};
  +getReadOnlyObject: (arg: $ReadOnly<{|const1: $ReadOnly<{|const1: boolean|}>|}>) => $ReadOnly<{|
    const1: {|const1: boolean|},
  |}>;
  +getObject2: (arg: { a: String }) => Object;
  +getObjectInArray: (arg: {const1: {|const1: boolean|}}) => Array<{|
    const1: {const1: boolean},
  |}>;
}
export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

