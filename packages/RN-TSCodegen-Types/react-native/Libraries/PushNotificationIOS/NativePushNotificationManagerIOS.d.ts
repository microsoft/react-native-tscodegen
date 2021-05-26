// @flow
import { TurboModule } from "../TurboModule/RCTExport";
declare type Permissions =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  alert: boolean;
  badge: boolean;
  sound: boolean;
};
declare type Notification =
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  readonly alertTitle?: null | undefined | string;
  // Actual type: string | number
  readonly fireDate?: null | undefined | number;
  readonly alertBody?: null | undefined | string;
  readonly alertAction?: null | undefined | string;
  readonly userInfo?: null | undefined | Object;
  readonly category?: null | undefined | string;
  // Actual type: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute'
  readonly repeatInterval?: null | undefined | string;
  readonly applicationIconBadgeNumber?: null | undefined | number;
  readonly isSilent?: null | undefined | boolean;
};
interface Spec extends TurboModule {
  readonly getConstants: () =>
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {};
  readonly onFinishRemoteNotification: (notificationId: string, fetchResult: string) => void;
  readonly setApplicationIconBadgeNumber: (num: number) => void;
  readonly getApplicationIconBadgeNumber: (callback: (num: number) => void) => void;
  readonly requestPermissions: (permission:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    readonly alert: boolean;
    readonly badge: boolean;
    readonly sound: boolean;
  }) => Promise<Permissions>;
  readonly abandonPermissions: () => void;
  readonly checkPermissions: (callback: (permissions: Permissions) => void) => void;
  readonly presentLocalNotification: (notification: Notification) => void;
  readonly scheduleLocalNotification: (notification: Notification) => void;
  readonly cancelAllLocalNotifications: () => void;
  readonly cancelLocalNotifications: (userInfo: Object) => void;
  readonly getInitialNotification: () => Promise<null | undefined | Notification>;
  readonly getScheduledLocalNotifications: (callback: (notification: Notification) => void) => void;
  readonly removeAllDeliveredNotifications: () => void;
  readonly removeDeliveredNotifications: (identifiers: string[]) => void;
  readonly getDeliveredNotifications: (callback: (notification: Notification[]) => void) => void;
  readonly addListener: (eventType: string) => void;
  readonly removeListeners: (count: number) => void;
}
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;