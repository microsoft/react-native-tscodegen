import $1 from "../../EventEmitter/NativeEventEmitter";
import EmitterSubscription from "../../vendor/emitter/EmitterSubscription";
declare class TVEventHandler {
  __nativeTVNavigationEventListener?: null | undefined | EmitterSubscription;
  __nativeTVNavigationEventEmitter?: null | undefined | $1;
  enable(component: null | undefined | any, callback: Function): void;
  disable(): void;
}
export default TVEventHandler;