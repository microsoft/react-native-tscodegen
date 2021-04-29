import $1 from "./Blob";
declare type ReadyState = 0 // EMPTY
| 1 // LOADING
| 2;
declare type ReaderResult = string | ArrayBuffer;
declare class FileReader extends $2 {
  static EMPTY: number;
  static LOADING: number;
  static DONE: number;
  EMPTY: number;
  LOADING: number;
  DONE: number;
  constructor();
  readAsArrayBuffer(): void;
  readAsDataURL(blob?: null | undefined | $1): void;
  readAsText(blob?: null | undefined | $1, encoding?: string): void;
  abort(): void;
  readyState(): ReadyState;
  error(): null | undefined | Error;
  result(): null | undefined | ReaderResult;
}
declare var $2: any;
export default FileReader;