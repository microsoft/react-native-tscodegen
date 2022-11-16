
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

type DisplayMetricsAndroid = {|
 width: number,
|};

export interface Spec extends TurboModule {
  +getConstants: () => {|
    +Dimensions: {
      windowPhysicalPixels: DisplayMetricsAndroid,
    },
  |};
  +getConstants2: () => $ReadOnly<{|
    +Dimensions: {
      windowPhysicalPixels: DisplayMetricsAndroid,
    },
  |}>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

