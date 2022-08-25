// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

declare module "react-native-tscodegen-types" {
  export * from 'react-native';

  export type ReactNull = undefined | null;
  export type NotString = {};
  export type Stringish = string;
  export type RootTag = number;
  export type UnsafeObject = {};
  export type NativeComponent<T> = {};
  export type NativeComponentType<T> = {};
  type FlowOptional<T> = ReactNull | T;
}

declare module "react-native-tscodegen-types" {
  // This is just for compiling auto-translated test cases
  // Do not import anything from here
  // React.ElementRef is a Flow predefined type, use React.Ref instead

  export namespace React {
    export type Ref<T> = React.Ref<T>;
    export type ElementRef<T> = React.Ref<T>;
  }
}
