// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

declare module "react-native-tscodegen-types" {
  import { ColorValue } from 'react-native';

  export * from 'react-native';
  export { default as codegenNativeCommands } from 'react-native/Libraries/Utilities/codegenNativeCommands';
  export { default as codegenNativeComponent } from 'react-native/Libraries/Utilities/codegenNativeComponent';
  export * from 'react-native/Libraries/Types/CodegenTypes';

  export { ImagePropertiesSourceOptions as ImageSource } from 'react-native';
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

declare module "react-native-tscodegen-types" {
  // This is just for compiling auto-translated test cases
  // Do not import anything from here
  // React.ElementRef is a Flow predefined type, use React.Ref instead

  export namespace React {
    export type Ref<T> = React.Ref<T>;
    export type ElementRef<T> = React.Ref<T>;
  }

  export function codegenNativeComponent<Props extends object>(
    componentName: string,
    options?: Options & { deprecatedViewConfigName: string },
  ): NativeComponentType<Props>;
}
