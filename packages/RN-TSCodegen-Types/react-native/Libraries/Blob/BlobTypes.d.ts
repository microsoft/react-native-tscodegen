/*[FLOW2DTS - Warning] This type alias was opaque in the original Flow source.*/
// @flow
declare type BlobCollector = {};
declare type BlobData = {
  blobId: string;
  offset: number;
  size: number;
  name?: string;
  type?: string;
  lastModified?: number;
  __collector?: null | undefined | BlobCollector;
};
declare type BlobOptions = {
  type: string;
  lastModified: number;
};
export type { BlobCollector };
export type { BlobData };
export type { BlobOptions };