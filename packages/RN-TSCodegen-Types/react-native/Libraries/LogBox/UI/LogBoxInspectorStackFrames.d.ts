// @flow
import * as React from "react";
import { Stack } from "../Data/LogBoxSymbolication";
import LogBoxLog from "../Data/LogBoxLog";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  log: typeof LogBoxLog;
  onRetry: () => void;
}>;
declare function getCollapseMessage(stackFrames: Stack, collapsed: boolean): string;
declare function LogBoxInspectorStackFrames(props: Props): React.Node;
export { getCollapseMessage };
declare const $f2tExportDefault: typeof LogBoxInspectorStackFrames;
export default $f2tExportDefault;