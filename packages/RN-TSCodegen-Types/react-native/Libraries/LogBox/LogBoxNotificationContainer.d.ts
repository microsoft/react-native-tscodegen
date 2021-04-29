// @flow
import * as React from "react";
import LogBoxLog from "./Data/LogBoxLog";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  logs: ReadonlyArray<typeof LogBoxLog>;
  selectedLogIndex: number;
  isDisabled?: null | undefined | boolean;
}>;
declare function _LogBoxNotificationContainer(props: Props): React.Node;
export { _LogBoxNotificationContainer };
declare const $f2tExportDefault: React.AbstractComponent<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{}>;
export default $f2tExportDefault;