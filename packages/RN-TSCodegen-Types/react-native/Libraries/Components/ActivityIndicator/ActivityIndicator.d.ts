import $1 from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { ColorValue } from "../../StyleSheet/StyleSheet";
declare type IndicatorSize = number | "small" | "large";
declare type IOSProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  Whether the indicator should hide when not animating.
   @platform ios
  */
  hidesWhenStopped?: null | undefined | boolean;
}>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & IOSProps & {
  /**
  Whether to show the indicator (`true`) or hide it (`false`).
  */
  animating?: null | undefined | boolean;

  /**
  The foreground color of the spinner.
   @default {@platform android} `null` (system accent default color)
  @default {@platform ios} '#999999'
  */
  color?: null | undefined | ColorValue;

  /**
  Size of the indicator.
   @type enum(`'small'`, `'large'`)
  @type {@platform android} number
  */
  size?: null | undefined | IndicatorSize;
}>;
declare var ActivityIndicatorWithRef: $1.AbstractComponent<Props, HostComponent<{}>>;
declare const $f2tExportDefault: typeof ActivityIndicatorWithRef;
export default $f2tExportDefault;