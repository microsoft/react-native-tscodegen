// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () => Object;
  readonly getConstantsForViewManager: (viewManagerName: string) => Object;
  readonly getDefaultEventTypes: () => string[];
  readonly lazilyLoadView: (name: string) => Object;
  // revisit return
  readonly createView: (reactTag: null | undefined | number, viewName: string, rootTag: number, props: Object) => void;
  readonly updateView: (reactTag: number, viewName: string, props: Object) => void;
  readonly focus: (reactTag?: null | undefined | number) => void;
  readonly blur: (reactTag?: null | undefined | number) => void;
  readonly findSubviewIn: (reactTag: null | undefined | number, point: number[], callback: (nativeViewTag: number, left: number, top: number, width: number, height: number) => void) => void;
  readonly dispatchViewManagerCommand: (reactTag: null | undefined | number, commandID: number, commandArgs?: null | undefined | any[]) => void;
  readonly measure: (reactTag: null | undefined | number, callback: (left: number, top: number, width: number, height: number, pageX: number, pageY: number) => void) => void;
  readonly measureInWindow: (reactTag: null | undefined | number, callback: (x: number, y: number, width: number, height: number) => void) => void;
  readonly viewIsDescendantOf: (reactTag: null | undefined | number, ancestorReactTag: null | undefined | number, callback: (result: boolean[]) => void) => void;
  readonly measureLayout: (reactTag: null | undefined | number, ancestorReactTag: null | undefined | number, errorCallback: (error: Object) => void, callback: (left: number, top: number, width: number, height: number) => void) => void;
  readonly measureLayoutRelativeToParent: (reactTag: null | undefined | number, errorCallback: (error: Object) => void, callback: (left: number, top: number, width: number, height: number) => void) => void;
  readonly setJSResponder: (reactTag: null | undefined | number, blockNativeResponder: boolean) => void;
  readonly clearJSResponder: () => void;
  readonly configureNextLayoutAnimation: (config: Object, callback: () => void, errorCallback: (error: Object) => void) => void;
  readonly removeSubviewsFromContainerWithID: (containerID: number) => void;
  readonly replaceExistingNonRootView: (reactTag?: null | undefined | number, newReactTag?: null | undefined | number) => void;
  readonly setChildren: (containerTag: null | undefined | number, reactTags: number[]) => void;
  readonly manageChildren: (containerTag: null | undefined | number, moveFromIndices: number[], moveToIndices: number[], addChildReactTags: number[], addAtIndices: number[], removeAtIndices: number[]) => void;
  // Android only
  readonly setLayoutAnimationEnabledExperimental: (enabled: boolean) => void;
  readonly sendAccessibilityEvent: (reactTag: null | undefined | number, eventType: number) => void;
  readonly showPopupMenu: (reactTag: null | undefined | number, items: string[], error: (error: Object) => void, success: (event: string, selected?: number) => void) => void;
  readonly dismissPopupMenu: () => void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;