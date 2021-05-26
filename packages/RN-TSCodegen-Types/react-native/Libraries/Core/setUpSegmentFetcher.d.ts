// @flow
declare type FetchSegmentFunction = typeof __fetchSegment;
declare type GetSegmentFunction = typeof __getSegment;
declare function __fetchSegment(segmentId: number, options: Readonly<{
  otaBuildNumber?: null | undefined | string;
  requestedModuleName: string;
  segmentHash: string;
}>, callback: ($f2t1?: null | undefined | Error) => void): void;
declare function __getSegment(segmentId: number, options: Readonly<{
  otaBuildNumber?: null | undefined | string;
  requestedModuleName: string;
  segmentHash: string;
}>, callback: ($f2t1?: null | undefined | Error, $f2t2?: null | undefined | string) => void): void;
export type { FetchSegmentFunction };
export type { GetSegmentFunction };