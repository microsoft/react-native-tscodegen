import { $Shape } from "utility-types";
import $1 from "../Animated/nodes/AnimatedNode";
import { NativeColorValue } from "./PlatformColorValueTypes";
declare type ____ColorValue_Internal = null | string | NativeColorValue;
declare type ColorArrayValue = null | ReadonlyArray<____ColorValue_Internal>;
declare type PointValue =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  x: number;
  y: number;
};
declare type EdgeInsetsValue =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  top: number;
  left: number;
  right: number;
  bottom: number;
};
declare type DimensionValue = null | number | string | $1;
declare type ____LayoutStyle_Internal = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /** `display` sets the display type of this component.
  *
  *  It works similarly to `display` in CSS, but only support 'flex' and 'none'.
  *  'flex' is the default.
  */
  display?: "none" | "flex";

  /** `width` sets the width of this component.
  *
  *  It works similarly to `width` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/width for more details.
  */
  width?: DimensionValue;

  /** `height` sets the height of this component.
  *
  *  It works similarly to `height` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/height for more details.
  */
  height?: DimensionValue;

  /** `bottom` is the number of logical pixels to offset the bottom edge of
  *  this component.
  *
  *  It works similarly to `bottom` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
  *  for more details of how `bottom` affects layout.
  */
  bottom?: DimensionValue;

  /**
  * When the direction is `ltr`, `end` is equivalent to `right`.
  * When the direction is `rtl`, `end` is equivalent to `left`.
  *
  * This style takes precedence over the `left` and `right` styles.
  */
  end?: DimensionValue;

  /** `left` is the number of logical pixels to offset the left edge of
  *  this component.
  *
  *  It works similarly to `left` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/left
  *  for more details of how `left` affects layout.
  */
  left?: DimensionValue;

  /** `right` is the number of logical pixels to offset the right edge of
  *  this component.
  *
  *  It works similarly to `right` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/right
  *  for more details of how `right` affects layout.
  */
  right?: DimensionValue;

  /**
  * When the direction is `ltr`, `start` is equivalent to `left`.
  * When the direction is `rtl`, `start` is equivalent to `right`.
  *
  * This style takes precedence over the `left`, `right`, and `end` styles.
  */
  start?: DimensionValue;

  /** `top` is the number of logical pixels to offset the top edge of
  *  this component.
  *
  *  It works similarly to `top` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/top
  *  for more details of how `top` affects layout.
  */
  top?: DimensionValue;

  /** `minWidth` is the minimum width for this component, in logical pixels.
  *
  *  It works similarly to `min-width` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
  *  for more details.
  */
  minWidth?: DimensionValue;

  /** `maxWidth` is the maximum width for this component, in logical pixels.
  *
  *  It works similarly to `max-width` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
  *  for more details.
  */
  maxWidth?: DimensionValue;

  /** `minHeight` is the minimum height for this component, in logical pixels.
  *
  *  It works similarly to `min-height` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
  *  for more details.
  */
  minHeight?: DimensionValue;

  /** `maxHeight` is the maximum height for this component, in logical pixels.
  *
  *  It works similarly to `max-height` in CSS, but in React Native you
  *  must use points or percentages. Ems and other units are not supported.
  *
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
  *  for more details.
  */
  maxHeight?: DimensionValue;

  /** Setting `margin` has the same effect as setting each of
  *  `marginTop`, `marginLeft`, `marginBottom`, and `marginRight`.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/margin
  *  for more details.
  */
  margin?: DimensionValue;

  /** `marginBottom` works like `margin-bottom` in CSS.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom
  *  for more details.
  */
  marginBottom?: DimensionValue;

  /**
  * When direction is `ltr`, `marginEnd` is equivalent to `marginRight`.
  * When direction is `rtl`, `marginEnd` is equivalent to `marginLeft`.
  */
  marginEnd?: DimensionValue;

  /** Setting `marginHorizontal` has the same effect as setting
  *  both `marginLeft` and `marginRight`.
  */
  marginHorizontal?: DimensionValue;

  /** `marginLeft` works like `margin-left` in CSS.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left
  *  for more details.
  */
  marginLeft?: DimensionValue;

  /** `marginRight` works like `margin-right` in CSS.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right
  *  for more details.
  */
  marginRight?: DimensionValue;

  /**
  * When direction is `ltr`, `marginStart` is equivalent to `marginLeft`.
  * When direction is `rtl`, `marginStart` is equivalent to `marginRight`.
  */
  marginStart?: DimensionValue;

  /** `marginTop` works like `margin-top` in CSS.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top
  *  for more details.
  */
  marginTop?: DimensionValue;

  /** Setting `marginVertical` has the same effect as setting both
  *  `marginTop` and `marginBottom`.
  */
  marginVertical?: DimensionValue;

  /** Setting `padding` has the same effect as setting each of
  *  `paddingTop`, `paddingBottom`, `paddingLeft`, and `paddingRight`.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/padding
  *  for more details.
  */
  padding?: DimensionValue;

  /** `paddingBottom` works like `padding-bottom` in CSS.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom
  * for more details.
  */
  paddingBottom?: DimensionValue;

  /**
  * When direction is `ltr`, `paddingEnd` is equivalent to `paddingRight`.
  * When direction is `rtl`, `paddingEnd` is equivalent to `paddingLeft`.
  */
  paddingEnd?: DimensionValue;

  /** Setting `paddingHorizontal` is like setting both of
  *  `paddingLeft` and `paddingRight`.
  */
  paddingHorizontal?: DimensionValue;

  /** `paddingLeft` works like `padding-left` in CSS.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left
  * for more details.
  */
  paddingLeft?: DimensionValue;

  /** `paddingRight` works like `padding-right` in CSS.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right
  * for more details.
  */
  paddingRight?: DimensionValue;

  /**
  * When direction is `ltr`, `paddingStart` is equivalent to `paddingLeft`.
  * When direction is `rtl`, `paddingStart` is equivalent to `paddingRight`.
  */
  paddingStart?: DimensionValue;

  /** `paddingTop` works like `padding-top` in CSS.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top
  * for more details.
  */
  paddingTop?: DimensionValue;

  /** Setting `paddingVertical` is like setting both of
  *  `paddingTop` and `paddingBottom`.
  */
  paddingVertical?: DimensionValue;

  /** `borderWidth` works like `border-width` in CSS.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
  * for more details.
  */
  borderWidth?: number;

  /** `borderBottomWidth` works like `border-bottom-width` in CSS.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width
  * for more details.
  */
  borderBottomWidth?: number;

  /**
  * When direction is `ltr`, `borderEndWidth` is equivalent to `borderRightWidth`.
  * When direction is `rtl`, `borderEndWidth` is equivalent to `borderLeftWidth`.
  */
  borderEndWidth?: number;

  /** `borderLeftWidth` works like `border-left-width` in CSS.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width
  * for more details.
  */
  borderLeftWidth?: number;

  /** `borderRightWidth` works like `border-right-width` in CSS.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width
  * for more details.
  */
  borderRightWidth?: number;

  /**
  * When direction is `ltr`, `borderStartWidth` is equivalent to `borderLeftWidth`.
  * When direction is `rtl`, `borderStartWidth` is equivalent to `borderRightWidth`.
  */
  borderStartWidth?: number;

  /** `borderTopWidth` works like `border-top-width` in CSS.
  * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width
  * for more details.
  */
  borderTopWidth?: number;

  /** `position` in React Native is similar to regular CSS, but
  *  everything is set to `relative` by default, so `absolute`
  *  positioning is always just relative to the parent.
  *
  *  If you want to position a child using specific numbers of logical
  *  pixels relative to its parent, set the child to have `absolute`
  *  position.
  *
  *  If you want to position a child relative to something
  *  that is not its parent, just don't use styles for that. Use the
  *  component tree.
  *
  *  See https://github.com/facebook/yoga
  *  for more details on how `position` differs between React Native
  *  and CSS.
  */
  position?: "absolute" | "relative";

  /** `flexDirection` controls which directions children of a container go.
  *  `row` goes left to right, `column` goes top to bottom, and you may
  *  be able to guess what the other two do. It works like `flex-direction`
  *  in CSS, except the default is `column`.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
  *  for more details.
  */
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";

  /** `flexWrap` controls whether children can wrap around after they
  *  hit the end of a flex container.
  *  It works like `flex-wrap` in CSS (default: nowrap).
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
  *  for more details.
  */
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";

  /** `justifyContent` aligns children in the main direction.
  *  For example, if children are flowing vertically, `justifyContent`
  *  controls how they align vertically.
  *  It works like `justify-content` in CSS (default: flex-start).
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
  *  for more details.
  */
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";

  /** `alignItems` aligns children in the cross direction.
  *  For example, if children are flowing vertically, `alignItems`
  *  controls how they align horizontally.
  *  It works like `align-items` in CSS (default: stretch).
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
  *  for more details.
  */
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

  /** `alignSelf` controls how a child aligns in the cross direction,
  *  overriding the `alignItems` of the parent. It works like `align-self`
  *  in CSS (default: auto).
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
  *  for more details.
  */
  alignSelf?: "auto" | "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

  /** `alignContent` controls how rows align in the cross direction,
  *  overriding the `alignContent` of the parent.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
  *  for more details.
  */
  alignContent?: "flex-start" | "flex-end" | "center" | "stretch" | "space-between" | "space-around";

  /** `overflow` controls how children are measured and displayed.
  *  `overflow: hidden` causes views to be clipped while `overflow: scroll`
  *  causes views to be measured independently of their parents main axis.
  *  It works like `overflow` in CSS (default: visible).
  *  See https://developer.mozilla.org/en/docs/Web/CSS/overflow
  *  for more details.
  *  `overflow: visible` only works on iOS. On Android, all views will clip
  *  their children.
  */
  overflow?: "visible" | "hidden" | "scroll";

  /** In React Native `flex` does not work the same way that it does in CSS.
  *  `flex` is a number rather than a string, and it works
  *  according to the `Yoga` library
  *  at https://github.com/facebook/yoga
  *
  *  When `flex` is a positive number, it makes the component flexible
  *  and it will be sized proportional to its flex value. So a
  *  component with `flex` set to 2 will take twice the space as a
  *  component with `flex` set to 1.
  *
  *  When `flex` is 0, the component is sized according to `width`
  *  and `height` and it is inflexible.
  *
  *  When `flex` is -1, the component is normally sized according
  *  `width` and `height`. However, if there's not enough space,
  *  the component will shrink to its `minWidth` and `minHeight`.
  *
  * flexGrow, flexShrink, and flexBasis work the same as in CSS.
  */
  flex?: number;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number | string;

  /**
  * Aspect ratio control the size of the undefined dimension of a node. Aspect ratio is a
  * non-standard property only available in react native and not CSS.
  *
  * - On a node with a set width/height aspect ratio control the size of the unset dimension
  * - On a node with a set flex basis aspect ratio controls the size of the node in the cross axis
  *   if unset
  * - On a node with a measure function aspect ratio works as though the measure function measures
  *   the flex basis
  * - On a node with flex grow/shrink aspect ratio controls the size of the node in the cross axis
  *   if unset
  * - Aspect ratio takes min/max dimensions into account
  */
  aspectRatio?: number;

  /** `zIndex` controls which components display on top of others.
  *  Normally, you don't use `zIndex`. Components render according to
  *  their order in the document tree, so later components draw over
  *  earlier ones. `zIndex` may be useful if you have animations or custom
  *  modal interfaces where you don't want this behavior.
  *
  *  It works like the CSS `z-index` property - components with a larger
  *  `zIndex` will render on top. Think of the z-direction like it's
  *  pointing from the phone into your eyeball.
  *  See https://developer.mozilla.org/en-US/docs/Web/CSS/z-index for
  *  more details.
  */
  zIndex?: number;

  /** `direction` specifies the directional flow of the user interface.
  *  The default is `inherit`, except for root node which will have
  *  value based on the current locale.
  *  See https://yogalayout.com/docs/layout-direction
  *  for more details.
  *  @platform ios
  */
  direction?: "inherit" | "ltr" | "rtl";
}>;
declare type ____TransformStyle_Internal = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * `transform` accepts an array of transformation objects. Each object specifies
  * the property that will be transformed as the key, and the value to use in the
  * transformation. Objects should not be combined. Use a single key/value pair
  * per object.
  *
  * The rotate transformations require a string so that the transform may be
  * expressed in degrees (deg) or radians (rad). For example:
  *
  * `transform([{ rotateX: '45deg' }, { rotateZ: '0.785398rad' }])`
  *
  * The skew transformations require a string so that the transform may be
  * expressed in degrees (deg). For example:
  *
  * `transform([{ skewX: '45deg' }])`
  */
  transform?: ReadonlyArray<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly perspective: number | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly rotate: string | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly rotateX: string | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly rotateY: string | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly rotateZ: string | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly scale: number | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly scaleX: number | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly scaleY: number | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly translateX: number | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly translateY: number | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly translate: [number | $1, number | $1] | $1;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly skewX: string;
  } |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly skewY: string;
  } // TODO: what is the actual type it expects?
  |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly matrix: ReadonlyArray<number | $1> | $1;
  }>;
}>;
declare type ____ShadowStyle_Internal = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Sets the drop shadow color
  * @platform ios
  */
  shadowColor?: ____ColorValue_Internal;

  /**
  * Sets the drop shadow offset
  * @platform ios
  */
  shadowOffset?: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    width?: number;
    height?: number;
  }>;

  /**
  * Sets the drop shadow opacity (multiplied by the color's alpha component)
  * @platform ios
  */
  shadowOpacity?: number | $1;

  /**
  * Sets the drop shadow blur radius
  * @platform ios
  */
  shadowRadius?: number;
}>;
declare type ____ViewStyle_Internal = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/

