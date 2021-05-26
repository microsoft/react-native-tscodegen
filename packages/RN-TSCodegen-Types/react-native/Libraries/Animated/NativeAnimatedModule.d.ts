// @flow
import { TurboModule } from "../TurboModule/RCTExport";
declare type EndResult = {
  finished: boolean;
};
declare type EndCallback = (result: EndResult) => void;
declare type SaveValueCallback = (value: number) => void;
declare type EventMapping =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  nativeEventPath: string[];
  animatedValueTag?: null | undefined | number;
};
declare type AnimatedNodeConfig = Object;
declare type AnimatingNodeConfig = Object;
interface Spec extends TurboModule {
  readonly startOperationBatch: () => void;
  readonly finishOperationBatch: () => void;
  readonly createAnimatedNode: (tag: number, config: AnimatedNodeConfig) => void;
  readonly getValue: (tag: number, saveValueCallback: SaveValueCallback) => void;
  readonly startListeningToAnimatedNodeValue: (tag: number) => void;
  readonly stopListeningToAnimatedNodeValue: (tag: number) => void;
  readonly connectAnimatedNodes: (parentTag: number, childTag: number) => void;
  readonly disconnectAnimatedNodes: (parentTag: number, childTag: number) => void;
  readonly startAnimatingNode: (animationId: number, nodeTag: number, config: AnimatingNodeConfig, endCallback: EndCallback) => void;
  readonly stopAnimation: (animationId: number) => void;
  readonly setAnimatedNodeValue: (nodeTag: number, value: number) => void;
  readonly setAnimatedNodeOffset: (nodeTag: number, offset: number) => void;
  readonly flattenAnimatedNodeOffset: (nodeTag: number) => void;
  readonly extractAnimatedNodeOffset: (nodeTag: number) => void;
  readonly connectAnimatedNodeToView: (nodeTag: number, viewTag: number) => void;
  readonly disconnectAnimatedNodeFromView: (nodeTag: number, viewTag: number) => void;
  readonly restoreDefaultValues: (nodeTag: number) => void;
  readonly dropAnimatedNode: (tag: number) => void;
  readonly addAnimatedEventToView: (viewTag: number, eventName: string, eventMapping: EventMapping) => void;
  readonly removeAnimatedEventFromView: (viewTag: number, eventName: string, animatedNodeTag: number) => void;
  // Events
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export type { EventMapping };
export type { AnimatedNodeConfig };
export type { AnimatingNodeConfig };
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;