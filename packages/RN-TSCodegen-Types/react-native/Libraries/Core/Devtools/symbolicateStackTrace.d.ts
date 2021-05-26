// @flow
import { StackFrame } from "../NativeExceptionsManager";
declare type CodeFrame = Readonly<{
  content: string;
  location?: null | undefined | {
    row: number;
    column: number;
  };
  fileName: string;
}>;
declare type SymbolicatedStackTrace = Readonly<{
  stack: StackFrame[];
  codeFrame?: null | undefined | CodeFrame;
}>;
declare function symbolicateStackTrace(stack: StackFrame[]): Promise<SymbolicatedStackTrace>;
export type { CodeFrame };
export type { SymbolicatedStackTrace };
declare const $f2tExportDefault: typeof symbolicateStackTrace;
export default $f2tExportDefault;