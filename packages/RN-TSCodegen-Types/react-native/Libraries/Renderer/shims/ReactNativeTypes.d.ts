import { React$Element } from "flow2dts-flow-types-polyfill";
// @flow
import { ElementRef } from "react";
import { AbstractComponent } from "react";
declare type MeasureOnSuccessCallback = (x: number, y: number, width: number, height: number, pageX: number, pageY: number) => void;
declare type MeasureInWindowOnSuccessCallback = (x: number, y: number, width: number, height: number) => void;
declare type MeasureLayoutOnSuccessCallback = (left: number, top: number, width: number, height: number) => void;
declare type AttributeType = true | Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  diff?: <T>(arg1: T, arg2: T) => boolean;
  process?: (arg1: any) => any;
}>;
declare type AttributeConfiguration<TProps = string, TStyleProps = string> = Readonly<{
  style: Readonly<{
    /*[FLOW2DTS - Warning] The key type 'TStyleProps' was unresolvable in the original Flow source.*/
    [propName: string]: AttributeType;
    [propName: number]: AttributeType;
  }>;

  /*[FLOW2DTS - Warning] The key type 'TProps' was unresolvable in the original Flow source.*/
  [propName: string]: AttributeType;
  [propName: number]: AttributeType;
}>;
declare type ReactNativeBaseComponentViewConfig<TProps = string, TStyleProps = string> = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  baseModuleName?: string;
  bubblingEventTypes?: Readonly<{
    [eventName: string]: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames: Readonly<
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        captured: string;
        bubbled: string;
      }>;
    }>;
  }>;
  Commands?: Readonly<{
    [commandName: string]: number;
  }>;
  directEventTypes?: Readonly<{
    [eventName: string]: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    }>;
  }>;
  NativeProps?: Readonly<{
    [propName: string]: string;
  }>;
  uiViewClassName: string;
  validAttributes: AttributeConfiguration<TProps, TStyleProps>;
}>;
declare type ViewConfigGetter = () => ReactNativeBaseComponentViewConfig;
declare type NativeMethods = {
  blur: () => void;
  focus: () => void;
  measure: (callback: MeasureOnSuccessCallback) => void;
  measureInWindow: (callback: MeasureInWindowOnSuccessCallback) => void;
  measureLayout: (relativeToNativeNode: number | ElementRef<HostComponent<{}>>, onSuccess: MeasureLayoutOnSuccessCallback, onFail?: () => void) => void;
  setNativeProps: (nativeProps: Object) => void;
};
declare type HostComponent<T> = AbstractComponent<T, Readonly<NativeMethods>>;
declare type SecretInternalsType = {
  computeComponentStackForErrorReporting: (tag: number) => string;
};
declare type InspectorDataProps = Readonly<{
  [propName: string]: string;
}>;
declare type InspectorDataSource = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  fileName?: string;
  lineNumber?: number;
}>;
declare type InspectorDataGetter = ($f2t1: (componentOrHandle: any) => null | undefined | number) => Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  measure: Function;
  props: InspectorDataProps;
  source: InspectorDataSource;
}>;
declare type InspectorData = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  hierarchy:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    name?: null | undefined | string;
    getInspectorData: InspectorDataGetter;
  }[];
  selectedIndex?: null | undefined | number;
  props: InspectorDataProps;
  source?: null | undefined | InspectorDataSource;
}>;
declare type TouchedViewDataAtPoint = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
InspectorData & {
  pointerY: number;
  touchedViewTag?: number;
  frame: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    top: number;
    left: number;
    width: number;
    height: number;
  }>;
}>;
declare type ReactNativeType = {
  findHostInstance_DEPRECATED: (componentOrHandle: any) => null | undefined | ElementRef<HostComponent<{}>>;
  findNodeHandle: (componentOrHandle: any) => null | undefined | number;
  dispatchCommand: (handle: any, command: string, args: any[]) => void;
  render: (element: React$Element<any>, containerTag: any, callback?: null | undefined | Function) => any;
  unmountComponentAtNode: (containerTag: number) => any;
  unmountComponentAtNodeAndRemoveContainer: (containerTag: number) => any;
  // TODO (bvaughn) Add types
  unstable_batchedUpdates: any;
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: SecretInternalsType;
};
declare type ReactFabricType = {
  findHostInstance_DEPRECATED: (componentOrHandle: any) => null | undefined | ElementRef<HostComponent<{}>>;
  findNodeHandle: (componentOrHandle: any) => null | undefined | number;
  dispatchCommand: (handle: any, command: string, args: any[]) => void;
  render: (element: React$Element<any>, containerTag: any, callback?: null | undefined | Function) => any;
  unmountComponentAtNode: (containerTag: number) => any;
};
declare type ReactNativeEventTarget = {
  node: Object;
  canonical: {
    _nativeTag: number;
    viewConfig: ReactNativeBaseComponentViewConfig;
    currentProps: Object;
    _internalInstanceHandle: Object;
  };
};
declare type ReactFaricEventTouch = {
  identifier: number;
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
  target: number;
  timestamp: number;
  force: number;
};
declare type ReactFaricEvent = {
  touches: ReactFaricEventTouch[];
  changedTouches: ReactFaricEventTouch[];
  targetTouches: ReactFaricEventTouch[];
  target: number;
};
declare type LayoutAnimationType = "spring" | "linear" | "easeInEaseOut" | "easeIn" | "easeOut" | "keyboard";
declare type LayoutAnimationProperty = "opacity" | "scaleX" | "scaleY" | "scaleXY";
declare type LayoutAnimationAnimationConfig = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  duration?: number;
  delay?: number;
  springDamping?: number;
  initialVelocity?: number;
  type?: LayoutAnimationType;
  property?: LayoutAnimationProperty;
}>;
declare type LayoutAnimationConfig = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  duration: number;
  create?: LayoutAnimationAnimationConfig;
  update?: LayoutAnimationAnimationConfig;
  delete?: LayoutAnimationAnimationConfig;
}>;
export type { MeasureOnSuccessCallback };
export type { MeasureInWindowOnSuccessCallback };
export type { MeasureLayoutOnSuccessCallback };
export type { AttributeConfiguration };
export type { ReactNativeBaseComponentViewConfig };
export type { ViewConfigGetter };
export type { NativeMethods };
export type { HostComponent };
export type { InspectorData };
export type { TouchedViewDataAtPoint };
export type { ReactNativeType };
export type { ReactFabricType };
export type { ReactNativeEventTarget };
export type { ReactFaricEventTouch };
export type { ReactFaricEvent };
export type { LayoutAnimationType };
export type { LayoutAnimationProperty };
export type { LayoutAnimationAnimationConfig };
export type { LayoutAnimationConfig };