// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    initialAppState: string;
  };
  readonly getCurrentAppState: (success: (appState:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    app_state: string;
  }) => void, error: (error: Object) => void) => void;
  // Events
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export type { Spec };
declare const $f2tExportDefault: Spec;
export default $f2tExportDefault;