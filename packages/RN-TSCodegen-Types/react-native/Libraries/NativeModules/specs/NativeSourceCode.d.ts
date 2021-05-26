// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    scriptURL: string;
  };
}
declare var NativeSourceCode:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    scriptURL: string;
  };
};
export type { Spec };
declare const $f2tExportDefault: typeof NativeSourceCode;
export default $f2tExportDefault;