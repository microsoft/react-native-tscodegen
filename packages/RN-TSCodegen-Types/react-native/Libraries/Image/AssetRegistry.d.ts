// @flow
declare type PackagerAsset = {
  readonly __packager_asset: boolean;
  readonly fileSystemLocation: string;
  readonly httpServerLocation: string;
  readonly width?: null | undefined | number;
  readonly height?: null | undefined | number;
  readonly scales: number[];
  readonly hash: string;
  readonly name: string;
  readonly type: string;
};
declare function registerAsset(asset: PackagerAsset): number;
declare function getAssetByID(assetId: number): PackagerAsset;
export type { PackagerAsset };
export { registerAsset, getAssetByID };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  registerAsset: typeof registerAsset;
  getAssetByID: typeof getAssetByID;
};
export default $f2tExportDefault;