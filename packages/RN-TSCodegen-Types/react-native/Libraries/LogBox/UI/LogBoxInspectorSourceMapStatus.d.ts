// @flow
import * as React from "react";
import { PressEvent } from "../../Types/CoreEventTypes";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onPress?: null | undefined | ((event: PressEvent) => void);
  status: "COMPLETE" | "FAILED" | "NONE" | "PENDING";
}>;
declare function LogBoxInspectorSourceMapStatus(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxInspectorSourceMapStatus;
export default $f2tExportDefault;