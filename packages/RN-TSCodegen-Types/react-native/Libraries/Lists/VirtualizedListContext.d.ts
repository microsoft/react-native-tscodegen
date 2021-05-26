// @flow
import VirtualizedList from "./VirtualizedList.js";
import * as React from "react";
declare type Frame = Readonly<{
  offset: number;
  length: number;
  index: number;
  inLayout: boolean;
}>;
declare type ChildListState = Readonly<{
  first: number;
  last: number;
  frames: {
    [key: number]: Frame;
  };
}>;
declare type ListDebugInfo = Readonly<{
  cellKey: string;
  listKey: string;
  parent?: null | undefined | ListDebugInfo;
  // We include all ancestors regardless of orientation, so this is not always
  // identical to the child's orientation.
  horizontal: boolean;
}>;
declare type Context = Readonly<{
  cellKey?: null | undefined | string;
  getScrollMetrics: () => {
    contentLength: number;
    dOffset: number;
    dt: number;
    offset: number;
    timestamp: number;
    velocity: number;
    visibleLength: number;
  };
  horizontal?: null | undefined | boolean;
  getOutermostParentListRef: () => VirtualizedList;
  getNestedChildState: ($f2t1: string) => null | undefined | ChildListState;
  registerAsNestedChild: ($f2t1: {
    cellKey: string;
    key: string;
    ref: VirtualizedList;
    parentDebugInfo: ListDebugInfo;
  }) => null | undefined | ChildListState;
  unregisterAsNestedChild: ($f2t1: {
    key: string;
    state: ChildListState;
  }) => void;
  debugInfo: ListDebugInfo;
}>;
declare var VirtualizedListContext: React.Context<null | undefined | Context>;
declare function VirtualizedListContextResetter($f2t1: {
  children: React.Node;
}): React.Node;
declare function VirtualizedListContextProvider($f2t1: {
  children: React.Node;
  value: Context;
}): React.Node;
declare function VirtualizedListCellContextProvider($f2t1: {
  cellKey: string;
  children: React.Node;
}): React.Node;
export type { ChildListState };
export type { ListDebugInfo };
export { VirtualizedListContext };
export { VirtualizedListContextResetter };
export { VirtualizedListContextProvider };
export { VirtualizedListCellContextProvider };