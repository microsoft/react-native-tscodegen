import $1 from "react";
import { PressEvent } from "../Types/CoreEventTypes";
import { ScrollEvent } from "../Types/CoreEventTypes";
import { KeyboardEvent } from "./Keyboard/Keyboard";
import EmitterSubscription from "../vendor/emitter/EmitterSubscription";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
declare type State =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  isTouching: boolean;
  lastMomentumScrollBeginTime: number;
  lastMomentumScrollEndTime: number;
  observedScrollSinceBecomingResponder: boolean;
  becameResponderWhileAnimating: boolean;
};
declare var ScrollResponderMixin:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  _subscriptionKeyboardWillShow?: null | undefined | EmitterSubscription;
  _subscriptionKeyboardWillHide?: null | undefined | EmitterSubscription;
  _subscriptionKeyboardDidShow?: null | undefined | EmitterSubscription;
  _subscriptionKeyboardDidHide?: null | undefined | EmitterSubscription;
  scrollResponderMixinGetInitialState: () => State;

  /**
   * Invoke this from an `onScroll` event.
   */
  scrollResponderHandleScrollShouldSetResponder: () => boolean;

  /**
   * Merely touch starting is not sufficient for a scroll view to become the
   * responder. Being the "responder" means that the very next touch move/end
   * event will result in an action/movement.
   *
   * Invoke this from an `onStartShouldSetResponder` event.
   *
   * `onStartShouldSetResponder` is used when the next move/end will trigger
   * some UI movement/action, but when you want to yield priority to views
   * nested inside of the view.
   *
   * There may be some cases where scroll views actually should return `true`
   * from `onStartShouldSetResponder`: Any time we are detecting a standard tap
   * that gives priority to nested views.
   *
   * - If a single tap on the scroll view triggers an action such as
   *   recentering a map style view yet wants to give priority to interaction
   *   views inside (such as dropped pins or labels), then we would return true
   *   from this method when there is a single touch.
   *
   * - Similar to the previous case, if a two finger "tap" should trigger a
   *   zoom, we would check the `touches` count, and if `>= 2`, we would return
   *   true.
   *
   */
  scrollResponderHandleStartShouldSetResponder: (e: PressEvent) => boolean;

  /**
   * There are times when the scroll view wants to become the responder
   * (meaning respond to the next immediate `touchStart/touchEnd`), in a way
   * that *doesn't* give priority to nested views (hence the capture phase):
   *
   * - Currently animating.
   * - Tapping anywhere that is not a text input, while the keyboard is
   *   up (which should dismiss the keyboard).
   *
   * Invoke this from an `onStartShouldSetResponderCapture` event.
   */
  scrollResponderHandleStartShouldSetResponderCapture: (e: PressEvent) => boolean;

  /**
   * Invoke this from an `onResponderReject` event.
   *
   * Some other element is not yielding its role as responder. Normally, we'd
   * just disable the `UIScrollView`, but a touch has already began on it, the
   * `UIScrollView` will not accept being disabled after that. The easiest
   * solution for now is to accept the limitation of disallowing this
   * altogether. To improve this, find a way to disable the `UIScrollView` after
   * a touch has already started.
   */
  scrollResponderHandleResponderReject: () => void;

  /**
   * We will allow the scroll view to give up its lock iff it acquired the lock
   * during an animation. This is a very useful default that happens to satisfy
   * many common user experiences.
   *
   * - Stop a scroll on the left edge, then turn that into an outer view's
   *   backswipe.
   * - Stop a scroll mid-bounce at the top, continue pulling to have the outer
   *   view dismiss.
   * - However, without catching the scroll view mid-bounce (while it is
   *   motionless), if you drag far enough for the scroll view to become
   *   responder (and therefore drag the scroll view a bit), any backswipe
   *   navigation of a swipe gesture higher in the view hierarchy, should be
   *   rejected.
   */
  scrollResponderHandleTerminationRequest: () => boolean;

  /**
   * Invoke this from an `onTouchEnd` event.
   *
   * @param {PressEvent} e Event.
   */
  scrollResponderHandleTouchEnd: (e: PressEvent) => void;

  /**
   * Invoke this from an `onTouchCancel` event.
   *
   * @param {PressEvent} e Event.
   */
  scrollResponderHandleTouchCancel: (e: PressEvent) => void;

  /**
   * Invoke this from an `onResponderRelease` event.
   */
  scrollResponderHandleResponderRelease: (e: PressEvent) => void;
  scrollResponderHandleScroll: (e: ScrollEvent) => void;

  /**
   * Invoke this from an `onResponderGrant` event.
   */
  scrollResponderHandleResponderGrant: (e: ScrollEvent) => void;

  /**
   * Unfortunately, `onScrollBeginDrag` also fires when *stopping* the scroll
   * animation, and there's not an easy way to distinguish a drag vs. stopping
   * momentum.
   *
   * Invoke this from an `onScrollBeginDrag` event.
   */
  scrollResponderHandleScrollBeginDrag: (e: ScrollEvent) => void;

  /**
   * Invoke this from an `onScrollEndDrag` event.
   */
  scrollResponderHandleScrollEndDrag: (e: ScrollEvent) => void;

  /**
   * Invoke this from an `onMomentumScrollBegin` event.
   */
  scrollResponderHandleMomentumScrollBegin: (e: ScrollEvent) => void;

  /**
   * Invoke this from an `onMomentumScrollEnd` event.
   */
  scrollResponderHandleMomentumScrollEnd: (e: ScrollEvent) => void;

  /**
   * Invoke this from an `onTouchStart` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {PressEvent} e Touch Start event.
   */
  scrollResponderHandleTouchStart: (e: PressEvent) => void;

  /**
   * Invoke this from an `onTouchMove` event.
   *
   * Since we know that the `SimpleEventPlugin` occurs later in the plugin
   * order, after `ResponderEventPlugin`, we can detect that we were *not*
   * permitted to be the responder (presumably because a contained view became
   * responder). The `onResponderReject` won't fire in that case - it only
   * fires when a *current* responder rejects our request.
   *
   * @param {PressEvent} e Touch Start event.
   */
  scrollResponderHandleTouchMove: (e: PressEvent) => void;

  /**
   * A helper function for this class that lets us quickly determine if the
   * view is currently animating. This is particularly useful to know when
   * a touch has just started or ended.
   */
  scrollResponderIsAnimating: () => boolean;

  /**
   * Returns the node that represents native view that can be scrolled.
   * Components can pass what node to use by defining a `getScrollableNode`
   * function otherwise `this` is used.
   */
  scrollResponderGetScrollableNode: () => null | undefined | number;

  /**
   * A helper function to scroll to a specific point in the ScrollView.
   * This is currently used to help focus child TextViews, but can also
   * be used to quickly scroll to any element we want to focus. Syntax:
   *
   * `scrollResponderScrollTo(options: {x: number = 0; y: number = 0; animated: boolean = true})`
   *
   * Note: The weird argument signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as as alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  scrollResponderScrollTo: (x?: number | {
    x?: number;
    y?: number;
    animated?: boolean;
  }, y?: number, animated?: boolean) => void;

  /**
   * Scrolls to the end of the ScrollView, either immediately or with a smooth
   * animation.
   *
   * Example:
   *
   * `scrollResponderScrollToEnd({animated: true})`
   */
  scrollResponderScrollToEnd: (options?: {
    animated?: boolean;
  }) => void;

  /**
   * A helper function to zoom to a specific rect in the scrollview. The argument has the shape
   * {x: number; y: number; width: number; height: number; animated: boolean = true}
   *
   * @platform ios
   */
  scrollResponderZoomTo: (rect:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    x: number;
    y: number;
    width: number;
    height: number;
    animated?: boolean;
  }, animated?: boolean) => // deprecated, put this inside the rect argument instead
  void;

  /**
   * Displays the scroll indicators momentarily.
   */
  scrollResponderFlashScrollIndicators: () => void;

  /**
   * This method should be used as the callback to onFocus in a TextInputs'
   * parent view. Note that any module using this mixin needs to return
   * the parent view's ref in getScrollViewRef() in order to use this method.
   * @param {number} nodeHandle The TextInput node handle
   * @param {number} additionalOffset The scroll view's bottom "contentInset".
   *        Default is 0.
   * @param {bool} preventNegativeScrolling Whether to allow pulling the content
   *        down to make it meet the keyboard's top. Default is false.
   */
  scrollResponderScrollNativeHandleToKeyboard: <T>(nodeHandle: number | $1.ElementRef<HostComponent<T>>, additionalOffset?: number, preventNegativeScrollOffset?: boolean) => void;

  /**
   * The calculations performed here assume the scroll view takes up the entire
   * screen - even if has some content inset. We then measure the offsets of the
   * keyboard, and compensate both for the scroll view's "contentInset".
   *
   * @param {number} left Position of input w.r.t. table view.
   * @param {number} top Position of input w.r.t. table view.
   * @param {number} width Width of the text input.
   * @param {number} height Height of the text input.
   */
  scrollResponderInputMeasureAndScrollToKeyboard: (left: number, top: number, width: number, height: number) => void;
  scrollResponderTextInputFocusError: (msg: string) => void;

  /**
   * `componentWillMount` is the closest thing to a  standard "constructor" for
   * React components.
   *
   * The `keyboardWillShow` is called before input focus.
   */
  UNSAFE_componentWillMount: () => void;
  componentWillUnmount: () => void;

  /**
   * Warning, this may be called several times for a single keyboard opening.
   * It's best to store the information in this method and then take any action
   * at a later point (either in `keyboardDidShow` or other).
   *
   * Here's the order that events occur in:
   * - focus
   * - willShow {startCoordinates, endCoordinates} several times
   * - didShow several times
   * - blur
   * - willHide {startCoordinates, endCoordinates} several times
   * - didHide several times
   *
   * The `ScrollResponder` module callbacks for each of these events.
   * Even though any user could have easily listened to keyboard events
   * themselves, using these `props` callbacks ensures that ordering of events
   * is consistent - and not dependent on the order that the keyboard events are
   * subscribed to. This matters when telling the scroll view to scroll to where
   * the keyboard is headed - the scroll responder better have been notified of
   * the keyboard destination before being instructed to scroll to where the
   * keyboard will be. Stick to the `ScrollResponder` callbacks, and everything
   * will work.
   *
   * WARNING: These callbacks will fire even if a keyboard is displayed in a
   * different navigation pane. Filter out the events to determine if they are
   * relevant to you. (For example, only if you receive these callbacks after
   * you had explicitly focused a node etc).
   */
  scrollResponderKeyboardWillShow: (e: KeyboardEvent) => void;
  scrollResponderKeyboardWillHide: (e: KeyboardEvent) => void;
  scrollResponderKeyboardDidShow: (e: KeyboardEvent) => void;
  scrollResponderKeyboardDidHide: (e: KeyboardEvent) => void;
};
declare var ScrollResponder:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  Mixin: typeof ScrollResponderMixin;
};
export type { State };
declare const $f2tExportDefault: typeof ScrollResponder;
export default $f2tExportDefault;