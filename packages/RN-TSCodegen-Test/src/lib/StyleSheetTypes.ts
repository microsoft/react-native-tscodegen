// \react-native\Libraries\StyleSheet\StyleSheetTypes.js

import { RNTag } from './CodegenTypes';

export type ColorValue = null | string | RNTag<'ColorValue'>;
export type ColorArrayValue = null | ReadonlyArray<ColorValue>;
export interface PointValue {
  x: number;
  y: number;
};
