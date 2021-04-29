// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

declare module "react-native" {
  export * from './react-native/index';
}

declare module "react-native-tscodegen-types" {
  // \react-native\Libraries\Types\CoreEventTypes.js

  type FlowOptional<T> = ReactNull | T;

  export type SyntheticEvent<T> = Readonly<{
    bubbles: FlowOptional<boolean>;
    cancelable: FlowOptional<boolean>;
    currentTarget: number;
    defaultPrevented: FlowOptional<boolean>;
    dispatchConfig: Readonly<{
      registrationName: string;
    }>;
    eventPhase: FlowOptional<number>;
    preventDefault: () => void;
    isDefaultPrevented: () => boolean;
    stopPropagation: () => void;
    isPropagationStopped: () => boolean;
    isTrusted: FlowOptional<boolean>;
    nativeEvent: T;
    persist: () => void;
    target: FlowOptional<number>;
    timeStamp: FlowOptional<number>;
    type: FlowOptional<string>;
  }>;

  // \react-native\Libraries\Types\CodegenTypes.js

  export type Float = number;
  export type Double = number;
  export type Int32 = number;
  export type BubblingEventHandler<T, PaperName extends string | {} = {}> = (
    event: SyntheticEvent<T>
  ) => void | Promise<void>;
  export type DirectEventHandler<T, PaperName extends string | {} = {}> = (
    event: SyntheticEvent<T>
  ) => void | Promise<void>;
  export type NotString = {};
  export type Stringish = string;
  export type ReactNull = undefined | null;
  export type WithDefault<T, V> = ReactNull | T;

  // \react-native\Libraries\StyleSheet\PlatformColorValueTypes.ios.js
  // \react-native\Libraries\StyleSheet\PlatformColorValueTypes.android.js
  // \react-native\Libraries\StyleSheet\processColor.js
  // \react-native\Libraries\StyleSheet\StyleSheetTypes.js

  export type NativeColorValue = {
    // android
    resource_paths?: string[];

    // ios
    semantic?: string[];
    dynamic?: {
      light?: FlowOptional<ColorValue | ProcessedColorValue>;
      dark?: FlowOptional<ColorValue | ProcessedColorValue>;
    };
  };

  export type RootTag = number;
  export type ProcessedColorValue = number | NativeColorValue;
  export type ColorArrayValue = ReadonlyArray<ColorValue>;
  export interface PointValue {
    x: number;
    y: number;
  }
  export interface EdgeInsetsValue {
    top: number;
    left: number;
    right: number;
    bottom: number;
  }

  // \react-native\Libraries\TurboModule\RCTExport.js

  export interface DEPRECATED_RCTEXPORT<T extends void = void> {
    getConstants?: () => {};
  }

  export interface TurboModule extends DEPRECATED_RCTEXPORT<void> {}

  // \react-native\Libraries\TurboModule\TurboModuleRegistry.js

  export namespace TurboModuleRegistry {
    export function getEnforcing<T extends TurboModule>(
      name: string
    ): FlowOptional<T>;
  }

  // \react-native\Libraries\Utilities\codegenNativeComponent.js

  type ComponentOptions = Readonly<{
    interfaceOnly?: boolean;
    excludedPlatforms?: string[];
    paperComponentName?: string;
    paperComponentNameDeprecated?: string;
    deprecatedViewConfigName?: string;
  }>;

  export type NativeComponent<T> = {};
  export type NativeComponentType<T> = {};
  export function codegenNativeComponent<Props>(
    componentName: string,
    options?: ComponentOptions
  ): HostComponent<Props>;

  // \react-native\Libraries\Utilities\codegenNativeCommands.js

  type CommandOptions<T = string> = Readonly<{
    supportedCommands: ReadonlyArray<T>;
  }>;

  export function codegenNativeCommands<T extends {}>(
    options?: CommandOptions<keyof T>
  ): T;
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
  export {
    ColorValue,
    HostComponent,
    ImageSourcePropType as ImageSource,
    ViewProps,
  } from "react-native";
}
