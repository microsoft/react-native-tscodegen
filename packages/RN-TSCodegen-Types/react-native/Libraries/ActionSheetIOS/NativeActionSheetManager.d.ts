// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
  readonly showActionSheetWithOptions: (options:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly title?: null | undefined | string;
    readonly message?: null | undefined | string;
    readonly options?: null | undefined | string[];
    readonly destructiveButtonIndices?: null | undefined | number[];
    readonly cancelButtonIndex?: null | undefined | number;
    readonly anchor?: null | undefined | number;
    readonly tintColor?: null | undefined | number;
    readonly userInterfaceStyle?: null | undefined | string;
  }, callback: (buttonIndex: number) => void) => void;
  readonly showShareActionSheetWithOptions: (options:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly message?: null | undefined | string;
    readonly url?: null | undefined | string;
    readonly subject?: null | undefined | string;
    readonly anchor?: null | undefined | number;
    readonly tintColor?: null | undefined | number;
    readonly excludedActivityTypes?: null | undefined | string[];
    readonly userInterfaceStyle?: null | undefined | string;
  }, failureCallback: (error:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly domain: string;
    readonly code: string;
    readonly userInfo?: null | undefined | Object;
    readonly message: string;
  }) => void, successCallback: (completed: boolean, activityType?: null | undefined | string) => void) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;