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




export interface Spec extends TurboModule {
  getConstants () : {
    isTesting: boolean;
    reactNativeVersion: {
      major: number;
      minor: number;
      patch: number;
      prerelease: null | undefined | number;
    },
    forceTouchAvailable: boolean;
    osVersion: string;
    systemName: string;
    interfaceIdiom: string;
  };
}

export default TurboModuleRegistry.getEnforcing<Spec>('PlatformConstants');

