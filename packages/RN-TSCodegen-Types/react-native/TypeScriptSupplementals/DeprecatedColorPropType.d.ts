/**
 * TODO: Figure out why these are not included in the Flow dump
 */
declare var colorPropType: (props: any, propName: string, componentName: string, location: string, propFullName?: null | undefined | string) => null | undefined | Error;
declare var ColorPropType: typeof colorPropType & {
  isRequired: typeof colorPropType;
};
declare const $f2tExportDefault: typeof ColorPropType;
export default $f2tExportDefault;