// @flow
import { ColorValue } from "./StyleSheetTypes";
import { ProcessedColorValue } from "./processColor";
declare function normalizeColor(color?: null | undefined | (ColorValue | ProcessedColorValue)): null | undefined | ProcessedColorValue;
declare const $f2tExportDefault: typeof normalizeColor;
export default $f2tExportDefault;