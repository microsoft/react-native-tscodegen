// @flow
import * as React from "react";
import { ViewProps } from "./ViewPropTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type ViewNativeComponentType = HostComponent<ViewProps>;
declare var viewConfig: {} |
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  bubblingEventTypes?: Readonly<{
    [eventName: string]: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      phasedRegistrationNames: Readonly<
      /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
      {
        bubbled: string;
        captured: string;
      }>;
    }>;
  }>;
  directEventTypes?: Readonly<{
    [eventName: string]: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    }>;
  }>;
  uiViewClassName: string;
  validAttributes?: {
    [propName: string]: true | Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      diff?: <T>(arg1: any, arg2: any) => boolean;
      process?: (arg1: any) => any;
    }>;
  };
};
declare var __INTERNAL_VIEW_CONFIG: typeof viewConfig;
interface NativeCommands {
  readonly hotspotUpdate: (viewRef: React.ElementRef<HostComponent<{}>>, x: number, y: number) => void;
  readonly setPressed: (viewRef: React.ElementRef<HostComponent<{}>>, pressed: boolean) => void;
}
declare var Commands: NativeCommands;
export type { ViewNativeComponentType };
export { __INTERNAL_VIEW_CONFIG };
export { Commands };
declare const $f2tExportDefault: ViewNativeComponentType;
export default $f2tExportDefault;