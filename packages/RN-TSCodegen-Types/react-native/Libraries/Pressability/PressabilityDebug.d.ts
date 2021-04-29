// @flow
import { ColorValue } from "../StyleSheet/StyleSheetTypes";
import * as React from "react";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  color: ColorValue;
  hitSlop?: null | undefined | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    bottom?: null | undefined | number;
    left?: null | undefined | number;
    right?: null | undefined | number;
    top?: null | undefined | number;
  }>;
}>;
declare function PressabilityDebugView($f2t1: Props): React.Node;
declare function isEnabled(): boolean;
export { PressabilityDebugView };
export { isEnabled };