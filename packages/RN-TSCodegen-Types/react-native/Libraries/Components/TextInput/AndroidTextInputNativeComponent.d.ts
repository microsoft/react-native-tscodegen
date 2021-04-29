import { $Diff } from "utility-types";
// @flow
import { ViewProps } from "../View/ViewPropTypes";
import { BubblingEventHandler } from "../../Types/CodegenTypes";
import { DirectEventHandler } from "../../Types/CodegenTypes";
import { Double } from "../../Types/CodegenTypes";
import { Float } from "../../Types/CodegenTypes";
import { Int32 } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { TextStyleProp } from "../../StyleSheet/StyleSheet";
import { ViewStyleProp } from "../../StyleSheet/StyleSheet";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
import { TextInputNativeCommands } from "./TextInputNativeCommands";
declare type KeyboardType = // Cross Platform
"default" | "email-address" | "numeric" | "phone-pad" | "number-pad" | "decimal-pad" // iOS-only
| "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search" // Android-only
| "visible-password";
declare type ReturnKeyType = // Cross Platform
"done" | "go" | "next" | "search" | "send" // Android-only
| "none" | "previous" // iOS-only
| "default" | "emergency-call" | "google" | "join" | "route" | "yahoo";
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
$Diff<ViewProps, Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  style?: null | undefined | ViewStyleProp;
}>> & {
  /**
  * Android props after this
  */

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
  autoCompleteType?: WithDefault<"cc-csc" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-number" | "email" | "name" | "password" | "postal-code" | "street-address" | "tel" | "username" | "off", "off">;

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
  numberOfLines?: null | undefined | Int32;

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
  textBreakStrategy?: WithDefault<"simple" | "highQuality" | "balanced", "simple">;

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
  inlineImagePadding?: null | undefined | Int32;
  importantForAutofill?: string;
  /*?(
  | 'auto'
  | 'no'
  | 'noExcludeDescendants'
  | 'yes'
  | 'yesExcludeDescendants'
  ),*/

  /**
  * When `false`, it will prevent the soft keyboard from showing when the field is focused.
  * Defaults to `true`.
  * @platform android
  */
  showSoftInputOnFocus?: null | undefined | boolean;

  /**
  * TextInput props after this
  */

  /**
  * Can tell `TextInput` to automatically capitalize certain characters.
  *
  * - `characters`: all characters.
  * - `words`: first letter of each word.
  * - `sentences`: first letter of each sentence (*default*).
  * - `none`: don't auto capitalize anything.
  */
  autoCapitalize?: WithDefault<"none" | "sentences" | "words" | "characters", "none">;

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
  maxFontSizeMultiplier?: null | undefined | Float;

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
  * *Android Only*
  *
  * The following values work on Android only:
  *
  * - `visible-password`
  */
  keyboardType?: WithDefault<KeyboardType, "default">;

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
  */
  returnKeyType?: WithDefault<ReturnKeyType, "done">;

  /**
  * Limits the maximum number of characters that can be entered. Use this
  * instead of implementing the logic in JS to avoid flicker.
  */
  maxLength?: null | undefined | Int32;

  /**
  * If `true`, the text input can be multiple lines.
  * The default value is `false`.
  */
  multiline?: null | undefined | boolean;

  /**
  * Callback that is called when the text input is blurred.
  * `target` is the reactTag of the element
  */
  onBlur?: null | undefined | BubblingEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
  }>>;

  /**
  * Callback that is called when the text input is focused.
  * `target` is the reactTag of the element
  */
  onFocus?: null | undefined | BubblingEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
  }>>;

  /**
  * Callback that is called when the text input's text changes.
  * `target` is the reactTag of the element
  * TODO: differentiate between onChange and onChangeText
  */
  onChange?: null | undefined | BubblingEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
    eventCount: Int32;
    text: string;
  }>>;

  /**
  * Callback that is called when the text input's text changes.
  * Changed text is passed as an argument to the callback handler.
  * TODO: differentiate between onChange and onChangeText
  */
  onChangeText?: null | undefined | BubblingEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
    eventCount: Int32;
    text: string;
  }>>;

  /**
  * Callback that is called when the text input's content size changes.
  * This will be called with
  * `{ nativeEvent: { contentSize: { width, height } } }`.
  *
  * Only called for multiline text inputs.
  */
  onContentSizeChange?: null | undefined | DirectEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
    contentSize: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      width: Double;
      height: Double;
    }>;
  }>>;
  onTextInput?: null | undefined | BubblingEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
    text: string;
    previousText: string;
    range: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      start: Double;
      end: Double;
    }>;
  }>>;

  /**
  * Callback that is called when text input ends.
  */
  onEndEditing?: null | undefined | BubblingEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
    text: string;
  }>>;

  /**
  * Callback that is called when the text input selection is changed.
  * This will be called with
  * `{ nativeEvent: { selection: { start, end } } }`.
  */
  onSelectionChange?: null | undefined | DirectEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
    selection: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      start: Double;
      end: Double;
    }>;
  }>>;

  /**
  * Callback that is called when the text input's submit button is pressed.
  * Invalid if `multiline={true}` is specified.
  */
  onSubmitEditing?: null | undefined | BubblingEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
    text: string;
  }>>;

  /**
  * Callback that is called when a key is pressed.
  * This will be called with `{ nativeEvent: { key: keyValue } }`
  * where `keyValue` is `'Enter'` or `'Backspace'` for respective keys and
  * the typed-in character otherwise including `' '` for space.
  * Fires before `onChange` callbacks.
  */
  onKeyPress?: null | undefined | BubblingEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
    key: string;
  }>>;

  /**
  * Invoked on content scroll with `{ nativeEvent: { contentOffset: { x, y } } }`.
  * May also contain other properties from ScrollEvent but on Android contentSize
  * is not provided for performance reasons.
  */
  onScroll?: null | undefined | DirectEventHandler<Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    target: Int32;
    responderIgnoreScroll: boolean;
    contentInset: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      top: Double; // always 0 on Android

      bottom: Double; // always 0 on Android

      left: Double; // always 0 on Android

      right: Double; // always 0 on Android

    }>;
    contentOffset: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      x: Double;
      y: Double;
    }>;
    contentSize: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      width: Double; // always 0 on Android

      height: Double; // always 0 on Android

    }>;
    layoutMeasurement: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      width: Double;
      height: Double;
    }>;
    velocity: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      x: Double; // always 0 on Android

      y: Double; // always 0 on Android

    }>;
  }>>;

  /**
  * The string that will be rendered before text input has been entered.
  */
  placeholder?: null | undefined | string;

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
    start: Int32;
    end?: null | undefined | Int32;
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
  value?: null | undefined | string;

  /**
  * Provides an initial value that will change when the user starts typing.
  * Useful for simple use-cases where you do not want to deal with listening
  * to events and updating the value prop to keep the controlled state in sync.
  */
  defaultValue?: null | undefined | string;

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
  // TODO: figure out what to do with this style prop for codegen/Fabric purposes
  // This must be commented for Fabric codegen to work; it's currently not possible
  // to override the default View style prop in codegen.
  style?: null | undefined | TextStyleProp;

  /**
  * If `true`, caret is hidden. The default value is `false`.
  * This property is supported only for single-line TextInput component on iOS.
  */
  caretHidden?: null | undefined | boolean;

  /*
  * If `true`, contextMenuHidden is hidden. The default value is `false`.
  */
  contextMenuHidden?: null | undefined | boolean;

  /**
  * The following are props that `BaseTextShadowNode` takes. It is unclear if they
  * are used by TextInput.
  */
  textShadowColor?: null | undefined | ColorValue;
  textShadowRadius?: null | undefined | Float;
  textDecorationLine?: null | undefined | string;
  fontStyle?: null | undefined | string;
  textShadowOffset?: null | undefined | Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    width?: null | undefined | Double;
    height?: null | undefined | Double;
  }>;
  lineHeight?: null | undefined | Float;
  textTransform?: null | undefined | string;
  color?: null | undefined | Int32;
  letterSpacing?: null | undefined | Float;
  fontSize?: null | undefined | Float;
  textAlign?: null | undefined | string;
  includeFontPadding?: null | undefined | boolean;
  fontWeight?: null | undefined | string;
  fontFamily?: null | undefined | string;

  /**
  * I cannot find where these are defined but JS complains without them.
  */
  textAlignVertical?: null | undefined | string;
  cursorColor?: null | undefined | ColorValue;

  /**
  * "Private" fields used by TextInput.js and not users of this component directly
  */
  mostRecentEventCount: Int32;
  text?: null | undefined | string;
}>;
declare type NativeType = HostComponent<NativeProps>;
declare type NativeCommands = TextInputNativeCommands<NativeType>;
declare var Commands: NativeCommands;
export type { KeyboardType };
export type { ReturnKeyType };
export type { NativeProps };
export { Commands };
declare const $f2tExportDefault: HostComponent<NativeProps>;
export default $f2tExportDefault;