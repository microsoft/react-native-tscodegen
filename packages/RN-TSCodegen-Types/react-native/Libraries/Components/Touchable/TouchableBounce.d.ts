import { $Diff } from "utility-types";
// @flow
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import TouchableWithoutFeedback$f2tTypeof from "./TouchableWithoutFeedback";
declare type TouchableWithoutFeedback = typeof TouchableWithoutFeedback$f2tTypeof;
import * as Animated from "../../Animated/src/Animated";
import * as React from "react";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
React.ElementConfig<TouchableWithoutFeedback> & {
  onPressAnimationComplete?: null | undefined | (() => void);
  onPressWithCompletion?: null | undefined | ((callback: () => void) => void);
  releaseBounciness?: null | undefined | number;
  releaseVelocity?: null | undefined | number;
  style?: null | undefined | ViewStyleProp;
  hostRef: React.Ref<typeof Animated.View>;
}>;
declare const $f2tExportDefault: React.ComponentType<Readonly<$Diff<Props,
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  hostRef: unknown;
}>>>;
export default $f2tExportDefault;