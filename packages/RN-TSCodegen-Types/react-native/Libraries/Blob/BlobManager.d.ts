import $1 from "./Blob";
import { BlobData } from "./BlobTypes";
import { BlobOptions } from "./BlobTypes";
declare class BlobManager {
  static isAvailable: boolean;
  static createFromParts(parts: ($1 | string)[], options?: BlobOptions): $1;
  static createFromOptions(options: BlobData): $1;
  static release(blobId: string): void;
  static addNetworkingHandler(): void;
  static addWebSocketHandler(socketId: number): void;
  static removeWebSocketHandler(socketId: number): void;
  static sendOverSocket(blob: $1, socketId: number): void;
}
export default BlobManager;