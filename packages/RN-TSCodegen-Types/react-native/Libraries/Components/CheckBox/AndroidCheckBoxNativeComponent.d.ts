// @flow
import * as React from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { ProcessedColorValue } from "../../StyleSheet/processColor";
declare type CheckBoxEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  target: number;
  value: boolean;
}>>;
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  /**
  * Used in case the props change removes the component.
  */
  onChange?: null | undefined | ((event: CheckBoxEvent) => unknown);

  /**
  * Invoked with the new value when the value changes.
  */
  onValueChange?: null | undefined | ((value: boolean) => unknown);

  /**
  * Used to locate this view in end-to-end tests.
  */
  testID?: null | undefined | string;
  on?: null | undefined | boolean;
  enabled?: boolean;
  tintColors:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    true?: null | undefined | ProcessedColorValue;
    false?: null | undefined | ProcessedColorValue;
  } | undefined;
}>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeValue: (viewRef: React.ElementRef<NativeType>, value: boolean) => void;
}
declare var Commands: NativeCommands;
export { Commands };
declare const $f2tExportDefault: NativeType;
export default $f2tExportDefault;