/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
____LayoutStyle_Internal &
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
____ShadowStyle_Internal &
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
____TransformStyle_Internal & {
  backfaceVisibility?: "visible" | "hidden";
  backgroundColor?: ____ColorValue_Internal;
  borderColor?: ____ColorValue_Internal;
  borderBottomColor?: ____ColorValue_Internal;
  borderEndColor?: ____ColorValue_Internal;
  borderLeftColor?: ____ColorValue_Internal;
  borderRightColor?: ____ColorValue_Internal;
  borderStartColor?: ____ColorValue_Internal;
  borderTopColor?: ____ColorValue_Internal;
  borderRadius?: number | $1;
  borderBottomEndRadius?: number | $1;
  borderBottomLeftRadius?: number | $1;
  borderBottomRightRadius?: number | $1;
  borderBottomStartRadius?: number | $1;
  borderTopEndRadius?: number | $1;
  borderTopLeftRadius?: number | $1;
  borderTopRightRadius?: number | $1;
  borderTopStartRadius?: number | $1;
  borderStyle?: "solid" | "dotted" | "dashed";
  borderWidth?: number | $1;
  borderBottomWidth?: number | $1;
  borderEndWidth?: number | $1;
  borderLeftWidth?: number | $1;
  borderRightWidth?: number | $1;
  borderStartWidth?: number | $1;
  borderTopWidth?: number | $1;
  opacity?: number | $1;
  elevation?: number;
}>;
declare type ____FontWeight_Internal = "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
declare type ____TextStyle_Internal = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/

