// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly fetchSegment: (segmentId: number, options: Object, callback: (error?: null | undefined | Object) => void) => // flowlint-line unclear-type: off
  void;
  readonly getSegment?: (segmentId: number, options: Object, callback: (error?: null | undefined | Object, path?: null | undefined | string) => void) => // flowlint-line unclear-type: off
  void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;