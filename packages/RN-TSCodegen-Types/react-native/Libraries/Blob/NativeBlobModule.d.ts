// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    BLOB_URI_SCHEME?: null | undefined | string;
    BLOB_URI_HOST?: null | undefined | string;
  };
  readonly addNetworkingHandler: () => void;
  readonly addWebSocketHandler: (id: number) => void;
  readonly removeWebSocketHandler: (id: number) => void;
  readonly sendOverSocket: (blob: Object, socketID: number) => void;
  readonly createFromParts: (parts: Object[], withId: string) => void;
  readonly release: (blobId: string) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;