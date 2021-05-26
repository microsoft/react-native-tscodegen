// @flow
import { DirectEventHandler } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheet";
import { ViewProps } from "../View/ViewPropTypes";
import * as React from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  /**
  * The color of the refresh indicator.
  */
  tintColor?: null | undefined | ColorValue;

  /**
  * Title color.
  */
  titleColor?: null | undefined | ColorValue;

  /**
  * The title displayed under the refresh indicator.
  */
  title?: WithDefault<string, null>;

  /**
  * Called when the view starts refreshing.
  */
  onRefresh?: null | undefined | DirectEventHandler<null>;

  /**
  * Whether the view should be indicating an active refresh.
  */
  refreshing: boolean;
}>;
declare type ComponentType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeRefreshing: (viewRef: React.ElementRef<ComponentType>, refreshing: boolean) => void;
}
declare var Commands: NativeCommands;
export { Commands };
declare const $f2tExportDefault: HostComponent<NativeProps>;
export default $f2tExportDefault;