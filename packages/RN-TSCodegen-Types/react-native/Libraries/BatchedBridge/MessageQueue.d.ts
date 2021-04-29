// @flow
declare type SpyData = {
  type: number;
  module?: null | undefined | string;
  method: string | number;
  args: any[];
};
declare class MessageQueue {
  __spy?: null | undefined | ((data: SpyData) => void);
  constructor();
  static spy(spyOrToggle: boolean | ((data: SpyData) => void)): void;
  callFunctionReturnFlushedQueue(module: string, method: string, args: any[]): null | [number[], number[], any[], number];
  // Deprecated. T61834641: Remove me once native clients have updated
  callFunctionReturnResultAndFlushedQueue(module: string, method: string, args: any[]): void;
  invokeCallbackAndReturnFlushedQueue(cbID: number, args: any[]): null | [number[], number[], any[], number];
  flushedQueue(): null | [number[], number[], any[], number];
  getEventLoopRunningTime(): number;
  registerCallableModule(name: string, module: Object): void;
  registerLazyCallableModule(name: string, factory: ($f2t1: void) => Object): void;
  getCallableModule(name: string): any | null;
  callNativeSyncHook(moduleID: number, methodID: number, params: any[], onFail?: null | undefined | Function, onSucc?: null | undefined | Function): any;
  processCallbacks(moduleID: number, methodID: number, params: any[], onFail?: null | undefined | Function, onSucc?: null | undefined | Function): void;
  enqueueNativeCall(moduleID: number, methodID: number, params: any[], onFail?: null | undefined | Function, onSucc?: null | undefined | Function): void;
  createDebugLookup(moduleID: number, name: string, methods?: null | undefined | ReadonlyArray<string>): void;
  // For JSTimers to register its callback. Otherwise a circular dependency
  // between modules is introduced. Note that only one callback may be
  // registered at a time.
  setImmediatesCallback(fn: () => void): void;

  /**
   * Private methods
   */
  __guard(fn: () => void): void;
  // MessageQueue installs a global handler to catch all exceptions where JS users can register their own behavior
  // This handler makes all exceptions to be propagated from inside MessageQueue rather than by the VM at their origin
  // This makes stacktraces to be placed at MessageQueue rather than at where they were launched
  // The parameter DebuggerInternal.shouldPauseOnThrow is used to check before catching all exceptions and
  // can be configured by the VM or any Inspector
  __shouldPauseOnThrow(): boolean;
  __callImmediates(): void;
  __callFunction(module: string, method: string, args: any[]): void;
  __invokeCallback(cbID: number, args: any[]): void;
}
export type { SpyData };
export default MessageQueue;