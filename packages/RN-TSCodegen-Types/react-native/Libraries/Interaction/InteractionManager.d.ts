import { $FlowFixMe } from "flow2dts-flow-types-polyfill";
// @flow
declare type Handle = number;
import { Task } from "./TaskQueue";
declare var InteractionManager:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  Events:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    interactionStart: "interactionStart";
    interactionComplete: "interactionComplete";
  };

  /**
   * Schedule a function to run after all interactions have completed. Returns a cancellable
   * "promise".
   */
  runAfterInteractions: (task?: null | undefined | Task) => {
    then: Function;
    done: Function;
    cancel: Function;
  };

  /**
   * Notify manager that an interaction has started.
   */
  createInteractionHandle: () => Handle;

  /**
   * Notify manager that an interaction has completed.
   */
  clearInteractionHandle: (handle: Handle) => void;
  addListener: $FlowFixMe;

  /**
   * A positive number will use setTimeout to schedule any tasks after the
   * eventLoopRunningTime hits the deadline value, otherwise all tasks will be
   * executed in one setImmediate batch (default).
   */
  setDeadline: (deadline: number) => void;
};
export type { Handle };
declare const $f2tExportDefault: typeof InteractionManager;
export default $f2tExportDefault;