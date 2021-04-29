import { Class } from "utility-types";
// @flow
declare type Pooler = any;
declare var addPoolingTo: <T>(CopyConstructor: Class<T>, pooler: Pooler) => Class<T> & {
  getPooled: (...args: ReadonlyArray<unknown>) =>
  /* arguments of the constructor */
  T;
  release: (instance: unknown) => void;
};
declare var PooledClass:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  addPoolingTo: typeof addPoolingTo;
  oneArgumentPooler: Pooler;
  twoArgumentPooler: Pooler;
  threeArgumentPooler: Pooler;
  fourArgumentPooler: Pooler;
};
declare const $f2tExportDefault: typeof PooledClass;
export default $f2tExportDefault;