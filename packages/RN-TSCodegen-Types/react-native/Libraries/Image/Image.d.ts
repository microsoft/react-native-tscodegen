import $1 from "../DeprecatedPropTypes/DeprecatedImagePropType";
import $2 from "react";
import $3 from "./resolveAssetSource";
import { ImageProps as ImagePropsType } from "./ImageProps";
import ImageViewNativeComponent from "./ImageViewNativeComponent";
declare function getSize(uri: string, success: (width: number, height: number) => void, failure?: (error: any) => void): void;
declare function getSizeWithHeaders(uri: string, headers: {
  [$f2tKey: string]: string;
}, success: (width: number, height: number) => void, failure?: (error: any) => void): any;
declare function prefetch(url: string): any;
declare function queryCache(urls: string[]): Promise<{
  [$f2tKey: string]: "memory" | "disk" | "disk/memory";
}>;
declare type ImageComponentStatics = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getSize: typeof getSize;
  getSizeWithHeaders: typeof getSizeWithHeaders;
  prefetch: typeof prefetch;
  queryCache: typeof queryCache;
  resolveAssetSource: typeof $3;
}>;
declare const $f2tExportDefault: $2.AbstractComponent<ImagePropsType, $2.ElementRef<typeof ImageViewNativeComponent>> & ImageComponentStatics;
export default $f2tExportDefault;