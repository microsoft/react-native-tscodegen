// @flow
import { Spec } from "./NativeUIManager";
interface UIManagerJSInterface extends Spec {
  readonly getViewManagerConfig: (viewManagerName: string) => Object;
  readonly createView: (reactTag: null | undefined | number, viewName: string, rootTag: number, props: Object) => void;
  readonly updateView: (reactTag: number, viewName: string, props: Object) => void;
  readonly manageChildren: (containerTag: null | undefined | number, moveFromIndices: number[], moveToIndices: number[], addChildReactTags: number[], addAtIndices: number[], removeAtIndices: number[]) => void;
}
declare var UIManager: UIManagerJSInterface;
declare const $f2tExportDefault: typeof UIManager;
export default $f2tExportDefault;