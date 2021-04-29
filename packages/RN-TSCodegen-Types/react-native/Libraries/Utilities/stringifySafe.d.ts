// @flow
declare function createStringifySafeWithLimits(limits:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  maxDepth?: number;
  maxStringLimit?: number;
  maxArrayLimit?: number;
  maxObjectKeysLimit?: number;
}): ($f2t1: unknown) => string;
declare var stringifySafe: ($f2t1: unknown) => string;
export { createStringifySafeWithLimits };
declare const $f2tExportDefault: typeof stringifySafe;
export default $f2tExportDefault;