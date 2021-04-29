import { $PropertyType } from "utility-types";
// @flow
import * as React from "react";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
declare type SyntheticEvent<T> = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  bubbles?: null | undefined | boolean;
  cancelable?: null | undefined | boolean;
  currentTarget: number | React.ElementRef<HostComponent<{}>>;
  defaultPrevented?: null | undefined | boolean;
  dispatchConfig: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    registrationName: string;
  }>;
  eventPhase?: null | undefined | number;
  preventDefault: () => void;
  isDefaultPrevented: () => boolean;
  stopPropagation: () => void;
  isPropagationStopped: () => boolean;
  isTrusted?: null | undefined | boolean;
  nativeEvent: T;
  persist: () => void;
  target: (null | undefined | number) | React.ElementRef<HostComponent<{}>>;
  timeStamp: number;
  type?: null | undefined | string;
}>;
declare type ResponderSyntheticEvent<T> = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
SyntheticEvent<T> & {
  touchHistory: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    indexOfSingleActiveTouch: number;
    mostRecentTimeStamp: number;
    numberActiveTouches: number;
    touchBank: ReadonlyArray<Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      touchActive: boolean;
      startPageX: number;
      startPageY: number;
      startTimeStamp: number;
      currentPageX: number;
      currentPageY: number;
      currentTimeStamp: number;
      previousPageX: number;
      previousPageY: number;
      previousTimeStamp: number;
    }>>;
  }>;
}>;
declare type Layout = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  x: number;
  y: number;
  width: number;
  height: number;
}>;
declare type TextLayout = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
Layout & {
  ascender: number;
  capHeight: number;
  descender: number;
  text: string;
  xHeight: number;
}>;
declare type LayoutEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  layout: Layout;
}>>;
declare type TextLayoutEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  lines: TextLayout[];
}>>;
declare type PressEvent = ResponderSyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  changedTouches: ReadonlyArray<$PropertyType<PressEvent, "nativeEvent">>;
  force: number;
  identifier: number;
  locationX: number;
  locationY: number;
  pageX: number;
  pageY: number;
  target?: null | undefined | number;
  timestamp: number;
  touches: ReadonlyArray<$PropertyType<PressEvent, "nativeEvent">>;
}>>;
declare type ScrollEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  contentInset: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    bottom: number;
    left: number;
    right: number;
    top: number;
  }>;
  contentOffset: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    y: number;
    x: number;
  }>;
  contentSize: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    height: number;
    width: number;
  }>;
  layoutMeasurement: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    height: number;
    width: number;
  }>;
  targetContentOffset?: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    y: number;
    x: number;
  }>;
  velocity?: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    y: number;
    x: number;
  }>;
  zoomScale?: number;
  responderIgnoreScroll?: boolean;
}>>;
declare type BlurEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  target: number;
}>>;
declare type FocusEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  target: number;
}>>;
declare type MouseEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  clientX: number;
  clientY: number;
  pageX: number;
  pageY: number;
  timestamp: number;
}>>;
export type { SyntheticEvent };
export type { ResponderSyntheticEvent };
export type { Layout };
export type { TextLayout };
export type { LayoutEvent };
export type { TextLayoutEvent };
export type { PressEvent };
export type { ScrollEvent };
export type { BlurEvent };
export type { FocusEvent };
export type { MouseEvent };