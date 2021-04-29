import { Stringish } from "flow2dts-flow-types-polyfill";
// @flow
import { BlurEvent } from "../../Types/CoreEventTypes";
import { FocusEvent } from "../../Types/CoreEventTypes";
import { MouseEvent } from "../../Types/CoreEventTypes";
import { PressEvent } from "../../Types/CoreEventTypes";
import { Layout } from "../../Types/CoreEventTypes";
import { LayoutEvent } from "../../Types/CoreEventTypes";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { Node } from "react";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { AccessibilityRole } from "./ViewAccessibility";
import { AccessibilityState } from "./ViewAccessibility";
import { AccessibilityValue } from "./ViewAccessibility";
import { AccessibilityActionEvent } from "./ViewAccessibility";
import { AccessibilityActionInfo } from "./ViewAccessibility";
declare type ViewLayout = Layout;
declare type ViewLayoutEvent = LayoutEvent;
declare type BubblingEventProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onBlur?: null | undefined | ((event: BlurEvent) => unknown);
  onFocus?: null | undefined | ((event: FocusEvent) => unknown);
}>;
declare type DirectEventProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * When `accessible` is true, the system will try to invoke this function
  * when the user performs an accessibility custom action.
  *
  */
  onAccessibilityAction?: null | undefined | ((event: AccessibilityActionEvent) => unknown);

  /**
  * When `accessible` is true, the system will try to invoke this function
  * when the user performs accessibility tap gesture.
  *
  * See https://reactnative.dev/docs/view.html#onaccessibilitytap
  */
  onAccessibilityTap?: null | undefined | (() => unknown);

  /**
  * Invoked on mount and layout changes with:
  *
  * `{nativeEvent: { layout: {x, y, width, height}}}`
  *
  * This event is fired immediately once the layout has been calculated, but
  * the new layout may not yet be reflected on the screen at the time the
  * event is received, especially if a layout animation is in progress.
  *
  * See https://reactnative.dev/docs/view.html#onlayout
  */
  onLayout?: null | undefined | ((event: LayoutEvent) => unknown);

  /**
  * When `accessible` is `true`, the system will invoke this function when the
  * user performs the magic tap gesture.
  *
  * See https://reactnative.dev/docs/view.html#onmagictap
  */
  onMagicTap?: null | undefined | (() => unknown);

  /**
  * When `accessible` is `true`, the system will invoke this function when the
  * user performs the escape gesture.
  *
  * See https://reactnative.dev/docs/view.html#onaccessibilityescape
  */
  onAccessibilityEscape?: null | undefined | (() => unknown);
}>;
declare type MouseEventProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onMouseEnter?: (event: MouseEvent) => void;
  onMouseLeave?: (event: MouseEvent) => void;
}>;
declare type TouchEventProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onTouchCancel?: null | undefined | ((e: PressEvent) => void);
  onTouchCancelCapture?: null | undefined | ((e: PressEvent) => void);
  onTouchEnd?: null | undefined | ((e: PressEvent) => void);
  onTouchEndCapture?: null | undefined | ((e: PressEvent) => void);
  onTouchMove?: null | undefined | ((e: PressEvent) => void);
  onTouchMoveCapture?: null | undefined | ((e: PressEvent) => void);
  onTouchStart?: null | undefined | ((e: PressEvent) => void);
  onTouchStartCapture?: null | undefined | ((e: PressEvent) => void);
}>;
declare type GestureResponderEventProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Does this view want to "claim" touch responsiveness? This is called for
  * every touch move on the `View` when it is not the responder.
  *
  * `View.props.onMoveShouldSetResponder: (event) => [true | false]`, where
  * `event` is a synthetic touch event as described above.
  *
  * See https://reactnative.dev/docs/view.html#onmoveshouldsetresponder
  */
  onMoveShouldSetResponder?: null | undefined | ((e: PressEvent) => boolean);

  /**
  * If a parent `View` wants to prevent a child `View` from becoming responder
  * on a move, it should have this handler which returns `true`.
  *
  * `View.props.onMoveShouldSetResponderCapture: (event) => [true | false]`,
  * where `event` is a synthetic touch event as described above.
  *
  * See https://reactnative.dev/docs/view.html#onMoveShouldsetrespondercapture
  */
  onMoveShouldSetResponderCapture?: null | undefined | ((e: PressEvent) => boolean);

  /**
  * The View is now responding for touch events. This is the time to highlight
  * and show the user what is happening.
  *
  * `View.props.onResponderGrant: (event) => {}`, where `event` is a synthetic
  * touch event as described above.
  *
  * PanResponder includes a note `// TODO: t7467124 investigate if this can be removed` that
  * should help fixing this return type.
  *
  * See https://reactnative.dev/docs/view.html#onrespondergrant
  */
  onResponderGrant?: null | undefined | ((e: PressEvent) => void | boolean);

  /**
  * The user is moving their finger.
  *
  * `View.props.onResponderMove: (event) => {}`, where `event` is a synthetic
  * touch event as described above.
  *
  * See https://reactnative.dev/docs/view.html#onrespondermove
  */
  onResponderMove?: null | undefined | ((e: PressEvent) => void);

  /**
  * Another responder is already active and will not release it to that `View`
  * asking to be the responder.
  *
  * `View.props.onResponderReject: (event) => {}`, where `event` is a
  * synthetic touch event as described above.
  *
  * See https://reactnative.dev/docs/view.html#onresponderreject
  */
  onResponderReject?: null | undefined | ((e: PressEvent) => void);

  /**
  * Fired at the end of the touch.
  *
  * `View.props.onResponderRelease: (event) => {}`, where `event` is a
  * synthetic touch event as described above.
  *
  * See https://reactnative.dev/docs/view.html#onresponderrelease
  */
  onResponderRelease?: null | undefined | ((e: PressEvent) => void);
  onResponderStart?: null | undefined | ((e: PressEvent) => void);
  onResponderEnd?: null | undefined | ((e: PressEvent) => void);

  /**
  * The responder has been taken from the `View`. Might be taken by other
  * views after a call to `onResponderTerminationRequest`, or might be taken
  * by the OS without asking (e.g., happens with control center/ notification
  * center on iOS)
  *
  * `View.props.onResponderTerminate: (event) => {}`, where `event` is a
  * synthetic touch event as described above.
  *
  * See https://reactnative.dev/docs/view.html#onresponderterminate
  */
  onResponderTerminate?: null | undefined | ((e: PressEvent) => void);

  /**
  * Some other `View` wants to become responder and is asking this `View` to
  * release its responder. Returning `true` allows its release.
  *
  * `View.props.onResponderTerminationRequest: (event) => {}`, where `event`
  * is a synthetic touch event as described above.
  *
  * See https://reactnative.dev/docs/view.html#onresponderterminationrequest
  */
  onResponderTerminationRequest?: null | undefined | ((e: PressEvent) => boolean);

  /**
  * Does this view want to become responder on the start of a touch?
  *
  * `View.props.onStartShouldSetResponder: (event) => [true | false]`, where
  * `event` is a synthetic touch event as described above.
  *
  * See https://reactnative.dev/docs/view.html#onstartshouldsetresponder
  */
  onStartShouldSetResponder?: null | undefined | ((e: PressEvent) => boolean);

  /**
  * If a parent `View` wants to prevent a child `View` from becoming responder
  * on a touch start, it should have this handler which returns `true`.
  *
  * `View.props.onStartShouldSetResponderCapture: (event) => [true | false]`,
  * where `event` is a synthetic touch event as described above.
  *
  * See https://reactnative.dev/docs/view.html#onstartshouldsetrespondercapture
  */
  onStartShouldSetResponderCapture?: null | undefined | ((e: PressEvent) => boolean);
}>;
declare type AndroidDrawableThemeAttr = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  type: "ThemeAttrAndroid";
  attribute: string;
}>;
declare type AndroidDrawableRipple = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  type: "RippleAndroid";
  color?: null | undefined | number;
  borderless?: null | undefined | boolean;
  rippleRadius?: null | undefined | number;
}>;
declare type AndroidDrawable = AndroidDrawableThemeAttr | AndroidDrawableRipple;
declare type AndroidViewProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  nativeBackgroundAndroid?: null | undefined | AndroidDrawable;
  nativeForegroundAndroid?: null | undefined | AndroidDrawable;

  /**
  * Whether this `View` should render itself (and all of its children) into a
  * single hardware texture on the GPU.
  *
  * @platform android
  *
  * See https://reactnative.dev/docs/view.html#rendertohardwaretextureandroid
  */
  renderToHardwareTextureAndroid?: null | undefined | boolean;

  /**
  * Views that are only used to layout their children or otherwise don't draw
  * anything may be automatically removed from the native hierarchy as an
  * optimization. Set this property to `false` to disable this optimization and
  * ensure that this `View` exists in the native view hierarchy.
  *
  * @platform android
  *
  * See https://reactnative.dev/docs/view.html#collapsable
  */
  collapsable?: null | undefined | boolean;

  /**
  * Whether this `View` needs to rendered offscreen and composited with an
  * alpha in order to preserve 100% correct colors and blending behavior.
  *
  * @platform android
  *
  * See https://reactnative.dev/docs/view.html#needsoffscreenalphacompositing
  */
  needsOffscreenAlphaCompositing?: null | undefined | boolean;

  /**
  * Indicates to accessibility services whether the user should be notified
  * when this view changes. Works for Android API >= 19 only.
  *
  * @platform android
  *
  * See https://reactnative.dev/docs/view.html#accessibilityliveregion
  */
  accessibilityLiveRegion?: null | undefined | ("none" | "polite" | "assertive");

  /**
  * Controls how view is important for accessibility which is if it
  * fires accessibility events and if it is reported to accessibility services
  * that query the screen. Works for Android only.
  *
  * @platform android
  *
  * See https://reactnative.dev/docs/view.html#importantforaccessibility
  */
  importantForAccessibility?: null | undefined | ("auto" | "yes" | "no" | "no-hide-descendants");

  /**
  * Whether to force the Android TV focus engine to move focus to this view.
  *
  * @platform android
  */
  hasTVPreferredFocus?: null | undefined | boolean;

  /**
  * TV next focus down (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusDown?: null | undefined | number;

  /**
  * TV next focus forward (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusForward?: null | undefined | number;

  /**
  * TV next focus left (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusLeft?: null | undefined | number;

  /**
  * TV next focus right (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusRight?: null | undefined | number;

  /**
  * TV next focus up (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusUp?: null | undefined | number;

  /**
  * Whether this `View` should be focusable with a non-touch input device, eg. receive focus with a hardware keyboard.
  *
  * @platform android
  */
  focusable?: null | undefined | boolean;

  /**
  * The action to perform when this `View` is clicked on by a non-touch click, eg. enter key on a hardware keyboard.
  *
  * @platform android
  */
  onClick?: null | undefined | ((event: PressEvent) => unknown);
}>;
declare type IOSViewProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Prevents view from being inverted if set to true and color inversion is turned on.
  *
  * @platform ios
  */
  accessibilityIgnoresInvertColors?: null | undefined | boolean;

  /**
  * A value indicating whether VoiceOver should ignore the elements
  * within views that are siblings of the receiver.
  * Default is `false`.
  *
  * @platform ios
  *
  * See https://reactnative.dev/docs/view.html#accessibilityviewismodal
  */
  accessibilityViewIsModal?: null | undefined | boolean;

  /**
  * A value indicating whether the accessibility elements contained within
  * this accessibility element are hidden.
  *
  * @platform ios
  *
  * See https://reactnative.dev/docs/view.html#accessibilityElementsHidden
  */
  accessibilityElementsHidden?: null | undefined | boolean;

  /**
  * Whether this `View` should be rendered as a bitmap before compositing.
  *
  * @platform ios
  *
  * See https://reactnative.dev/docs/view.html#shouldrasterizeios
  */
  shouldRasterizeIOS?: null | undefined | boolean;
}>;
declare type ViewProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
BubblingEventProps & DirectEventProps & GestureResponderEventProps & MouseEventProps & TouchEventProps & AndroidViewProps & IOSViewProps & {
  children?: Node;
  style?: null | undefined | ViewStyleProp;

  /**
  * When `true`, indicates that the view is an accessibility element.
  * By default, all the touchable elements are accessible.
  *
  * See https://reactnative.dev/docs/view.html#accessible
  */
  accessible?: null | undefined | boolean;

  /**
  * Overrides the text that's read by the screen reader when the user interacts
  * with the element. By default, the label is constructed by traversing all
  * the children and accumulating all the `Text` nodes separated by space.
  *
  * See https://reactnative.dev/docs/view.html#accessibilitylabel
  */
  accessibilityLabel?: null | undefined | Stringish;

  /**
  * An accessibility hint helps users understand what will happen when they perform
  * an action on the accessibility element when that result is not obvious from the
  * accessibility label.
  *
  *
  * See https://reactnative.dev/docs/view.html#accessibilityHint
  */
  accessibilityHint?: null | undefined | Stringish;

  /**
  * Indicates to accessibility services to treat UI component like a specific role.
  */
  accessibilityRole?: null | undefined | AccessibilityRole;

  /**
  * Indicates to accessibility services that UI Component is in a specific State.
  */
  accessibilityState?: null | undefined | AccessibilityState;
  accessibilityValue?: null | undefined | AccessibilityValue;

  /**
  * Provides an array of custom actions available for accessibility.
  *
  */
  accessibilityActions?: null | undefined | ReadonlyArray<AccessibilityActionInfo>;

  /**
  * Used to locate this view in end-to-end tests.
  *
  * > This disables the 'layout-only view removal' optimization for this view!
  *
  * See https://reactnative.dev/docs/view.html#testid
  */
  testID?: null | undefined | string;

  /**
  * Used to locate this view from native classes.
  *
  * > This disables the 'layout-only view removal' optimization for this view!
  *
  * See https://reactnative.dev/docs/view.html#nativeid
  */
  nativeID?: null | undefined | string;

  /**
  * This defines how far a touch event can start away from the view.
  * Typical interface guidelines recommend touch targets that are at least
  * 30 - 40 points/density-independent pixels.
  *
  * > The touch area never extends past the parent view bounds and the Z-index
  * > of sibling views always takes precedence if a touch hits two overlapping
  * > views.
  *
  * See https://reactnative.dev/docs/view.html#hitslop
  */
  hitSlop?: null | undefined | EdgeInsetsProp;

  /**
  * Controls whether the `View` can be the target of touch events.
  *
  * See https://reactnative.dev/docs/view.html#pointerevents
  */
  pointerEvents?: null | undefined | ("auto" | "box-none" | "box-only" | "none");

  /**
  * This is a special performance property exposed by `RCTView` and is useful
  * for scrolling content when there are many subviews, most of which are
  * offscreen. For this property to be effective, it must be applied to a
  * view that contains many subviews that extend outside its bound. The
  * subviews must also have `overflow: hidden`, as should the containing view
  * (or one of its superviews).
  *
  * See https://reactnative.dev/docs/view.html#removeclippedsubviews
  */
  removeClippedSubviews?: null | undefined | boolean;
}>;
export type { ViewLayout };
export type { ViewLayoutEvent };
export type { ViewProps };