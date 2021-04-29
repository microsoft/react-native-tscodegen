// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    isTesting: boolean;
    reactNativeVersion:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      major: number;
      minor: number;
      patch: number;
      prerelease?: null | undefined | number;
    };
    forceTouchAvailable: boolean;
    osVersion: string;
    systemName: string;
    interfaceIdiom: string;
  };
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;