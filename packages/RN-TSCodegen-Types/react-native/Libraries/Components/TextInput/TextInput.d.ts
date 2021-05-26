import { Stringish } from "flow2dts-flow-types-polyfill";
import { $Diff } from "utility-types";
import $1 from "../../DeprecatedPropTypes/DeprecatedTextInputPropTypes";
import $2 from "react";
import $3 from "./TextInputState";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheet";
import { ViewProps } from "../View/ViewPropTypes";
import { SyntheticEvent } from "../../Types/CoreEventTypes";
import { ScrollEvent } from "../../Types/CoreEventTypes";
import { PressEvent } from "../../Types/CoreEventTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
declare type ReactRefSetter<T> = {
  current: null | T;
} | ((ref: null | T) => unknown);
declare type ChangeEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  eventCount: number;
  target: number;
  text: string;
}>>;
declare type TextInputEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  eventCount: number;
  previousText: string;
  range: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    start: number;
    end: number;
  }>;
  target: number;
  text: string;
}>>;
declare type ContentSizeChangeEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  target: number;
  contentSize: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    width: number;
    height: number;
  }>;
}>>;
declare type TargetEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  target: number;
}>>;
declare type BlurEvent = TargetEvent;
declare type FocusEvent = TargetEvent;
declare type Selection = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  start: number;
  end: number;
}>;
declare type SelectionChangeEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  selection: Selection;
  target: number;
}>>;
declare type KeyPressEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  key: string;
  target?: null | undefined | number;
  eventCount?: null | undefined | number;
}>>;
declare type EditingEvent = SyntheticEvent<Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  eventCount: number;
  text: string;
  target: number;
}>>;
declare type DataDetectorTypesType = "phoneNumber" | "link" | "address" | "calendarEvent" | "none" | "all";
declare type KeyboardType = // Cross Platform
"default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" // iOS-only
| "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" // iOS 10+ only
| "ascii-capable-number-pad" // Android-only
| "visible-password";
declare type ReturnKeyType = // Cross Platform
"done" | "go" | "next" | "search" | "send" // Android-only
| "none" | "previous" // iOS-only
| "default" | "emergency-call" | "google" | "join" | "route" | "yahoo";
declare type AutoCapitalize = "none" | "sentences" | "words" | "characters";
declare type TextContentType = "none" | "URL" | "addressCity" | "addressCityAndState" | "addressState" | "countryName" | "creditCardNumber" | "emailAddress" | "familyName" | "fullStreetAddress" | "givenName" | "jobTitle" | "location" | "middleName" | "name" | "namePrefix" | "nameSuffix" | "nickname" | "organizationName" | "postalCode" | "streetAddressLine1" | "streetAddressLine2" | "sublocality" | "telephoneNumber" | "username" | "password" | "newPassword" | "oneTimeCode";
declare type PasswordRules = string;
declare type IOSProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * If `false`, disables spell-check style (i.e. red underlines).
  * The default value is inherited from `autoCorrect`.
  * @platform ios
  */
  spellCheck?: null | undefined | boolean;

  /**
  * Determines the color of the keyboard.
  * @platform ios
  */
  keyboardAppearance?: null | undefined | ("default" | "light" | "dark");

  /**
  * If `true`, the keyboard disables the return key when there is no text and
  * automatically enables it when there is text. The default value is `false`.
  * @platform ios
  */
  enablesReturnKeyAutomatically?: null | undefined | boolean;

  /**
  * When the clear button should appear on the right side of the text view.
  * This property is supported only for single-line TextInput component.
  * @platform ios
  */
  clearButtonMode?: null | undefined | ("never" | "while-editing" | "unless-editing" | "always");

  /**
  * If `true`, clears the text field automatically when editing begins.
  * @platform ios
  */
  clearTextOnFocus?: null | undefined | boolean;

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
  dataDetectorTypes?: (null | undefined | DataDetectorTypesType) | ReadonlyArray<DataDetectorTypesType>;

  /**
  * An optional identifier which links a custom InputAccessoryView to
  * this text input. The InputAccessoryView is rendered above the
  * keyboard when this text input is focused.
  * @platform ios
  */
  inputAccessoryViewID?: null | undefined | string;

  /**
  * Give the keyboard and the system information about the
  * expected semantic meaning for the content that users enter.
  * @platform ios
  */
  textContentType?: null | undefined | TextContentType;

  /**
  * Provide rules for your password.
  * For example, say you want to require a password with at least eight characters consisting of a mix of uppercase and lowercase letters, at least one number, and at most two consecutive characters.
  * "required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
  * @platform ios
  */
  passwordRules?: null | undefined | PasswordRules;

  /*
  * If `true`, allows TextInput to pass touch events to the parent component.
  * This allows components to be swipeable from the TextInput on iOS,
  * as is the case on Android by default.
  * If `false`, TextInput always asks to handle the input (except when disabled).
  * @platform ios
  */
  rejectResponderTermination?: null | undefined | boolean;

  /**
  * If `false`, scrolling of the text view will be disabled.
  * The default value is `true`. Does only work with 'multiline={true}'.
  * @platform ios
  */
  scrollEnabled?: null | undefined | boolean;
}>;
declare type AndroidProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
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
  autoCompleteType?: null | undefined | ("cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off");

  /**
  * Sets the return key to the label. Use it instead of `returnKeyType`.
  * @platform android
  */
  returnKeyLabel?: null | undefined | string;

  /**
  * Sets the number of lines for a `TextInput`. Use it with multiline set to
  * `true` to be able to fill the lines.
  * @platform android
  */
  numberOfLines?: null | undefined | number;

  /**
  * When `false`, if there is a small amount of space available around a text input
  * (e.g. landscape orientation on a phone), the OS may choose to have the user edit
  * the text inside of a full screen text input mode. When `true`, this feature is
  * disabled and users will always edit the text directly inside of the text input.
  * Defaults to `false`.
  * @platform android
  */
  disableFullscreenUI?: null | undefined | boolean;

  /**
  * Set text break strategy on Android API Level 23+, possible values are `simple`, `highQuality`, `balanced`
  * The default value is `simple`.
  * @platform android
  */
  textBreakStrategy?: null | undefined | ("simple" | "highQuality" | "balanced");

  /**
  * The color of the `TextInput` underline.
  * @platform android
  */
  underlineColorAndroid?: null | undefined | ColorValue;

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
  inlineImageLeft?: null | undefined | string;

  /**
  * Padding between the inline image, if any, and the text input itself.
  * @platform android
  */
  inlineImagePadding?: null | undefined | number;
  importantForAutofill?: null | undefined | ("auto" | "no" | "noExcludeDescendants" | "yes" | "yesExcludeDescendants");

  /**
  * When `false`, it will prevent the soft keyboard from showing when the field is focused.
  * Defaults to `true`.
  */
  showSoftInputOnFocus?: null | undefined | boolean;
}>;
declare type Props = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
$Diff<ViewProps, Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  style?: null | undefined | ViewStyleProp;
}>> & IOSProps & AndroidProps & {
  /**
  * Can tell `TextInput` to automatically capitalize certain characters.
  *
  * - `characters`: all characters.
  * - `words`: first letter of each word.
  * - `sentences`: first letter of each sentence (*default*).
  * - `none`: don't auto capitalize anything.
  */
  autoCapitalize?: null | undefined | AutoCapitalize;

  /**
  * If `false`, disables auto-correct. The default value is `true`.
  */
  autoCorrect?: null | undefined | boolean;

  /**
  * If `true`, focuses the input on `componentDidMount`.
  * The default value is `false`.
  */
  autoFocus?: null | undefined | boolean;

  /**
  * Specifies whether fonts should scale to respect Text Size accessibility settings. The
  * default is `true`.
  */
  allowFontScaling?: null | undefined | boolean;

  /**
  * Specifies largest possible scale a font can reach when `allowFontScaling` is enabled.
  * Possible values:
  * `null/undefined` (default): inherit from the parent node or the global default (0)
  * `0`: no max, ignore parent/global default
  * `>= 1`: sets the maxFontSizeMultiplier of this node to this value
  */
  maxFontSizeMultiplier?: null | undefined | number;

  /**
  * If `false`, text is not editable. The default value is `true`.
  */
  editable?: null | undefined | boolean;

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
  *
  * *Android Only*
  *
  * The following values work on Android only:
  *
  * - `visible-password`
  *
  */
  keyboardType?: null | undefined | KeyboardType;

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
  returnKeyType?: null | undefined | ReturnKeyType;

  /**
  * Limits the maximum number of characters that can be entered. Use this
  * instead of implementing the logic in JS to avoid flicker.
  */
  maxLength?: null | undefined | number;

  /**
  * If `true`, the text input can be multiple lines.
  * The default value is `false`.
  */
  multiline?: null | undefined | boolean;

  /**
  * Callback that is called when the text input is blurred.
  */
  onBlur?: null | undefined | ((e: BlurEvent) => unknown);

  /**
  * Callback that is called when the text input is focused.
  */
  onFocus?: null | undefined | ((e: FocusEvent) => unknown);

  /**
  * Callback that is called when the text input's text changes.
  */
  onChange?: null | undefined | ((e: ChangeEvent) => unknown);

  /**
  * Callback that is called when the text input's text changes.
  * Changed text is passed as an argument to the callback handler.
  */
  onChangeText?: null | undefined | ((text: string) => unknown);

  /**
  * Callback that is called when the text input's content size changes.
  * This will be called with
  * `{ nativeEvent: { contentSize: { width, height } } }`.
  *
  * Only called for multiline text inputs.
  */
  onContentSizeChange?: null | undefined | ((e: ContentSizeChangeEvent) => unknown);

  /**
  * Callback that is called when text input ends.
  */
  onEndEditing?: null | undefined | ((e: EditingEvent) => unknown);

  /**
  * Called when a touch is engaged.
  */
  onPressIn?: null | undefined | ((event: PressEvent) => unknown);

  /**
  * Called when a touch is released.
  */
  onPressOut?: null | undefined | ((event: PressEvent) => unknown);

  /**
  * Callback that is called when the text input selection is changed.
  * This will be called with
  * `{ nativeEvent: { selection: { start, end } } }`.
  */
  onSelectionChange?: null | undefined | ((e: SelectionChangeEvent) => unknown);

  /**
  * Callback that is called when the text input's submit button is pressed.
  * Invalid if `multiline={true}` is specified.
  */
  onSubmitEditing?: null | undefined | ((e: EditingEvent) => unknown);

  /**
  * Callback that is called when a key is pressed.
  * This will be called with `{ nativeEvent: { key: keyValue } }`
  * where `keyValue` is `'Enter'` or `'Backspace'` for respective keys and
  * the typed-in character otherwise including `' '` for space.
  * Fires before `onChange` callbacks.
  */
  onKeyPress?: null | undefined | ((e: KeyPressEvent) => unknown);

  /**
  * Invoked on content scroll with `{ nativeEvent: { contentOffset: { x, y } } }`.
  * May also contain other properties from ScrollEvent but on Android contentSize
  * is not provided for performance reasons.
  */
  onScroll?: null | undefined | ((e: ScrollEvent) => unknown);

  /**
  * The string that will be rendered before text input has been entered.
  */
  placeholder?: null | undefined | Stringish;

  /**
  * The text color of the placeholder string.
  */
  placeholderTextColor?: null | undefined | ColorValue;

  /**
  * If `true`, the text input obscures the text entered so that sensitive text
  * like passwords stay secure. The default value is `false`. Does not work with 'multiline={true}'.
  */
  secureTextEntry?: null | undefined | boolean;

  /**
  * The highlight and cursor color of the text input.
  */
  selectionColor?: null | undefined | ColorValue;

  /**
  * The start and end of the text input's selection. Set start and end to
  * the same value to position the cursor.
  */
  selection?: null | undefined | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    start: number;
    end?: null | undefined | number;
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
  value?: null | undefined | Stringish;

  /**
  * Provides an initial value that will change when the user starts typing.
  * Useful for simple use-cases where you do not want to deal with listening
  * to events and updating the value prop to keep the controlled state in sync.
  */
  defaultValue?: null | undefined | Stringish;

  /**
  * If `true`, all text will automatically be selected on focus.
  */
  selectTextOnFocus?: null | undefined | boolean;

  /**
  * If `true`, the text field will blur when submitted.
  * The default value is true for single-line fields and false for
  * multiline fields. Note that for multiline fields, setting `blurOnSubmit`
  * to `true` means that pressing return will blur the field and trigger the
  * `onSubmitEditing` event instead of inserting a newline into the field.
  */
  blurOnSubmit?: null | undefined | boolean;

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
  style?: null | undefined | TextStyleProp;

  /**
  * If `true`, caret is hidden. The default value is `false`.
  *
  * On Android devices manufactured by Xiaomi with Android Q,
  * when keyboardType equals 'email-address'this will be set
  * in native to 'true' to prevent a system related crash. This
  * will cause cursor to be diabled as a side-effect.
  *
  */
  caretHidden?: null | undefined | boolean;

  /*
  * If `true`, contextMenuHidden is hidden. The default value is `false`.
  */
  contextMenuHidden?: null | undefined | boolean;
  forwardedRef?: null | undefined | ReactRefSetter<$2.ElementRef<HostComponent<{}>> & ImperativeMethods>;
}>;
declare type ImperativeMethods = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  clear: () => void;
  isFocused: () => boolean;
  getNativeRef: () => null | undefined | $2.ElementRef<HostComponent<{}>>;
}>;
declare function InternalTextInput(props: Props): $2.Element<Props>;
declare type TextInputComponentStatics = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  State: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    currentlyFocusedInput: typeof $3.currentlyFocusedInput;
    currentlyFocusedField: typeof $3.currentlyFocusedField;
    focusTextInput: typeof $3.focusTextInput;
    blurTextInput: typeof $3.blurTextInput;
  }>;
}>;
export type { ChangeEvent };
export type { TextInputEvent };
export type { ContentSizeChangeEvent };
export type { BlurEvent };
export type { FocusEvent };
export type { SelectionChangeEvent };
export type { KeyPressEvent };
export type { EditingEvent };
export type { KeyboardType };
export type { ReturnKeyType };
export type { AutoCapitalize };
export type { TextContentType };
export type { Props };
declare const $f2tExportDefault: $2.AbstractComponent<$2.ElementConfig<typeof InternalTextInput>, Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
$2.ElementRef<HostComponent<{}>> & ImperativeMethods & {}>> & TextInputComponentStatics;
export default $f2tExportDefault;