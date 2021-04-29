// @flow
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import * as React from "react";
import { Float } from "../../../Libraries/Types/CodegenTypes";
import { WithDefault } from "../../../Libraries/Types/CodegenTypes";
import { BubblingEventHandler } from "../../../Libraries/Types/CodegenTypes";
declare type Event = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  timestamp: Float;
}>;
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  date?: null | undefined | Float;
  initialDate?: null | undefined | Float;
  locale?: null | undefined | string;
  maximumDate?: null | undefined | Float;
  minimumDate?: null | undefined | Float;
  minuteInterval?: WithDefault<1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30, 1>;
  mode?: WithDefault<"date" | "time" | "datetime", "date">;
  onChange?: null | undefined | BubblingEventHandler<Event>;
  timeZoneOffsetInMinutes?: null | undefined | Float;
}>;
declare type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeDate: (viewRef: React.ElementRef<ComponentType>, date: Float) => void;
}
declare var Commands: NativeCommands;
export { Commands };
declare const $f2tExportDefault: HostComponent<NativeProps>;
export default $f2tExportDefault;