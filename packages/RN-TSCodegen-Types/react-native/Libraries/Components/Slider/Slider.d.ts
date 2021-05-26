// @flow
import SliderNativeComponent from "./SliderNativeComponent";
import $1 from "react";
import { ImageSource } from "../../Image/ImageSource";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheet";
import { ViewProps } from "../View/ViewPropTypes";
declare type IOSProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Assigns a single image for the track. Only static images are supported.
  * The center pixel of the image will be stretched to fill the track.
  */
  trackImage?: null | undefined | ImageSource;

  /**
  * Assigns a minimum track image. Only static images are supported. The
  * rightmost pixel of the image will be stretched to fill the track.
  */
  minimumTrackImage?: null | undefined | ImageSource;

  /**
  * Assigns a maximum track image. Only static images are supported. The
  * leftmost pixel of the image will be stretched to fill the track.
  */
  maximumTrackImage?: null | undefined | ImageSource;

  /**
  * Sets an image for the thumb. Only static images are supported.
  */
  thumbImage?: null | undefined | ImageSource;
}>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & IOSProps & {
  /**
  * Used to style and layout the `Slider`.  See `StyleSheet.js` and
  * `DeprecatedViewStylePropTypes.js` for more info.
  */
  style?: null | undefined | ViewStyleProp;

  /**
  * Initial value of the slider. The value should be between minimumValue
  * and maximumValue, which default to 0 and 1 respectively.
  * Default value is 0.
  *
  * *This is not a controlled component*, you don't need to update the
  * value during dragging.
  */
  value?: null | undefined | number;

  /**
  * Step value of the slider. The value should be
  * between 0 and (maximumValue - minimumValue).
  * Default value is 0.
  */
  step?: null | undefined | number;

  /**
  * Initial minimum value of the slider. Default value is 0.
  */
  minimumValue?: null | undefined | number;

  /**
  * Initial maximum value of the slider. Default value is 1.
  */
  maximumValue?: null | undefined | number;

  /**
  * The color used for the track to the left of the button.
  * Overrides the default blue gradient image on iOS.
  */
  minimumTrackTintColor?: null | undefined | ColorValue;

  /**
  * The color used for the track to the right of the button.
  * Overrides the default blue gradient image on iOS.
  */
  maximumTrackTintColor?: null | undefined | ColorValue;

  /**
  * The color used to tint the default thumb images on iOS, or the
  * color of the foreground switch grip on Android.
  */
  thumbTintColor?: null | undefined | ColorValue;

  /**
  * If true the user won't be able to move the slider.
  * Default value is false.
  */
  disabled?: null | undefined | boolean;

  /**
  * Callback continuously called while the user is dragging the slider.
  */
  onValueChange?: null | undefined | ((value: number) => void);

  /**
  * Callback that is called when the user releases the slider,
  * regardless if the value has changed. The current value is passed
  * as an argument to the callback handler.
  */
  onSlidingComplete?: null | undefined | ((value: number) => void);

  /**
  * Used to locate this view in UI automation tests.
  */
  testID?: null | undefined | string;
}>;
declare var SliderWithRef: $1.AbstractComponent<Props, $1.ElementRef<typeof SliderNativeComponent>>;
declare const $f2tExportDefault: typeof SliderWithRef;
export default $f2tExportDefault;