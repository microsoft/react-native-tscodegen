// @flow
declare var register: (id: string) => void;
declare var unregister: (id: string) => void;
declare var has: (id: string) => number | boolean;
export { register, unregister, has };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  register: typeof register;
  unregister: typeof unregister;
  has: typeof has;
};
export default $f2tExportDefault;