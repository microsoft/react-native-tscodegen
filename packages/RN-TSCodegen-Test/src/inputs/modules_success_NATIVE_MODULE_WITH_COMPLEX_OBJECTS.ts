

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

export type String = string

export interface Spec extends TurboModule {
  // Exported methods.
  getObject (arg: {const1: {const1: boolean}}) : {
    const1: {const1: boolean};
  };
  getObject2 (arg: { a: String }) : Object;
  getObjectInArray (arg: {const1: {const1: boolean}}) : Array<{
    const1: {const1: boolean};
  }>;
}
export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

