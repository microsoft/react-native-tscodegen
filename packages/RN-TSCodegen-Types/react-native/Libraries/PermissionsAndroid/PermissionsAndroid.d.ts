// @flow
import { PermissionStatus } from "./NativePermissionsAndroid";
import { PermissionType } from "./NativePermissionsAndroid";
declare type Rationale = {
  title: string;
  message: string;
  buttonPositive?: string;
  buttonNegative?: string;
  buttonNeutral?: string;
};
declare class PermissionsAndroid {
  PERMISSIONS:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    ACCESS_BACKGROUND_LOCATION: string;
    ACCESS_COARSE_LOCATION: string;
    ACCESS_FINE_LOCATION: string;
    ADD_VOICEMAIL: string;
    BODY_SENSORS: string;
    CALL_PHONE: string;
    CAMERA: string;
    GET_ACCOUNTS: string;
    PROCESS_OUTGOING_CALLS: string;
    READ_CALENDAR: string;
    READ_CALL_LOG: string;
    READ_CONTACTS: string;
    READ_EXTERNAL_STORAGE: string;
    READ_PHONE_STATE: string;
    READ_SMS: string;
    RECEIVE_MMS: string;
    RECEIVE_SMS: string;
    RECEIVE_WAP_PUSH: string;
    RECORD_AUDIO: string;
    SEND_SMS: string;
    USE_SIP: string;
    WRITE_CALENDAR: string;
    WRITE_CALL_LOG: string;
    WRITE_CONTACTS: string;
    WRITE_EXTERNAL_STORAGE: string;
  };
  RESULTS:
  /*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
  {
    DENIED: string;
    GRANTED: string;
    NEVER_ASK_AGAIN: string;
  };

  /**
   * DEPRECATED - use check
   *
   * Returns a promise resolving to a boolean value as to whether the specified
   * permissions has been granted
   *
   * @deprecated
   */
  checkPermission(permission: PermissionType): Promise<boolean>;

  /**
   * Returns a promise resolving to a boolean value as to whether the specified
   * permissions has been granted
   *
   * See https://reactnative.dev/docs/permissionsandroid.html#check
   */
  check(permission: PermissionType): Promise<boolean>;
  requestPermission(permission: PermissionType, rationale?: Rationale): Promise<boolean>;
  request(permission: PermissionType, rationale?: Rationale): Promise<PermissionStatus>;

  /**
   * Prompts the user to enable multiple permissions in the same dialog and
   * returns an object with the permissions as keys and strings as values
   * indicating whether the user allowed or denied the request
   *
   * See https://reactnative.dev/docs/permissionsandroid.html#requestmultiple
   */
  requestMultiple(permissions: PermissionType[]): Promise<{
    /*[FLOW2DTS - Warning] The key type 'PermissionType' was unresolvable in the original Flow source.*/
    [permission: string]: PermissionStatus;
    [permission: number]: PermissionStatus;
  }>;
}
declare var PermissionsAndroidInstance: PermissionsAndroid;
export type { Rationale };
declare const $f2tExportDefault: typeof PermissionsAndroidInstance;
export default $f2tExportDefault;