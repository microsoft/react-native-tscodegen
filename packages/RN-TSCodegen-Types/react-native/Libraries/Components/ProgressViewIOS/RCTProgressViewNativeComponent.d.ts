// @flow
import { Float } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { ImageSource } from "../../Image/ImageSource";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  // Props
  progressViewStyle?: WithDefault<"default" | "bar", "default">;
  progress?: WithDefault<Float, 0>;
  progressTintColor?: null | undefined | ColorValue;
  trackTintColor?: null | undefined | ColorValue;
  progressImage?: null | undefined | ImageSource;
  trackImage?: null | undefined | ImageSource;
}>;
declare const $f2tExportDefault: HostComponent<NativeProps>;
export default $f2tExportDefault;