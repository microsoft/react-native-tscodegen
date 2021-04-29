import { $Diff } from "utility-types";
// @flow
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import TouchableWithoutFeedback$f2tTypeof from "./TouchableWithoutFeedback";
declare type TouchableWithoutFeedback = typeof TouchableWithoutFeedback$f2tTypeof;
import View from "../../Components/View/View";
import * as React from "react";
declare type AndroidProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  nextFocusDown?: null | undefined | number;
  nextFocusForward?: null | undefined | number;
  nextFocusLeft?: null | undefined | number;
  nextFocusRight?: null | undefined | number;
  nextFocusUp?: null | undefined | number;
}>;
declare type IOSProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  hasTVPreferredFocus?: null | undefined | boolean;
}>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
React.ElementConfig<TouchableWithoutFeedback> & AndroidProps & IOSProps & {
  activeOpacity?: null | undefined | number;
  underlayColor?: null | undefined | ColorValue;
  style?: null | undefined | ViewStyleProp;
  onShowUnderlay?: null | undefined | (() => void);
  onHideUnderlay?: null | undefined | (() => void);
  testOnly_pressed?: null | undefined | boolean;
  hostRef: React.Ref<typeof View>;
}>;
declare const $f2tExportDefault: React.ComponentType<Readonly<$Diff<Props,
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  hostRef: unknown;
}>>>;
export default $f2tExportDefault;