// @flow
import { ElementRef } from "react";
import { Ref } from "react";
declare type Args = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getForwardedRef: () => null | undefined | Ref<any>;
  setLocalRef: (ref: ElementRef<any>) => unknown;
}>;
declare function setAndForwardRef($f2t1: Args): (ref: ElementRef<any>) => void;
declare const $f2tExportDefault: typeof setAndForwardRef;
export default $f2tExportDefault;