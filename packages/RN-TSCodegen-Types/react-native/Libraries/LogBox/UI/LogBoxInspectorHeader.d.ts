// @flow
import * as React from "react";
import { LogLevel } from "../Data/LogBoxLog";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onSelectIndex: (selectedIndex: number) => void;
  selectedIndex: number;
  total: number;
  level: LogLevel;
}>;
declare function LogBoxInspectorHeader(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxInspectorHeader;
export default $f2tExportDefault;