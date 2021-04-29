import { React$PropType$Primitive, ReactPropsCheckType } from "flow2dts-flow-types-polyfill";
import $1 from "./DeprecatedColorPropType";
import $2 from "./DeprecatedViewPropTypes";
import $3 from "prop-types";
import $4 from "../Text/Text";
declare const $f2d_autoCapitalize: React$PropType$Primitive<"none" | "sentences" | "words" | "characters">;
declare const $f2d_autoCompleteType: React$PropType$Primitive<"cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off">;
declare const $f2d_autoCorrect: typeof $3.bool;
declare const $f2d_spellCheck: typeof $3.bool;
declare const $f2d_autoFocus: typeof $3.bool;
declare const $f2d_allowFontScaling: typeof $3.bool;
declare const $f2d_maxFontSizeMultiplier: typeof $3.number;
declare const $f2d_editable: typeof $3.bool;
declare const $f2d_keyboardType: React$PropType$Primitive<"default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search" | "ascii-capable-number-pad" | "visible-password">;
declare const $f2d_keyboardAppearance: React$PropType$Primitive<"default" | "light" | "dark">;
declare const $f2d_returnKeyType: React$PropType$Primitive<"done" | "go" | "next" | "search" | "send" | "none" | "previous" | "default" | "emergency-call" | "google" | "join" | "route" | "yahoo">;
declare const $f2d_returnKeyLabel: typeof $3.string;
declare const $f2d_maxLength: typeof $3.number;
declare const $f2d_numberOfLines: typeof $3.number;
declare const $f2d_disableFullscreenUI: typeof $3.bool;
declare const $f2d_enablesReturnKeyAutomatically: typeof $3.bool;
declare const $f2d_multiline: typeof $3.bool;
declare const $f2d_textBreakStrategy: React$PropType$Primitive<"simple" | "highQuality" | "balanced">;
declare const $f2d_onBlur: typeof $3.func;
declare const $f2d_onFocus: typeof $3.func;
declare const $f2d_onChange: typeof $3.func;
declare const $f2d_onChangeText: typeof $3.func;
declare const $f2d_onContentSizeChange: typeof $3.func;
declare const $f2d_onTextInput: typeof $3.func;
declare const $f2d_onEndEditing: typeof $3.func;
declare const $f2d_onSelectionChange: typeof $3.func;
declare const $f2d_onSubmitEditing: typeof $3.func;
declare const $f2d_onKeyPress: typeof $3.func;
declare const $f2d_onLayout: typeof $3.func;
declare const $f2d_onScroll: typeof $3.func;
declare const $f2d_placeholder: typeof $3.string;
declare const $f2d_placeholderTextColor: typeof $1;
declare const $f2d_scrollEnabled: typeof $3.bool;
declare const $f2d_secureTextEntry: typeof $3.bool;
declare const $f2d_selectionColor: typeof $1;
declare const $f2d_selection: React$PropType$Primitive<{
  end?: number;
  start: number;
}>;
declare const $f2d_value: typeof $3.string;
declare const $f2d_defaultValue: typeof $3.string;
declare const $f2d_clearButtonMode: React$PropType$Primitive<"never" | "while-editing" | "unless-editing" | "always">;
declare const $f2d_clearTextOnFocus: typeof $3.bool;
declare const $f2d_selectTextOnFocus: typeof $3.bool;
declare const $f2d_blurOnSubmit: typeof $3.bool;
declare const $f2d_style: ReactPropsCheckType;
declare const $f2d_underlineColorAndroid: typeof $1;
declare const $f2d_inlineImageLeft: typeof $3.string;
declare const $f2d_inlineImagePadding: typeof $3.number;
declare const $f2d_rejectResponderTermination: typeof $3.bool;
declare const $f2d_dataDetectorTypes: React$PropType$Primitive<"phoneNumber" | "link" | "address" | "calendarEvent" | "none" | "all" | ("phoneNumber" | "link" | "address" | "calendarEvent" | "none" | "all")[]>;
declare const $f2d_caretHidden: typeof $3.bool;
declare const $f2d_contextMenuHidden: typeof $3.bool;
declare const $f2d_inputAccessoryViewID: typeof $3.string;
declare const $f2d_textContentType: React$PropType$Primitive<"none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password" | "newPassword" | "oneTimeCode">;
declare const $f2d_showSoftInputOnFocus: typeof $3.bool;
export { $f2d_autoCapitalize as autoCapitalize, $f2d_autoCompleteType as autoCompleteType, $f2d_autoCorrect as autoCorrect, $f2d_spellCheck as spellCheck, $f2d_autoFocus as autoFocus, $f2d_allowFontScaling as allowFontScaling, $f2d_maxFontSizeMultiplier as maxFontSizeMultiplier, $f2d_editable as editable, $f2d_keyboardType as keyboardType, $f2d_keyboardAppearance as keyboardAppearance, $f2d_returnKeyType as returnKeyType, $f2d_returnKeyLabel as returnKeyLabel, $f2d_maxLength as maxLength, $f2d_numberOfLines as numberOfLines, $f2d_disableFullscreenUI as disableFullscreenUI, $f2d_enablesReturnKeyAutomatically as enablesReturnKeyAutomatically, $f2d_multiline as multiline, $f2d_textBreakStrategy as textBreakStrategy, $f2d_onBlur as onBlur, $f2d_onFocus as onFocus, $f2d_onChange as onChange, $f2d_onChangeText as onChangeText, $f2d_onContentSizeChange as onContentSizeChange, $f2d_onTextInput as onTextInput, $f2d_onEndEditing as onEndEditing, $f2d_onSelectionChange as onSelectionChange, $f2d_onSubmitEditing as onSubmitEditing, $f2d_onKeyPress as onKeyPress, $f2d_onLayout as onLayout, $f2d_onScroll as onScroll, $f2d_placeholder as placeholder, $f2d_placeholderTextColor as placeholderTextColor, $f2d_scrollEnabled as scrollEnabled, $f2d_secureTextEntry as secureTextEntry, $f2d_selectionColor as selectionColor, $f2d_selection as selection, $f2d_value as value, $f2d_defaultValue as defaultValue, $f2d_clearButtonMode as clearButtonMode, $f2d_clearTextOnFocus as clearTextOnFocus, $f2d_selectTextOnFocus as selectTextOnFocus, $f2d_blurOnSubmit as blurOnSubmit, $f2d_style as style, $f2d_underlineColorAndroid as underlineColorAndroid, $f2d_inlineImageLeft as inlineImageLeft, $f2d_inlineImagePadding as inlineImagePadding, $f2d_rejectResponderTermination as rejectResponderTermination, $f2d_dataDetectorTypes as dataDetectorTypes, $f2d_caretHidden as caretHidden, $f2d_contextMenuHidden as contextMenuHidden, $f2d_inputAccessoryViewID as inputAccessoryViewID, $f2d_textContentType as textContentType, $f2d_showSoftInputOnFocus as showSoftInputOnFocus };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
typeof $2 & {
  /**
   * Can tell `TextInput` to automatically capitalize certain characters.
   *
   * - `characters`: all characters.
   * - `words`: first letter of each word.
   * - `sentences`: first letter of each sentence (*default*).
   * - `none`: don't auto capitalize anything.
   */
  autoCapitalize: React$PropType$Primitive<"none" | "sentences" | "words" | "characters">;

  /**
   * Determines which content to suggest on auto complete, e.g.`username`.
   * To disable auto complete, use `off`.
   *
   * *Android Only*
   *
   * The following values work on Android only:
   *
   * - `username`
   * - `password`
   * - `email`
   * - `name`
   * - `tel`
   * - `street-address`
   * - `postal-code`
   * - `cc-number`
   * - `cc-csc`
   * - `cc-exp`
   * - `cc-exp-month`
   * - `cc-exp-year`
   * - `off`
   *
   * @platform android
   */
  autoCompleteType: React$PropType$Primitive<"cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off">;

  /**
   * If `false`, disables auto-correct. The default value is `true`.
   */
  autoCorrect: typeof $3.bool;

  /**
   * If `false`, disables spell-check style (i.e. red underlines).
   * The default value is inherited from `autoCorrect`.
   * @platform ios
   */
  spellCheck: typeof $3.bool;

  /**
   * If `true`, focuses the input on `componentDidMount`.
   * The default value is `false`.
   */
  autoFocus: typeof $3.bool;

  /**
   * Specifies whether fonts should scale to respect Text Size accessibility settings. The
   * default is `true`.
   */
  allowFontScaling: typeof $3.bool;

  /**
   * Specifies largest possible scale a font can reach when `allowFontScaling` is enabled.
   * Possible values:
   * `null/undefined` (default): inherit from the parent node or the global default (0)
   * `0`: no max, ignore parent/global default
   * `>= 1`: sets the maxFontSizeMultiplier of this node to this value
   */
  maxFontSizeMultiplier: typeof $3.number;

  /**
   * If `false`, text is not editable. The default value is `true`.
   */
  editable: typeof $3.bool;

  /**
   * Determines which keyboard to open, e.g.`numeric`.
   *
   * The following values work across platforms:
   *
   * - `default`
   * - `numeric`
   * - `number-pad`
   * - `decimal-pad`
   * - `email-address`
   * - `phone-pad`
   *
   * *iOS Only*
   *
   * The following values work on iOS only:
   *
   * - `ascii-capable`
   * - `numbers-and-punctuation`
   * - `url`
   * - `name-phone-pad`
   * - `twitter`
   * - `web-search`
   * - `ascii-capable-number-pad`
   *
   * *Android Only*
   *
   * The following values work on Android only:
   *
   * - `visible-password`
   */
  keyboardType: React$PropType$Primitive<"default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "decimal-pad" | "twitter" | "web-search" | "ascii-capable-number-pad" | "visible-password">;

  /**
   * Determines the color of the keyboard.
   * @platform ios
   */
  keyboardAppearance: React$PropType$Primitive<"default" | "light" | "dark">;

  /**
   * Determines how the return key should look. On Android you can also use
   * `returnKeyLabel`.
   *
   * *Cross platform*
   *
   * The following values work across platforms:
   *
   * - `done`
   * - `go`
   * - `next`
   * - `search`
   * - `send`
   *
   * *Android Only*
   *
   * The following values work on Android only:
   *
   * - `none`
   * - `previous`
   *
   * *iOS Only*
   *
   * The following values work on iOS only:
   *
   * - `default`
   * - `emergency-call`
   * - `google`
   * - `join`
   * - `route`
   * - `yahoo`
   */
  returnKeyType: React$PropType$Primitive<"done" | "go" | "next" | "search" | "send" | "none" | "previous" | "default" | "emergency-call" | "google" | "join" | "route" | "yahoo">;

  /**
   * Sets the return key to the label. Use it instead of `returnKeyType`.
   * @platform android
   */
  returnKeyLabel: typeof $3.string;

  /**
   * Limits the maximum number of characters that can be entered. Use this
   * instead of implementing the logic in JS to avoid flicker.
   */
  maxLength: typeof $3.number;

  /**
   * Sets the number of lines for a `TextInput`. Use it with multiline set to
   * `true` to be able to fill the lines.
   * @platform android
   */
  numberOfLines: typeof $3.number;

  /**
   * When `false`, if there is a small amount of space available around a text input
   * (e.g. landscape orientation on a phone), the OS may choose to have the user edit
   * the text inside of a full screen text input mode. When `true`, this feature is
   * disabled and users will always edit the text directly inside of the text input.
   * Defaults to `false`.
   * @platform android
   */
  disableFullscreenUI: typeof $3.bool;

  /**
   * If `true`, the keyboard disables the return key when there is no text and
   * automatically enables it when there is text. The default value is `false`.
   * @platform ios
   */
  enablesReturnKeyAutomatically: typeof $3.bool;

  /**
   * If `true`, the text input can be multiple lines.
   * The default value is `false`.
   */
  multiline: typeof $3.bool;

  /**
   * Set text break strategy on Android API Level 23+, possible values are `simple`, `highQuality`, `balanced`
   * The default value is `simple`.
   * @platform android
   */
  textBreakStrategy: React$PropType$Primitive<"simple" | "highQuality" | "balanced">;

  /**
   * Callback that is called when the text input is blurred.
   */
  onBlur: typeof $3.func;

  /**
   * Callback that is called when the text input is focused.
   */
  onFocus: typeof $3.func;

  /**
   * Callback that is called when the text input's text changes.
   */
  onChange: typeof $3.func;

  /**
   * Callback that is called when the text input's text changes.
   * Changed text is passed as an argument to the callback handler.
   */
  onChangeText: typeof $3.func;

  /**
   * Callback that is called when the text input's content size changes.
   * This will be called with
   * `{ nativeEvent: { contentSize: { width, height } } }`.
   *
   * Only called for multiline text inputs.
   */
  onContentSizeChange: typeof $3.func;
  onTextInput: typeof $3.func;

  /**
   * Callback that is called when text input ends.
   */
  onEndEditing: typeof $3.func;

  /**
   * Callback that is called when the text input selection is changed.
   * This will be called with
   * `{ nativeEvent: { selection: { start, end } } }`.
   */
  onSelectionChange: typeof $3.func;

  /**
   * Callback that is called when the text input's submit button is pressed.
   * Invalid if `multiline={true}` is specified.
   */
  onSubmitEditing: typeof $3.func;

  /**
   * Callback that is called when a key is pressed.
   * This will be called with `{ nativeEvent: { key: keyValue } }`
   * where `keyValue` is `'Enter'` or `'Backspace'` for respective keys and
   * the typed-in character otherwise including `' '` for space.
   * Fires before `onChange` callbacks.
   */
  onKeyPress: typeof $3.func;

  /**
   * Invoked on mount and layout changes with `{x, y, width, height}`.
   */
  onLayout: typeof $3.func;

  /**
   * Invoked on content scroll with `{ nativeEvent: { contentOffset: { x, y } } }`.
   * May also contain other properties from ScrollEvent but on Android contentSize
   * is not provided for performance reasons.
   */
  onScroll: typeof $3.func;

  /**
   * The string that will be rendered before text input has been entered.
   */
  placeholder: typeof $3.string;

  /**
   * The text color of the placeholder string.
   */
  placeholderTextColor: typeof $1;

  /**
   * If `false`, scrolling of the text view will be disabled.
   * The default value is `true`. Does only work with 'multiline={true}'.
   * @platform ios
   */
  scrollEnabled: typeof $3.bool;

  /**
   * If `true`, the text input obscures the text entered so that sensitive text
   * like passwords stay secure. The default value is `false`. Does not work with 'multiline={true}'.
   */
  secureTextEntry: typeof $3.bool;

  /**
   * The highlight and cursor color of the text input.
   */
  selectionColor: typeof $1;

  /**
   * The start and end of the text input's selection. Set start and end to
   * the same value to position the cursor.
   */
  selection: React$PropType$Primitive<{
    end?: number;
    start: number;
  }>;

  /**
   * The value to show for the text input. `TextInput` is a controlled
   * component, which means the native value will be forced to match this
   * value prop if provided. For most uses, this works great, but in some
   * cases this may cause flickering - one common cause is preventing edits
   * by keeping value the same. In addition to simply setting the same value,
   * either set `editable={false}`, or set/update `maxLength` to prevent
   * unwanted edits without flicker.
   */
  value: typeof $3.string;

  /**
   * Provides an initial value that will change when the user starts typing.
   * Useful for simple use-cases where you do not want to deal with listening
   * to events and updating the value prop to keep the controlled state in sync.
   */
  defaultValue: typeof $3.string;

  /**
   * When the clear button should appear on the right side of the text view.
   * This property is supported only for single-line TextInput component.
   * @platform ios
   */
  clearButtonMode: React$PropType$Primitive<"never" | "while-editing" | "unless-editing" | "always">;

  /**
   * If `true`, clears the text field automatically when editing begins.
   * @platform ios
   */
  clearTextOnFocus: typeof $3.bool;

  /**
   * If `true`, all text will automatically be selected on focus.
   */
  selectTextOnFocus: typeof $3.bool;

  /**
   * If `true`, the text field will blur when submitted.
   * The default value is true for single-line fields and false for
   * multiline fields. Note that for multiline fields, setting `blurOnSubmit`
   * to `true` means that pressing return will blur the field and trigger the
   * `onSubmitEditing` event instead of inserting a newline into the field.
   */
  blurOnSubmit: typeof $3.bool;

  /**
   * Note that not all Text styles are supported, an incomplete list of what is not supported includes:
   *
   * - `borderLeftWidth`
   * - `borderTopWidth`
   * - `borderRightWidth`
   * - `borderBottomWidth`
   * - `borderTopLeftRadius`
   * - `borderTopRightRadius`
   * - `borderBottomRightRadius`
   * - `borderBottomLeftRadius`
   *
   * see [Issue#7070](https://github.com/facebook/react-native/issues/7070)
   * for more detail.
   *
   * [Styles](docs/style.html)
   */
  style: ReactPropsCheckType;

  /**
   * The color of the `TextInput` underline.
   * @platform android
   */
  underlineColorAndroid: typeof $1;

  /**
   * If defined, the provided image resource will be rendered on the left.
   * The image resource must be inside `/android/app/src/main/res/drawable` and referenced
   * like
   * ```
   * <TextInput
   *  inlineImageLeft='search_icon'
   * />
   * ```
   * @platform android
   */
  inlineImageLeft: typeof $3.string;

  /**
   * Padding between the inline image, if any, and the text input itself.
   * @platform android
   */
  inlineImagePadding: typeof $3.number;

  /**
   * If `true`, allows TextInput to pass touch events to the parent component.
   * This allows components such as SwipeableListView to be swipeable from the TextInput on iOS,
   * as is the case on Android by default.
   * If `false`, TextInput always asks to handle the input (except when disabled).
   * @platform ios
   */
  rejectResponderTermination: typeof $3.bool;

  /**
   * Determines the types of data converted to clickable URLs in the text input.
   * Only valid if `multiline={true}` and `editable={false}`.
   * By default no data types are detected.
   *
   * You can provide one type or an array of many types.
   *
   * Possible values for `dataDetectorTypes` are:
   *
   * - `'phoneNumber'`
   * - `'link'`
   * - `'address'`
   * - `'calendarEvent'`
   * - `'none'`
   * - `'all'`
   *
   * @platform ios
   */
  dataDetectorTypes: React$PropType$Primitive<"phoneNumber" | "link" | "address" | "calendarEvent" | "none" | "all" | ("phoneNumber" | "link" | "address" | "calendarEvent" | "none" | "all")[]>;

  /**
   * If `true`, caret is hidden. The default value is `false`.
   * This property is supported only for single-line TextInput component on iOS.
   */
  caretHidden: typeof $3.bool;

  /*
   * If `true`, contextMenuHidden is hidden. The default value is `false`.
   */
  contextMenuHidden: typeof $3.bool;

  /**
   * An optional identifier which links a custom InputAccessoryView to
   * this text input. The InputAccessoryView is rendered above the
   * keyboard when this text input is focused.
   * @platform ios
   */
  inputAccessoryViewID: typeof $3.string;

  /**
   * Give the keyboard and the system information about the
   * expected semantic meaning for the content that users enter.
   * @platform ios
   */
  textContentType: React$PropType$Primitive<"none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password" | "newPassword" | "oneTimeCode">;

  /**
   * When `false`, it will prevent the soft keyboard from showing when the field is focused.
   * Defaults to `true`.
   * @platform android
   */
  showSoftInputOnFocus: typeof $3.bool;
};
export default $f2tExportDefault;