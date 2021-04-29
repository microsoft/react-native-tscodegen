import $2 from "react";
import { PressEvent } from "../Types/CoreEventTypes";
import { ColorValue } from "../StyleSheet/StyleSheetTypes";
declare type ButtonProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Text to display inside the button
  */
  title: string;

  /**
  * Handler to be called when the user taps the button
  */
  onPress: (event?: PressEvent) => unknown;

  /**
  * If true, doesn't play system sound on touch (Android Only)
  **/
  touchSoundDisabled?: null | undefined | boolean;

  /**
  * Color of the text (iOS), or background color of the button (Android)
  */
  color?: null | undefined | ColorValue;

  /**
  * TV preferred focus (see documentation for the View component).
  */
  hasTVPreferredFocus?: null | undefined | boolean;

  /**
  * TV next focus down (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusDown?: null | undefined | number;

  /**
  * TV next focus forward (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusForward?: null | undefined | number;

  /**
  * TV next focus left (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusLeft?: null | undefined | number;

  /**
  * TV next focus right (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusRight?: null | undefined | number;

  /**
  * TV next focus up (see documentation for the View component).
  *
  * @platform android
  */
  nextFocusUp?: null | undefined | number;

  /**
  * Text to display for blindness accessibility features
  */
  accessibilityLabel?: null | undefined | string;

  /**
  * If true, disable all interactions for this component.
  */
  disabled?: null | undefined | boolean;

  /**
  * Used to locate this view in end-to-end tests.
  */
  testID?: null | undefined | string;
}>;
declare class Button extends $2.Component<ButtonProps> {
  render(): $2.Node;
}
export default Button;