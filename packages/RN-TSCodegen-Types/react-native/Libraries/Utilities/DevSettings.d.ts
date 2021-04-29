// @flow
interface IDevSettings {
  addMenuItem: (title: string, handler: () => unknown) => void;
  reload: (reason?: string) => void;
  onFastRefresh: () => void;
}
declare const $f2tExportDefault: IDevSettings;
export default $f2tExportDefault;