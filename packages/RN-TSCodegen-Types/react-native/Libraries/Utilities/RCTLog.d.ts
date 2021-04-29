// @flow
declare var warningHandler: null | undefined | (($f2t1: any[]) => void);
declare var RCTLog:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  // level one of log, info, warn, error, mustfix
  logIfNoNativeHook: (level: string, ...args: any[]) => void;
  // Log to console regardless of nativeLoggingHook
  logToConsole: (level: string, ...args: any[]) => void;
  setWarningHandler: (handler: typeof warningHandler) => void;
};
declare const $f2tExportDefault: typeof RCTLog;
export default $f2tExportDefault;