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




type DisplayMetricsAndroid = {
 width: number;
};

export interface Spec extends TurboModule {
  getConstants () : {
    Dimensions: {
      windowPhysicalPixels: DisplayMetricsAndroid;
    },
  };
  getConstants2 () : Readonly<{
    Dimensions: {
      windowPhysicalPixels: DisplayMetricsAndroid;
    },
  }>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

