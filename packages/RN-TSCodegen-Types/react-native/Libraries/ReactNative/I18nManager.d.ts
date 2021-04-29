// @flow
declare var i18nConstants:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  doLeftAndRightSwapInRTL: boolean;
  isRTL: boolean;
};
declare const $f2d_getConstants: () =>
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  doLeftAndRightSwapInRTL: boolean;
  isRTL: boolean;
};
declare const $f2d_allowRTL: (shouldAllow: boolean) => void;
declare const $f2d_forceRTL: (shouldForce: boolean) => void;
declare const $f2d_swapLeftAndRightInRTL: (flipStyles: boolean) => void;
declare const $f2d_isRTL: typeof i18nConstants.isRTL;
declare const $f2d_doLeftAndRightSwapInRTL: typeof i18nConstants.doLeftAndRightSwapInRTL;
export { $f2d_getConstants as getConstants, $f2d_allowRTL as allowRTL, $f2d_forceRTL as forceRTL, $f2d_swapLeftAndRightInRTL as swapLeftAndRightInRTL, $f2d_isRTL as isRTL, $f2d_doLeftAndRightSwapInRTL as doLeftAndRightSwapInRTL };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  getConstants: () => {
    doLeftAndRightSwapInRTL: boolean;
    isRTL: boolean;
  };
  allowRTL: (shouldAllow: boolean) => void;
  forceRTL: (shouldForce: boolean) => void;
  swapLeftAndRightInRTL: (flipStyles: boolean) => void;
  isRTL: typeof i18nConstants.isRTL;
  doLeftAndRightSwapInRTL: typeof i18nConstants.doLeftAndRightSwapInRTL;
};
export default $f2tExportDefault;