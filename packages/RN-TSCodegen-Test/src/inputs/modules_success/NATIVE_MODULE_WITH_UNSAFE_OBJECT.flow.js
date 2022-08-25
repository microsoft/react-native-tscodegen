
// Automatically copied from modules/__test_fixtures__/fixtures.js
// (/react-native/packages/react-native-codegen/src/parsers/flow)

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

'use strict';

import type {TurboModule} from '../RCTExport';
import * as TurboModuleRegistry from '../TurboModuleRegistry';
import type {UnsafeObject} from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  +getUnsafeObject: (o: UnsafeObject) => UnsafeObject,
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

