// @flow
import { LogLevel } from "../Data/LogBoxLog";
import * as React from "react";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onDismiss: () => void;
  onMinimize: () => void;
  level?: null | undefined | LogLevel;
}>;
declare function LogBoxInspectorFooter(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxInspectorFooter;
export default $f2tExportDefault;