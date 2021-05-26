import { React$Context } from "flow2dts-flow-types-polyfill";
// @flow
declare type RootTag = number;
declare var RootTagContext: React$Context<RootTag>;
declare function createRootTag(rootTag: number): RootTag;
export type { RootTag };
export { RootTagContext };
export { createRootTag };