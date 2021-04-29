import $1 from "../Blob/Blob";
declare type ArrayBufferView = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array | DataView;
declare type BinaryType = "blob" | "arraybuffer";
declare class WebSocket extends $2 {
  static CONNECTING: number;
  static OPEN: number;
  static CLOSING: number;
  static CLOSED: number;
  CONNECTING: number;
  OPEN: number;
  CLOSING: number;
  CLOSED: number;
  onclose?: null | undefined | Function;
  onerror?: null | undefined | Function;
  onmessage?: null | undefined | Function;
  onopen?: null | undefined | Function;
  bufferedAmount: number;
  extension?: null | undefined | string;
  protocol?: null | undefined | string;
  readyState: number;
  url?: null | undefined | string;
  constructor(url: string, protocols: (null | undefined | string) | (null | undefined | string[]), options?: null | undefined | {
    headers?: {
      origin?: string;
    };
  });
  binaryType(): null | undefined | BinaryType;
  binaryType(binaryType: BinaryType): void;
  close(code?: number, reason?: string): void;
  send(data: string | ArrayBuffer | ArrayBufferView | $1): void;
  ping(): void;
}
declare var $2: any;
export default WebSocket;