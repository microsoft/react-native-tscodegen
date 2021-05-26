import { Stringish } from "flow2dts-flow-types-polyfill";
// @flow
import { LayoutEvent } from "../Types/CoreEventTypes";
import { PressEvent } from "../Types/CoreEventTypes";
import { TextLayoutEvent } from "../Types/CoreEventTypes";
import { Node } from "react";
import { TextStyleProp } from "../StyleSheet/StyleSheet";
import { AccessibilityRole } from "../Components/View/ViewAccessibility";
import { AccessibilityState } from "../Components/View/ViewAccessibility";
declare type PressRetentionOffset = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  top: number;
  left: number;
  bottom: number;
  right: number;
}>;
declare type TextProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
  * Indicates whether the view is an accessibility element.
  *
  * See https://reactnative.dev/docs/text.html#accessible
  */
  accessible?: null | undefined | boolean;
  accessibilityHint?: null | undefined | Stringish;
  accessibilityLabel?: null | undefined | Stringish;
  accessibilityRole?: null | undefined | AccessibilityRole;
  accessibilityState?: null | undefined | AccessibilityState;

  /**
  * Whether font should be scaled down automatically.
  *
  * See https://reactnative.dev/docs/text.html#adjustsfontsizetofit
  */
  adjustsFontSizeToFit?: null | undefined | boolean;

  /**
  * Whether fonts should scale to respect Text Size accessibility settings.
  *
  * See https://reactnative.dev/docs/text.html#allowfontscaling
  */
  allowFontScaling?: null | undefined | boolean;

  /**
  * Set hyphenation strategy on Android.
  *
  */
  android_hyphenationFrequency?: null | undefined | ("normal" | "none" | "full" | "high" | "balanced");
  children?: null | undefined | Node;

  /**
  * When `numberOfLines` is set, this prop defines how text will be
  * truncated.
  *
  * See https://reactnative.dev/docs/text.html#ellipsizemode
  */
  ellipsizeMode?: null | undefined | ("clip" | "head" | "middle" | "tail");

  /**
  * Specifies largest possible scale a font can reach when `allowFontScaling` is enabled.
  * Possible values:
  * `null/undefined` (default): inherit from the parent node or the global default (0)
  * `0`: no max, ignore parent/global default
  * `>= 1`: sets the maxFontSizeMultiplier of this node to this value
  */
  maxFontSizeMultiplier?: null | undefined | number;

  /**
  * Used to locate this view from native code.
  *
  * See https://reactnative.dev/docs/text.html#nativeid
  */
  nativeID?: null | undefined | string;

  /**
  * Used to truncate the text with an ellipsis.
  *
  * See https://reactnative.dev/docs/text.html#numberoflines
  */
  numberOfLines?: null | undefined | number;

  /**
  * Invoked on mount and layout changes.
  *
  * See https://reactnative.dev/docs/text.html#onlayout
  */
  onLayout?: null | undefined | ((event: LayoutEvent) => unknown);

  /**
  * This function is called on long press.
  *
  * See https://reactnative.dev/docs/text.html#onlongpress
  */
  onLongPress?: null | undefined | ((event: PressEvent) => unknown);

  /**
  * This function is called on press.
  *
  * See https://reactnative.dev/docs/text.html#onpress
  */
  onPress?: null | undefined | ((event: PressEvent) => unknown);
  onResponderGrant?: null | undefined | ((event: PressEvent) => void);
  onResponderMove?: null | undefined | ((event: PressEvent) => void);
  onResponderRelease?: null | undefined | ((event: PressEvent) => void);
  onResponderTerminate?: null | undefined | ((event: PressEvent) => void);
  onResponderTerminationRequest?: null | undefined | (() => boolean);
  onStartShouldSetResponder?: null | undefined | (() => boolean);
  onMoveShouldSetResponder?: null | undefined | (() => boolean);
  onTextLayout?: null | undefined | ((event: TextLayoutEvent) => unknown);

  /**
  * Defines how far your touch may move off of the button, before
  * deactivating the button.
  *
  * See https://reactnative.dev/docs/text.html#pressretentionoffset
  */
  pressRetentionOffset?: null | undefined | PressRetentionOffset;

  /**
  * Lets the user select text.
  *
  * See https://reactnative.dev/docs/text.html#selectable
  */
  selectable?: null | undefined | boolean;
  style?: null | undefined | TextStyleProp;

  /**
  * Used to locate this view in end-to-end tests.
  *
  * See https://reactnative.dev/docs/text.html#testid
  */
  testID?: null | undefined | string;

  /**
  * Android Only
  */

  /**
  * Specifies the disabled state of the text view for testing purposes.
  *
  * See https://reactnative.dev/docs/text.html#disabled
  */
  disabled?: null | undefined | boolean;

  /**
  * The highlight color of the text.
  *
  * See https://reactnative.dev/docs/text.html#selectioncolor
  */
  selectionColor?: null | undefined | string;
  dataDetectorType?: null | undefined | ("phoneNumber" | "link" | "email" | "none" | "all");

  /**
  * Set text break strategy on Android.
  *
  * See https://reactnative.dev/docs/text.html#textbreakstrategy
  */
  textBreakStrategy?: null | undefined | ("balanced" | "highQuality" | "simple");

  /**
  * Smallest possible scale a font can reach.
  *
  * See https://reactnative.dev/docs/text.html#minimumfontscale
  */
  minimumFontScale?: null | undefined | number;

  /**
  * When `true`, no visual change is made when text is pressed down.
  *
  * See https://reactnative.dev/docs/text.html#supperhighlighting
  */
  suppressHighlighting?: null | undefined | boolean;
}>;
export type { PressRetentionOffset };
export type { TextProps };