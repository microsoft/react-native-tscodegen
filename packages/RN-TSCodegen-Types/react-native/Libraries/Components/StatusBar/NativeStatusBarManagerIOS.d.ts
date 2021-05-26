// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly HEIGHT: number;
    readonly DEFAULT_BACKGROUND_COLOR?: number;
  };
  // TODO(T47754272) Can we remove this method?
  readonly getHeight: (callback: (result:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    height: number;
  }) => void) => void;
  readonly setNetworkActivityIndicatorVisible: (visible: boolean) => void;
  readonly addListener: (eventType: string) => void;
  readonly removeListeners: (count: number) => void;

  /**
   *  - statusBarStyles can be:
   *    - 'default'
   *    - 'dark-content'
   *    - 'light-content'
   */
  readonly setStyle: (statusBarStyle: null | undefined | string, animated: boolean) => void;

  /**
   *  - withAnimation can be: 'none' | 'fade' | 'slide'
   */
  readonly setHidden: (hidden: boolean, withAnimation: string) => void;
}
declare var NativeStatusBarManager:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly HEIGHT: number;
    readonly DEFAULT_BACKGROUND_COLOR?: number;
  };
  // TODO(T47754272) Can we remove this method?
  getHeight: (callback: (result:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    height: number;
  }) => void) => void;
  setNetworkActivityIndicatorVisible: (visible: boolean) => void;
  addListener: (eventType: string) => void;
  removeListeners: (count: number) => void;

  /**
   *  - statusBarStyles can be:
   *    - 'default'
   *    - 'dark-content'
   *    - 'light-content'
   */
  setStyle: (statusBarStyle: null | undefined | string, animated: boolean) => void;

  /**
   *  - withAnimation can be: 'none' | 'fade' | 'slide'
   */
  setHidden: (hidden: boolean, withAnimation: string) => void;
};
export type { Spec };
declare const $f2tExportDefault: typeof NativeStatusBarManager;
export default $f2tExportDefault;