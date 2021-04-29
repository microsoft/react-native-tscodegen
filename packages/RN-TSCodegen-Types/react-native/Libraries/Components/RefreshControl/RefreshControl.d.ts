import $1 from "react";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { ViewProps } from "../View/ViewPropTypes";
declare var RefreshLayoutConsts: any;
declare type IOSProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
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
  title?: null | undefined | string;
}>;
declare type AndroidProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Whether the pull to refresh functionality is enabled.
  */
  enabled?: null | undefined | boolean;

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
  */
  size?: null | undefined | (typeof RefreshLayoutConsts.SIZE.DEFAULT | typeof RefreshLayoutConsts.SIZE.LARGE);

  /**
  * Progress view top offset
  */
  progressViewOffset?: null | undefined | number;
}>;
declare type RefreshControlProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & IOSProps & AndroidProps & {
  /**
  * Called when the view starts refreshing.
  */
  onRefresh?: null | undefined | (() => void | Promise<void>);

  /**
  * Whether the view should be indicating an active refresh.
  */
  refreshing: boolean;
}>;
declare class RefreshControl extends $1.Component<RefreshControlProps> {
  static SIZE: any;
  componentDidMount(): void;
  componentDidUpdate(prevProps: RefreshControlProps): void;
  render(): $1.Node;
}
export type { RefreshControlProps };
export default RefreshControl;