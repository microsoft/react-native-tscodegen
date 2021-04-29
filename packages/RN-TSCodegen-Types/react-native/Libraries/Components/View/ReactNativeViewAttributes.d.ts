import $1 from "./ReactNativeStyleAttributes";
declare var UIView:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  pointerEvents: boolean;
  accessible: boolean;
  accessibilityActions: boolean;
  accessibilityLabel: boolean;
  accessibilityLiveRegion: boolean;
  accessibilityRole: boolean;
  accessibilityState: boolean;
  accessibilityValue: boolean;
  accessibilityHint: boolean;
  importantForAccessibility: boolean;
  nativeID: boolean;
  testID: boolean;
  renderToHardwareTextureAndroid: boolean;
  shouldRasterizeIOS: boolean;
  onLayout: boolean;
  onAccessibilityAction: boolean;
  onAccessibilityTap: boolean;
  onMagicTap: boolean;
  onAccessibilityEscape: boolean;
  collapsable: boolean;
  needsOffscreenAlphaCompositing: boolean;
  style: typeof $1;
};
declare var RCTView:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
typeof UIView & {
  // This is a special performance property exposed by RCTView and useful for
  // scrolling content when there are many subviews, most of which are offscreen.
  // For this property to be effective, it must be applied to a view that contains
  // many subviews that extend outside its bound. The subviews must also have
  // overflow: hidden, as should the containing view (or one of its superviews).
  removeClippedSubviews: boolean;
};
declare var ReactNativeViewAttributes:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  UIView: typeof UIView;
  RCTView: typeof RCTView;
};
declare const $f2tExportDefault: typeof ReactNativeViewAttributes;
export default $f2tExportDefault;