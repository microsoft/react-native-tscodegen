// @flow
import { TurboModule } from "../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly getInitialURL: () => Promise<string>;
  readonly canOpenURL: (url: string) => Promise<boolean>;
  readonly openURL: (url: string) => Promise<void>;
  readonly openSettings: () => Promise<void>;
  readonly sendIntent: (action: string, extras?: null | undefined | {
    key: string;
    value: string | number | boolean; // TODO(T67672788): Union types are not type safe

  }[]) => Promise<void>;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;