// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly setExtraData: (extraData: Object, forIdentifier: string) => void;
  readonly dismiss: () => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;