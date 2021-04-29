// @flow
import { AppearancePreferences } from "./NativeAppearance";
import { ColorSchemeName } from "./NativeAppearance";
declare type AppearanceListener = (preferences: AppearancePreferences) => void;
declare const $f2d_getColorScheme: () => null | undefined | ColorSchemeName;
declare const $f2d_addChangeListener: (listener: AppearanceListener) => void;
declare const $f2d_removeChangeListener: (listener: AppearanceListener) => void;
export { $f2d_getColorScheme as getColorScheme, $f2d_addChangeListener as addChangeListener, $f2d_removeChangeListener as removeChangeListener };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Note: Although color scheme is available immediately, it may change at any
   * time. Any rendering logic or styles that depend on this should try to call
   * this function on every render, rather than caching the value (for example,
   * using inline styles rather than setting a value in a `StyleSheet`).
   *
   * Example: `const colorScheme = Appearance.getColorScheme();`
   *
   * @returns {?ColorSchemeName} Value for the color scheme preference.
   */
  getColorScheme: () => null | undefined | ColorSchemeName;

  /**
   * Add an event handler that is fired when appearance preferences change.
   */
  addChangeListener: (listener: AppearanceListener) => void;

  /**
   * Remove an event handler.
   */
  removeChangeListener: (listener: AppearanceListener) => void;
};
export default $f2tExportDefault;