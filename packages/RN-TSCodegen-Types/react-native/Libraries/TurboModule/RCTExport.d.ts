// @flow
interface DEPRECATED_RCTExport<T extends void = void> {
  readonly getConstants?: () => {};
}
interface TurboModule extends DEPRECATED_RCTExport<void> {}
export type { DEPRECATED_RCTExport };
export type { TurboModule };