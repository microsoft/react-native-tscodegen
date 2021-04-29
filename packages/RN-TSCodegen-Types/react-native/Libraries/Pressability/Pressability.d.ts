// @flow
import { RectOrSize } from "../StyleSheet/Rect";
import { BlurEvent } from "../Types/CoreEventTypes";
import { FocusEvent } from "../Types/CoreEventTypes";
import { PressEvent } from "../Types/CoreEventTypes";
import { MouseEvent } from "../Types/CoreEventTypes";
declare type PressabilityConfig = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Whether a press gesture can be interrupted by a parent gesture such as a
  * scroll event. Defaults to true.
  */
  cancelable?: null | undefined | boolean;

  /**
  * Whether to disable initialization of the press gesture.
  */
  disabled?: null | undefined | boolean;

  /**
  * Amount to extend the `VisualRect` by to create `HitRect`.
  */
  hitSlop?: null | undefined | RectOrSize;

  /**
  * Amount to extend the `HitRect` by to create `PressRect`.
  */
  pressRectOffset?: null | undefined | RectOrSize;

  /**
  * Whether to disable the systemm sound when `onPress` fires on Android.
  **/
  android_disableSound?: null | undefined | boolean;

  /**
  * Duration to wait after hover in before calling `onHoverIn`.
  */
  delayHoverIn?: null | undefined | number;

  /**
  * Duration to wait after hover out before calling `onHoverOut`.
  */
  delayHoverOut?: null | undefined | number;

  /**
  * Duration (in addition to `delayPressIn`) after which a press gesture is
  * considered a long press gesture. Defaults to 500 (milliseconds).
  */
  delayLongPress?: null | undefined | number;

  /**
  * Duration to wait after press down before calling `onPressIn`.
  */
  delayPressIn?: null | undefined | number;

  /**
  * Duration to wait after letting up before calling `onPressOut`.
  */
  delayPressOut?: null | undefined | number;

  /**
  * Minimum duration to wait between calling `onPressIn` and `onPressOut`.
  */
  minPressDuration?: null | undefined | number;

  /**
  * Called after the element loses focus.
  */
  onBlur?: null | undefined | ((event: BlurEvent) => unknown);

  /**
  * Called after the element is focused.
  */
  onFocus?: null | undefined | ((event: FocusEvent) => unknown);

  /**
  * Called when the hover is activated to provide visual feedback.
  */
  onHoverIn?: null | undefined | ((event: MouseEvent) => unknown);

  /**
  * Called when the hover is deactivated to undo visual feedback.
  */
  onHoverOut?: null | undefined | ((event: MouseEvent) => unknown);

  /**
  * Called when a long press gesture has been triggered.
  */
  onLongPress?: null | undefined | ((event: PressEvent) => unknown);

  /**
  * Called when a press gestute has been triggered.
  */
  onPress?: null | undefined | ((event: PressEvent) => unknown);

  /**
  * Called when the press is activated to provide visual feedback.
  */
  onPressIn?: null | undefined | ((event: PressEvent) => unknown);

  /**
  * Called when the press location moves. (This should rarely be used.)
  */
  onPressMove?: null | undefined | ((event: PressEvent) => unknown);

  /**
  * Called when the press is deactivated to undo visual feedback.
  */
  onPressOut?: null | undefined | ((event: PressEvent) => unknown);

  /**
  * Returns whether a long press gesture should cancel the press gesture.
  * Defaults to true.
  */
  onLongPressShouldCancelPress_DEPRECATED?: null | undefined | (() => boolean);

  /**
  * If `cancelable` is set, this will be ignored.
  *
  * Returns whether to yield to a lock termination request (e.g. if a native
  * scroll gesture attempts to steal the responder lock).
  */
  onResponderTerminationRequest_DEPRECATED?: null | undefined | (() => boolean);

  /**
  * If `disabled` is set, this will be ignored.
  *
  * Returns whether to start a press gesture.
  *
  * @deprecated
  */
  onStartShouldSetResponder_DEPRECATED?: null | undefined | (() => boolean);
}>;
declare type EventHandlers = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onBlur: (event: BlurEvent) => void;
  onClick: (event: PressEvent) => void;
  onFocus: (event: FocusEvent) => void;
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
  onResponderGrant: (event: PressEvent) => void;
  onResponderMove: (event: PressEvent) => void;
  onResponderRelease: (event: PressEvent) => void;
  onResponderTerminate: (event: PressEvent) => void;
  onResponderTerminationRequest: () => boolean;
  onStartShouldSetResponder: () => boolean;
}>;
declare class Pressability {
  constructor(config: PressabilityConfig);
  configure(config: PressabilityConfig): void;

  /**
   * Resets any pending timers. This should be called on unmount.
   */
  reset(): void;

  /**
   * Returns a set of props to spread into the interactive element.
   */
  getEventHandlers(): EventHandlers;
}
export type { PressabilityConfig };
export type { EventHandlers };
export { Pressability as default };