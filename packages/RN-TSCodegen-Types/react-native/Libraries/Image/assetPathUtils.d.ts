// @flow
import { PackagerAsset } from "./AssetRegistry";
declare function getAndroidAssetSuffix(scale: number): string;
declare function getAndroidResourceFolderName(asset: PackagerAsset, scale: number): string | string;
declare function getAndroidResourceIdentifier(asset: PackagerAsset): string;
declare function getBasePath(asset: PackagerAsset): string;
export { getAndroidAssetSuffix, getAndroidResourceFolderName, getAndroidResourceIdentifier, getBasePath };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getAndroidAssetSuffix: typeof getAndroidAssetSuffix;
  getAndroidResourceFolderName: typeof getAndroidResourceFolderName;
  getAndroidResourceIdentifier: typeof getAndroidResourceIdentifier;
  getBasePath: typeof getBasePath;
};
export default $f2tExportDefault;