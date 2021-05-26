// @flow
import { ColorValue } from "./StyleSheet";
import { NativeColorValue } from "./PlatformColorValueTypes";
declare type ProcessedColorValue = number | NativeColorValue;
declare function processColor(color?: null | undefined | (number | ColorValue)): null | undefined | ProcessedColorValue;
export type { ProcessedColorValue };
declare const $f2tExportDefault: typeof processColor;
export default $f2tExportDefault;