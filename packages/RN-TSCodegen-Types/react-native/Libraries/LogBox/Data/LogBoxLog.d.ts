// @flow
import { Category } from "./parseLogBoxLog";
import { Message } from "./parseLogBoxLog";
import { ComponentStack } from "./parseLogBoxLog";
import { CodeFrame } from "./parseLogBoxLog";
import { Stack } from "./LogBoxSymbolication";
declare type SymbolicationStatus = "NONE" | "PENDING" | "COMPLETE" | "FAILED";
declare type LogLevel = "warn" | "error" | "fatal" | "syntax";
declare type LogBoxLogData = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  level: LogLevel;
  type?: null | undefined | string;
  message: Message;
  stack: Stack;
  category: string;
  componentStack: ComponentStack;
  codeFrame?: null | undefined | CodeFrame;
  isComponentError: boolean;
}>;
declare class LogBoxLog {
  message: Message;
  type?: null | undefined | string;
  category: Category;
  componentStack: ComponentStack;
  stack: Stack;
  count: number;
  level: LogLevel;
  codeFrame?: null | undefined | CodeFrame;
  isComponentError: boolean;
  symbolicated: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    error: null;
    stack: null;
    status: "NONE";
  }> | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    error: null;
    stack: null;
    status: "PENDING";
  }> | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    error: null;
    stack: Stack;
    status: "COMPLETE";
  }> | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    error: Error;
    stack: null;
    status: "FAILED";
  }>;
  constructor(data: LogBoxLogData);
  incrementCount(): void;
  getAvailableStack(): Stack;
  retrySymbolicate(callback?: (status: SymbolicationStatus) => void): void;
  symbolicate(callback?: (status: SymbolicationStatus) => void): void;
  handleSymbolicate(callback?: (status: SymbolicationStatus) => void): void;
  updateStatus(error?: null | undefined | Error, stack?: null | undefined | Stack, codeFrame?: null | undefined | CodeFrame, callback?: (status: SymbolicationStatus) => void): void;
}
export type { LogLevel };
export type { LogBoxLogData };
declare const $f2tExportDefault: LogBoxLog;
export default $f2tExportDefault;