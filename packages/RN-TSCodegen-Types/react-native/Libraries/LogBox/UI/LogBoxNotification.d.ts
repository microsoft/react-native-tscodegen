// @flow
import * as React from "react";
import LogBoxLog from "../Data/LogBoxLog";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  log: typeof LogBoxLog;
  totalLogCount: number;
  level: "warn" | "error";
  onPressOpen: () => void;
  onPressDismiss: () => void;
}>;
declare function LogBoxLogNotification(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxLogNotification;
export default $f2tExportDefault;