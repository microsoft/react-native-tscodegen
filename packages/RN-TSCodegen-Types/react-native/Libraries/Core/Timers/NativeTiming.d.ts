// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly createTimer: (callbackID: number, duration: number, jsSchedulingTime: number, repeats: boolean) => void;
  readonly deleteTimer: (timerID: number) => void;
  readonly setSendIdleEvents: (sendIdleEvents: boolean) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;