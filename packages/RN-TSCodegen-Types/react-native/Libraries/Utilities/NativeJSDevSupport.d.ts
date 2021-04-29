// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    ERROR_CODE_EXCEPTION: number;
    ERROR_CODE_VIEW_NOT_FOUND: number;
  };
  readonly onSuccess: (data: string) => void;
  readonly onFailure: (errorCode: number, error: string) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;