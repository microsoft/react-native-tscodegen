import {Float} from '../lib/CodegenTypes';import {Int32} from '../lib/CodegenTypes';

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

import {TurboModule} from '../lib/RCTExport';
import * as TurboModuleRegistry from '../lib/TurboModuleRegistry';


export interface Spec extends TurboModule {
  getInt (arg: Int32) : Int32;
  getFloat (arg: Float) : Float;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');
