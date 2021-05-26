// @flow
import * as React from "react";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { DirectEventHandler } from "../../Types/CodegenTypes";
import { Float } from "../../Types/CodegenTypes";
import { Int32 } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheet";
import { ViewProps } from "../View/ViewPropTypes";
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  /**
  * Whether the pull to refresh functionality is enabled.
  */
  enabled?: WithDefault<boolean, true>;

  /**
  * The colors (at least one) that will be used to draw the refresh indicator.
  */
  colors?: null | undefined | ReadonlyArray<ColorValue>;

  /**
  * The background color of the refresh indicator.
  */
  progressBackgroundColor?: null | undefined | ColorValue;

  /**
  * Size of the refresh indicator, see RefreshControl.SIZE.
  *
  * This type isn't currently accurate. It really is specific numbers
  * hard coded in the Android platform.
  *
  * Also, 1 isn't actually a safe default. We are able to set this here
  * because native code isn't currently consuming the generated artifact.
  * This will end up being
  * size?: WithDefault<'default' | 'large', 'default'>,
  */
  size?: WithDefault<Int32, 1>;

  /**
  * Progress view top offset
  */
  progressViewOffset?: WithDefault<Float, 0>;

  /**
  * Called when the view starts refreshing.
  */
  onRefresh?: null | undefined | DirectEventHandler<null>;

  /**
  * Whether the view should be indicating an active refresh.
  */
  refreshing: boolean;
}>;
declare type NativeType = HostComponent<NativeProps>;
interface NativeCommands {
  readonly setNativeRefreshing: (viewRef: React.ElementRef<NativeType>, value: boolean) => void;
}
declare var Commands: NativeCommands;
export { Commands };
declare const $f2tExportDefault: NativeType;
export default $f2tExportDefault;