
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/IOS_ONLY_NATIVE_MODULE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
'use strict';

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
  getEnums(quality: Quality, resolution?: Resolution, floppy: Floppy, stringOptions: StringOptions): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModuleIOS');


