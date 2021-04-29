import { $FlowFixMe } from "flow2dts-flow-types-polyfill";
import { $Keys } from "utility-types";
declare type ChangeEventName = $Keys<{
  announcementFinished: string;
  boldTextChanged: string;
  change: string;
  grayscaleChanged: string;
  invertColorsChanged: string;
  reduceMotionChanged: string;
  reduceTransparencyChanged: string;
  screenReaderChanged: string;
}>;
declare var AccessibilityInfo:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Query whether bold text is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when bold text is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isBoldTextEnabled
   */
  isBoldTextEnabled: () => Promise<boolean>;

  /**
   * Query whether grayscale is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when grayscale is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isGrayscaleEnabled
   */
  isGrayscaleEnabled: () => Promise<boolean>;

  /**
   * Query whether inverted colors are currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when invert color is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isInvertColorsEnabled
   */
  isInvertColorsEnabled: () => Promise<boolean>;

  /**
   * Query whether reduced motion is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when a reduce motion is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isReduceMotionEnabled
   */
  isReduceMotionEnabled: () => Promise<boolean>;

  /**
   * Query whether reduced transparency is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when a reduce transparency is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isReduceTransparencyEnabled
   */
  isReduceTransparencyEnabled: () => Promise<boolean>;

  /**
   * Query whether a screen reader is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when a screen reader is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isScreenReaderEnabled
   */
  isScreenReaderEnabled: () => Promise<boolean>;
  fetch: $FlowFixMe;

  /**
   * Add an event handler. Supported events:
   *
   * - `boldTextChanged`: iOS-only event. Fires when the state of the bold text toggle changes.
   *   The argument to the event handler is a boolean. The boolean is `true` when a bold text
   *   is enabled and `false` otherwise.
   * - `grayscaleChanged`: iOS-only event. Fires when the state of the gray scale toggle changes.
   *   The argument to the event handler is a boolean. The boolean is `true` when a gray scale
   *   is enabled and `false` otherwise.
   * - `invertColorsChanged`: iOS-only event. Fires when the state of the invert colors toggle
   *   changes. The argument to the event handler is a boolean. The boolean is `true` when a invert
   *   colors is enabled and `false` otherwise.
   * - `reduceMotionChanged`: Fires when the state of the reduce motion toggle changes.
   *   The argument to the event handler is a boolean. The boolean is `true` when a reduce
   *   motion is enabled (or when "Transition Animation Scale" in "Developer options" is
   *   "Animation off") and `false` otherwise.
   * - `reduceTransparencyChanged`: iOS-only event. Fires when the state of the reduce transparency
   *   toggle changes.  The argument to the event handler is a boolean. The boolean is `true`
   *   when a reduce transparency is enabled and `false` otherwise.
   * - `screenReaderChanged`: Fires when the state of the screen reader changes. The argument
   *   to the event handler is a boolean. The boolean is `true` when a screen
   *   reader is enabled and `false` otherwise.
   * - `announcementFinished`: iOS-only event. Fires when the screen reader has
   *   finished making an announcement. The argument to the event handler is a
   *   dictionary with these keys:
   *     - `announcement`: The string announced by the screen reader.
   *     - `success`: A boolean indicating whether the announcement was
   *       successfully made.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#addeventlistener
   */
  addEventListener: (eventName: ChangeEventName, handler: Function) => Object;

  /**
   * Set accessibility focus to a react component.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#setaccessibilityfocus
   */
  setAccessibilityFocus: (reactTag: number) => void;

  /**
   * Post a string to be announced by the screen reader.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#announceforaccessibility
   */
  announceForAccessibility: (announcement: string) => void;

  /**
   * Remove an event handler.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#removeeventlistener
   */
  removeEventListener: (eventName: ChangeEventName, handler: Function) => void;
};
declare const $f2tExportDefault: typeof AccessibilityInfo;
export default $f2tExportDefault;