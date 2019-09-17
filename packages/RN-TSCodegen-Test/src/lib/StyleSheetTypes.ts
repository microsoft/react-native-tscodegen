// \react-native\Libraries\StyleSheet\StyleSheetTypes.js

import { RNTag } from 'react-native-tscodegen-types';

export type ColorValue = null | string | RNTag<'ColorValue'>;
export type ColorArrayValue = null | ReadonlyArray<ColorValue>;
export interface PointValue {
  x: number;
  y: number;
};
