// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly abortRequest: (requestId: number) => void;
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
  readonly getSize: (uri: string) => Promise<Readonly<{
    width: number;
    height: number;
  }>>;
  readonly getSizeWithHeaders: (uri: string, headers: Object) => Promise<{
    width: number;
    height: number;
  }>;
  readonly prefetchImage: (uri: string, requestId: number) => Promise<boolean>;
  readonly queryCache: (uris: string[]) => Promise<Object>;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;