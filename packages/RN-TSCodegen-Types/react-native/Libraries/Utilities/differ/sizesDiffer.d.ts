/**
 * TODO: Move these Flow typings upstream
 */
declare type Size = {
  width?: null | undefined | number;
  height?: null | undefined | number;
};
declare var sizesDiffer: (one?: null | undefined | Size, two?: null | undefined | Size) => boolean;
declare const $f2tExportDefault: typeof sizesDiffer;
export default $f2tExportDefault;