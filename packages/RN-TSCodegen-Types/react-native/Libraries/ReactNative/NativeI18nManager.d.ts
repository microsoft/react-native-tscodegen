// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    isRTL: boolean;
    doLeftAndRightSwapInRTL: boolean;
  };
  allowRTL: (allowRTL: boolean) => void;
  forceRTL: (forceRTL: boolean) => void;
  swapLeftAndRightInRTL: (flipStyles: boolean) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;