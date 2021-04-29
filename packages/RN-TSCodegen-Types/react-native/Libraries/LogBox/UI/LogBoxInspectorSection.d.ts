// @flow
import * as React from "react";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  heading: string;
  children: React.Node;
  action?: null | undefined | React.Node;
}>;
declare function LogBoxInspectorSection(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxInspectorSection;
export default $f2tExportDefault;