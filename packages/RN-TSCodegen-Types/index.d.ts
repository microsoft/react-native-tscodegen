// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

declare module "react-native" {
  export * from './react-native/index';
}

declare module "react-native-tscodegen-types" {

  export type ReactNull = undefined | null;
  export type NotString = {};
  export type Stringish = string;
  export type RootTag = number;
  export type UnsafeObject = {};
  export type NativeComponent<T> = {};
  export type NativeComponentType<T> = {};
  type FlowOptional<T> = ReactNull | T;

  export {
    ColorValue,
    HostComponent,
    ImageSourcePropType as ImageSource,
    ViewProps,
  } from "./react-native/index";

  export {
    BubblingEventHandler,
    DirectEventHandler,
    SyntheticEvent
  } from "./react-native/Libraries/Types/CodegenTypes"

  export {
    Double,
    Float,
    Int32,
    WithDefault
  } from "./react-native/Libraries/Types/CodegenTypes"

  export {
    NativeColorValue
  } from "./react-native/Libraries/StyleSheet/PlatformColorValueTypes"

  export {
    ProcessedColorValue
  } from "./react-native/Libraries/StyleSheet/processColor"

  export {
    ColorArrayValue,
    PointValue,
    EdgeInsetsValue
  } from "./react-native/Libraries/StyleSheet/StyleSheetTypes"

  export {
    TurboModule
  } from "./react-native/Libraries/TurboModule/RCTExport"

  export * as TurboModuleRegistry from "./react-native/Libraries/TurboModule/TurboModuleRegistry"

  export {
    codegenNativeComponent
  } from "./react-native/Libraries/Utilities/codegenNativeComponent"

  export {
    codegenNativeCommands
  } from "./react-native/Libraries/Utilities/codegenNativeCommands"
}

declare module "react-native-tscodegen-types" {
  // This is just for compiling auto-translated test cases
  // Do not import anything from here
  // React.ElementRef is a Flow predefined type, use React.Ref instead

  import React from "react";

  export namespace React {
    export type Ref<T> = React.Ref<T>;
    export type ElementRef<T> = React.Ref<T>;
  }
}
