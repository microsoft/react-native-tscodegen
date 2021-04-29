// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getCurrentBoldTextState: (onSuccess: (isBoldTextEnabled: boolean) => void, onError: (error: Object) => void) => void;
  readonly getCurrentGrayscaleState: (onSuccess: (isGrayscaleEnabled: boolean) => void, onError: (error: Object) => void) => void;
  readonly getCurrentInvertColorsState: (onSuccess: (isInvertColorsEnabled: boolean) => void, onError: (error: Object) => void) => void;
  readonly getCurrentReduceMotionState: (onSuccess: (isReduceMotionEnabled: boolean) => void, onError: (error: Object) => void) => void;
  readonly getCurrentReduceTransparencyState: (onSuccess: (isReduceTransparencyEnabled: boolean) => void, onError: (error: Object) => void) => void;
  readonly getCurrentVoiceOverState: (onSuccess: (isScreenReaderEnabled: boolean) => void, onError: (error: Object) => void) => void;
  readonly setAccessibilityContentSizeMultipliers: (JSMultipliers:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly extraSmall?: null | undefined | number;
    readonly small?: null | undefined | number;
    readonly medium?: null | undefined | number;
    readonly large?: null | undefined | number;
    readonly extraLarge?: null | undefined | number;
    readonly extraExtraLarge?: null | undefined | number;
    readonly extraExtraExtraLarge?: null | undefined | number;
    readonly accessibilityMedium?: null | undefined | number;
    readonly accessibilityLarge?: null | undefined | number;
    readonly accessibilityExtraLarge?: null | undefined | number;
    readonly accessibilityExtraExtraLarge?: null | undefined | number;
    readonly accessibilityExtraExtraExtraLarge?: null | undefined | number;
  }) => void;
  readonly setAccessibilityFocus: (reactTag: number) => void;
  readonly announceForAccessibility: (announcement: string) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;