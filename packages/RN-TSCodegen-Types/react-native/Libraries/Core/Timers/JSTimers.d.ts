// @flow
declare type JSTimerType = "setTimeout" | "setInterval" | "requestAnimationFrame" | "setImmediate" | "requestIdleCallback";
declare var ExportedJSTimers:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  callIdleCallbacks: (frameTime: number) => any | void;
  callImmediates: () => void;
  callTimers: (timersToCall: number[]) => any | void;
  cancelAnimationFrame: (timerID: number) => void;
  cancelIdleCallback: (timerID: number) => void;
  clearImmediate: (timerID: number) => void;
  clearInterval: (timerID: number) => void;
  clearTimeout: (timerID: number) => void;
  emitTimeDriftWarning: (warningMessage: string) => any | void;
  requestAnimationFrame: (func: any) => any | number;
  requestIdleCallback: (func: any, options?: null | undefined | any) => any | number;
  setImmediate: (func: any, ...args: any) => number;
  setInterval: (func: any, duration: number, ...args: any) => number;
  setTimeout: (func: any, duration: number, ...args: any) => number;
};
export type { JSTimerType };
declare const $f2tExportDefault: typeof ExportedJSTimers;
export default $f2tExportDefault;