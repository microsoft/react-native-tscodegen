// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
  readonly multiGet: (keys: string[], callback: (errors?: null | undefined |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    message: string;
  }[], kvPairs?: null | undefined | string[][]) => void) => void;
  readonly multiSet: (kvPairs: string[][], callback: (errors?: null | undefined |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    message: string;
  }[]) => void) => void;
  readonly multiMerge: (kvPairs: string[][], callback: (errors?: null | undefined |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    message: string;
  }[]) => void) => void;
  readonly multiRemove: (keys: string[], callback: (errors?: null | undefined |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    message: string;
  }[]) => void) => void;
  readonly clear: (callback: (error:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    message: string;
  }) => void) => void;
  readonly getAllKeys: (callback: (error?: null | undefined |
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    message: string;
  }, allKeys?: null | undefined | string[]) => void) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;