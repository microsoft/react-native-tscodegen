// @flow
import { TurboModule } from "../RCTExport";
interface Spec extends TurboModule {
  // Exported methods.
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    const1: boolean;
    const2: number;
    const3: string;
  };
  readonly voidFunc: () => void;
  readonly getBool: (arg: boolean) => boolean;
  readonly getNumber: (arg: number) => number;
  readonly getString: (arg: string) => string;
  readonly getArray: (arg: any[]) => any[];
  readonly getObject: (arg: Object) => Object;
  readonly getValue: (x: number, y: string, z: Object) => Object;
  readonly getValueWithCallback: (callback: (value: string) => void) => void;
  readonly getValueWithPromise: (error: boolean) => Promise<string>;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;