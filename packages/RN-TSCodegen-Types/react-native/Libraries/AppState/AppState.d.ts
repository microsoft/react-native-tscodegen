// @flow
import NativeEventEmitter from "../EventEmitter/NativeEventEmitter";
import EventEmitter from "../vendor/emitter/EventEmitter";
declare class AppState extends NativeEventEmitter {
  currentState?: null | undefined | string;
  isAvailable: boolean;
  constructor();
  // TODO: now that AppState is a subclass of NativeEventEmitter, we could
  // deprecate `addEventListener` and `removeEventListener` and just use
  // addListener` and `listener.remove()` directly. That will be a breaking
  // change though, as both the method and event names are different
  // (addListener events are currently required to be globally unique).

  /**
   * Add a handler to AppState changes by listening to the `change` event type
   * and providing the handler.
   *
   * See https://reactnative.dev/docs/appstate.html#addeventlistener
   */
  addEventListener(type: string, handler: Function): void;

  /**
   * Remove a handler by passing the `change` event type and the handler.
   *
   * See https://reactnative.dev/docs/appstate.html#removeeventlistener
   */
  removeEventListener(type: string, handler: Function): void;
}
declare class MissingNativeAppStateShim extends EventEmitter {
  // AppState
  isAvailable: boolean;
  currentState?: null | undefined | string;
  addEventListener(type: string, handler: Function): void;
  removeEventListener(type: string, handler: Function): void;
}
declare var AppStateInstance: AppState | MissingNativeAppStateShim;
declare const $f2tExportDefault: typeof AppStateInstance;
export default $f2tExportDefault;