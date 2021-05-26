// @flow
declare type Timespan = {
  startTime: number;
  endTime?: number;
  totalTime?: number;
  startExtras?: Extras;
  endExtras?: Extras;
};
declare type ExtraValue = number | string | boolean;
declare type Extras = {
  [key: string]: ExtraValue;
};
interface IPerformanceLogger {
  addTimespan: (key: string, startTime: number, endTime: number, startExtras?: Extras, endExtras?: Extras) => void;
  append: (logger: IPerformanceLogger) => void;
  clear: () => void;
  clearCompleted: () => void;
  close: () => void;
  currentTimestamp: () => number;
  getExtras: () => Readonly<{
    [key: string]: null | undefined | ExtraValue;
  }>;
  getPoints: () => Readonly<{
    [key: string]: null | undefined | number;
  }>;
  getPointExtras: () => Readonly<{
    [key: string]: null | undefined | Extras;
  }>;
  getTimespans: () => Readonly<{
    [key: string]: null | undefined | Timespan;
  }>;
  hasTimespan: (key: string) => boolean;
  isClosed: () => boolean;
  logEverything: () => void;
  markPoint: (key: string, timestamp?: number, extras?: Extras) => void;
  removeExtra: (key: string) => null | undefined | ExtraValue;
  setExtra: (key: string, value: ExtraValue) => void;
  startTimespan: (key: string, timestamp?: number, extras?: Extras) => void;
  stopTimespan: (key: string, timestamp?: number, extras?: Extras) => void;
}
declare var getCurrentTimestamp: () => number;
declare function createPerformanceLogger(): IPerformanceLogger;
export type { Timespan };
export type { ExtraValue };
export type { Extras };
export type { IPerformanceLogger };
export { getCurrentTimestamp };
export { createPerformanceLogger as default };