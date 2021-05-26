import { $ElementType, $Keys } from "utility-types";
import $1 from "./flattenStyle";
import { ____ColorValue_Internal } from "./StyleSheetTypes";
import { ____Styles_Internal } from "./StyleSheetTypes";
import { ____DangerouslyImpreciseStyle_Internal } from "./StyleSheetTypes";
import { ____DangerouslyImpreciseStyleProp_Internal } from "./StyleSheetTypes";
import { ____ViewStyle_Internal } from "./StyleSheetTypes";
import { ____ViewStyleProp_Internal } from "./StyleSheetTypes";
import { ____TextStyle_Internal } from "./StyleSheetTypes";
import { ____TextStyleProp_Internal } from "./StyleSheetTypes";
import { ____ImageStyle_Internal } from "./StyleSheetTypes";
import { ____ImageStyleProp_Internal } from "./StyleSheetTypes";
declare type ColorValue = ____ColorValue_Internal;
declare type ViewStyleProp = ____ViewStyleProp_Internal;
declare type TextStyleProp = ____TextStyleProp_Internal;
declare type ImageStyleProp = ____ImageStyleProp_Internal;
declare type DangerouslyImpreciseStyleProp = ____DangerouslyImpreciseStyleProp_Internal;
declare type TypeForStyleKey<
/*[FLOW2DTS - Warning] Covariance and contravariance are ignored.*/
key extends $Keys<____DangerouslyImpreciseStyle_Internal>> = $ElementType<____DangerouslyImpreciseStyle_Internal, key>;
declare type ViewStyle = ____ViewStyle_Internal;
declare type TextStyle = ____TextStyle_Internal;
declare type ImageStyle = ____ImageStyle_Internal;
declare type DangerouslyImpreciseStyle = ____DangerouslyImpreciseStyle_Internal;
declare var hairlineWidth: number;
declare var absoluteFill:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  position: string;
  left: number;
  right: number;
  top: number;
  bottom: number;
};
export type { ColorValue };
export type { ViewStyleProp };
export type { TextStyleProp };
export type { ImageStyleProp };
export type { DangerouslyImpreciseStyleProp };
export type { TypeForStyleKey };
export type { ViewStyle };
export type { TextStyle };
export type { ImageStyle };
export type { DangerouslyImpreciseStyle };
declare const $f2d_absoluteFill: any;
declare const $f2d_compose: <T extends DangerouslyImpreciseStyleProp>(style1?: null | undefined | T, style2?: null | undefined | T) => (null | undefined | T) | ReadonlyArray<T>;
declare const $f2d_flatten: typeof $1;
declare const $f2d_setStyleAttributePreprocessor: (property: string, process: (nextProp: unknown) => unknown) => void;
declare const $f2d_create: <
/*[FLOW2DTS - Warning] Covariance and contravariance are ignored.*/
S extends ____Styles_Internal>(obj: S) => Readonly<S>;
export { hairlineWidth, $f2d_absoluteFill as absoluteFill, absoluteFill as absoluteFillObject, $f2d_compose as compose, $f2d_flatten as flatten, $f2d_setStyleAttributePreprocessor as setStyleAttributePreprocessor, $f2d_create as create };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * This is defined as the width of a thin line on the platform. It can be
   * used as the thickness of a border or division between two elements.
   * Example:
   * ```
   *   {
   *     borderBottomColor: '#bbb',
   *     borderBottomWidth: StyleSheet.hairlineWidth
   *   }
   * ```
   *
   * This constant will always be a round number of pixels (so a line defined
   * by it look crisp) and will try to match the standard width of a thin line
   * on the underlying platform. However, you should not rely on it being a
   * constant size, because on different platforms and screen densities its
   * value may be calculated differently.
   *
   * A line with hairline width may not be visible if your simulator is downscaled.
   */
  hairlineWidth: typeof hairlineWidth;

  /**
   * A very common pattern is to create overlays with position absolute and zero positioning,
   * so `absoluteFill` can be used for convenience and to reduce duplication of these repeated
   * styles.
   */
  absoluteFill: any;

  /**
   * Sometimes you may want `absoluteFill` but with a couple tweaks - `absoluteFillObject` can be
   * used to create a customized entry in a `StyleSheet`, e.g.:
   *
   *   const styles = StyleSheet.create({
   *     wrapper: {
   *       ...StyleSheet.absoluteFillObject,
   *       top: 10,
   *       backgroundColor: 'transparent',
   *     },
   *   });
   */
  absoluteFillObject: typeof absoluteFill;

  /**
   * Combines two styles such that `style2` will override any styles in `style1`.
   * If either style is falsy, the other one is returned without allocating an
   * array, saving allocations and maintaining reference equality for
   * PureComponent checks.
   */
  compose: <T extends DangerouslyImpreciseStyleProp>(style1?: null | undefined | T, style2?: null | undefined | T) => (null | undefined | T) | ReadonlyArray<T>;

  /**
   * Flattens an array of style objects, into one aggregated style object.
   * Alternatively, this method can be used to lookup IDs, returned by
   * StyleSheet.register.
   *
   * > **NOTE**: Exercise caution as abusing this can tax you in terms of
   * > optimizations.
   * >
   * > IDs enable optimizations through the bridge and memory in general. Referring
   * > to style objects directly will deprive you of these optimizations.
   *
   * Example:
   * ```
   * const styles = StyleSheet.create({
   *   listItem: {
   *     flex: 1,
   *     fontSize: 16,
   *     color: 'white'
   *   },
   *   selectedListItem: {
   *     color: 'green'
   *   }
   * });
   *
   * StyleSheet.flatten([styles.listItem, styles.selectedListItem])
   * // returns { flex: 1, fontSize: 16, color: 'green' }
   * ```
   * Alternative use:
   * ```
   * StyleSheet.flatten(styles.listItem);
   * // return { flex: 1, fontSize: 16, color: 'white' }
   * // Simply styles.listItem would return its ID (number)
   * ```
   * This method internally uses `StyleSheetRegistry.getStyleByID(style)`
   * to resolve style objects represented by IDs. Thus, an array of style
   * objects (instances of StyleSheet.create), are individually resolved to,
   * their respective objects, merged as one and then returned. This also explains
   * the alternative use.
   */
  flatten: typeof $1;

  /**
   * WARNING: EXPERIMENTAL. Breaking changes will probably happen a lot and will
   * not be reliably announced. The whole thing might be deleted, who knows? Use
   * at your own risk.
   *
   * Sets a function to use to pre-process a style property value. This is used
   * internally to process color and transform values. You should not use this
   * unless you really know what you are doing and have exhausted other options.
   */
  setStyleAttributePreprocessor: (property: string, process: (nextProp: unknown) => unknown) => void;

  /**
   * Creates a StyleSheet style reference from the given object.
   */
  create: <S extends ____Styles_Internal>(obj: S) => Readonly<S>;
};
export default $f2tExportDefault;