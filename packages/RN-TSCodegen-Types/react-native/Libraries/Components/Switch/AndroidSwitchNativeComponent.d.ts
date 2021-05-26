// @flow
import * as React from "react";
import { WithDefault } from "../../../Libraries/Types/CodegenTypes";
import { BubblingEventHandler } from "../../../Libraries/Types/CodegenTypes";
import { HostComponent } from "../../../Libraries/Renderer/shims/ReactNativeTypes";
import { ColorValue } from "../../StyleSheet/StyleSheet";
import { ViewProps } from "../View/ViewPropTypes";
declare type SwitchChangeEvent = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  value: boolean;
}>;
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  // Props
  disabled?: WithDefault<boolean, false>;
  enabled?: WithDefault<boolean, true>;
  thumbColor?: null | undefined | ColorValue;
  trackColorForFalse?: null | undefined | ColorValue;
  trackColorForTrue?: null | undefined | ColorValue;
  value?: WithDefault<boolean, false>;
  on?: WithDefault<boolean, false>;
  thumbTintColor?: null | undefined | ColorValue;
  trackTintColor?: null | undefined | ColorValue;
  // Events
  onChange?: BubblingEventHandler<SwitchChangeEvent>;
}>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeValue: (viewRef: React.ElementRef<NativeType>, value: boolean) => void;
}
declare var Commands: NativeCommands;
export { Commands };
declare const $f2tExportDefault: NativeType;
export default $f2tExportDefault;