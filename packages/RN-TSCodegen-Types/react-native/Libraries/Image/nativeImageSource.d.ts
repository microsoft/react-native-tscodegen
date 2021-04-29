// @flow
import { ImageURISource } from "./ImageSource";
declare type NativeImageSourceSpec = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  android?: string;
  ios?: string;
  default?: string;
  // For more details on width and height, see
  // https://reactnative.dev/docs/images.html#why-not-automatically-size-everything
  height: number;
  width: number;
}>;
declare function nativeImageSource(spec: NativeImageSourceSpec): ImageURISource;
declare const $f2tExportDefault: typeof nativeImageSource;
export default $f2tExportDefault;