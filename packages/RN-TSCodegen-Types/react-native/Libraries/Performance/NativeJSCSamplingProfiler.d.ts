// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly operationComplete: (token: number, result?: null | undefined | string, error?: null | undefined | string) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;