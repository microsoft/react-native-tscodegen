// @flow
declare function defineLazyObjectProperty<T>(object: {}, name: string, descriptor: {
  get: () => T;
  enumerable?: boolean;
  writable?: boolean;
}): void;
declare const $f2tExportDefault: typeof defineLazyObjectProperty;
export default $f2tExportDefault;