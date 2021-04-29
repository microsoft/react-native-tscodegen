// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly notifyTaskFinished: (taskId: number) => void;
  readonly notifyTaskRetry: (taskId: number) => Promise<boolean>;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;