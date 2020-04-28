// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

declare module 'react-native-tscodegen-types' {

  // \react-native\Libraries\Types\CoreEventTypes.js

  type FlowOptional<T> = undefined | null | T;

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

  export class RNTag<T extends
    | 'Null'
    | 'Int32'
    | 'Float'
    | 'Double'
    | 'ImageSource'
    | 'ColorValue'
    > {
    private constructor();
  }
  export class WithDefaultRNTag<T>{ private constructor(); }
  export type Float = number | RNTag<'Float'>;
  export type Double = number | RNTag<'Double'>;
  export type Int32 = number | RNTag<'Int32'>;
  export type BubblingEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
  export type DirectEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
  export type NotString = {};
  export type Stringish = string;
  export type ReactNull = RNTag<'Null'> | null | undefined;
  export type WithDefault<T, V> = ReactNull | T | WithDefaultRNTag<V>;

  // \react-native\Libraries\StyleSheet\StyleSheetTypes.js

  export type ColorValue = null | string | RNTag<'ColorValue'>;
  export type ColorArrayValue = null | ReadonlyArray<ColorValue>;
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

  // \react-native\Libraries\Image\ImageSource.js

  import { ImageURISource } from 'react-native';
  export type ImageSource = ImageURISource | number | Array<ImageURISource> | RNTag<'ImageSource'>;

  // \react-native\Libraries\TurboModule\RCTExport.js

  export interface DEPRECATED_RCTEXPORT<T extends void = void> {
    getConstants?: () => {};
  }

  export interface TurboModule extends DEPRECATED_RCTEXPORT<void> {
  }

  // \react-native\Libraries\TurboModule\TurboModuleRegistry.js

  export namespace TurboModuleRegistry {
    export function getEnforcing<T extends TurboModule>(name: string): FlowOptional<T>;
  }

  // \react-native\Libraries\Utilities\codegenNativeComponent.js

  type Options = Readonly<{
    interfaceOnly?: boolean;
    paperComponentName?: string;
    paperComponentNameDeprecated?: string;
    deprecatedViewConfigName?: string;
  }>;

  export type NativeComponent<T> = {};
  export type NativeComponentType<T> = {};
  export type HostComponent<T> = {};
  export function codegenNativeComponent<Props>(componentName: string, options?: Options): HostComponent<Props>;

  // \react-native\Libraries\Utilities\codegenNativeCommands.js

  type Options<T = string> = Readonly<{
    supportedCommands: ReadonlyArray<T>;
  }>;

  export function codegenNativeCommands<T extends {}>(options?: Options<keyof T>): T;
}

declare module 'react-native-tscodegen-types' {
  // This is just for compiling auto-translated test cases
  // Do not import anything from here
  // React.ElementRef is a Flow predefined type, use React.Ref instead

  import React from 'react';

  export namespace React {
    export type Ref<T> = React.Ref<T>;
    export type ElementRef<T> = React.Ref<T>;
  }
  export { ViewProps } from 'react-native';
}