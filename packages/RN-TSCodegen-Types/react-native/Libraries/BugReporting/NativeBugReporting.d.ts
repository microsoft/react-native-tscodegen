// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly startReportAProblemFlow: () => void;
  readonly setExtraData: (extraData: Object, extraFiles: Object) => void;
  readonly setCategoryID: (categoryID: string) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;