// \react-native\Libraries\StyleSheet\StyleSheetTypes.js

export class ColorValueRNTag { private constructor() { } };

export type ColorValue = null | string | ColorValueRNTag;
export type ColorArrayValue = null | ReadonlyArray<ColorValue>;
export interface PointValue {
  x: number;
  y: number;
};