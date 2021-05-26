// @flow
import EventSubscriptionVendor from "./_EventSubscriptionVendor";
declare class EventSubscription {
  eventType: string;
  key: number;
  subscriber: EventSubscriptionVendor;

  /**
   * @param {EventSubscriptionVendor} subscriber the subscriber that controls
   *   this subscription.
   */
  constructor(subscriber: EventSubscriptionVendor);

  /**
   * Removes this subscription from the subscriber that controls it.
   */
  remove(): void;
}
export default EventSubscription;