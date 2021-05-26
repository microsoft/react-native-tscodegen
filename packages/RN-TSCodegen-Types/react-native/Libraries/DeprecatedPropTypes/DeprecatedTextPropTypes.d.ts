import { React$PropType$Primitive, ReactPropsCheckType } from "flow2dts-flow-types-polyfill";
import $1 from "../../TypeScriptSupplementals/DeprecatedColorPropType";
import $2 from "./DeprecatedEdgeInsetsPropType";
import $3 from "prop-types";
declare var stylePropType: ReactPropsCheckType;
declare const $f2d_ellipsizeMode: React$PropType$Primitive<"head" | "middle" | "tail" | "clip">;
declare const $f2d_numberOfLines: typeof $3.number;
declare const $f2d_textBreakStrategy: React$PropType$Primitive<"simple" | "highQuality" | "balanced">;
declare const $f2d_onLayout: typeof $3.func;
declare const $f2d_onPress: typeof $3.func;
declare const $f2d_onLongPress: typeof $3.func;
declare const $f2d_pressRetentionOffset: typeof $2;
declare const $f2d_selectable: typeof $3.bool;
declare const $f2d_selectionColor: typeof $1;
declare const $f2d_suppressHighlighting: typeof $3.bool;
declare const $f2d_testID: typeof $3.string;
declare const $f2d_nativeID: typeof $3.string;
declare const $f2d_allowFontScaling: typeof $3.bool;
declare const $f2d_maxFontSizeMultiplier: typeof $3.number;
declare const $f2d_accessible: typeof $3.bool;
declare const $f2d_adjustsFontSizeToFit: typeof $3.bool;
declare const $f2d_minimumFontScale: typeof $3.number;
declare const $f2d_disabled: typeof $3.bool;
declare const $f2d_dataDetectorType: React$PropType$Primitive<"phoneNumber" | "link" | "email" | "none" | "all">;
export { $f2d_ellipsizeMode as ellipsizeMode, $f2d_numberOfLines as numberOfLines, $f2d_textBreakStrategy as textBreakStrategy, $f2d_onLayout as onLayout, $f2d_onPress as onPress, $f2d_onLongPress as onLongPress, $f2d_pressRetentionOffset as pressRetentionOffset, $f2d_selectable as selectable, $f2d_selectionColor as selectionColor, $f2d_suppressHighlighting as suppressHighlighting, stylePropType as style, $f2d_testID as testID, $f2d_nativeID as nativeID, $f2d_allowFontScaling as allowFontScaling, $f2d_maxFontSizeMultiplier as maxFontSizeMultiplier, $f2d_accessible as accessible, $f2d_adjustsFontSizeToFit as adjustsFontSizeToFit, $f2d_minimumFontScale as minimumFontScale, $f2d_disabled as disabled, $f2d_dataDetectorType as dataDetectorType };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * When `numberOfLines` is set, this prop defines how text will be
   * truncated.
   *
   * See https://reactnative.dev/docs/text.html#ellipsizemode
   */
  ellipsizeMode: React$PropType$Primitive<"head" | "middle" | "tail" | "clip">;

  /**
   * Used to truncate the text with an ellipsis.
   *
   * See https://reactnative.dev/docs/text.html#numberoflines
   */
  numberOfLines: typeof $3.number;

  /**
   * Set text break strategy on Android.
   *
   * See https://reactnative.dev/docs/text.html#textbreakstrategy
   */
  textBreakStrategy: React$PropType$Primitive<"simple" | "highQuality" | "balanced">;

  /**
   * Invoked on mount and layout changes.
   *
   * See https://reactnative.dev/docs/text.html#onlayout
   */
  onLayout: typeof $3.func;

  /**
   * This function is called on press.
   *
   * See https://reactnative.dev/docs/text.html#onpress
   */
  onPress: typeof $3.func;

  /**
   * This function is called on long press.
   *
   * See https://reactnative.dev/docs/text.html#onlongpress
   */
  onLongPress: typeof $3.func;

  /**
   * Defines how far your touch may move off of the button, before
   * deactivating the button.
   *
   * See https://reactnative.dev/docs/text.html#pressretentionoffset
   */
  pressRetentionOffset: typeof $2;

  /**
   * Lets the user select text.
   *
   * See https://reactnative.dev/docs/text.html#selectable
   */
  selectable: typeof $3.bool;

  /**
   * The highlight color of the text.
   *
   * See https://reactnative.dev/docs/text.html#selectioncolor
   */
  selectionColor: typeof $1;

  /**
   * When `true`, no visual change is made when text is pressed down.
   *
   * See https://reactnative.dev/docs/text.html#supperhighlighting
   */
  suppressHighlighting: typeof $3.bool;
  style: typeof stylePropType;

  /**
   * Used to locate this view in end-to-end tests.
   *
   * See https://reactnative.dev/docs/text.html#testid
   */
  testID: typeof $3.string;

  /**
   * Used to locate this view from native code.
   *
   * See https://reactnative.dev/docs/text.html#nativeid
   */
  nativeID: typeof $3.string;

  /**
   * Whether fonts should scale to respect Text Size accessibility settings.
   *
   * See https://reactnative.dev/docs/text.html#allowfontscaling
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
   * Indicates whether the view is an accessibility element.
   *
   * See https://reactnative.dev/docs/text.html#accessible
   */
  accessible: typeof $3.bool;

  /**
   * Whether font should be scaled down automatically.
   *
   * See https://reactnative.dev/docs/text.html#adjustsfontsizetofit
   */
  adjustsFontSizeToFit: typeof $3.bool;

  /**
   * Smallest possible scale a font can reach.
   *
   * See https://reactnative.dev/docs/text.html#minimumfontscale
   */
  minimumFontScale: typeof $3.number;

  /**
   * Specifies the disabled state of the text view for testing purposes.
   *
   * See https://reactnative.dev/docs/text.html#disabled
   */
  disabled: typeof $3.bool;

  /**
   * Determines the types of data converted to clickable URLs in text.
   *
   * See https://reactnative.dev/docs/text.html#dataDetectorType
   */
  dataDetectorType: React$PropType$Primitive<"phoneNumber" | "link" | "email" | "none" | "all">;
};
export default $f2tExportDefault;