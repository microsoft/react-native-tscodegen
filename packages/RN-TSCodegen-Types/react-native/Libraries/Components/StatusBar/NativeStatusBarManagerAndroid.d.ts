// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly HEIGHT: number;
    readonly DEFAULT_BACKGROUND_COLOR: number;
  };
  readonly setColor: (color: number, animated: boolean) => void;
  readonly setTranslucent: (translucent: boolean) => void;

  /**
   *  - statusBarStyles can be:
   *    - 'default'
   *    - 'dark-content'
   */
  readonly setStyle: (statusBarStyle?: null | undefined | string) => void;
  readonly setHidden: (hidden: boolean) => void;
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
  setColor: (color: number, animated: boolean) => void;
  setTranslucent: (translucent: boolean) => void;

  /**
   *  - statusBarStyles can be:
   *    - 'default'
   *    - 'dark-content'
   */
  setStyle: (statusBarStyle?: null | undefined | string) => void;
  setHidden: (hidden: boolean) => void;
};
export type { Spec };
declare const $f2tExportDefault: typeof NativeStatusBarManager;
export default $f2tExportDefault;