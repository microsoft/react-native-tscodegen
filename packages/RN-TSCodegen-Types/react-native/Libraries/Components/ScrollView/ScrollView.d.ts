import { React$Context } from "flow2dts-flow-types-polyfill";
import { $PropertyType } from "utility-types";
import $1 from "react";
import $2 from "../ScrollResponder";
import $4 from "../View/View";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { PointProp } from "../../StyleSheet/PointPropType";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { PressEvent } from "../../Types/CoreEventTypes";
import { ScrollEvent } from "../../Types/CoreEventTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { State as ScrollResponderState } from "../ScrollResponder";
import { ViewProps } from "../View/ViewPropTypes";
import { Props as ScrollViewStickyHeaderProps } from "./ScrollViewStickyHeader";
import ScrollViewNativeComponent from "./ScrollViewNativeComponent";
declare type ScrollViewImperativeMethods = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getScrollResponder: $PropertyType<ScrollView, "getScrollResponder">;
  getScrollableNode: $PropertyType<ScrollView, "getScrollableNode">;
  getInnerViewNode: $PropertyType<ScrollView, "getInnerViewNode">;
  getInnerViewRef: $PropertyType<ScrollView, "getInnerViewRef">;
  getNativeScrollRef: $PropertyType<ScrollView, "getNativeScrollRef">;
  scrollTo: $PropertyType<ScrollView, "scrollTo">;
  scrollToEnd: $PropertyType<ScrollView, "scrollToEnd">;
  flashScrollIndicators: $PropertyType<ScrollView, "flashScrollIndicators">;
  // ScrollResponder.Mixin public methods
  scrollResponderZoomTo: $PropertyType<typeof $2.Mixin, "scrollResponderZoomTo">;
  scrollResponderScrollNativeHandleToKeyboard: $PropertyType<typeof $2.Mixin, "scrollResponderScrollNativeHandleToKeyboard">;
}>;
declare type ScrollResponderType = ScrollViewImperativeMethods;
declare type IOSProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Controls whether iOS should automatically adjust the content inset
  * for scroll views that are placed behind a navigation bar or
  * tab bar/ toolbar. The default value is true.
  * @platform ios
  */
  automaticallyAdjustContentInsets?: null | undefined | boolean;

  /**
  * The amount by which the scroll view content is inset from the edges
  * of the scroll view. Defaults to `{top: 0, left: 0, bottom: 0, right: 0}`.
  * @platform ios
  */
  contentInset?: null | undefined | EdgeInsetsProp;

  /**
  * Used to manually set the starting scroll offset.
  * The default value is `{x: 0, y: 0}`.
  * @platform ios
  */
  contentOffset?: null | undefined | PointProp;

  /**
  * When true, the scroll view bounces when it reaches the end of the
  * content if the content is larger then the scroll view along the axis of
  * the scroll direction. When false, it disables all bouncing even if
  * the `alwaysBounce*` props are true. The default value is true.
  * @platform ios
  */
  bounces?: null | undefined | boolean;

  /**
  * By default, ScrollView has an active pan responder that hijacks panresponders
  * deeper in the render tree in order to prevent accidental touches while scrolling.
  * However, in certain occasions (such as when using snapToInterval) in a vertical scrollview
  * You may want to disable this behavior in order to prevent the ScrollView from blocking touches
  */
  disableScrollViewPanResponder?: null | undefined | boolean;

  /**
  * When true, gestures can drive zoom past min/max and the zoom will animate
  * to the min/max value at gesture end, otherwise the zoom will not exceed
  * the limits.
  * @platform ios
  */
  bouncesZoom?: null | undefined | boolean;

  /**
  * When true, the scroll view bounces horizontally when it reaches the end
  * even if the content is smaller than the scroll view itself. The default
  * value is true when `horizontal={true}` and false otherwise.
  * @platform ios
  */
  alwaysBounceHorizontal?: null | undefined | boolean;

  /**
  * When true, the scroll view bounces vertically when it reaches the end
  * even if the content is smaller than the scroll view itself. The default
  * value is false when `horizontal={true}` and true otherwise.
  * @platform ios
  */
  alwaysBounceVertical?: null | undefined | boolean;

  /**
  * When true, the scroll view automatically centers the content when the
  * content is smaller than the scroll view bounds; when the content is
  * larger than the scroll view, this property has no effect. The default
  * value is false.
  * @platform ios
  */
  centerContent?: null | undefined | boolean;

  /**
  * The style of the scroll indicators.
  *
  *   - `'default'` (the default), same as `black`.
  *   - `'black'`, scroll indicator is black. This style is good against a light background.
  *   - `'white'`, scroll indicator is white. This style is good against a dark background.
  *
  * @platform ios
  */
  indicatorStyle?: null | undefined | ("default" | "black" | "white");

  /**
  * When true, the ScrollView will try to lock to only vertical or horizontal
  * scrolling while dragging.  The default value is false.
  * @platform ios
  */
  directionalLockEnabled?: null | undefined | boolean;

  /**
  * When false, once tracking starts, won't try to drag if the touch moves.
  * The default value is true.
  * @platform ios
  */
  canCancelContentTouches?: null | undefined | boolean;

  /**
  * When set, the scroll view will adjust the scroll position so that the first child that is
  * currently visible and at or beyond `minIndexForVisible` will not change position. This is
  * useful for lists that are loading content in both directions, e.g. a chat thread, where new
  * messages coming in might otherwise cause the scroll position to jump. A value of 0 is common,
  * but other values such as 1 can be used to skip loading spinners or other content that should
  * not maintain position.
  *
  * The optional `autoscrollToTopThreshold` can be used to make the content automatically scroll
  * to the top after making the adjustment if the user was within the threshold of the top before
  * the adjustment was made. This is also useful for chat-like applications where you want to see
  * new messages scroll into place, but not if the user has scrolled up a ways and it would be
  * disruptive to scroll a bunch.
  *
  * Caveat 1: Reordering elements in the scrollview with this enabled will probably cause
  * jumpiness and jank. It can be fixed, but there are currently no plans to do so. For now,
  * don't re-order the content of any ScrollViews or Lists that use this feature.
  *
  * Caveat 2: This simply uses `contentOffset` and `frame.origin` in native code to compute
  * visibility. Occlusion, transforms, and other complexity won't be taken into account as to
  * whether content is "visible" or not.
  *
  * @platform ios
  */
  maintainVisibleContentPosition?: null | undefined | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    minIndexForVisible: number;
    autoscrollToTopThreshold?: null | undefined | number;
  }>;

  /**
  * The maximum allowed zoom scale. The default value is 1.0.
  * @platform ios
  */
  maximumZoomScale?: null | undefined | number;

  /**
  * The minimum allowed zoom scale. The default value is 1.0.
  * @platform ios
  */
  minimumZoomScale?: null | undefined | number;

  /**
  * When true, ScrollView allows use of pinch gestures to zoom in and out.
  * The default value is true.
  * @platform ios
  */
  pinchGestureEnabled?: null | undefined | boolean;

  /**
  * This controls how often the scroll event will be fired while scrolling
  * (as a time interval in ms). A lower number yields better accuracy for code
  * that is tracking the scroll position, but can lead to scroll performance
  * problems due to the volume of information being send over the bridge.
  *
  * Values between 0 and 17ms indicate 60fps updates are needed and throttling
  * will be disabled.
  *
  * If you do not need precise scroll position tracking, set this value higher
  * to limit the information being sent across the bridge.
  *
  * The default value is zero, which results in the scroll event being sent only
  * once each time the view is scrolled.
  *
  * @platform ios
  */
  scrollEventThrottle?: null | undefined | number;

  /**
  * The amount by which the scroll view indicators are inset from the edges
  * of the scroll view. This should normally be set to the same value as
  * the `contentInset`. Defaults to `{0, 0, 0, 0}`.
  * @platform ios
  */
  scrollIndicatorInsets?: null | undefined | EdgeInsetsProp;

  /**
  * When true, the scroll view can be programmatically scrolled beyond its
  * content size. The default value is false.
  * @platform ios
  */
  scrollToOverflowEnabled?: null | undefined | boolean;

  /**
  * When true, the scroll view scrolls to top when the status bar is tapped.
  * The default value is true.
  * @platform ios
  */
  scrollsToTop?: null | undefined | boolean;

  /**
  * Fires when the scroll view scrolls to top after the status bar has been tapped
  * @platform ios
  */
  onScrollToTop?: (event: ScrollEvent) => void;

  /**
  * When true, shows a horizontal scroll indicator.
  * The default value is true.
  */
  showsHorizontalScrollIndicator?: null | undefined | boolean;

  /**
  * When `snapToInterval` is set, `snapToAlignment` will define the relationship
  * of the snapping to the scroll view.
  *
  *   - `'start'` (the default) will align the snap at the left (horizontal) or top (vertical)
  *   - `'center'` will align the snap in the center
  *   - `'end'` will align the snap at the right (horizontal) or bottom (vertical)
  *
  * @platform ios
  */
  snapToAlignment?: null | undefined | ("start" | "center" | "end");

  /**
  * The current scale of the scroll view content. The default value is 1.0.
  * @platform ios
  */
  zoomScale?: null | undefined | number;

  /**
  * This property specifies how the safe area insets are used to modify the
  * content area of the scroll view. The default value of this property is
  * "never". Available on iOS 11 and later.
  * @platform ios
  */
  contentInsetAdjustmentBehavior?: null | undefined | ("automatic" | "scrollableAxes" | "never" | "always");

  /**
  * When true, ScrollView will emit updateChildFrames data in scroll events,
  * otherwise will not compute or emit child frame data.  This only exists
  * to support legacy issues, `onLayout` should be used instead to retrieve
  * frame data.
  * The default value is false.
  * @platform ios
  */
  DEPRECATED_sendUpdatedChildFrames?: null | undefined | boolean;
}>;
declare type AndroidProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Enables nested scrolling for Android API level 21+.
  * Nested scrolling is supported by default on iOS
  * @platform android
  */
  nestedScrollEnabled?: null | undefined | boolean;

  /**
  * Sometimes a scrollview takes up more space than its content fills. When this is
  * the case, this prop will fill the rest of the scrollview with a color to avoid setting
  * a background and creating unnecessary overdraw. This is an advanced optimization
  * that is not needed in the general case.
  * @platform android
  */
  endFillColor?: null | undefined | ColorValue;

  /**
  * Tag used to log scroll performance on this scroll view. Will force
  * momentum events to be turned on (see sendMomentumEvents). This doesn't do
  * anything out of the box and you need to implement a custom native
  * FpsListener for it to be useful.
  * @platform android
  */
  scrollPerfTag?: null | undefined | string;

  /**
  * Used to override default value of overScroll mode.
  *
  * Possible values:
  *
  *  - `'auto'` - Default value, allow a user to over-scroll
  *    this view only if the content is large enough to meaningfully scroll.
  *  - `'always'` - Always allow a user to over-scroll this view.
  *  - `'never'` - Never allow a user to over-scroll this view.
  *
  * @platform android
  */
  overScrollMode?: null | undefined | ("auto" | "always" | "never");

  /**
  * Causes the scrollbars not to turn transparent when they are not in use.
  * The default value is false.
  *
  * @platform android
  */
  persistentScrollbar?: null | undefined | boolean;

  /**
  * Fades out the edges of the the scroll content.
  *
  * If the value is greater than 0, the fading edges will be set accordingly
  * to the current scroll direction and position,
  * indicating if there is more content to show.
  *
  * The default value is 0.
  *
  * @platform android
  */
  fadingEdgeLength?: null | undefined | number;
}>;
declare type VRProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Optionally an image can be used for the scroll bar thumb. This will
  * override the color. While the image is loading or the image fails to
  * load the color will be used instead. Use an alpha of 0 in the color
  * to avoid seeing it while the image is loading.
  *
  * - `uri` - a string representing the resource identifier for the image, which
  * should be either a local file path or the name of a static image resource
  * - `number` - Opaque type returned by something like
  * `import IMAGE from './image.jpg'`.
  * @platform vr
  */
  scrollBarThumbImage?: null | undefined | (Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {}> | number // Opaque type returned by import IMAGE from './image.jpg'
  );
}>;
declare type StickyHeaderComponentType = $1.AbstractComponent<ScrollViewStickyHeaderProps, Readonly<{
  setNextHeaderY: ($f2t1: number) => void;
}>>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & IOSProps & AndroidProps & VRProps & {
  /**
  * These styles will be applied to the scroll view content container which
  * wraps all of the child views. Example:
  *
  * ```
  * return (
  *   <ScrollView contentContainerStyle={styles.contentContainer}>
  *   </ScrollView>
  * );
  * ...
  * const styles = StyleSheet.create({
  *   contentContainer: {
  *     paddingVertical: 20
  *   }
  * });
  * ```
  */
  contentContainerStyle?: null | undefined | ViewStyleProp;

  /**
  * When true, the scroll view stops on the next index (in relation to scroll
  * position at release) regardless of how fast the gesture is. This can be
  * used for pagination when the page is less than the width of the
  * horizontal ScrollView or the height of the vertical ScrollView. The default value is false.
  */
  disableIntervalMomentum?: null | undefined | boolean;

  /**
  * A floating-point number that determines how quickly the scroll view
  * decelerates after the user lifts their finger. You may also use string
  * shortcuts `"normal"` and `"fast"` which match the underlying iOS settings
  * for `UIScrollViewDecelerationRateNormal` and
  * `UIScrollViewDecelerationRateFast` respectively.
  *
  *   - `'normal'`: 0.998 on iOS, 0.985 on Android (the default)
  *   - `'fast'`: 0.99 on iOS, 0.9 on Android
  */
  decelerationRate?: null | undefined | ("fast" | "normal" | number);

  /**
  * When true, the scroll view's children are arranged horizontally in a row
  * instead of vertically in a column. The default value is false.
  */
  horizontal?: null | undefined | boolean;

  /**
  * If sticky headers should stick at the bottom instead of the top of the
  * ScrollView. This is usually used with inverted ScrollViews.
  */
  invertStickyHeaders?: null | undefined | boolean;

  /**
  * Determines whether the keyboard gets dismissed in response to a drag.
  *
  * *Cross platform*
  *
  *   - `'none'` (the default), drags do not dismiss the keyboard.
  *   - `'on-drag'`, the keyboard is dismissed when a drag begins.
  *
  * *iOS Only*
  *
  *   - `'interactive'`, the keyboard is dismissed interactively with the drag and moves in
  *     synchrony with the touch; dragging upwards cancels the dismissal.
  *     On android this is not supported and it will have the same behavior as 'none'.
  */
  keyboardDismissMode?: null | undefined | ( // default
  "none" // cross-platform
  | "on-drag" | "interactive" // ios only
  );

  /**
  * Determines when the keyboard should stay visible after a tap.
  *
  *   - `'never'` (the default), tapping outside of the focused text input when the keyboard
  *     is up dismisses the keyboard. When this happens, children won't receive the tap.
  *   - `'always'`, the keyboard will not dismiss automatically, and the scroll view will not
  *     catch taps, but children of the scroll view can catch taps.
  *   - `'handled'`, the keyboard will not dismiss automatically when the tap was handled by
  *     a children, (or captured by an ancestor).
  *   - `false`, deprecated, use 'never' instead
  *   - `true`, deprecated, use 'always' instead
  */
  keyboardShouldPersistTaps?: null | undefined | ("always" | "never" | "handled" | true | false);

  /**
  * Called when the momentum scroll starts (scroll which occurs as the ScrollView glides to a stop).
  */
  onMomentumScrollBegin?: null | undefined | ((event: ScrollEvent) => void);

  /**
  * Called when the momentum scroll ends (scroll which occurs as the ScrollView glides to a stop).
  */
  onMomentumScrollEnd?: null | undefined | ((event: ScrollEvent) => void);

  /**
  * Fires at most once per frame during scrolling. The frequency of the
  * events can be controlled using the `scrollEventThrottle` prop.
  */
  onScroll?: null | undefined | ((event: ScrollEvent) => void);

  /**
  * Called when the user begins to drag the scroll view.
  */
  onScrollBeginDrag?: null | undefined | ((event: ScrollEvent) => void);

  /**
  * Called when the user stops dragging the scroll view and it either stops
  * or begins to glide.
  */
  onScrollEndDrag?: null | undefined | ((event: ScrollEvent) => void);

  /**
  * Called when scrollable content view of the ScrollView changes.
  *
  * Handler function is passed the content width and content height as parameters:
  * `(contentWidth, contentHeight)`
  *
  * It's implemented using onLayout handler attached to the content container
  * which this ScrollView renders.
  */
  onContentSizeChange?: (contentWidth: number, contentHeight: number) => void;
  onKeyboardDidShow?: (event: PressEvent) => void;

  /**
  * When true, the scroll view stops on multiples of the scroll view's size
  * when scrolling. This can be used for horizontal pagination. The default
  * value is false.
  *
  * Note: Vertical pagination is not supported on Android.
  */
  pagingEnabled?: null | undefined | boolean;

  /**
  * When false, the view cannot be scrolled via touch interaction.
  * The default value is true.
  *
  * Note that the view can always be scrolled by calling `scrollTo`.
  */
  scrollEnabled?: null | undefined | boolean;

  /**
  * When true, shows a vertical scroll indicator.
  * The default value is true.
  */
  showsVerticalScrollIndicator?: null | undefined | boolean;

  /**
  * An array of child indices determining which children get docked to the
  * top of the screen when scrolling. For example, passing
  * `stickyHeaderIndices={[0]}` will cause the first child to be fixed to the
  * top of the scroll view. This property is not supported in conjunction
  * with `horizontal={true}`.
  */
  stickyHeaderIndices?: null | undefined | ReadonlyArray<number>;

  /**
  * A React Component that will be used to render sticky headers.
  * To be used together with `stickyHeaderIndices` or with `SectionList`, defaults to `ScrollViewStickyHeader`.
  * You may need to set this if your sticky header uses custom transforms (eg. translation),
  * for example when you want your list to have an animated hidable header.
  */
  StickyHeaderComponent?: StickyHeaderComponentType;

  /**
  * When set, causes the scroll view to stop at multiples of the value of
  * `snapToInterval`. This can be used for paginating through children
  * that have lengths smaller than the scroll view. Typically used in
  * combination with `snapToAlignment` and `decelerationRate="fast"`.
  *
  * Overrides less configurable `pagingEnabled` prop.
  */
  snapToInterval?: null | undefined | number;

  /**
  * When set, causes the scroll view to stop at the defined offsets.
  * This can be used for paginating through variously sized children
  * that have lengths smaller than the scroll view. Typically used in
  * combination with `decelerationRate="fast"`.
  *
  * Overrides less configurable `pagingEnabled` and `snapToInterval` props.
  */
  snapToOffsets?: null | undefined | ReadonlyArray<number>;

  /**
  * Use in conjunction with `snapToOffsets`. By default, the beginning
  * of the list counts as a snap offset. Set `snapToStart` to false to disable
  * this behavior and allow the list to scroll freely between its start and
  * the first `snapToOffsets` offset.
  * The default value is true.
  */
  snapToStart?: null | undefined | boolean;

  /**
  * Use in conjunction with `snapToOffsets`. By default, the end
  * of the list counts as a snap offset. Set `snapToEnd` to false to disable
  * this behavior and allow the list to scroll freely between its end and
  * the last `snapToOffsets` offset.
  * The default value is true.
  */
  snapToEnd?: null | undefined | boolean;

  /**
  * Experimental: When true, offscreen child views (whose `overflow` value is
  * `hidden`) are removed from their native backing superview when offscreen.
  * This can improve scrolling performance on long lists. The default value is
  * true.
  */
  removeClippedSubviews?: null | undefined | boolean;

  /**
  * A RefreshControl component, used to provide pull-to-refresh
  * functionality for the ScrollView. Only works for vertical ScrollViews
  * (`horizontal` prop must be `false`).
  *
  * See [RefreshControl](docs/refreshcontrol.html).
  */
  // $FlowFixMe - how to handle generic type without existential operator?
  refreshControl?: null | undefined | $1.Element<any>;
  children?: $1.Node;

  /**
  * A ref to the inner View element of the ScrollView. This should be used
  * instead of calling `getInnerViewRef`.
  */
  innerViewRef?: $1.Ref<typeof $4>;

  /**
  * A ref to the Native ScrollView component. This ref can be used to call
  * all of ScrollView's public methods, in addition to native methods like
  * measure, measureLayout, etc.
  */
  scrollViewRef?: $1.Ref<typeof ScrollViewNativeComponent & ScrollViewImperativeMethods>;
}>;
declare type State =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ScrollResponderState & {
  layoutHeight?: null | undefined | number;
};
declare type ContextType =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  horizontal: boolean;
} | null;
declare var Context: $1.Context<ContextType>;
declare type ScrollViewComponentStatics = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  Context: typeof Context;
}>;
declare class ScrollView extends $1.Component<Props, State> {
  static Context: React$Context<ContextType>;
  constructor(props: Props);
  state: State;
  UNSAFE_componentWillMount(): void;
  UNSAFE_componentWillReceiveProps(nextProps: Props): void;
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentWillUnmount(): void;

