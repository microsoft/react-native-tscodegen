import { Stringish } from "flow2dts-flow-types-polyfill";
// @flow
import Pressability from "../../Pressability/Pressability";
import { AccessibilityActionEvent } from "../../Components/View/ViewAccessibility";
import { AccessibilityActionInfo } from "../../Components/View/ViewAccessibility";
import { AccessibilityRole } from "../../Components/View/ViewAccessibility";
import { AccessibilityState } from "../../Components/View/ViewAccessibility";
import { AccessibilityValue } from "../../Components/View/ViewAccessibility";
import { EdgeInsetsProp } from "../../StyleSheet/EdgeInsetsPropType";
import { BlurEvent } from "../../Types/CoreEventTypes";
import { FocusEvent } from "../../Types/CoreEventTypes";
import { LayoutEvent } from "../../Types/CoreEventTypes";
import { PressEvent } from "../../Types/CoreEventTypes";
import * as React from "react";
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  accessibilityActions?: null | undefined | ReadonlyArray<AccessibilityActionInfo>;
  accessibilityElementsHidden?: null | undefined | boolean;
  accessibilityHint?: null | undefined | Stringish;
  accessibilityIgnoresInvertColors?: null | undefined | boolean;
  accessibilityLabel?: null | undefined | Stringish;
  accessibilityLiveRegion?: null | undefined | ("none" | "polite" | "assertive");
  accessibilityRole?: null | undefined | AccessibilityRole;
  accessibilityState?: null | undefined | AccessibilityState;
  accessibilityValue?: null | undefined | AccessibilityValue;
  accessibilityViewIsModal?: null | undefined | boolean;
  accessible?: null | undefined | boolean;
  children?: null | undefined | React.Node;
  delayLongPress?: null | undefined | number;
  delayPressIn?: null | undefined | number;
  delayPressOut?: null | undefined | number;
  disabled?: null | undefined | boolean;
  focusable?: null | undefined | boolean;
  hitSlop?: null | undefined | EdgeInsetsProp;
  importantForAccessibility?: null | undefined | ("auto" | "yes" | "no" | "no-hide-descendants");
  nativeID?: null | undefined | string;
  onAccessibilityAction?: null | undefined | ((event: AccessibilityActionEvent) => unknown);
  onBlur?: null | undefined | ((event: BlurEvent) => unknown);
  onFocus?: null | undefined | ((event: FocusEvent) => unknown);
  onLayout?: null | undefined | ((event: LayoutEvent) => unknown);
  onLongPress?: null | undefined | ((event: PressEvent) => unknown);
  onPress?: null | undefined | ((event: PressEvent) => unknown);
  onPressIn?: null | undefined | ((event: PressEvent) => unknown);
  onPressOut?: null | undefined | ((event: PressEvent) => unknown);
  pressRetentionOffset?: null | undefined | EdgeInsetsProp;
  rejectResponderTermination?: null | undefined | boolean;
  testID?: null | undefined | string;
  touchSoundDisabled?: null | undefined | boolean;
}>;
declare type State = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  pressability: typeof Pressability;
}>;
declare class TouchableWithoutFeedback extends React.Component<Props, State> {
  state: State;
  render(): React.Node;
  componentDidMount(): void;
  componentDidUpdate(): void;
  componentWillUnmount(): void;
}
export default TouchableWithoutFeedback;