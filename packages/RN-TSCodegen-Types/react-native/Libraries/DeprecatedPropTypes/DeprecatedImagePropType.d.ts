import { React$PropType$Primitive, ReactPropsCheckType } from "flow2dts-flow-types-polyfill";
import $1 from "./DeprecatedEdgeInsetsPropType";
import $2 from "../../TypeScriptSupplementals/DeprecatedImageSourcePropType";
import $3 from "prop-types";
declare const $f2d_style: ReactPropsCheckType;
declare const $f2d_source: typeof $2;
declare const $f2d_defaultSource: React$PropType$Primitive<{
  height?: number;
  scale?: number;
  uri?: string;
  width?: number;
} | number>;
declare const $f2d_accessible: typeof $3.bool;
declare const $f2d_accessibilityLabel: typeof $3.node;
declare const $f2d_blurRadius: typeof $3.number;
declare const $f2d_capInsets: typeof $1;
declare const $f2d_resizeMethod: React$PropType$Primitive<"auto" | "resize" | "scale">;
declare const $f2d_resizeMode: React$PropType$Primitive<"cover" | "contain" | "stretch" | "repeat" | "center">;
declare const $f2d_testID: typeof $3.string;
declare const $f2d_onLayout: typeof $3.func;
declare const $f2d_onLoadStart: typeof $3.func;
declare const $f2d_onProgress: typeof $3.func;
declare const $f2d_onError: typeof $3.func;
declare const $f2d_onPartialLoad: typeof $3.func;
declare const $f2d_onLoad: typeof $3.func;
declare const $f2d_onLoadEnd: typeof $3.func;
export { $f2d_style as style, $f2d_source as source, $f2d_defaultSource as defaultSource, $f2d_accessible as accessible, $f2d_accessibilityLabel as accessibilityLabel, $f2d_blurRadius as blurRadius, $f2d_capInsets as capInsets, $f2d_resizeMethod as resizeMethod, $f2d_resizeMode as resizeMode, $f2d_testID as testID, $f2d_onLayout as onLayout, $f2d_onLoadStart as onLoadStart, $f2d_onProgress as onProgress, $f2d_onError as onError, $f2d_onPartialLoad as onPartialLoad, $f2d_onLoad as onLoad, $f2d_onLoadEnd as onLoadEnd };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  style: ReactPropsCheckType;
  source: typeof $2;
  defaultSource: React$PropType$Primitive<{
    height?: number;
    scale?: number;
    uri?: string;
    width?: number;
  } | number>;
  accessible: typeof $3.bool;
  accessibilityLabel: typeof $3.node;
  blurRadius: typeof $3.number;
  capInsets: typeof $1;
  resizeMethod: React$PropType$Primitive<"auto" | "resize" | "scale">;
  resizeMode: React$PropType$Primitive<"cover" | "contain" | "stretch" | "repeat" | "center">;
  testID: typeof $3.string;
  onLayout: typeof $3.func;
  onLoadStart: typeof $3.func;
  onProgress: typeof $3.func;
  onError: typeof $3.func;
  onPartialLoad: typeof $3.func;
  onLoad: typeof $3.func;
  onLoadEnd: typeof $3.func;
};
export default $f2tExportDefault;