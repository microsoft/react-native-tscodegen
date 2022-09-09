
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

export type ChooseInt = 1 | 2 | 3;
export type ChooseFloat = 1.44 | 2.88 | 5.76;
export type ChooseObject = {} | {low: string};
export type ChooseString = 'One' | 'Two' | 'Three';

export enum Quality {
  SD,
  HD,
}

export enum Resolution {
  Low = 720,
  High = 1080,
}

export enum Floppy {
  LowDensity = 0.72,
  HighDensity = 1.44,
}

export enum StringOptions {
  One = 'one',
  Two = 'two',
  Three = 'three',
}

export interface Spec extends TurboModule {
  +getCallback: () => () => void;
  +getMixed: (arg: mixed) => mixed;
  +getEnums: (quality: Quality, resolution?: Resolution, floppy: Floppy, stringOptions: StringOptions) => string;
  +getUnion: (chooseInt: ChooseInt, chooseFloat: ChooseFloat, chooseObject: ChooseObject, chooseString: ChooseString) => ChooseObject;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModuleCxx');

