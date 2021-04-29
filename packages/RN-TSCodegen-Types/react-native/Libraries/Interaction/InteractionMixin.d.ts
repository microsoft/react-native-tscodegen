// @flow
import { Handle } from "./InteractionManager";
declare var InteractionMixin:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  componentWillUnmount: () => void;
  _interactionMixinHandles: number[];
  createInteractionHandle: () => Handle;
  clearInteractionHandle: (clearHandle: number) => void;

  /**
   * Schedule work for after all interactions have completed.
   *
   * @param {function} callback
   */
  runAfterInteractions: (callback: Function) => void;
};
declare const $f2tExportDefault: typeof InteractionMixin;
export default $f2tExportDefault;