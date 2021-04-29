// @flow
declare var Vibration:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Trigger a vibration with specified `pattern`.
   *
   * See https://reactnative.dev/docs/vibration.html#vibrate
   */
  vibrate: (pattern?: number | number[], repeat?: boolean) => void;

  /**
   * Stop vibration
   *
   * See https://reactnative.dev/docs/vibration.html#cancel
   */
  cancel: () => void;
};
declare const $f2tExportDefault: typeof Vibration;
export default $f2tExportDefault;