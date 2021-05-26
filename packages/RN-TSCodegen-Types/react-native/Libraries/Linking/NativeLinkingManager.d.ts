// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  // Common interface
  readonly getInitialURL: () => Promise<string>;
  readonly canOpenURL: (url: string) => Promise<boolean>;
  readonly openURL: (url: string) => Promise<void>;
  readonly openSettings: () => Promise<void>;
  // Events
  readonly addListener: (eventName: string) => void;
  readonly removeListeners: (count: number) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;