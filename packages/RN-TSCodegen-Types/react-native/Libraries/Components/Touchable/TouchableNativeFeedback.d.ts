// @flow
import Pressability from "../../Pressability/Pressability";
import TouchableWithoutFeedback$f2tTypeof from "./TouchableWithoutFeedback";
declare type TouchableWithoutFeedback = typeof TouchableWithoutFeedback$f2tTypeof;
import * as React from "react";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
React.ElementConfig<TouchableWithoutFeedback> & {
  /**
  * Determines the type of background drawable that's going to be used to
  * display feedback. It takes an object with `type` property and extra data
  * depending on the `type`. It's recommended to use one of the static
  * methods to generate that dictionary.
  */
  background?: null | undefined | (Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    type: "ThemeAttrAndroid";
    attribute: "selectableItemBackground" | "selectableItemBackgroundBorderless";
    rippleRadius?: null | undefined | number;
  }> | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    type: "RippleAndroid";
    color?: null | undefined | number;
    borderless: boolean;
    rippleRadius?: null | undefined | number;
  }>);

  /**
  * TV preferred focus (see documentation for the View component).
  */
  hasTVPreferredFocus?: null | undefined | boolean;

  /**
  * TV next focus down (see documentation for the View component).
  */
  nextFocusDown?: null | undefined | number;

  /**
  * TV next focus forward (see documentation for the View component).
  */
  nextFocusForward?: null | undefined | number;

  /**
  * TV next focus left (see documentation for the View component).
  */
  nextFocusLeft?: null | undefined | number;

  /**
  * TV next focus right (see documentation for the View component).
  */
  nextFocusRight?: null | undefined | number;

  /**
  * TV next focus up (see documentation for the View component).
  */
  nextFocusUp?: null | undefined | number;

  /**
  * Set to true to add the ripple effect to the foreground of the view, instead
  * of the background. This is useful if one of your child views has a
  * background of its own, or you're e.g. displaying images, and you don't want
  * the ripple to be covered by them.
  *
  * Check TouchableNativeFeedback.canUseNativeForeground() first, as this is
  * only available on Android 6.0 and above. If you try to use this on older
  * versions, this will fallback to background.
  */
  useForeground?: null | undefined | boolean;
}>;
declare type State = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  pressability: typeof Pressability;
}>;
declare class TouchableNativeFeedback extends React.Component<Props, State> {
  static SelectableBackground(rippleRadius?: null | undefined | number): Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    attribute: "selectableItemBackground";
    type: "ThemeAttrAndroid";
    rippleRadius?: null | undefined | number;
  }>;
  static SelectableBackgroundBorderless(rippleRadius?: null | undefined | number): Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    attribute: "selectableItemBackgroundBorderless";
    type: "ThemeAttrAndroid";
    rippleRadius?: null | undefined | number;
  }>;
  static Ripple(color: string, borderless: boolean, rippleRadius?: null | undefined | number): Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    borderless: boolean;
    color?: null | undefined | number;
    rippleRadius?: null | undefined | number;
    type: "RippleAndroid";
  }>;
  static canUseNativeForeground(): boolean;
  state: State;
  render(): React.Node;
  componentDidUpdate(prevProps: Props, prevState: State): void;
  componentWillUnmount(): void;
}
export default TouchableNativeFeedback;