// @flow
import { MeasureOnSuccessCallback } from "../Renderer/shims/ReactNativeTypes";
import { MeasureInWindowOnSuccessCallback } from "../Renderer/shims/ReactNativeTypes";
import { MeasureLayoutOnSuccessCallback } from "../Renderer/shims/ReactNativeTypes";
declare type Node = {};
declare type NodeSet = Node[];
declare type NodeProps = {};
declare type InstanceHandle = {};
declare type Spec =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly createNode: (reactTag: number, viewName: string, rootTag: number, props: NodeProps, instanceHandle: InstanceHandle) => Node;
  readonly cloneNode: (node: Node) => Node;
  readonly cloneNodeWithNewChildren: (node: Node) => Node;
  readonly cloneNodeWithNewProps: (node: Node, newProps: NodeProps) => Node;
  readonly cloneNodeWithNewChildrenAndProps: (node: Node, newProps: NodeProps) => Node;
  readonly createChildSet: (rootTag: number) => NodeSet;
  readonly appendChild: (parentNode: Node, child: Node) => Node;
  readonly appendChildToSet: (childSet: NodeSet, child: Node) => void;
  readonly completeRoot: (rootTag: number, childSet: NodeSet) => void;
  readonly setNativeProps: (node: Node, nativeProps: NodeProps) => void;
  readonly measure: (node: Node, callback: MeasureOnSuccessCallback) => void;
  readonly measureInWindow: (node: Node, callback: MeasureInWindowOnSuccessCallback) => void;
  readonly measureLayout: (node: Node, relativeNode: Node, onFail: () => void, onSuccess: MeasureLayoutOnSuccessCallback) => void;
};
declare var FabricUIManager: null | undefined | Spec;
declare const $f2tExportDefault: typeof FabricUIManager;
export default $f2tExportDefault;