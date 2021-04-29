import { Stringish } from "flow2dts-flow-types-polyfill";
import { $ElementType } from "utility-types";
// @flow
import * as React from "react";
import { RippleConfig } from "./useAndroidRippleForView";
import { AccessibilityActionEvent } from "../View/ViewAccessibility";
import { AccessibilityActionInfo } from "../View/ViewAccessibility";
import { AccessibilityRole } from "../View/ViewAccessibility";
import { AccessibilityState } from "../View/ViewAccessibility";
import { AccessibilityValue } from "../View/ViewAccessibility";
import { RectOrSize } from "../../StyleSheet/Rect";
import { LayoutEvent } from "../../Types/CoreEventTypes";
import { PressEvent } from "../../Types/CoreEventTypes";
import View from "../View/View";
declare type ViewStyleProp = $ElementType<React.ElementConfig<typeof View>, "style">;
declare type StateCallbackType = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  pressed: boolean;
}>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Accessibility.
  */
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
  focusable?: null | undefined | boolean;
  importantForAccessibility?: null | undefined | ("auto" | "yes" | "no" | "no-hide-descendants");
  onAccessibilityAction?: null | undefined | ((event: AccessibilityActionEvent) => unknown);

  /**
  * Either children or a render prop that receives a boolean reflecting whether
  * the component is currently pressed.
  */
  children: React.Node | ((state: StateCallbackType) => React.Node);

  /**
  * Duration (in milliseconds) from `onPressIn` before `onLongPress` is called.
  */
  delayLongPress?: null | undefined | number;

  /**
  * Whether the press behavior is disabled.
  */
  disabled?: null | undefined | boolean;

  /**
  * Additional distance outside of this view in which a press is detected.
  */
  hitSlop?: null | undefined | RectOrSize;

  /**
  * Additional distance outside of this view in which a touch is considered a
  * press before `onPressOut` is triggered.
  */
  pressRetentionOffset?: null | undefined | RectOrSize;

  /**
  * Called when this view's layout changes.
  */
  onLayout?: null | undefined | ((event: LayoutEvent) => void);

  /**
  * Called when a long-tap gesture is detected.
  */
  onLongPress?: null | undefined | ((event: PressEvent) => void);

  /**
  * Called when a single tap gesture is detected.
  */
  onPress?: null | undefined | ((event: PressEvent) => void);

  /**
  * Called when a touch is engaged before `onPress`.
  */
  onPressIn?: null | undefined | ((event: PressEvent) => void);

  /**
  * Called when a touch is released before `onPress`.
  */
  onPressOut?: null | undefined | ((event: PressEvent) => void);

  /**
  * Either view styles or a function that receives a boolean reflecting whether
  * the component is currently pressed and returns view styles.
  */
  style?: ViewStyleProp | ((state: StateCallbackType) => ViewStyleProp);

  /**
  * Identifier used to find this view in tests.
  */
  testID?: null | undefined | string;

  /**
  * If true, doesn't play system sound on touch.
  */
  android_disableSound?: null | undefined | boolean;

  /**
  * Enables the Android ripple effect and configures its color.
  */
  android_ripple?: null | undefined | RippleConfig;

  /**
  * Used only for documentation or testing (e.g. snapshot testing).
  */
  testOnly_pressed?: null | undefined | boolean;
}>;
export type { StateCallbackType };
declare const $f2tExportDefault: React.AbstractComponent<Props, React.ElementRef<typeof View>>;
export default $f2tExportDefault;