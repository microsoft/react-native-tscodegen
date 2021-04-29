// @flow
declare var FrameRateLogger:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Enable `debug` to see local logs of what's going on. `reportStackTraces` will grab stack traces
   * during UI thread stalls and upload them if the native module supports it.
   */
  setGlobalOptions: (options: {
    debug?: boolean;
    reportStackTraces?: boolean;
  }) => void;

  /**
   * Must call `setContext` before any events can be properly tracked, which is done automatically
   * in `AppRegistry`, but navigation is also a common place to hook in.
   */
  setContext: (context: string) => void;

  /**
   * Called in `ScrollResponder` so any component that uses that module will handle this
   * automatically.
   */
  beginScroll: () => void;

  /**
   * Called in `ScrollResponder` so any component that uses that module will handle this
   * automatically.
   */
  endScroll: () => void;
};
declare const $f2tExportDefault: typeof FrameRateLogger;
export default $f2tExportDefault;