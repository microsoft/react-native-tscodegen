import { React$PropType$Primitive } from "flow2dts-flow-types-polyfill";
import $1 from "./DeprecatedColorPropType";
import $2 from "./DeprecatedLayoutPropTypes";
import $3 from "./DeprecatedShadowPropTypesIOS";
import $4 from "./DeprecatedTransformPropTypes";
import $5 from "prop-types";
declare var DeprecatedViewStylePropTypes:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
typeof $2 & typeof $3 & typeof $4 & {
  backfaceVisibility: React$PropType$Primitive<"visible" | "hidden">;
  backgroundColor: typeof $1;
  borderColor: typeof $1;
  borderTopColor: typeof $1;
  borderRightColor: typeof $1;
  borderBottomColor: typeof $1;
  borderLeftColor: typeof $1;
  borderStartColor: typeof $1;
  borderEndColor: typeof $1;
  borderRadius: typeof $5.number;
  borderTopLeftRadius: typeof $5.number;
  borderTopRightRadius: typeof $5.number;
  borderTopStartRadius: typeof $5.number;
  borderTopEndRadius: typeof $5.number;
  borderBottomLeftRadius: typeof $5.number;
  borderBottomRightRadius: typeof $5.number;
  borderBottomStartRadius: typeof $5.number;
  borderBottomEndRadius: typeof $5.number;
  borderStyle: React$PropType$Primitive<"solid" | "dotted" | "dashed">;
  borderWidth: typeof $5.number;
  borderTopWidth: typeof $5.number;
  borderRightWidth: typeof $5.number;
  borderBottomWidth: typeof $5.number;
  borderLeftWidth: typeof $5.number;
  opacity: typeof $5.number;

  /**
   * (Android-only) Sets the elevation of a view, using Android's underlying
   * [elevation API](https://developer.android.com/training/material/shadows-clipping.html#Elevation).
   * This adds a drop shadow to the item and affects z-order for overlapping views.
   * Only supported on Android 5.0+, has no effect on earlier versions.
   * @platform android
   */
  elevation: typeof $5.number;
};
declare const $f2tExportDefault: typeof DeprecatedViewStylePropTypes;
export default $f2tExportDefault;