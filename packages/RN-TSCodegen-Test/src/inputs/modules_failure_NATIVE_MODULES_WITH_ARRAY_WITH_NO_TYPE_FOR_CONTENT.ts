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
  getString: (arg: string) => Array<any>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

