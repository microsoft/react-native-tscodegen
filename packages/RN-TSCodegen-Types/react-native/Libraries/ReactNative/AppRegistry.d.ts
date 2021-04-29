import { React$ComponentType } from "flow2dts-flow-types-polyfill";
// @flow
import { IPerformanceLogger } from "../Utilities/createPerformanceLogger";
declare type Task = (taskData: any) => Promise<void>;
declare type TaskProvider = () => Task;
declare type TaskCanceller = () => void;
declare type TaskCancelProvider = () => TaskCanceller;
declare type ComponentProvider = () => React$ComponentType<any>;
declare type ComponentProviderInstrumentationHook = (component: ComponentProvider, scopedPerformanceLogger: IPerformanceLogger) => React$ComponentType<any>;
declare type AppConfig = {
  appKey: string;
  component?: ComponentProvider;
  run?: Function;
  section?: boolean;
};
declare type Runnable = {
  component?: ComponentProvider;
  run: Function;
};
declare type Runnables = {
  [appKey: string]: Runnable;
};
declare type Registry = {
  sections: string[];
  runnables: Runnables;
};
declare type WrapperComponentProvider = ($f2t1: any) => React$ComponentType<any>;
declare var AppRegistry:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  setWrapperComponentProvider: (provider: WrapperComponentProvider) => void;
  enableArchitectureIndicator: (enabled: boolean) => void;
  registerConfig: (config: AppConfig[]) => void;

  /**
   * Registers an app's root component.
   *
   * See https://reactnative.dev/docs/appregistry.html#registercomponent
   */
  registerComponent: (appKey: string, componentProvider: ComponentProvider, section?: boolean) => string;
  registerRunnable: (appKey: string, run: Function) => string;
  registerSection: (appKey: string, component: ComponentProvider) => void;
  getAppKeys: () => string[];
  getSectionKeys: () => string[];
  getSections: () => Runnables;
  getRunnable: (appKey: string) => null | undefined | Runnable;
  getRegistry: () => Registry;
  setComponentProviderInstrumentationHook: (hook: ComponentProviderInstrumentationHook) => void;

  /**
   * Loads the JavaScript bundle and runs the app.
   *
   * See https://reactnative.dev/docs/appregistry.html#runapplication
   */
  runApplication: (appKey: string, appParameters: any) => void;

  /**
   * Stops an application when a view should be destroyed.
   *
   * See https://reactnative.dev/docs/appregistry.html#unmountapplicationcomponentatroottag
   */
  unmountApplicationComponentAtRootTag: (rootTag: number) => void;

  /**
   * Register a headless task. A headless task is a bit of code that runs without a UI.
   *
   * See https://reactnative.dev/docs/appregistry.html#registerheadlesstask
   */
  registerHeadlessTask: (taskKey: string, taskProvider: TaskProvider) => void;

  /**
   * Register a cancellable headless task. A headless task is a bit of code that runs without a UI.
   *
   * See https://reactnative.dev/docs/appregistry.html#registercancellableheadlesstask
   */
  registerCancellableHeadlessTask: (taskKey: string, taskProvider: TaskProvider, taskCancelProvider: TaskCancelProvider) => void;

  /**
   * Only called from native code. Starts a headless task.
   *
   * See https://reactnative.dev/docs/appregistry.html#startheadlesstask
   */
  startHeadlessTask: (taskId: number, taskKey: string, data: any) => void;

  /**
   * Only called from native code. Cancels a headless task.
   *
   * See https://reactnative.dev/docs/appregistry.html#cancelheadlesstask
   */
  cancelHeadlessTask: (taskId: number, taskKey: string) => void;
};
export type { TaskProvider };
export type { ComponentProvider };
export type { ComponentProviderInstrumentationHook };
export type { AppConfig };
export type { Runnable };
export type { Runnables };
export type { Registry };
export type { WrapperComponentProvider };
declare const $f2tExportDefault: typeof AppRegistry;
export default $f2tExportDefault;