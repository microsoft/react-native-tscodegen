// @flow
declare function elementsThatOverlapOffsets(offsets: number[], itemCount: number, getFrameMetrics: (index: number) => {
  length: number;
  offset: number;
}): number[];
declare function newRangeCount(prev: {
  first: number;
  last: number;
}, next: {
  first: number;
  last: number;
}): number;
declare function computeWindowedRenderLimits(props: {
  data: any;
  getItemCount: (data: any) => number;
  maxToRenderPerBatch: number;
  windowSize: number;
}, prev: {
  first: number;
  last: number;
}, getFrameMetricsApprox: (index: number) => {
  length: number;
  offset: number;
}, scrollMetrics: {
  dt: number;
  offset: number;
  velocity: number;
  visibleLength: number;
}): {
  first: number;
  last: number;
};
declare var VirtualizeUtils:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  computeWindowedRenderLimits: typeof computeWindowedRenderLimits;
  elementsThatOverlapOffsets: typeof elementsThatOverlapOffsets;
  newRangeCount: typeof newRangeCount;
};
declare const $f2tExportDefault: typeof VirtualizeUtils;
export default $f2tExportDefault;