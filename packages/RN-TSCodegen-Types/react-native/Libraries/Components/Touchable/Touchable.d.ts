import $1 from "react";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { PressEvent } from "../../Types/CoreEventTypes";
declare var States:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  NOT_RESPONDER: string;
  RESPONDER_INACTIVE_PRESS_IN: string;
  RESPONDER_INACTIVE_PRESS_OUT: string;
  RESPONDER_ACTIVE_PRESS_IN: string;
  RESPONDER_ACTIVE_PRESS_OUT: string;
  RESPONDER_ACTIVE_LONG_PRESS_IN: string;
  RESPONDER_ACTIVE_LONG_PRESS_OUT: string;
  ERROR: string;
};
declare type State = typeof States.NOT_RESPONDER | typeof States.RESPONDER_INACTIVE_PRESS_IN | typeof States.RESPONDER_INACTIVE_PRESS_OUT | typeof States.RESPONDER_ACTIVE_PRESS_IN | typeof States.RESPONDER_ACTIVE_PRESS_OUT | typeof States.RESPONDER_ACTIVE_LONG_PRESS_IN | typeof States.RESPONDER_ACTIVE_LONG_PRESS_OUT | typeof States.ERROR;
declare var Signals:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  DELAY: string;
  RESPONDER_GRANT: string;
  RESPONDER_RELEASE: string;
  RESPONDER_TERMINATED: string;
  ENTER_PRESS_RECT: string;
  LEAVE_PRESS_RECT: string;
  LONG_PRESS_DETECTED: string;
};
declare type Signal = typeof Signals.DELAY | typeof Signals.RESPONDER_GRANT | typeof Signals.RESPONDER_RELEASE | typeof Signals.RESPONDER_TERMINATED | typeof Signals.ENTER_PRESS_RECT | typeof Signals.LEAVE_PRESS_RECT | typeof Signals.LONG_PRESS_DETECTED;
declare var TouchableMixin:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  componentDidMount: () => void;

  /**
   * Clear all timeouts on unmount
   */
  componentWillUnmount: () => void;

  /**
   * It's prefer that mixins determine state in this way, having the class
   * explicitly mix the state in the one and only `getInitialState` method.
   *
   * @return {object} State object to be placed inside of
   * `this.state.touchable`.
   */
  touchableGetInitialState: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    touchable:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      responderID: null;
      touchState: void;
    };
  };
  // ==== Hooks to Gesture Responder system ====

  /**
   * Must return true if embedded in a native platform scroll view.
   */
  touchableHandleResponderTerminationRequest: () => any;

  /**
   * Must return true to start the process of `Touchable`.
   */
  touchableHandleStartShouldSetResponder: () => any;

  /**
   * Return true to cancel press on long press.
   */
  touchableLongPressCancelsPress: () => boolean;

  /**
   * Place as callback for a DOM element's `onResponderGrant` event.
   * @param {SyntheticEvent} e Synthetic event from event system.
   *
   */
  touchableHandleResponderGrant: (e: PressEvent) => void;

  /**
   * Place as callback for a DOM element's `onResponderRelease` event.
   */
  touchableHandleResponderRelease: (e: PressEvent) => void;

  /**
   * Place as callback for a DOM element's `onResponderTerminate` event.
   */
  touchableHandleResponderTerminate: (e: PressEvent) => void;

  /**
   * Place as callback for a DOM element's `onResponderMove` event.
   */
  touchableHandleResponderMove: (e: PressEvent) => void;

  /**
   * Invoked when the item receives focus. Mixers might override this to
   * visually distinguish the `VisualRect` so that the user knows that it
   * currently has the focus. Most platforms only support a single element being
   * focused at a time, in which case there may have been a previously focused
   * element that was blurred just prior to this. This can be overridden when
   * using `Touchable.Mixin.withoutDefaultFocusAndBlur`.
   */
  touchableHandleFocus: (e: Event) => void;

  /**
   * Invoked when the item loses focus. Mixers might override this to
   * visually distinguish the `VisualRect` so that the user knows that it
   * no longer has focus. Most platforms only support a single element being
   * focused at a time, in which case the focus may have moved to another.
   * This can be overridden when using
   * `Touchable.Mixin.withoutDefaultFocusAndBlur`.
   */
  touchableHandleBlur: (e: Event) => void;
  // ==== Abstract Application Callbacks ====

  /**
   * Invoked when the item should be highlighted. Mixers should implement this
   * to visually distinguish the `VisualRect` so that the user knows that
   * releasing a touch will result in a "selection" (analog to click).
   *
   * @abstract
   * touchableHandleActivePressIn: function,
   */

  /**
   * Invoked when the item is "active" (in that it is still eligible to become
   * a "select") but the touch has left the `PressRect`. Usually the mixer will
   * want to unhighlight the `VisualRect`. If the user (while pressing) moves
   * back into the `PressRect` `touchableHandleActivePressIn` will be invoked
   * again and the mixer should probably highlight the `VisualRect` again. This
   * event will not fire on an `touchEnd/mouseUp` event, only move events while
   * the user is depressing the mouse/touch.
   *
   * @abstract
   * touchableHandleActivePressOut: function
   */

  /**
   * Invoked when the item is "selected" - meaning the interaction ended by
   * letting up while the item was either in the state
   * `RESPONDER_ACTIVE_PRESS_IN` or `RESPONDER_INACTIVE_PRESS_IN`.
   *
   * @abstract
   * touchableHandlePress: function
   */

  /**
   * Invoked when the item is long pressed - meaning the interaction ended by
   * letting up while the item was in `RESPONDER_ACTIVE_LONG_PRESS_IN`. If
   * `touchableHandleLongPress` is *not* provided, `touchableHandlePress` will
   * be called as it normally is. If `touchableHandleLongPress` is provided, by
   * default any `touchableHandlePress` callback will not be invoked. To
   * override this default behavior, override `touchableLongPressCancelsPress`
   * to return false. As a result, `touchableHandlePress` will be called when
   * lifting up, even if `touchableHandleLongPress` has also been called.
   *
   * @abstract
   * touchableHandleLongPress: function
   */

  /**
   * Returns the number of millis to wait before triggering a highlight.
   *
   * @abstract
   * touchableGetHighlightDelayMS: function
   */

  /**
   * Returns the amount to extend the `HitRect` into the `PressRect`. Positive
   * numbers mean the size expands outwards.
   *
   * @abstract
   * touchableGetPressRectOffset: function
   */
  // ==== Internal Logic ====

  /**
   * Measures the `HitRect` node on activation. The Bounding rectangle is with
   * respect to viewport - not page, so adding the `pageXOffset/pageYOffset`
   * should result in points that are in the same coordinate system as an
   * event's `globalX/globalY` data values.
   *
   * - Consider caching this for the lifetime of the component, or possibly
   *   being able to share this cache between any `ScrollMap` view.
   *
   * @sideeffects
   * @private
   */
  _remeasureMetricsOnActivation: () => void;
  _handleQueryLayout: (l: number, t: number, w: number, h: number, globalX: number, globalY: number) => void;
  _handleDelay: (e: PressEvent) => void;
  _handleLongDelay: (e: PressEvent) => void;

  /**
   * Receives a state machine signal, performs side effects of the transition
   * and stores the new state. Validates the transition as well.
   *
   * @param {Signals} signal State machine signal.
   * @throws Error if invalid state transition or unrecognized signal.
   * @sideeffects
   */
  _receiveSignal: (signal: Signal, e: PressEvent) => void;
  _cancelLongPressDelayTimeout: () => void;
  _isHighlight: (state: State) => boolean;
  _savePressInLocation: (e: PressEvent) => void;
  _getDistanceBetweenPoints: (aX: number, aY: number, bX: number, bY: number) => number;

  /**
   * Will perform a transition between touchable states, and identify any
   * highlighting or unhighlighting that must be performed for this particular
   * transition.
   *
   * @param {States} curState Current Touchable state.
   * @param {States} nextState Next Touchable state.
   * @param {Signal} signal Signal that triggered the transition.
   * @param {Event} e Native event.
   * @sideeffects
   */
  _performSideEffectsForTransition: (curState: State, nextState: State, signal: Signal, e: PressEvent) => void;
  _startHighlight: (e: PressEvent) => void;
  _endHighlight: (e: PressEvent) => void;
  withoutDefaultFocusAndBlur:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
};
declare var Touchable:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  Mixin: typeof TouchableMixin;
  TOUCH_TARGET_DEBUG: boolean;

  /**
   * Renders a debugging overlay to visualize touch target with hitSlop (might not work on Android).
   */
  renderDebugView: ($f2t1: {
    color: string | number;
    hitSlop: EdgeInsetsProp;
  }) => null | $1.Node;
};
declare const $f2tExportDefault: typeof Touchable;
export default $f2tExportDefault;