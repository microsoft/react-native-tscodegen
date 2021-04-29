// @flow
import { IgnorePattern } from "./Data/LogBoxData";
declare const $f2d_ignoreLogs: ($f2t1: ReadonlyArray<IgnorePattern>) => void;
declare const $f2d_ignoreAllLogs: ($f2t1?: null | undefined | boolean) => void;
declare const $f2d_install: () => void;
declare const $f2d_uninstall: () => void;
export { $f2d_ignoreLogs as ignoreLogs, $f2d_ignoreAllLogs as ignoreAllLogs, $f2d_install as install, $f2d_uninstall as uninstall };
declare const $f2tExportDefault: {
  ignoreLogs: ($f2t1: ReadonlyArray<IgnorePattern>) => void;
  ignoreAllLogs: ($f2t1?: null | undefined | boolean) => void;
  install: () => void;
  uninstall: () => void;
};
export default $f2tExportDefault;