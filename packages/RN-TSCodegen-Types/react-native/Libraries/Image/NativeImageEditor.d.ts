// @flow
import { TurboModule } from "../TurboModule/RCTExport";
declare type Options =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly offset:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly x: number;
    readonly y: number;
  };
  readonly size:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly width: number;
    readonly height: number;
  };
  readonly displaySize?: null | undefined |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly width: number;
    readonly height: number;
  };

  /**
   * Enum with potential values:
   *  - cover
   *  - contain
   *  - stretch
   *  - center
   *  - repeat
   */
  readonly resizeMode?: null | undefined | string;
  readonly allowExternalStorage?: boolean;
};
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
  readonly cropImage: (uri: string, cropData: Options, successCallback: (uri: string) => void, errorCallback: (error: string) => void) => void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;