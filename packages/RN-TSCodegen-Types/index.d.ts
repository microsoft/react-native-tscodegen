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

  export type ReactNull = undefined | null;
  export type FlowOptional<T> = ReactNull | T;
  export type NotString = {};
  export type Stringish = string;
  export type RootTag = number;
}

declare module "react-native/Libraries/Utilities/codegenNativeComponent" {
  // This is just for compiling auto-translated test cases
  
  export function codegenNativeComponent<Props extends object>(
    componentName: string,
    options?: Options & { deprecatedViewConfigName: string },
  ): NativeComponentType<Props>;
}
