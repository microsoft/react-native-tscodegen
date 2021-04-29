// @flow
import { TurboModule } from "../TurboModule/RCTExport";
declare type DisplayMetricsAndroid =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  width: number;
  height: number;
  scale: number;
  fontScale: number;
  densityDpi: number;
};
declare type DisplayMetrics =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  width: number;
  height: number;
  scale: number;
  fontScale: number;
};
declare type DimensionsPayload =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  window?: DisplayMetrics;
  screen?: DisplayMetrics;
  windowPhysicalPixels?: DisplayMetricsAndroid;
  screenPhysicalPixels?: DisplayMetricsAndroid;
};
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly Dimensions: DimensionsPayload;
    readonly isIPhoneX_deprecated?: boolean;
  };
}
declare var NativeModule: Spec;
export type { DisplayMetrics };
export type { DimensionsPayload };
export type { Spec };
declare const $f2tExportDefault: typeof NativeModule;
export default $f2tExportDefault;