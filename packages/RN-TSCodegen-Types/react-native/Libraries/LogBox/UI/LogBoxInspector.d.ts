// @flow
import * as React from "react";
import { LogLevel } from "../Data/LogBoxLog";
import LogBoxLog from "../Data/LogBoxLog";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  onDismiss: () => void;
  onChangeSelectedIndex: (index: number) => void;
  onMinimize: () => void;
  logs: ReadonlyArray<typeof LogBoxLog>;
  selectedIndex: number;
  fatalType?: null | undefined | LogLevel;
}>;
declare function LogBoxInspector(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxInspector;
export default $f2tExportDefault;