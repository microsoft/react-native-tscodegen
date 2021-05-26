import $1 from "../../DeprecatedPropTypes/DeprecatedImageStylePropTypes";
import $2 from "../../DeprecatedPropTypes/DeprecatedTextStylePropTypes";
import $3 from "../../DeprecatedPropTypes/DeprecatedViewStylePropTypes";
import $4 from "../../StyleSheet/processColor";
import $5 from "../../StyleSheet/processTransform";
import $6 from "../../../TypeScriptSupplementals/sizesDiffer";
declare type ReturnBoolType = <V>($f2t1: V) => true;
declare type BoolifiedDeprecatedViewStylePropTypes =
/*[FLOW2DTS - Warning] This type was a $ObjMap type in the original Flow source.*/
{ [K in keyof typeof $3]: ReturnType<ReturnBoolType> };
declare type BoolifiedDeprecatedTextStylePropTypes =
/*[FLOW2DTS - Warning] This type was a $ObjMap type in the original Flow source.*/
{ [K in keyof typeof $2]: ReturnType<ReturnBoolType> };
declare type BoolifiedDeprecatedImageStylePropTypes =
/*[FLOW2DTS - Warning] This type was a $ObjMap type in the original Flow source.*/
{ [K in keyof typeof $1]: ReturnType<ReturnBoolType> };
declare type StyleAttributesType = BoolifiedDeprecatedViewStylePropTypes & BoolifiedDeprecatedTextStylePropTypes & BoolifiedDeprecatedImageStylePropTypes & {
  transform: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    process: typeof $5;
  }> | true;
  shadowOffset: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    diff: typeof $6;
  }> | true;
  backgroundColor: typeof colorAttributes | true;
  borderBottomColor: typeof colorAttributes | true;
  borderColor: typeof colorAttributes | true;
  borderLeftColor: typeof colorAttributes | true;
  borderRightColor: typeof colorAttributes | true;
  borderTopColor: typeof colorAttributes | true;
  borderStartColor: typeof colorAttributes | true;
  borderEndColor: typeof colorAttributes | true;
  color: typeof colorAttributes | true;
  shadowColor: typeof colorAttributes | true;
  textDecorationColor: typeof colorAttributes | true;
  tintColor: typeof colorAttributes | true;
  textShadowColor: typeof colorAttributes | true;
  overlayColor: typeof colorAttributes | true;
};
declare var ReactNativeStyleAttributes: StyleAttributesType;
declare var colorAttributes:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  process: typeof $4;
};
declare const $f2tExportDefault: typeof ReactNativeStyleAttributes;
export default $f2tExportDefault;