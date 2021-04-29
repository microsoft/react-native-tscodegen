import { $PropertyType } from "utility-types";
// @flow
import { PressEvent } from "../Types/CoreEventTypes";
declare type GestureState =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * ID of the gestureState - persisted as long as there at least one touch on screen
   */
  stateID: number;

  /**
   * The latest screen coordinates of the recently-moved touch
   */
  moveX: number;

  /**
   * The latest screen coordinates of the recently-moved touch
   */
  moveY: number;

  /**
   * The screen coordinates of the responder grant
   */
  x0: number;

  /**
   * The screen coordinates of the responder grant
   */
  y0: number;

  /**
   * Accumulated distance of the gesture since the touch started
   */
  dx: number;

  /**
   * Accumulated distance of the gesture since the touch started
   */
  dy: number;

  /**
   * Current velocity of the gesture
   */
  vx: number;

  /**
   * Current velocity of the gesture
   */
  vy: number;

  /**
   * Number of touches currently on screen
   */
  numberActiveTouches: number;

  /**
   * All `gestureState` accounts for timeStamps up until this value
   *
   * @private
   */
  _accountsForMovesUpTo: number;
};
declare type ActiveCallback = (event: PressEvent, gestureState: GestureState) => boolean;
declare type PassiveCallback = (event: PressEvent, gestureState: GestureState) => unknown;
declare type PanResponderConfig = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onMoveShouldSetPanResponder?: null | undefined | ActiveCallback;
  onMoveShouldSetPanResponderCapture?: null | undefined | ActiveCallback;
  onStartShouldSetPanResponder?: null | undefined | ActiveCallback;
  onStartShouldSetPanResponderCapture?: null | undefined | ActiveCallback;

  /**
  * The body of `onResponderGrant` returns a bool, but the vast majority of
  * callsites return void and this TODO notice is found in it:
  *   TODO: t7467124 investigate if this can be removed
  */
  onPanResponderGrant?: null | undefined | (PassiveCallback | ActiveCallback);
  onPanResponderReject?: null | undefined | PassiveCallback;
  onPanResponderStart?: null | undefined | PassiveCallback;
  onPanResponderEnd?: null | undefined | PassiveCallback;
  onPanResponderRelease?: null | undefined | PassiveCallback;
  onPanResponderMove?: null | undefined | PassiveCallback;
  onPanResponderTerminate?: null | undefined | PassiveCallback;
  onPanResponderTerminationRequest?: null | undefined | ActiveCallback;
  onShouldBlockNativeResponder?: null | undefined | ActiveCallback;
}>;
declare var PanResponder:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   *
   * A graphical explanation of the touch data flow:
   *
   * +----------------------------+             +--------------------------------+
   * | ResponderTouchHistoryStore |             |TouchHistoryMath                |
   * +----------------------------+             +----------+---------------------+
   * |Global store of touchHistory|             |Allocation-less math util       |
   * |including activeness, start |             |on touch history (centroids     |
   * |position, prev/cur position.|             |and multitouch movement etc)    |
   * |                            |             |                                |
   * +----^-----------------------+             +----^---------------------------+
   *      |                                          |
   *      | (records relevant history                |
   *      |  of touches relevant for                 |
   *      |  implementing higher level               |
   *      |  gestures)                               |
   *      |                                          |
   * +----+-----------------------+             +----|---------------------------+
   * | ResponderEventPlugin       |             |    |   Your App/Component      |
   * +----------------------------+             +----|---------------------------+
   * |Negotiates which view gets  | Low level   |    |             High level    |
   * |onResponderMove events.     | events w/   |  +-+-------+     events w/     |
   * |Also records history into   | touchHistory|  |   Pan   |     multitouch +  |
   * |ResponderTouchHistoryStore. +---------------->Responder+-----> accumulative|
   * +----------------------------+ attached to |  |         |     distance and  |
   *                                 each event |  +---------+     velocity.     |
   *                                            |                                |
   *                                            |                                |
   *                                            +--------------------------------+
   *
   *
   *
   * Gesture that calculates cumulative movement over time in a way that just
   * "does the right thing" for multiple touches. The "right thing" is very
   * nuanced. When moving two touches in opposite directions, the cumulative
   * distance is zero in each dimension. When two touches move in parallel five
   * pixels in the same direction, the cumulative distance is five, not ten. If
   * two touches start, one moves five in a direction, then stops and the other
   * touch moves fives in the same direction, the cumulative distance is ten.
   *
   * This logic requires a kind of processing of time "clusters" of touch events
   * so that two touch moves that essentially occur in parallel but move every
   * other frame respectively, are considered part of the same movement.
   *
   * Explanation of some of the non-obvious fields:
   *
   * - moveX/moveY: If no move event has been observed, then `(moveX, moveY)` is
   *   invalid. If a move event has been observed, `(moveX, moveY)` is the
   *   centroid of the most recently moved "cluster" of active touches.
   *   (Currently all move have the same timeStamp, but later we should add some
   *   threshold for what is considered to be "moving"). If a palm is
   *   accidentally counted as a touch, but a finger is moving greatly, the palm
   *   will move slightly, but we only want to count the single moving touch.
   * - x0/y0: Centroid location (non-cumulative) at the time of becoming
   *   responder.
   * - dx/dy: Cumulative touch distance - not the same thing as sum of each touch
   *   distance. Accounts for touch moves that are clustered together in time,
   *   moving the same direction. Only valid when currently responder (otherwise,
   *   it only represents the drag distance below the threshold).
   * - vx/vy: Velocity.
   */
  _initializeGestureState: (gestureState: GestureState) => void;

  /**
   * This is nuanced and is necessary. It is incorrect to continuously take all
   * active *and* recently moved touches, find the centroid, and track how that
   * result changes over time. Instead, we must take all recently moved
   * touches, and calculate how the centroid has changed just for those
   * recently moved touches, and append that change to an accumulator. This is
   * to (at least) handle the case where the user is moving three fingers, and
   * then one of the fingers stops but the other two continue.
   *
   * This is very different than taking all of the recently moved touches and
   * storing their centroid as `dx/dy`. For correctness, we must *accumulate
   * changes* in the centroid of recently moved touches.
   *
   * There is also some nuance with how we handle multiple moved touches in a
   * single event. With the way `ReactNativeEventEmitter` dispatches touches as
   * individual events, multiple touches generate two 'move' events, each of
   * them triggering `onResponderMove`. But with the way `PanResponder` works,
   * all of the gesture inference is performed on the first dispatch, since it
   * looks at all of the touches (even the ones for which there hasn't been a
   * native dispatch yet). Therefore, `PanResponder` does not call
   * `onResponderMove` passed the first dispatch. This diverges from the
   * typical responder callback pattern (without using `PanResponder`), but
   * avoids more dispatches than necessary.
   */
  _updateGestureStateOnMove: (gestureState: GestureState, touchHistory: $PropertyType<PressEvent, "touchHistory">) => void;

  /**
   * @param {object} config Enhanced versions of all of the responder callbacks
   * that provide not only the typical `ResponderSyntheticEvent`, but also the
   * `PanResponder` gesture state.  Simply replace the word `Responder` with
   * `PanResponder` in each of the typical `onResponder*` callbacks. For
   * example, the `config` object would look like:
   *
   *  - `onMoveShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onMoveShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponder: (e, gestureState) => {...}`
   *  - `onStartShouldSetPanResponderCapture: (e, gestureState) => {...}`
   *  - `onPanResponderReject: (e, gestureState) => {...}`
   *  - `onPanResponderGrant: (e, gestureState) => {...}`
   *  - `onPanResponderStart: (e, gestureState) => {...}`
   *  - `onPanResponderEnd: (e, gestureState) => {...}`
   *  - `onPanResponderRelease: (e, gestureState) => {...}`
   *  - `onPanResponderMove: (e, gestureState) => {...}`
   *  - `onPanResponderTerminate: (e, gestureState) => {...}`
   *  - `onPanResponderTerminationRequest: (e, gestureState) => {...}`
   *  - `onShouldBlockNativeResponder: (e, gestureState) => {...}`
   *
   *  In general, for events that have capture equivalents, we update the
   *  gestureState once in the capture phase and can use it in the bubble phase
   *  as well.
   *
   *  Be careful with onStartShould* callbacks. They only reflect updated
   *  `gestureState` for start/end events that bubble/capture to the Node.
   *  Once the node is the responder, you can rely on every start/end event
   *  being processed by the gesture and `gestureState` being updated
   *  accordingly. (numberActiveTouches) may not be totally accurate unless you
   *  are the responder.
   */
  create: (config: PanResponderConfig) =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    getInteractionHandle: () => null | undefined | number;
    panHandlers:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      onMoveShouldSetResponder: (event: PressEvent) => boolean;
      onMoveShouldSetResponderCapture: (event: PressEvent) => boolean;
      onResponderEnd: (event: PressEvent) => void;
      onResponderGrant: (event: PressEvent) => boolean;
      onResponderMove: (event: PressEvent) => void;
      onResponderReject: (event: PressEvent) => void;
      onResponderRelease: (event: PressEvent) => void;
      onResponderStart: (event: PressEvent) => void;
      onResponderTerminate: (event: PressEvent) => void;
      onResponderTerminationRequest: (event: PressEvent) => boolean;
      onStartShouldSetResponder: (event: PressEvent) => boolean;
      onStartShouldSetResponderCapture: (event: PressEvent) => boolean;
    };
  };
};
declare type PanResponderInstance = ReturnType<typeof PanResponder["create"]>;
export type { GestureState };
export type { PanResponderInstance };
declare const $f2tExportDefault: typeof PanResponder;
export default $f2tExportDefault;