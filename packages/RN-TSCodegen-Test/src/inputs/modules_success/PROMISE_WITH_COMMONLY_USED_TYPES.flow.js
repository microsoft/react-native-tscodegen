
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

export type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter';

export type CustomObject = {|
  field1: Array<Object>,
  field2: boolean,
  field3: string,
  type: 'A_String_Literal',
|};

export interface Spec extends TurboModule {
  returnStringArray(): Promise<Array<string>>;
  returnObjectArray(): Promise<Array<Object>>;
  returnNullableNumber(): Promise<number | null>;
  returnEmpty(): Promise<empty>;
  returnUnsupportedIndex(): Promise<{ [string]: 'authorized' | 'denied' | 'undetermined' | true | false }>;
  returnSupportedIndex(): Promise<{ [string]: CustomObject }>;
  returnEnum() : Promise<Season>;
  returnObject() : Promise<CustomObject>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');
