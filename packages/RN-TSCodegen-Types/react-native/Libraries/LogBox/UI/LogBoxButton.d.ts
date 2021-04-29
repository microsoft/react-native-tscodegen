// @flow
import * as React from "react";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { PressEvent } from "../../Types/CoreEventTypes";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  backgroundColor: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    default: string;
    pressed: string;
  }>;
  children?: React.Node;
  hitSlop?: null | undefined | EdgeInsetsProp;
  onPress?: null | undefined | ((event: PressEvent) => void);
  style?: ViewStyleProp;
}>;
declare function LogBoxButton(props: Props): React.Node;
declare const $f2tExportDefault: typeof LogBoxButton;
export default $f2tExportDefault;