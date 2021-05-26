import { $Keys } from "utility-types";
import $1 from "react";
import { ColorValue } from "../../StyleSheet/StyleSheet";
declare type StatusBarStyle = $Keys<{
  /**
  * Default status bar style (dark for iOS, light for Android)
  */
  default: string;

  /**
  * Dark background, white texts and icons
  */
  "light-content": string;

  /**
  * Light background, dark texts and icons
  */
  "dark-content": string;
}>;
declare type StatusBarAnimation = $Keys<{
  /**
  * No animation
  */
  none: string;

  /**
  * Fade animation
  */
  fade: string;

  /**
  * Slide animation
  */
  slide: string;
}>;
declare type AndroidProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * The background color of the status bar.
  * @platform android
  */
  backgroundColor?: null | undefined | ColorValue;

  /**
  * If the status bar is translucent.
  * When translucent is set to true, the app will draw under the status bar.
  * This is useful when using a semi transparent status bar color.
  *
  * @platform android
  */
  translucent?: null | undefined | boolean;
}>;
declare type IOSProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * If the network activity indicator should be visible.
  *
  * @platform ios
  */
  networkActivityIndicatorVisible?: null | undefined | boolean;

  /**
  * The transition effect when showing and hiding the status bar using the `hidden`
  * prop. Defaults to 'fade'.
  *
  * @platform ios
  */
  showHideTransition?: null | undefined | ("fade" | "slide" | "none");
}>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
AndroidProps & IOSProps & {
  /**
  * If the status bar is hidden.
  */
  hidden?: null | undefined | boolean;

  /**
  * If the transition between status bar property changes should be animated.
  * Supported for backgroundColor, barStyle and hidden.
  */
  animated?: null | undefined | boolean;

  /**
  * Sets the color of the status bar text.
  */
  barStyle?: null | undefined | ("default" | "light-content" | "dark-content");
}>;
declare class StatusBar extends $1.Component<Props> {
  static currentHeight?: null | undefined | number;
  static setHidden(hidden: boolean, animation?: StatusBarAnimation): void;
  static setBarStyle(style: StatusBarStyle, animated?: boolean): void;
  static setNetworkActivityIndicatorVisible(visible: boolean): void;
  static setBackgroundColor(color: string, animated?: boolean): void;
  static setTranslucent(translucent: boolean): void;
  static pushStackEntry(props: any): any;
  static popStackEntry(entry: any): void;
  static replaceStackEntry(entry: any, props: any): any;
  static defaultProps:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    animated: boolean;
    showHideTransition: string;
  };
  componentDidMount(): void;
  componentWillUnmount(): void;
  componentDidUpdate(): void;
  render(): $1.Node;
}
export type { StatusBarStyle };
export type { StatusBarAnimation };
export default StatusBar;