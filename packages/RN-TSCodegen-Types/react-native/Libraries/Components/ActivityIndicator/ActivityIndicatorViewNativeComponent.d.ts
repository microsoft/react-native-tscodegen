// @flow
import { WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheet";
import { ViewProps } from "../View/ViewPropTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  /**
  * Whether the indicator should hide when not animating (true by default).
  *
  * See https://reactnative.dev/docs/activityindicator.html#hideswhenstopped
  */
  hidesWhenStopped?: WithDefault<boolean, false>;

  /**
  * Whether to show the indicator (true, the default) or hide it (false).
  *
  * See https://reactnative.dev/docs/activityindicator.html#animating
  */
  animating?: WithDefault<boolean, false>;

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
  size?: WithDefault<"small" | "large", "small">;
}>;
declare const $f2tExportDefault: HostComponent<NativeProps>;
export default $f2tExportDefault;