// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly sendRequest: (query:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    method: string;
    url: string;
    data: Object;
    headers: Object;
    responseType: string;
    incrementalUpdates: boolean;
    timeout: number;
    withCredentials: boolean;
  }, callback: (requestId: number) => void) => void;
  readonly abortRequest: (requestId: number) => void;
  readonly clearCookies: (callback: (result: boolean) => void) => void;
  // RCTEventEmitter
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;