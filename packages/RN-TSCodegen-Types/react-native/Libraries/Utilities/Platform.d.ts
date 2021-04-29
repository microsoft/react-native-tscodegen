// @flow
declare type PlatformSelectSpec<D, N, I> = {
  default?: D;
  native?: N;
  ios?: I;
};
declare var Platform:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  __constants: null;
  OS: string;
  Version: string;
  constants:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    forceTouchAvailable: boolean;
    interfaceIdiom: string;
    isTesting: boolean;
    osVersion: string;
    reactNativeVersion:
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      major: number;
      minor: number;
      patch: number;
      prerelease?: null | undefined | number;
    };
    systemName: string;
  };
  isPad: boolean;
  isTVOS: boolean;
  isTV: boolean;
  isTesting: boolean;
  select: <D, N, I>(spec: PlatformSelectSpec<D, N, I>) => D | N | I;
};
export type { PlatformSelectSpec };
declare const $f2tExportDefault: typeof Platform;
export default $f2tExportDefault;