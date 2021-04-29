// @flow
declare var ImagePickerIOS:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  canRecordVideos: (callback: (result: boolean) => void) => void;
  canUseCamera: (callback: (result: boolean) => void) => void;
  openCameraDialog: (config: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    unmirrorFrontFacingCamera?: boolean;
    videoMode?: boolean;
  }>, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void) => void;
  openSelectDialog: (config: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    showImages?: boolean;
    showVideos?: boolean;
  }>, successCallback: (imageURL: string, height: number, width: number) => void, cancelCallback: () => void) => void;

  /**
   * In iOS 13, the video URLs returned by the Image Picker are invalidated when
   * the picker is dismissed, unless reference to it is held. This API allows
   * the application to signal when it's finished with the video so that the
   * reference can be cleaned up.
   * It is safe to call this method for urlsthat aren't video URLs;
   * it will be a no-op.
   */
  removePendingVideo: (url: string) => void;

  /**
   * WARNING: In most cases, removePendingVideo should be used instead because
   * clearAllPendingVideos could clear out pending videos made by other callers.
   */
  clearAllPendingVideos: () => void;
};
declare const $f2tExportDefault: typeof ImagePickerIOS;
export default $f2tExportDefault;