import { $Keys } from "utility-types";
// @flow
declare type ContentAvailable = 1 | null | void;
declare type FetchResult = {
  NewData: string;
  NoData: string;
  ResultFailed: string;
};
declare type PushNotificationEventName = $Keys<{
  /**
  * Fired when a remote notification is received. The handler will be invoked
  * with an instance of `PushNotificationIOS`.
  */
  notification: string;

  /**
  * Fired when a local notification is received. The handler will be invoked
  * with an instance of `PushNotificationIOS`.
  */
  localNotification: string;

  /**
  * Fired when the user registers for remote notifications. The handler will be
  * invoked with a hex string representing the deviceToken.
  */
  register: string;

  /**
  * Fired when the user fails to register for remote notifications. Typically
  * occurs when APNS is having issues, or the device is a simulator. The
  * handler will be invoked with {message: string, code: number, details: any}.
  */
  registrationError: string;
}>;
declare class PushNotificationIOS {
  static FetchResult: FetchResult;
  static presentLocalNotification(details: Object): void;
  static scheduleLocalNotification(details: Object): void;
  static cancelAllLocalNotifications(): void;
  static removeAllDeliveredNotifications(): void;
  static getDeliveredNotifications(callback: (notifications: Object[]) => void): void;
  static removeDeliveredNotifications(identifiers: string[]): void;
  static setApplicationIconBadgeNumber(number: number): void;
  static getApplicationIconBadgeNumber(callback: Function): void;
  static cancelLocalNotifications(userInfo: Object): void;
  static getScheduledLocalNotifications(callback: Function): void;
  static addEventListener(type: PushNotificationEventName, handler: Function): void;
  static removeEventListener(type: PushNotificationEventName, handler: Function): void;
  static requestPermissions(permissions?: {
    alert?: boolean;
    badge?: boolean;
    sound?: boolean;
  }): Promise<{
    alert: boolean;
    badge: boolean;
    sound: boolean;
  }>;
  static abandonPermissions(): void;
  static checkPermissions(callback: Function): void;
  static getInitialNotification(): Promise<null | undefined | PushNotificationIOS>;

  /**
   * You will never need to instantiate `PushNotificationIOS` yourself.
   * Listening to the `notification` event and invoking
   * `getInitialNotification` is sufficient
   *
   */
  constructor(nativeNotif: Object);

  /**
   * This method is available for remote notifications that have been received via:
   * `application:didReceiveRemoteNotification:fetchCompletionHandler:`
   *
   * See https://reactnative.dev/docs/pushnotificationios.html#finish
   */
  finish(fetchResult: string): void;

  /**
   * An alias for `getAlert` to get the notification's main message string
   */
  getMessage(): (null | undefined | string) | (null | undefined | Object);

  /**
   * Gets the sound string from the `aps` object
   *
   * See https://reactnative.dev/docs/pushnotificationios.html#getsound
   */
  getSound(): null | undefined | string;

  /**
   * Gets the category string from the `aps` object
   *
   * See https://reactnative.dev/docs/pushnotificationios.html#getcategory
   */
  getCategory(): null | undefined | string;

  /**
   * Gets the notification's main message from the `aps` object
   *
   * See https://reactnative.dev/docs/pushnotificationios.html#getalert
   */
  getAlert(): (null | undefined | string) | (null | undefined | Object);

  /**
   * Gets the content-available number from the `aps` object
   *
   * See https://reactnative.dev/docs/pushnotificationios.html#getcontentavailable
   */
  getContentAvailable(): ContentAvailable;

  /**
   * Gets the badge count number from the `aps` object
   *
   * See https://reactnative.dev/docs/pushnotificationios.html#getbadgecount
   */
  getBadgeCount(): null | undefined | number;

  /**
   * Gets the data object on the notif
   *
   * See https://reactnative.dev/docs/pushnotificationios.html#getdata
   */
  getData(): null | undefined | Object;

  /**
   * Gets the thread ID on the notif
   *
   * See https://reactnative.dev/docs/pushnotificationios.html#getthreadid
   */
  getThreadID(): null | undefined | string;
}
export type { ContentAvailable };
export type { FetchResult };
export type { PushNotificationEventName };
export default PushNotificationIOS;