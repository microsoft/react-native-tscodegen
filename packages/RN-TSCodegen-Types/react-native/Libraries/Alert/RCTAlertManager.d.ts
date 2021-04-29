// @flow
import { Args } from "./NativeAlertManager";
declare const $f2d_alertWithArgs: (args: Args, callback: (id: number, value: string) => void) => void;
export { $f2d_alertWithArgs as alertWithArgs };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  alertWithArgs: (args: Args, callback: (id: number, value: string) => void) => void;
};
export default $f2tExportDefault;