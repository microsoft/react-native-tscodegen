// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
  // Return [width, height] of image uri
  readonly getSize: (uri: string) => Promise<ReadonlyArray<number>>;
  readonly getSizeWithHeaders: (uri: string, headers: Object) => Promise<{
    width: number;
    height: number;
  }>;
  readonly prefetchImage: (uri: string) => Promise<boolean>;
  readonly queryCache: (uris: string[]) => Promise<Object>;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;