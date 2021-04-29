// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly showMessage: (message: string, withColor?: null | undefined | number, withBackgroundColor?: null | undefined | number) => void;
  readonly hide: () => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;