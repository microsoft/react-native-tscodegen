// @flow
declare type Point = {
  x?: null | undefined | number;
  y?: null | undefined | number;
};
declare var pointsDiffer: (one?: null | undefined | Point, two?: null | undefined | Point) => boolean;
declare const $f2tExportDefault: typeof pointsDiffer;
export default $f2tExportDefault;