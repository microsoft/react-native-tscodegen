// @flow
import * as React from "react";
import { LogLevel } from "../Data/LogBoxLog";
import { Message } from "../Data/parseLogBoxLog";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  collapsed: boolean;
  message: Message;
  level: LogLevel;
  title: string;
  onPress: () => void;
}>;
declare function LogBoxInspectorMessageHeader(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxInspectorMessageHeader;
export default $f2tExportDefault;