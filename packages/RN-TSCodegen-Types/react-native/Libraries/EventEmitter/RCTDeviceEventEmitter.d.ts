import $1 from "../vendor/emitter/EventEmitter";
import $2 from "../vendor/emitter/EventSubscriptionVendor";
import EmitterSubscription from "../vendor/emitter/EmitterSubscription";
declare class RCTDeviceEventEmitter extends $1 {
  sharedSubscriber: $2;
  constructor();
  addListener(eventType: string, listener: Function, context?: null | undefined | Object): EmitterSubscription;
  removeAllListeners(eventType?: null | undefined | string): void;
  removeSubscription(subscription: EmitterSubscription): void;
}
declare const $f2tExportDefault: RCTDeviceEventEmitter;
export default $f2tExportDefault;