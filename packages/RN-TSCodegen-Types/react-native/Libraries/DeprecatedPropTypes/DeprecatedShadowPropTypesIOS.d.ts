import { React$PropType$Primitive } from "flow2dts-flow-types-polyfill";
import $1 from "../../TypeScriptSupplementals/DeprecatedColorPropType";
import $2 from "prop-types";
declare var DeprecatedShadowPropTypesIOS:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  shadowColor: typeof $1;
  shadowOffset: React$PropType$Primitive<{
    height?: number;
    width?: number;
  }>;
  shadowOpacity: typeof $2.number;
  shadowRadius: typeof $2.number;
};
declare const $f2tExportDefault: typeof DeprecatedShadowPropTypesIOS;
export default $f2tExportDefault;