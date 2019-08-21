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




export type String = string

export interface Spec extends TurboModule {
  // Exported methods.
  getObject (arg: {const1: {const1: boolean}}) : {
    const1: {const1: boolean};
  };
  getReadOnlyObject (arg: Readonly<{const1: Readonly<{const1: boolean}>}>) : Readonly<{
    const1: {const1: boolean};
  }>;
  getObject2 (arg: { a: String }) : Object;
  getObjectInArray (arg: {const1: {const1: boolean}}) : Array<{
    const1: {const1: boolean};
  }>;
}
export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');

