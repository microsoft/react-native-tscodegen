import { Stringish } from "flow2dts-flow-types-polyfill";
import { $Diff } from "utility-types";
// @flow
import { SyntheticEvent } from "../Types/CoreEventTypes";
import { LayoutEvent } from "../Types/CoreEventTypes";
import { EdgeInsetsProp } from "../StyleSheet/EdgeInsetsPropType";
import { ImageSource } from "./ImageSource";
import { ViewStyleProp } from "../StyleSheet/StyleSheet";
import { ImageStyleProp } from "../StyleSheet/StyleSheet";
import { ViewProps } from "../Components/View/ViewPropTypes";
declare type ImageLoadEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  source: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    width: number;
    height: number;
    url: string;
  }>;
  uri?: string; // Only on Android

}>>;
declare type IOSImageProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * A static image to display while loading the image source.
  *
  * See https://reactnative.dev/docs/image.html#defaultsource
  */
  defaultSource?: null | undefined | ImageSource;

  /**
  * Invoked when a partial load of the image is complete.
  *
  * See https://reactnative.dev/docs/image.html#onpartialload
  */
  onPartialLoad?: null | undefined | (() => void);

  /**
  * Invoked on download progress with `{nativeEvent: {loaded, total}}`.
  *
  * See https://reactnative.dev/docs/image.html#onprogress
  */
  onProgress?: null | undefined | ((event: SyntheticEvent<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    loaded: number;
    total: number;
  }>>) => void);
}>;
declare type AndroidImageProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  loadingIndicatorSource?: null | undefined | (number | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    uri: string;
  }>);
  progressiveRenderingEnabled?: null | undefined | boolean;
  fadeDuration?: null | undefined | number;
}>;
declare type ImageProps =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
$Diff<ViewProps, Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  style?: null | undefined | ViewStyleProp;
}>> & IOSImageProps & AndroidImageProps & {
  /**
   * When true, indicates the image is an accessibility element.
   *
   * See https://reactnative.dev/docs/image.html#accessible
   */
  accessible?: null | undefined | boolean;

  /**
   * Internal prop to set an "Analytics Tag" that can will be set on the Image
   */
  internal_analyticTag?: null | undefined | string;

  /**
   * The text that's read by the screen reader when the user interacts with
   * the image.
   *
   * See https://reactnative.dev/docs/image.html#accessibilitylabel
   */
  accessibilityLabel?: null | undefined | Stringish;

  /**
   * blurRadius: the blur radius of the blur filter added to the image
   *
   * See https://reactnative.dev/docs/image.html#blurradius
   */
  blurRadius?: null | undefined | number;

  /**
   * See https://reactnative.dev/docs/image.html#capinsets
   */
  capInsets?: null | undefined | EdgeInsetsProp;

  /**
   * Invoked on load error with `{nativeEvent: {error}}`.
   *
   * See https://reactnative.dev/docs/image.html#onerror
   */
  onError?: null | undefined | ((event: SyntheticEvent<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    error: string;
  }>>) => void);

  /**
   * Invoked on mount and layout changes with
   * `{nativeEvent: {layout: {x, y, width, height}}}`.
   *
   * See https://reactnative.dev/docs/image.html#onlayout
   */
  onLayout?: null | undefined | ((event: LayoutEvent) => unknown);

  /**
   * Invoked when load completes successfully.
   *
   * See https://reactnative.dev/docs/image.html#onload
   */
  onLoad?: null | undefined | ((event: ImageLoadEvent) => void);

  /**
   * Invoked when load either succeeds or fails.
   *
   * See https://reactnative.dev/docs/image.html#onloadend
   */
  onLoadEnd?: null | undefined | (() => void);

  /**
   * Invoked on load start.
   *
   * See https://reactnative.dev/docs/image.html#onloadstart
   */
  onLoadStart?: null | undefined | (() => void);

  /**
   * See https://reactnative.dev/docs/image.html#resizemethod
   */
  resizeMethod?: null | undefined | ("auto" | "resize" | "scale");

  /**
   * The image source (either a remote URL or a local file resource).
   *
   * See https://reactnative.dev/docs/image.html#source
   */
  source?: null | undefined | ImageSource;

  /**
   * See https://reactnative.dev/docs/image.html#style
   */
  style?: null | undefined | ImageStyleProp;

  /**
   * Determines how to resize the image when the frame doesn't match the raw
   * image dimensions.
   *
   * See https://reactnative.dev/docs/image.html#resizemode
   */
  resizeMode?: null | undefined | ("cover" | "contain" | "stretch" | "repeat" | "center");

  /**
   * A unique identifier for this element to be used in UI Automation
   * testing scripts.
   *
   * See https://reactnative.dev/docs/image.html#testid
   */
  testID?: null | undefined | string;
  src?: never;
  children?: never;
};
export type { ImageLoadEvent };
export type { ImageProps };