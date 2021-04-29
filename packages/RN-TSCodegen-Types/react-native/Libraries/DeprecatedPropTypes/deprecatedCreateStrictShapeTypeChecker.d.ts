import { ReactPropsChainableTypeChecker, ReactPropsCheckType } from "flow2dts-flow-types-polyfill";
// @flow
declare function deprecatedCreateStrictShapeTypeChecker(shapeTypes: {
  [key: string]: ReactPropsCheckType;
}): ReactPropsChainableTypeChecker;
declare const $f2tExportDefault: typeof deprecatedCreateStrictShapeTypeChecker;
export default $f2tExportDefault;