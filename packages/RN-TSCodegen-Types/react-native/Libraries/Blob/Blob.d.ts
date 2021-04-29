// @flow
import { BlobData } from "./BlobTypes";
import { BlobOptions } from "./BlobTypes";
declare class Blob {
  /**
   * Constructor for JS consumers.
   * Currently we only support creating Blobs from other Blobs.
   * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob
   */
  constructor(parts?: (Blob | string)[], options?: BlobOptions);
  data(data?: null | undefined | BlobData): void;
  data(): BlobData;
  slice(start?: number, end?: number): Blob;

  /**
   * This method is in the standard, but not actually implemented by
   * any browsers at this point. It's important for how Blobs work in
   * React Native, however, since we cannot de-allocate resources automatically,
   * so consumers need to explicitly de-allocate them.
   *
   * Note that the semantics around Blobs created via `blob.slice()`
   * and `new Blob([blob])` are different. `blob.slice()` creates a
   * new *view* onto the same binary data, so calling `close()` on any
   * of those views is enough to deallocate the data, whereas
   * `new Blob([blob, ...])` actually copies the data in memory.
   */
  close(): void;
  size(): number;
  type(): string;
}
export default Blob;