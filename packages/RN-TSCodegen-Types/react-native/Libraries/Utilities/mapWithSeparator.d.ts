// @flow
declare function mapWithSeparator<TFrom, TTo>(items: TFrom[], itemRenderer: (item: TFrom, index: number, items: TFrom[]) => TTo, spacerRenderer: (index: number) => TTo): TTo[];
declare const $f2tExportDefault: typeof mapWithSeparator;
export default $f2tExportDefault;