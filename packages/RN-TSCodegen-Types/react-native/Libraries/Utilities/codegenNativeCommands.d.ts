import { $Keys } from "utility-types";
// @flow
declare type Options<T = string> = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  supportedCommands: ReadonlyArray<T>;
}>;
declare function codegenNativeCommands<T extends {}>(options: Options<$Keys<T>>): T;
declare const $f2tExportDefault: typeof codegenNativeCommands;
export default $f2tExportDefault;