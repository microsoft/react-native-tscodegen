// @flow
import { StackFrame } from "../NativeExceptionsManager";
declare type CodeFrame = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  content: string;
  location?: null | undefined | {
    row: number;
    column: number;
  };
  fileName: string;
}>;
declare type SymbolicatedStackTrace = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  stack: StackFrame[];
  codeFrame?: null | undefined | CodeFrame;
}>;
declare function symbolicateStackTrace(stack: StackFrame[]): Promise<SymbolicatedStackTrace>;
export type { CodeFrame };
export type { SymbolicatedStackTrace };
declare const $f2tExportDefault: typeof symbolicateStackTrace;
export default $f2tExportDefault;