// @flow
declare type BackPressEventName = "backPress" | "hardwareBackPress";
declare type TBackHandler =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly exitApp: () => void;
  readonly addEventListener: (eventName: BackPressEventName, handler: Function) => {
    remove: () => void;
  };
  readonly removeEventListener: (eventName: BackPressEventName, handler: Function) => void;
};
declare var BackHandler: TBackHandler;
declare const $f2tExportDefault: typeof BackHandler;
export default $f2tExportDefault;