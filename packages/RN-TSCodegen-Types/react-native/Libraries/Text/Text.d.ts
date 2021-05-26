// @flow
import { NativeText } from "./TextNativeComponent";
import { NativeVirtualText } from "./TextNativeComponent";
import $1 from "../DeprecatedPropTypes/DeprecatedTextPropTypes";
import $2 from "react";
import { TextProps } from "./TextProps";
declare var Text: $2.AbstractComponent<TextProps, $2.ElementRef<typeof NativeText | typeof NativeVirtualText>>;
declare var TextToExport: typeof Text & Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{}>;
declare const $f2tExportDefault: typeof TextToExport;
export default $f2tExportDefault;