// @flow
import { TurboModule } from "../TurboModule/RCTExport";
declare type Header = [string, string];
interface Spec extends TurboModule {
  readonly sendRequest: (method: string, url: string, requestId: number, headers: Header[], data: Object, responseType: string, useIncrementalUpdates: boolean, timeout: number, withCredentials: boolean) => void;
  readonly abortRequest: (requestId: number) => void;
  readonly clearCookies: (callback: (result: boolean) => void) => void;
  // RCTEventEmitter
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;