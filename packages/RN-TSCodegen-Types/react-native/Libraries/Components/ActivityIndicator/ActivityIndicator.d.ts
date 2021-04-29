import $1 from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
declare type IndicatorSize = number | "small" | "large";
declare type IOSProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Whether the indicator should hide when not animating (true by default).
  *
  * See https://reactnative.dev/docs/activityindicator.html#hideswhenstopped
  */
  hidesWhenStopped?: null | undefined | boolean;
}>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & IOSProps & {
  /**
  * Whether to show the indicator (true, the default) or hide it (false).
  *
  * See https://reactnative.dev/docs/activityindicator.html#animating
  */
  animating?: null | undefined | boolean;

  /**
  * The foreground color of the spinner (default is gray).
  *
  * See https://reactnative.dev/docs/activityindicator.html#color
  */
  color?: null | undefined | ColorValue;

  /**
  * Size of the indicator (default is 'small').
  * Passing a number to the size prop is only supported on Android.
  *
  * See https://reactnative.dev/docs/activityindicator.html#size
  */
  size?: null | undefined | IndicatorSize;
}>;
declare var ActivityIndicatorWithRef: $1.AbstractComponent<Props, HostComponent<{}>>;
declare const $f2tExportDefault: typeof ActivityIndicatorWithRef;
export default $f2tExportDefault;