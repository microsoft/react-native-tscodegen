// @flow
import { SyntheticEvent } from "../../Types/CoreEventTypes";
declare type AccessibilityRole = "none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "imagebutton" | "header" | "summary" | "alert" | "checkbox" | "combobox" | "menu" | "menubar" | "menuitem" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "switch" | "tab" | "tablist" | "timer" | "toolbar";
declare type AccessibilityActionInfo = Readonly<{
  name: string;
  label?: string;
}>;
declare type AccessibilityActionEvent = SyntheticEvent<Readonly<{
  actionName: string;
}>>;
declare type AccessibilityState = {
  disabled?: boolean;
  selected?: boolean;
  checked?: (null | undefined | boolean) | "mixed";
  busy?: boolean;
  expanded?: boolean;
};
declare type AccessibilityValue = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * The minimum value of this component's range. (should be an integer)
  */
  min?: number;

  /**
  * The maximum value of this component's range. (should be an integer)
  */
  max?: number;

  /**
  * The current value of this component's range. (should be an integer)
  */
  now?: number;

  /**
  * A textual description of this component's value. (will override minimum, current, and maximum if set)
  */
  text?: string;
}>;
export type { AccessibilityRole };
export type { AccessibilityActionInfo };
export type { AccessibilityActionEvent };
export type { AccessibilityState };
export type { AccessibilityValue };