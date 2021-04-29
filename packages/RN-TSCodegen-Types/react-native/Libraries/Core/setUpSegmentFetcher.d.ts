// @flow
declare type FetchSegmentFunction = typeof __fetchSegment;
declare type GetSegmentFunction = typeof __getSegment;
declare function __fetchSegment(segmentId: number, options:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly otaBuildNumber?: null | undefined | string;
  readonly requestedModuleName?: null | undefined | string;
}, callback: ($f2t1?: null | undefined | Error) => void): void;
declare function __getSegment(segmentId: number, options:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly otaBuildNumber?: null | undefined | string;
  readonly requestedModuleName?: null | undefined | string;
}, callback: ($f2t1?: null | undefined | Error, $f2t2?: null | undefined | string) => void): void;
export type { FetchSegmentFunction };
export type { GetSegmentFunction };