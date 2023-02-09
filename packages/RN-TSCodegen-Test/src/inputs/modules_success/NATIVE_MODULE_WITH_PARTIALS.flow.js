
// Automatically copied from modules/__test_fixtures__/fixtures.js
// (/react-native/packages/react-native-codegen/src/parsers/flow)

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
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

export type SomeObj = {|
  a: string,
  b?: boolean,
|};

export interface Spec extends TurboModule {
  +getSomeObj: () => SomeObj;
  +getPartialSomeObj: () => $Partial<SomeObj>;
  +getSomeObjFromPartialSomeObj: (value: $Partial<SomeObj>) => SomeObj;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

