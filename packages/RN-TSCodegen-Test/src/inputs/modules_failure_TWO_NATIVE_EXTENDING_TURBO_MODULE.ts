

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

export interface Spec extends TurboModule {
  +getSth(a : null | undefined | number) => void
}

export interface Spec2 extends TurboModule {
  +getSth(a : null | undefined | number) => void
}


