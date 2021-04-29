import { React$PropType$Primitive, ReactPropsCheckType } from "flow2dts-flow-types-polyfill";
// @flow
declare var TransformMatrixPropType: (props: Object, propName: string, componentName: string) => null | undefined | Error;
declare var DecomposedMatrixPropType: (props: Object, propName: string, componentName: string) => null | undefined | Error;
declare var DeprecatedTransformPropTypes:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  transform: React$PropType$Primitive<({
    perspective?: number;
  } | {
    rotate?: string;
  } | {
    rotateX?: string;
  } | {
    rotateY?: string;
  } | {
    rotateZ?: string;
  } | {
    scale?: number;
  } | {
    scaleX?: number;
  } | {
    scaleY?: number;
  } | {
    translateX?: number;
  } | {
    translateY?: number;
  } | {
    skewX?: string;
  } | {
    skewY?: string;
  })[]>;
  transformMatrix: typeof TransformMatrixPropType;
  decomposedMatrix: typeof DecomposedMatrixPropType;
  scaleX: ReactPropsCheckType;
  scaleY: ReactPropsCheckType;
  rotation: ReactPropsCheckType;
  translateX: ReactPropsCheckType;
  translateY: ReactPropsCheckType;
};
declare const $f2tExportDefault: typeof DeprecatedTransformPropTypes;
export default $f2tExportDefault;