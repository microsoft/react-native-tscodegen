// @flow
import EventEmitter from "../vendor/emitter/EventEmitter";
import EmitterSubscription from "../vendor/emitter/_EmitterSubscription";
import EventSubscriptionVendor from "../vendor/emitter/_EventSubscriptionVendor";
declare class RCTDeviceEventEmitter extends EventEmitter {
  sharedSubscriber: typeof EventSubscriptionVendor;
  constructor();
  addListener(eventType: string, listener: Function, context?: null | undefined | Object): EmitterSubscription;
  removeAllListeners(eventType?: null | undefined | string): void;
  removeSubscription(subscription: EmitterSubscription): void;
}
declare const $f2tExportDefault: RCTDeviceEventEmitter;
export default $f2tExportDefault;