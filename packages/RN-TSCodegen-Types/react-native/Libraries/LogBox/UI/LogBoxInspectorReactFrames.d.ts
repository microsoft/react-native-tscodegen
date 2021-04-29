// @flow
import * as React from "react";
import LogBoxLog from "../Data/LogBoxLog";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  log: typeof LogBoxLog;
}>;
declare function LogBoxInspectorReactFrames(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxInspectorReactFrames;
export default $f2tExportDefault;