// @flow
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { DangerouslyImpreciseStyle } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { ScrollEvent } from "../../Types/CoreEventTypes";
import { PointProp } from "../../StyleSheet/PointPropType";
declare type ScrollViewNativeProps = Readonly<ViewProps & {
  alwaysBounceHorizontal?: null | undefined | boolean;
  alwaysBounceVertical?: null | undefined | boolean;
  automaticallyAdjustContentInsets?: null | undefined | boolean;
  bounces?: null | undefined | boolean;
  bouncesZoom?: null | undefined | boolean;
  canCancelContentTouches?: null | undefined | boolean;
  centerContent?: null | undefined | boolean;
  contentInset?: null | undefined | EdgeInsetsProp;
  contentInsetAdjustmentBehavior?: null | undefined | ("automatic" | "scrollableAxes" | "never" | "always");
  contentOffset?: null | undefined | PointProp;
  decelerationRate?: null | undefined | ("fast" | "normal" | number);
  directionalLockEnabled?: null | undefined | boolean;
  disableIntervalMomentum?: null | undefined | boolean;
  endFillColor?: null | undefined | ColorValue;
  fadingEdgeLength?: null | undefined | number;
  indicatorStyle?: null | undefined | ("default" | "black" | "white");
  keyboardDismissMode?: null | undefined | ("none" | "on-drag" | "interactive");
  maintainVisibleContentPosition?: null | undefined | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    minIndexForVisible: number;
    autoscrollToTopThreshold?: null | undefined | number;
  }>;
  maximumZoomScale?: null | undefined | number;
  minimumZoomScale?: null | undefined | number;
  nestedScrollEnabled?: null | undefined | boolean;
  onMomentumScrollBegin?: null | undefined | ((event: ScrollEvent) => void);
  onMomentumScrollEnd?: null | undefined | ((event: ScrollEvent) => void);
  onScroll?: null | undefined | ((event: ScrollEvent) => void);
  onScrollBeginDrag?: null | undefined | ((event: ScrollEvent) => void);
  onScrollEndDrag?: null | undefined | ((event: ScrollEvent) => void);
  onScrollToTop?: (event: ScrollEvent) => void;
  overScrollMode?: null | undefined | ("auto" | "always" | "never");
  pagingEnabled?: null | undefined | boolean;
  persistentScrollbar?: null | undefined | boolean;
  pinchGestureEnabled?: null | undefined | boolean;
  scrollEnabled?: null | undefined | boolean;
  scrollEventThrottle?: null | undefined | number;
  scrollIndicatorInsets?: null | undefined | EdgeInsetsProp;
  scrollPerfTag?: null | undefined | string;
  scrollToOverflowEnabled?: null | undefined | boolean;
  scrollsToTop?: null | undefined | boolean;
  sendMomentumEvents?: null | undefined | boolean;
  showsHorizontalScrollIndicator?: null | undefined | boolean;
  showsVerticalScrollIndicator?: null | undefined | boolean;
  snapToAlignment?: null | undefined | ("start" | "center" | "end");
  snapToEnd?: null | undefined | boolean;
  snapToInterval?: null | undefined | number;
  snapToOffsets?: null | undefined | ReadonlyArray<number>;
  snapToStart?: null | undefined | boolean;
  zoomScale?: null | undefined | number;
  DEPRECATED_sendUpdatedChildFrames?: null | undefined | boolean;
  // Overrides
  style?: (ViewStyleProp & {}) | DangerouslyImpreciseStyle;
  onResponderGrant?: null | undefined | ((e: any) => void | boolean);
}>;
declare type ScrollViewNativeComponentType = HostComponent<ScrollViewNativeProps>;
export type { ScrollViewNativeProps };
export type { ScrollViewNativeComponentType };