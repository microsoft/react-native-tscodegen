// @flow
declare type LogLevel = "trace" | "info" | "warn" | "error" | "log" | "group" | "groupCollapsed" | "groupEnd" | "debug";
declare type HMRClientNativeInterface =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  enable: () => void;
  disable: () => void;
  registerBundle: (requestUrl: string) => void;
  log: (level: LogLevel, data: unknown[]) => void;
  setup: (platform: string, bundleEntry: string, host: string, port: number | string, isEnabled: boolean) => void;
};
declare var HMRClient: HMRClientNativeInterface;
export type { HMRClientNativeInterface };
declare const $f2tExportDefault: typeof HMRClient;
export default $f2tExportDefault;