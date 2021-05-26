// @flow
import { TurboModule } from "../TurboModule/RCTExport";
declare type StackFrame =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  column?: null | undefined | number;
  file?: null | undefined | string;
  lineNumber?: null | undefined | number;
  methodName: string;
  collapse?: boolean;
};
declare type ExceptionData = {
  message: string;
  originalMessage?: null | undefined | string;
  name?: null | undefined | string;
  componentStack?: null | undefined | string;
  stack: StackFrame[];
  id: number;
  isFatal: boolean;
  // flowlint-next-line unclear-type:off
  extraData?: Object;
};
interface Spec extends TurboModule {
  // Deprecated: Use `reportException`
  readonly reportFatalException: (message: string, stack: StackFrame[], exceptionId: number) => void;
  // Deprecated: Use `reportException`
  readonly reportSoftException: (message: string, stack: StackFrame[], exceptionId: number) => void;
  readonly reportException?: (data: ExceptionData) => void;
  readonly updateExceptionMessage: (message: string, stack: StackFrame[], exceptionId: number) => void;
  // TODO(T53311281): This is a noop on iOS now. Implement it.
  readonly dismissRedbox?: () => void;
}
declare var ExceptionsManager:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  reportFatalException: (message: string, stack: StackFrame[], exceptionId: number) => void;
  reportSoftException: (message: string, stack: StackFrame[], exceptionId: number) => void;
  updateExceptionMessage: (message: string, stack: StackFrame[], exceptionId: number) => void;
  dismissRedbox: () => void;
  reportException: (data: ExceptionData) => void;
};
export type { StackFrame };
export type { ExceptionData };
export type { Spec };
declare const $f2tExportDefault: typeof ExceptionsManager;
export default $f2tExportDefault;