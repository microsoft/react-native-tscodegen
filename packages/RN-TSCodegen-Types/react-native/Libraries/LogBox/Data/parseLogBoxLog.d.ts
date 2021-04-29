// @flow
import { ExceptionData } from "../../Core/NativeExceptionsManager";
import { LogBoxLogData } from "./LogBoxLog";
declare type ExtendedExceptionData = ExceptionData & {
  isComponentError: boolean;
};
declare type Category = string;
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
declare type Message = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  content: string;
  substitutions: ReadonlyArray<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    length: number;
    offset: number;
  }>>;
}>;
declare type ComponentStack = ReadonlyArray<CodeFrame>;
declare function parseInterpolation(args: ReadonlyArray<unknown>): Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  category: Category;
  message: Message;
}>;
declare function parseComponentStack(message: string): ComponentStack;
declare function parseLogBoxException(error: ExtendedExceptionData): LogBoxLogData;
declare function parseLogBoxLog(args: ReadonlyArray<unknown>):
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  componentStack: ComponentStack;
  category: Category;
  message: Message;
};
export type { ExtendedExceptionData };
export type { Category };
export type { CodeFrame };
export type { Message };
export type { ComponentStack };
export { parseInterpolation };
export { parseComponentStack };
export { parseLogBoxException };
export { parseLogBoxLog };