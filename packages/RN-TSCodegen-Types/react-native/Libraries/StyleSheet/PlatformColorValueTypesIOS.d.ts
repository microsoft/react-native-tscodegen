// @flow
import { ColorValue } from "./StyleSheet";
declare type DynamicColorIOSTuple = {
  light: ColorValue;
  dark: ColorValue;
};
declare var DynamicColorIOS: (tuple: DynamicColorIOSTuple) => ColorValue;
export type { DynamicColorIOSTuple };
export { DynamicColorIOS };