  /**
   * Returns a reference to the underlying scroll responder, which supports
   * operations like `scrollTo`. All ScrollView-like components should
   * implement this method so that they can be composed while providing access
   * to the underlying scroll responder's methods.
   */
  getScrollResponder(): ScrollResponderType;
  getScrollableNode(): null | undefined | number;
  getInnerViewNode(): null | undefined | number;
  getInnerViewRef(): null | undefined | $1.ElementRef<typeof $4>;
  getNativeScrollRef(): null | undefined | $1.ElementRef<HostComponent<{}>>;

  /**
   * Scrolls to a given x, y offset, either immediately or with a smooth animation.
   *
   * Example:
   *
   * `scrollTo({x: 0, y: 0, animated: true})`
   *
   * Note: The weird function signature is due to the fact that, for historical reasons,
   * the function also accepts separate arguments as an alternative to the options object.
   * This is deprecated due to ambiguity (y before x), and SHOULD NOT BE USED.
   */
  scrollTo(options?: {
    x?: number;
    y?: number;
    animated?: boolean;
  } | number, deprecatedX?: number, deprecatedAnimated?: boolean): void;

  /**
   * If this is a vertical ScrollView scrolls to the bottom.
   * If this is a horizontal ScrollView scrolls to the right.
   *
   * Use `scrollToEnd({animated: true})` for smooth animated scrolling,
   * `scrollToEnd({animated: false})` for immediate scrolling.
   * If no options are passed, `animated` defaults to true.
   */
  scrollToEnd(options?: null | undefined | {
    animated?: boolean;
  }): void;

  /**
   * Displays the scroll indicators momentarily.
   *
   * @platform ios
   */
  flashScrollIndicators(): void;
  render(): $1.Node | $1.Element<string>;
}
export type { ScrollViewImperativeMethods };
export type { ScrollResponderType };
export type { Props };
declare const $f2tExportDefault: $1.AbstractComponent<$1.ElementConfig<typeof ScrollView>, Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/

/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
$1.ElementRef<HostComponent<{}>> & ScrollViewImperativeMethods & {}>> & ScrollViewComponentStatics;
export default $f2tExportDefault;