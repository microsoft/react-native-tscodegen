

import {
  BubblingEvent,
  BubblingEventHandler,
  DirectEvent,
  DirectEventHandler,
  Float,
  Int32,
  NotString,
  Options,
  Stringish,
  WithDefault,
} from '../lib/CodegenTypes';
import * as React from '../lib/React';


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


export default TurboModuleRegistry.getEnforcing<Spec1>('SampleTurboModule1');
export default TurboModuleRegistry.getEnforcing<Spec2>('SampleTurboModule2');

