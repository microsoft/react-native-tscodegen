// @flow
declare type ResolvedAssetSource =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly __packager_asset: boolean;
  readonly width?: null | undefined | number;
  readonly height?: null | undefined | number;
  readonly uri: string;
  readonly scale: number;
};
import { PackagerAsset } from "@react-native/assets/registry";
declare class AssetSourceResolver {
  serverUrl?: null | undefined | string;
  // where the jsbundle is being run from
  jsbundleUrl?: null | undefined | string;
  // the asset to resolve
  asset: PackagerAsset;
  constructor(serverUrl: null | undefined | string, jsbundleUrl: null | undefined | string, asset: PackagerAsset);
  isLoadedFromServer(): boolean;
  isLoadedFromFileSystem(): boolean;
  defaultAsset(): ResolvedAssetSource;

  /**
   * Returns an absolute URL which can be used to fetch the asset
   * from the devserver
   */
  assetServerURL(): ResolvedAssetSource;

  /**
   * Resolves to just the scaled asset filename
   * E.g. 'assets/AwesomeModule/icon@2x.png'
   */
  scaledAssetPath(): ResolvedAssetSource;

  /**
   * Resolves to where the bundle is running from, with a scaled asset filename
   * E.g. 'file:///sdcard/bundle/assets/AwesomeModule/icon@2x.png'
   */
  scaledAssetURLNearBundle(): ResolvedAssetSource;

  /**
   * The default location of assets bundled with the app, located by
   * resource identifier
   * The Android resource system picks the correct scale.
   * E.g. 'assets_awesomemodule_icon'
   */
  resourceIdentifierWithoutScale(): ResolvedAssetSource;

  /**
   * If the jsbundle is running from a sideload location, this resolves assets
   * relative to its location
   * E.g. 'file:///sdcard/AwesomeModule/drawable-mdpi/icon.png'
   */
  drawableFolderInBundle(): ResolvedAssetSource;
  fromSource(source: string): ResolvedAssetSource;
  static pickScale(scales: number[], deviceScale: number): number;
}
export type { ResolvedAssetSource };
export default AssetSourceResolver;