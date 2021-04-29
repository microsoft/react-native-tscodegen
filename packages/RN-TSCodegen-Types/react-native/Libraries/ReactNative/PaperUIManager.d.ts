// @flow
import NativeUIManager from "./NativeUIManager";
declare var UIManagerJS:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
typeof NativeUIManager & {
  getConstants: () => Object;
  getViewManagerConfig: (viewManagerName: string) => any;
};
declare const $f2tExportDefault: typeof UIManagerJS;
export default $f2tExportDefault;