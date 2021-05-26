// @flow
declare type DevServerInfo = {
  url: string;
  fullBundleUrl?: null | undefined | string;
  bundleLoadedFromServer: boolean;
};
declare function getDevServer(): DevServerInfo;
declare const $f2tExportDefault: typeof getDevServer;
export default $f2tExportDefault;