// @flow
import * as React from "react";
import { CodeFrame } from "../Data/parseLogBoxLog";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  codeFrame?: null | undefined | CodeFrame;
}>;
declare function LogBoxInspectorCodeFrame(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxInspectorCodeFrame;
export default $f2tExportDefault;