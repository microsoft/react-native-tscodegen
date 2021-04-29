// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
  readonly share: (content:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    title?: string;
    message?: string;
  }, dialogTitle?: string) => Promise<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    action: string;
  }>;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;