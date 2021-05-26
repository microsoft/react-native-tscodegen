// @flow
import { BubblingEventHandler } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheet";
import { ViewProps } from "../View/ViewPropTypes";
import * as React from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
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
  value?: WithDefault<boolean, false>;
  tintColor?: null | undefined | ColorValue;
  onTintColor?: null | undefined | ColorValue;
  thumbTintColor?: null | undefined | ColorValue;
  // Deprecated props
  thumbColor?: null | undefined | ColorValue;
  trackColorForFalse?: null | undefined | ColorValue;
  trackColorForTrue?: null | undefined | ColorValue;
  // Events
  onChange?: null | undefined | BubblingEventHandler<SwitchChangeEvent>;
}>;
declare type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setValue: (viewRef: React.ElementRef<ComponentType>, value: boolean) => void;
}
declare var Commands: NativeCommands;
export { Commands };
declare const $f2tExportDefault: ComponentType;
export default $f2tExportDefault;