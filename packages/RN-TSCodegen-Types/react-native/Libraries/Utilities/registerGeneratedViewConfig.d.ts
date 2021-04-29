// @flow
declare type GeneratedViewConfig = {
  uiViewClassName: string;
  bubblingEventTypes?: Readonly<{
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
  }>;
  directEventTypes?: Readonly<{
    [eventName: string]: Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      registrationName: string;
    }>;
  }>;
  validAttributes?: {
    [propName: string]: true | Readonly<
    /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
    {
      diff?: <T>(arg1: any, arg2: any) => boolean;
      process?: (arg1: any) => any;
    }>;
  };
};
declare function registerGeneratedViewConfig(componentName: string, viewConfig: GeneratedViewConfig): void;
export type { GeneratedViewConfig };
declare const $f2tExportDefault: typeof registerGeneratedViewConfig;
export default $f2tExportDefault;