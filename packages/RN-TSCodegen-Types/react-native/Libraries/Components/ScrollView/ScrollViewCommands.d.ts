// @flow
import * as React from "react";
import { Double } from "../../../Libraries/Types/CodegenTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type ScrollViewNativeComponentType = HostComponent<{}>;
interface NativeCommands {
  readonly flashScrollIndicators: (viewRef: React.ElementRef<ScrollViewNativeComponentType>) => void;
  readonly scrollTo: (viewRef: React.ElementRef<ScrollViewNativeComponentType>, x: Double, y: Double, animated: boolean) => void;
  readonly scrollToEnd: (viewRef: React.ElementRef<ScrollViewNativeComponentType>, animated: boolean) => void;
  readonly zoomToRect: (viewRef: React.ElementRef<ScrollViewNativeComponentType>, rect:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    x: Double;
    y: Double;
    width: Double;
    height: Double;
    animated?: boolean;
  }, animated?: boolean) => void;
}
declare const $f2tExportDefault: NativeCommands;
export default $f2tExportDefault;