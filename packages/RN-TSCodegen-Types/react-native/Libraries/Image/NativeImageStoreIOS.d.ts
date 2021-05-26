// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
  readonly getBase64ForTag: (uri: string, successCallback: (base64ImageData: string) => void, errorCallback: (error:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    message: string;
  }) => void) => void;
  readonly hasImageForTag: (uri: string, callback: (hasImage: boolean) => void) => void;
  readonly removeImageForTag: (uri: string) => void;
  readonly addImageFromBase64: (base64ImageData: string, successCallback: (uri: string) => void, errorCallback: (error:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    message: string;
  }) => void) => void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;