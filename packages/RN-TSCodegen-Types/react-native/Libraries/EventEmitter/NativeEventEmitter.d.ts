import $1 from "../vendor/emitter/EventEmitter";
import EmitterSubscription from "../vendor/emitter/EmitterSubscription";
declare type NativeModule = {
  readonly addListener: (eventType: string) => void;
  readonly removeListeners: (count: number) => void;
};
declare class NativeEventEmitter extends $1 {
  constructor(nativeModule?: null | undefined | NativeModule);
  addListener(eventType: string, listener: Function, context?: null | undefined | Object): EmitterSubscription;
  removeAllListeners(eventType: string): void;
  removeSubscription(subscription: EmitterSubscription): void;
}
export default NativeEventEmitter;