// @flow
declare type SpyData = {
  type: number;
  module?: null | undefined | string;
  method: string | number;
  args: unknown[];
};
declare class MessageQueue {
  __spy?: null | undefined | ((data: SpyData) => void);
  constructor();
  static spy(spyOrToggle: boolean | ((data: SpyData) => void)): void;
  callFunctionReturnFlushedQueue(module: string, method: string, args: unknown[]): null | [number[], number[], unknown[], number];
  invokeCallbackAndReturnFlushedQueue(cbID: number, args: unknown[]): null | [number[], number[], unknown[], number];
  flushedQueue(): null | [number[], number[], unknown[], number];
  getEventLoopRunningTime(): number;
  registerCallableModule(name: string, module: {}): void;
  registerLazyCallableModule(name: string, factory: ($f2t1: void) => {}): void;
  getCallableModule(name: string): {} | null;
  callNativeSyncHook(moduleID: number, methodID: number, params: unknown[], onFail?: null | undefined | ((...$f2tRest: unknown[]) => void), onSucc?: null | undefined | ((...$f2tRest: unknown[]) => void)): unknown;
  processCallbacks(moduleID: number, methodID: number, params: unknown[], onFail?: null | undefined | ((...$f2tRest: unknown[]) => void), onSucc?: null | undefined | ((...$f2tRest: unknown[]) => void)): void;
  enqueueNativeCall(moduleID: number, methodID: number, params: unknown[], onFail?: null | undefined | ((...$f2tRest: unknown[]) => void), onSucc?: null | undefined | ((...$f2tRest: unknown[]) => void)): void;
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
  __callFunction(module: string, method: string, args: unknown[]): void;
  __invokeCallback(cbID: number, args: unknown[]): void;
}
export type { SpyData };
export default MessageQueue;