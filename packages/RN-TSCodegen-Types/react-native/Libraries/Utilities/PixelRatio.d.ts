// @flow
declare class PixelRatio {
  static get(): number;
  static getFontScale(): number;
  static getPixelSizeForLayoutSize(layoutSize: number): number;
  static roundToNearestPixel(layoutSize: number): number;
  static startDetecting(): void;
}
export default PixelRatio;