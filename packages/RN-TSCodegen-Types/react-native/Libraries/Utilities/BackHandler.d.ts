// @flow
declare type BackPressEventName = "backPress" | "hardwareBackPress";
declare type TBackHandler =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly exitApp: () => void;
  readonly addEventListener: (eventName: BackPressEventName, handler: () => null | undefined | boolean) => {
    remove: () => void;
  };
  readonly removeEventListener: (eventName: BackPressEventName, handler: () => null | undefined | boolean) => void;
};
declare var BackHandler: TBackHandler;
declare const $f2tExportDefault: typeof BackHandler;
export default $f2tExportDefault;