import $3 from "react";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheet";
declare type PickerItemProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Text to display for this item.
  */
  label: string;

  /**
  * The value to be passed to picker's `onValueChange` callback when
  * this item is selected.
  */
  value?: null | undefined | string;

  /**
  * Color of this item's text.
  * @platform android
  */
  color?: ColorValue;

  /**
  * Used to locate the item in end-to-end tests.
  */
  testID?: string;
}>;
declare class PickerItem extends $3.Component<PickerItemProps> {
  render(): never;
}
declare type PickerProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  children?: $3.Node;
  style?: null | undefined | TextStyleProp;

  /**
  * Value matching value of one of the items.
  */
  selectedValue?: null | undefined | string;

  /**
  * Callback for when an item is selected. This is called with the following parameters:
  *   - `itemValue`: the `value` prop of the item that was selected
  *   - `itemIndex`: the index of the selected item in this picker
  */
  onValueChange?: null | undefined | ((itemValue: string | number, itemIndex: number) => unknown);

  /**
  * If set to false, the picker will be disabled, i.e. the user will not be able to make a
  * selection.
  * @platform android
  */
  enabled?: null | undefined | boolean;

  /**
  * On Android, specifies how to display the selection items when the user taps on the picker:
  *
  *   - 'dialog': Show a modal dialog. This is the default.
  *   - 'dropdown': Shows a dropdown anchored to the picker view
  *
  * @platform android
  */
  mode?: null | undefined | ("dialog" | "dropdown");

  /**
  * Style to apply to each of the item labels.
  * @platform ios
  */
  itemStyle?: null | undefined | TextStyleProp;

  /**
  * Color of the item background.
  * @platform android
  */
  backgroundColor?: ColorValue;

  /**
  * Prompt string for this picker, used on Android in dialog mode as the title of the dialog.
  * @platform android
  */
  prompt?: null | undefined | string;

  /**
  * Used to locate this view in end-to-end tests.
  */
  testID?: null | undefined | string;

  /**
  * The string used for the accessibility label. Will be read once focused on the picker but not on change.
  */
  accessibilityLabel?: null | undefined | string;
}>;
declare class Picker extends $3.Component<PickerProps> {
  static MODE_DIALOG: string;
  static MODE_DROPDOWN: string;
  static Item: PickerItem;
  static defaultProps:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    mode: string;
  };
  render(): $3.Node;
}
export type { PickerItem };
export default Picker;