
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
import type {Int32, Float} from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  +getInt: (arg: Int32) => Int32;
  +getFloat: (arg: Float) => Float;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');
