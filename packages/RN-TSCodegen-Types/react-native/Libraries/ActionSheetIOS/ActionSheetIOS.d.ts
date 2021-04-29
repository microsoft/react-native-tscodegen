// @flow
import { ColorValue } from "../StyleSheet/StyleSheetTypes";
import { ProcessedColorValue } from "../StyleSheet/processColor";
declare var ActionSheetIOS:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * Display an iOS action sheet.
   *
   * The `options` object must contain one or more of:
   *
   * - `options` (array of strings) - a list of button titles (required)
   * - `cancelButtonIndex` (int) - index of cancel button in `options`
   * - `destructiveButtonIndex` (int or array of ints) - index or indices of destructive buttons in `options`
   * - `title` (string) - a title to show above the action sheet
   * - `message` (string) - a message to show below the title
   *
   * The 'callback' function takes one parameter, the zero-based index
   * of the selected item.
   *
   * See https://reactnative.dev/docs/actionsheetios.html#showactionsheetwithoptions
   */
  showActionSheetWithOptions: (options:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly title?: null | undefined | string;
    readonly message?: null | undefined | string;
    readonly options: string[];
    readonly destructiveButtonIndex?: (null | undefined | number) | (null | undefined | number[]);
    readonly cancelButtonIndex?: null | undefined | number;
    readonly anchor?: null | undefined | number;
    readonly tintColor?: ColorValue | ProcessedColorValue;
    readonly userInterfaceStyle?: string;
  }, callback: (buttonIndex: number) => void) => void;

  /**
   * Display the iOS share sheet. The `options` object should contain
   * one or both of `message` and `url` and can additionally have
   * a `subject` or `excludedActivityTypes`:
   *
   * - `url` (string) - a URL to share
   * - `message` (string) - a message to share
   * - `subject` (string) - a subject for the message
   * - `excludedActivityTypes` (array) - the activities to exclude from
   *   the ActionSheet
   * - `tintColor` (color) - tint color of the buttons
   *
   * The 'failureCallback' function takes one parameter, an error object.
   * The only property defined on this object is an optional `stack` property
   * of type `string`.
   *
   * The 'successCallback' function takes two parameters:
   *
   * - a boolean value signifying success or failure
   * - a string that, in the case of success, indicates the method of sharing
   *
   * See https://reactnative.dev/docs/actionsheetios.html#showshareactionsheetwithoptions
   */
  showShareActionSheetWithOptions: (options: Object, failureCallback: Function, successCallback: Function) => void;
};
declare const $f2tExportDefault: typeof ActionSheetIOS;
export default $f2tExportDefault;