import $2 from "react";
import { PressEvent } from "../Types/CoreEventTypes";
import { ColorValue } from "../StyleSheet/StyleSheet";
declare type ButtonProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  Text to display inside the button. On Android the given title will be
  converted to the uppercased form.
  */
  title: string;

  /**
  Handler to be called when the user taps the button. The first function
  argument is an event in form of [PressEvent](pressevent).
  */
  onPress: (event?: PressEvent) => unknown;

  /**
  If `true`, doesn't play system sound on touch.
   @platform android
   @default false
  */
  touchSoundDisabled?: null | undefined | boolean;

  /**
  Color of the text (iOS), or background color of the button (Android).
   @default {@platform android} '#2196F3'
  @default {@platform ios} '#007AFF'
  */
  color?: null | undefined | ColorValue;

  /**
  TV preferred focus.
   @platform tv
   @default false
  */
  hasTVPreferredFocus?: null | undefined | boolean;

  /**
  Designates the next view to receive focus when the user navigates down. See
  the [Android documentation][android:nextFocusDown].
   [android:nextFocusDown]:
  https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusDown
   @platform android, tv
  */
  nextFocusDown?: null | undefined | number;

  /**
  Designates the next view to receive focus when the user navigates forward.
  See the [Android documentation][android:nextFocusForward].
   [android:nextFocusForward]:
  https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusForward
   @platform android, tv
  */
  nextFocusForward?: null | undefined | number;

  /**
  Designates the next view to receive focus when the user navigates left. See
  the [Android documentation][android:nextFocusLeft].
   [android:nextFocusLeft]:
  https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusLeft
   @platform android, tv
  */
  nextFocusLeft?: null | undefined | number;

  /**
  Designates the next view to receive focus when the user navigates right. See
  the [Android documentation][android:nextFocusRight].
   [android:nextFocusRight]:
  https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusRight
   @platform android, tv
  */
  nextFocusRight?: null | undefined | number;

  /**
  Designates the next view to receive focus when the user navigates up. See
  the [Android documentation][android:nextFocusUp].
   [android:nextFocusUp]:
  https://developer.android.com/reference/android/view/View.html#attr_android:nextFocusUp
   @platform android, tv
  */
  nextFocusUp?: null | undefined | number;

  /**
  Text to display for blindness accessibility features.
  */
  accessibilityLabel?: null | undefined | string;

  /**
  If `true`, disable all interactions for this component.
   @default false
  */
  disabled?: null | undefined | boolean;

  /**
  Used to locate this view in end-to-end tests.
  */
  testID?: null | undefined | string;
}>;
declare class Button extends $2.Component<ButtonProps> {
  render(): $2.Node;
}
export default Button;