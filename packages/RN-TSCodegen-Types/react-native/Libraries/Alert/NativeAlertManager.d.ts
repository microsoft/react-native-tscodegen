// @flow
import { TurboModule } from "../TurboModule/RCTExport";
declare type Args =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  title?: string;
  message?: string;
  buttons?: Object[]; // TODO: have a better type

  type?: string;
  defaultValue?: string;
  cancelButtonKey?: string;
  destructiveButtonKey?: string;
  keyboardType?: string;
};
interface Spec extends TurboModule {
  readonly alertWithArgs: (args: Args, callback: (id: number, value: string) => void) => void;
}
export type { Args };
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;