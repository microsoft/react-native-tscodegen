// @flow
import { DangerouslyImpreciseStyle } from "../StyleSheet/StyleSheet";
import { ResolvedAssetSource } from "./AssetSourceResolver";
import { HostComponent } from "../Renderer/shims/ReactNativeTypes";
import { ImageProps } from "./ImageProps";
import { ViewProps } from "../Components/View/ViewPropTypes";
import { ImageStyleProp } from "../StyleSheet/StyleSheet";
import { ColorValue } from "../StyleSheet/StyleSheetTypes";
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ImageProps & ViewProps & {
  style?: ImageStyleProp | DangerouslyImpreciseStyle;
  // iOS native props
  tintColor?: ColorValue;
  // Android native props
  shouldNotifyLoadEvents?: boolean;
  src?: (null | undefined | ResolvedAssetSource) | ReadonlyArray<{
    uri: string;
  }>;
  headers?: null | undefined | string;
  defaultSrc?: null | undefined | string;
  loadingIndicatorSrc?: null | undefined | string;
}>;
declare const $f2tExportDefault: HostComponent<NativeProps>;
export default $f2tExportDefault;