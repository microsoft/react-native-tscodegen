// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
  readonly canRecordVideos: (callback: (result: boolean) => void) => void;
  readonly canUseCamera: (callback: (result: boolean) => void) => void;
  readonly openCameraDialog: (config:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    unmirrorFrontFacingCamera: boolean;
    videoMode: boolean;
  }, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void) => void;
  readonly openSelectDialog: (config:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    showImages: boolean;
    showVideos: boolean;
  }, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void) => void;
  readonly clearAllPendingVideos: () => void;
  readonly removePendingVideo: (url: string) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;