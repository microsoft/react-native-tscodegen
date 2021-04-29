// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly connect: (url: string, protocols: null | undefined | string[], options:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    headers?: Object;
  }, socketID: number) => void;
  readonly send: (message: string, forSocketID: number) => void;
  readonly sendBinary: (base64String: string, forSocketID: number) => void;
  readonly ping: (socketID: number) => void;
  readonly close: (code: number, reason: string, socketID: number) => void;
  // RCTEventEmitter
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;