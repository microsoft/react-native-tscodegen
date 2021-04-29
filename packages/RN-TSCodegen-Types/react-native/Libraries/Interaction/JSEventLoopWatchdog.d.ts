// @flow
declare type Handler = {
  onIterate?: () => void;
  onStall: (params: {
    lastInterval: number;
    busyTime: number;
  }) => null | undefined | string;
};
declare var JSEventLoopWatchdog:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getStats: () => Object;
  reset: () => void;
  addHandler: (handler: Handler) => void;
  install: ($f2t1: {
    thresholdMS: number;
  }) => void;
};
declare const $f2tExportDefault: typeof JSEventLoopWatchdog;
export default $f2tExportDefault;