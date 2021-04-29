// @flow
import * as React from "react";
import LogBoxLog from "./LogBoxLog";
import { LogLevel } from "./LogBoxLog";
import { Message } from "./parseLogBoxLog";
import { Category } from "./parseLogBoxLog";
import { ComponentStack } from "./parseLogBoxLog";
import { ExtendedExceptionData } from "./parseLogBoxLog";
import { ExtendedError } from "../../Core/Devtools/parseErrorStack";
declare type LogBoxLogs = Set<typeof LogBoxLog>;
declare type LogData = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  level: LogLevel;
  message: Message;
  category: Category;
  componentStack: ComponentStack;
}>;
declare type Observer = ($f2t1: Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  logs: LogBoxLogs;
  isDisabled: boolean;
  selectedLogIndex: number;
}>) => void;
declare type IgnorePattern = string | RegExp;
declare type Subscription = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  unsubscribe: () => void;
}>;
declare type WarningInfo =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  finalFormat: string;
  forceDialogImmediately: boolean;
  suppressDialog_LEGACY: boolean;
  suppressCompletely: boolean;
  monitorEvent: string | null;
  monitorListVersion: number;
  monitorSampleRate: number;
};
declare type WarningFilter = (format: string) => WarningInfo;
declare type AppInfo = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  appVersion: string;
  engine: string;
  onPress?: null | undefined | (() => void);
}>;
declare function reportLogBoxError(error: ExtendedError, componentStack?: string): void;
declare function isLogBoxErrorMessage(message: string): boolean;
declare function isMessageIgnored(message: string): boolean;
declare function addLog(log: LogData): void;
declare function addException(error: ExtendedExceptionData): void;
declare function symbolicateLogNow(log: typeof LogBoxLog): void;
declare function retrySymbolicateLogNow(log: typeof LogBoxLog): void;
declare function symbolicateLogLazy(log: typeof LogBoxLog): void;
declare function clear(): void;
declare function setSelectedLog(proposedNewIndex: number): void;
declare function clearWarnings(): void;
declare function clearErrors(): void;
declare function dismiss(log: typeof LogBoxLog): void;
declare function setWarningFilter(filter: WarningFilter): void;
declare function setAppInfo(info: () => AppInfo): void;
declare function getAppInfo(): null | undefined | AppInfo;
declare function checkWarningFilter(format: string): WarningInfo;
declare function addIgnorePatterns(patterns: ReadonlyArray<IgnorePattern>): void;
declare function setDisabled(value: boolean): void;
declare function isDisabled(): boolean;
declare function observe(observer: Observer): Subscription;
declare type SubscribedComponent = React.AbstractComponent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  logs: ReadonlyArray<typeof LogBoxLog>;
  isDisabled: boolean;
  selectedLogIndex: number;
}>>;
declare function withSubscription(WrappedComponent: SubscribedComponent): React.AbstractComponent<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{}>;
export type { LogBoxLogs };
export type { LogData };
export type { Observer };
export type { IgnorePattern };
export type { Subscription };
export type { WarningInfo };
export type { WarningFilter };
export { reportLogBoxError };
export { isLogBoxErrorMessage };
export { isMessageIgnored };
export { addLog };
export { addException };
export { symbolicateLogNow };
export { retrySymbolicateLogNow };
export { symbolicateLogLazy };
export { clear };
export { setSelectedLog };
export { clearWarnings };
export { clearErrors };
export { dismiss };
export { setWarningFilter };
export { setAppInfo };
export { getAppInfo };
export { checkWarningFilter };
export { addIgnorePatterns };
export { setDisabled };
export { isDisabled };
export { observe };
export { withSubscription };