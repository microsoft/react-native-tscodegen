
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from NativeEnumTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
export type StateType = {
  state: string;
};

export enum StatusRegularEnum {
  Active,
  Paused,
  Off,
}

export enum StatusStrEnum {
  Active = 'active',
  Paused = 'paused',
  Off = 'off',
}

export enum StatusNumEnum {
  Active = 2,
  Paused = 1,
  Off = 0,
}

export enum StatusFractionEnum {
  Active = 0.2,
  Paused = 0.1,
  Off = 0.0,
}

export type StateTypeWithEnums = {
  state: string;
  regular: StatusRegularEnum;
  str: StatusStrEnum;
  num: StatusNumEnum;
  fraction: StatusFractionEnum;
};

export interface Spec extends TurboModule {
  getStatusRegular(statusProp: StateType): StatusRegularEnum;
  getStatusStr(statusProp: StateType): StatusStrEnum;
  getStatusNum(statusProp: StateType): StatusNumEnum;
  getStatusFraction(statusProp: StateType): StatusFractionEnum;
  getStateType(a: StatusRegularEnum, b: StatusStrEnum, c: StatusNumEnum, d: StatusFractionEnum): StateType;
  getStateTypeWithEnums(paramOfTypeWithEnums: StateTypeWithEnums): StateTypeWithEnums;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('NativeEnumTurboModule') as Spec);


