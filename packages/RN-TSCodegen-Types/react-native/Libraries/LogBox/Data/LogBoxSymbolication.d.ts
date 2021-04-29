// @flow
import { StackFrame } from "../../Core/NativeExceptionsManager";
import { SymbolicatedStackTrace } from "../../Core/Devtools/symbolicateStackTrace";
declare type Stack = StackFrame[];
declare function deleteStack(stack: Stack): void;
declare function symbolicate(stack: Stack): Promise<SymbolicatedStackTrace>;
export type { Stack };
export { deleteStack };
export { symbolicate };