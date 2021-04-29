// @flow
import { ReactNativeBaseComponentViewConfig } from "./ReactNativeTypes";
import { ViewConfigGetter } from "./ReactNativeTypes";
declare var customBubblingEventTypes: {
  [eventName: string]: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    phasedRegistrationNames: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      captured: string;
      bubbled: string;
    }>;
  }>;
};
declare var customDirectEventTypes: {
  [eventName: string]: Readonly<
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    registrationName: string;
  }>;
};
declare const $f2d_get: (name: string) => ReactNativeBaseComponentViewConfig;
declare const $f2d_register: (name: string, callback: ViewConfigGetter) => string;
export { $f2d_get as get, $f2d_register as register, customDirectEventTypes, customBubblingEventTypes };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  get: (name: string) => ReactNativeBaseComponentViewConfig;
  register: (name: string, callback: ViewConfigGetter) => string;
  customDirectEventTypes: typeof customDirectEventTypes;
  customBubblingEventTypes: typeof customBubblingEventTypes;
};
export default $f2tExportDefault;