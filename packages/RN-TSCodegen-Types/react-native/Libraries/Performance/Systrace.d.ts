// @flow
declare var Systrace:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  installReactHook: () => void;
  setEnabled: (enabled: boolean) => void;
  isEnabled: () => boolean;

  /**
   * beginEvent/endEvent for starting and then ending a profile within the same call stack frame
   **/
  beginEvent: (profileName?: string | (() => string), args?: {
    [$f2tKey: string]: string;
  }) => void;
  endEvent: () => void;

  /**
   * beginAsyncEvent/endAsyncEvent for starting and then ending a profile where the end can either
   * occur on another thread or out of the current stack frame, eg await
   * the returned cookie variable should be used as input into the endAsyncEvent call to end the profile
   **/
  beginAsyncEvent: (profileName?: string | (() => string)) => number;
  endAsyncEvent: (profileName?: string | (() => string), cookie?: number) => void;

  /**
   * counterEvent registers the value to the profileName on the systrace timeline
   **/
  counterEvent: (profileName?: string | (() => string), value?: number) => void;
};
declare const $f2tExportDefault: typeof Systrace;
export default $f2tExportDefault;