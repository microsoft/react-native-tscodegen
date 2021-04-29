// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly show: () => void;
  readonly reload: () => void;
  readonly debugRemotely: (enableDebug: boolean) => void;
  readonly setProfilingEnabled: (enabled: boolean) => void;
  readonly setHotLoadingEnabled: (enabled: boolean) => void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;