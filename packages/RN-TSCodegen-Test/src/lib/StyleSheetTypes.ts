// \react-native\Libraries\StyleSheet\StyleSheetTypes.js

class ColorValueNotExported { private constructor() { } };

export type ColorValue = null | string | ColorValueNotExported;
export type ColorArrayValue = null | ReadonlyArray<ColorValue>;
export interface PointValue {
  x: number;
  y: number;
};