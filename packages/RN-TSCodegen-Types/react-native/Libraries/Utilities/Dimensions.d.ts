import type { DisplayMetrics } from "./NativeDeviceInfo";
type DimensionsValue = {
  window?: DisplayMetrics;
  screen?: DisplayMetrics;
};
// @flow
declare class Dimensions {
  static get<K extends keyof DimensionsValue>(dim: K): Required<DimensionsValue>[K];
  static set(dims: Readonly<{
    [key: string]: any;
  }>): void;
  static addEventListener(type: "change", handler: Function): void;
  static removeEventListener(type: "change", handler: Function): void;
}
export default Dimensions;