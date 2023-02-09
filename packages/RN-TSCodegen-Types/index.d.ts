// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

declare module "react-native-tscodegen-types" {
  import { ColorValue } from 'react-native';

  export type ColorArrayValue = readonly ColorValue[];

  export interface PointValue {
    x: number;
    bottom: number;
  }

  export interface EdgeInsetsValue {
    top: number;
    left: number;
    right: number;
    bottom: number;
  }

  export class AnimatedNode {
  }

  export type DimensionValue = null | number | string | AnimatedNode
  export type NotString = {};
  export type Stringish = string;
  export type RootTag = number;
}
