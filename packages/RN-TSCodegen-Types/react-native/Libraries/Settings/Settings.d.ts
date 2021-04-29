// @flow
declare var Settings:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  _settings: any;
  get: (key: string) => unknown;
  set: (settings: Object) => void;
  watchKeys: (keys: string | string[], callback: Function) => number;
  clearWatch: (watchId: number) => void;
  _sendObservations: (body: Object) => void;
};
declare const $f2tExportDefault: typeof Settings;
export default $f2tExportDefault;