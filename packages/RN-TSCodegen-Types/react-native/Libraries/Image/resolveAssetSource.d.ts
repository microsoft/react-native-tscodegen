import { $TEMPORARY$module$exports$assign } from "flow2dts-flow-types-polyfill";
import $1 from "./AssetSourceResolver";
import { ResolvedAssetSource } from "./AssetSourceResolver";
declare function setCustomSourceTransformer(transformer: (resolver: $1) => ResolvedAssetSource): void;
declare function resolveAssetSource(source: any): null | undefined | ResolvedAssetSource;
declare const $f2tExportDefault: $TEMPORARY$module$exports$assign<typeof resolveAssetSource, {
  setCustomSourceTransformer: typeof setCustomSourceTransformer;
  pickScale: typeof $1.pickScale;
}>;
export default $f2tExportDefault;