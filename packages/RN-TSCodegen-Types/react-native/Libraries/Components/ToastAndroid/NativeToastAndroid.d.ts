// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    SHORT: number;
    LONG: number;
    TOP: number;
    BOTTOM: number;
    CENTER: number;
  };
  readonly show: (message: string, duration: number) => void;
  readonly showWithGravity: (message: string, duration: number, gravity: number) => void;
  readonly showWithGravityAndOffset: (message: string, duration: number, gravity: number, xOffset: number, yOffset: number) => void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;