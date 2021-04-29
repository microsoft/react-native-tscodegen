// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
declare type DialogAction = string;
declare type DialogButtonKey = number;
declare type DialogOptions =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  title?: string;
  message?: string;
  buttonPositive?: string;
  buttonNegative?: string;
  buttonNeutral?: string;
  items?: string[];
  cancelable?: boolean;
};
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly buttonClicked: DialogAction;
    readonly dismissed: DialogAction;
    readonly buttonPositive: DialogButtonKey;
    readonly buttonNegative: DialogButtonKey;
    readonly buttonNeutral: DialogButtonKey;
  };
  readonly showAlert: (config: DialogOptions, onError: (error: string) => void, onAction: (action: DialogAction, buttonKey?: DialogButtonKey) => void) => void;
}
export type { DialogOptions };
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;