// @flow
import { ColorValue } from "./StyleSheetTypes";
import { ProcessedColorValue } from "./processColor";

/*[FLOW2DTS - Warning] This type alias was opaque in the original Flow source.*/
declare type NativeColorValue = {
  semantic?: string[];
  dynamic?: {
    light?: null | undefined | (ColorValue | ProcessedColorValue);
    dark?: null | undefined | (ColorValue | ProcessedColorValue);
  };
};
declare var PlatformColor: (...names: string[]) => ColorValue;
declare type DynamicColorIOSTuplePrivate = {
  light: ColorValue;
  dark: ColorValue;
};
declare var DynamicColorIOSPrivate: (tuple: DynamicColorIOSTuplePrivate) => ColorValue;
declare var normalizeColorObject: (color: NativeColorValue) => null | undefined | ProcessedColorValue;
declare var processColorObject: (color: NativeColorValue) => null | undefined | NativeColorValue;
export type { NativeColorValue };
export { PlatformColor };
export type { DynamicColorIOSTuplePrivate };
export { DynamicColorIOSPrivate };
export { normalizeColorObject };
export { processColorObject };