/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
____ViewStyle_Internal & {
  color?: ____ColorValue_Internal;
  fontFamily?: string;
  fontSize?: number;
  fontStyle?: "normal" | "italic";
  fontWeight?: ____FontWeight_Internal;
  fontVariant?: ReadonlyArray<"small-caps" | "oldstyle-nums" | "lining-nums" | "tabular-nums" | "proportional-nums">;
  textShadowOffset?: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    width: number;
    height: number;
  }>;
  textShadowRadius?: number;
  textShadowColor?: ____ColorValue_Internal;
  letterSpacing?: number;
  lineHeight?: number;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  textAlignVertical?: "auto" | "top" | "bottom" | "center";
  includeFontPadding?: boolean;
  textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through";
  textDecorationStyle?: "solid" | "double" | "dotted" | "dashed";
  textDecorationColor?: ____ColorValue_Internal;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  writingDirection?: "auto" | "ltr" | "rtl";
}>;
declare type ____ImageStyle_Internal = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/

/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
____ViewStyle_Internal & {
  resizeMode?: "contain" | "cover" | "stretch" | "center" | "repeat";
  tintColor?: ____ColorValue_Internal;
  overlayColor?: string;
}>;
declare type ____DangerouslyImpreciseStyle_Internal =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
____TextStyle_Internal & {
  readonly resizeMode?: "contain" | "cover" | "stretch" | "center" | "repeat";
  readonly tintColor?: ____ColorValue_Internal;
  readonly overlayColor?: string;
};
declare type GenericStyleProp<
/*[FLOW2DTS - Warning] Covariance and contravariance are ignored.*/
T> = null | void | T | false | "" | ReadonlyArray<GenericStyleProp<T>>;
declare type ____DangerouslyImpreciseStyleProp_Internal = GenericStyleProp<$Shape<____DangerouslyImpreciseStyle_Internal>>;
declare type ____ViewStyleProp_Internal = GenericStyleProp<Readonly<$Shape<____ViewStyle_Internal>>>;
declare type ____TextStyleProp_Internal = GenericStyleProp<Readonly<$Shape<____TextStyle_Internal>>>;
declare type ____ImageStyleProp_Internal = GenericStyleProp<Readonly<$Shape<____ImageStyle_Internal>>>;
declare type ____Styles_Internal = {
  readonly [key: string]: $Shape<____DangerouslyImpreciseStyle_Internal>;
};
export type { ____ColorValue_Internal };
export type { ColorArrayValue };
export type { PointValue };
export type { EdgeInsetsValue };
export type { DimensionValue };
export type { ____ShadowStyle_Internal };
export type { ____ViewStyle_Internal };
export type { ____FontWeight_Internal };
export type { ____TextStyle_Internal };
export type { ____ImageStyle_Internal };
export type { ____DangerouslyImpreciseStyle_Internal };
export type { ____DangerouslyImpreciseStyleProp_Internal };
export type { ____ViewStyleProp_Internal };
export type { ____TextStyleProp_Internal };
export type { ____ImageStyleProp_Internal };
export type { ____Styles_Internal };