// @flow
declare type Timespan = {
  description?: string;
  totalTime?: number;
  startTime?: number;
  endTime?: number;
};
declare type IPerformanceLogger = {
  addTimespan: ($f2t1: string, $f2t2: number, $f2t3: string | void) => void;
  startTimespan: ($f2t1: string, $f2t2: string | void) => void;
  stopTimespan: ($f2t1: string, options?: {
    update?: boolean;
  }) => void;
  clear: () => void;
  clearCompleted: () => void;
  clearExceptTimespans: ($f2t1: string[]) => void;
  currentTimestamp: () => number;
  getTimespans: () => {
    [key: string]: Timespan;
  };
  hasTimespan: ($f2t1: string) => boolean;
  logTimespans: () => void;
  addTimespans: ($f2t1: number[], $f2t2: string[]) => void;
  setExtra: ($f2t1: string, $f2t2: any) => void;
  getExtras: () => {
    [key: string]: any;
  };
  removeExtra: ($f2t1: string) => null | undefined | any;
  logExtras: () => void;
  markPoint: ($f2t1: string, $f2t2: number | void) => void;
  getPoints: () => {
    [key: string]: number;
  };
  logPoints: () => void;
  logEverything: () => void;
};
declare function createPerformanceLogger(): IPerformanceLogger;
export type { IPerformanceLogger };
declare const $f2tExportDefault: typeof createPerformanceLogger;
export default $f2tExportDefault;