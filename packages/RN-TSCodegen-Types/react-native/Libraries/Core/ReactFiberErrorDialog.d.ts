// @flow
declare type CapturedError = {
  readonly componentStack: string;
  readonly error: unknown;
  readonly errorBoundary?: null | undefined | {};
};
declare function showErrorDialog(capturedError: CapturedError): boolean;
export type { CapturedError };
export { showErrorDialog };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  showErrorDialog: typeof showErrorDialog;
};
export default $f2tExportDefault;