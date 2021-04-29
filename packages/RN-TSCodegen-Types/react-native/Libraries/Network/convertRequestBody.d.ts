import { $ArrayBufferView } from "flow2dts-flow-types-polyfill";
import $1 from "../Blob/Blob";
import $2 from "./FormData";
declare type RequestBody = string | $1 | $2 | {
  uri: string;
} | ArrayBuffer | $ArrayBufferView;
declare function convertRequestBody(body: RequestBody): Object;
export type { RequestBody };
declare const $f2tExportDefault: typeof convertRequestBody;
export default $f2tExportDefault;