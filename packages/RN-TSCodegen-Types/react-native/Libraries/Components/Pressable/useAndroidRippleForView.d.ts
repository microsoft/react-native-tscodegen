// @flow
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { PressEvent } from "../../Types/CoreEventTypes";
import View from "../../Components/View/View";
import * as React from "react";
declare type NativeBackgroundProp = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  type: "RippleAndroid";
  color?: null | undefined | number;
  borderless: boolean;
  rippleRadius?: null | undefined | number;
}>;
declare type RippleConfig =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  color?: null | undefined | ColorValue;
  borderless?: null | undefined | boolean;
  radius?: null | undefined | number;
};
declare function useAndroidRippleForView(rippleConfig: null | undefined | RippleConfig, viewRef:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  current: null | React.ElementRef<typeof View>;
}): null | undefined | Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onPressIn: (event: PressEvent) => void;
  onPressMove: (event: PressEvent) => void;
  onPressOut: (event: PressEvent) => void;
  viewProps: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    nativeBackgroundAndroid: NativeBackgroundProp;
  }>;
}>;
export type { RippleConfig };
export { useAndroidRippleForView as default };