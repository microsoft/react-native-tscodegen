// @flow
import { TurboModule } from "../TurboModule/RCTExport";
declare type PermissionStatus = string;
declare type PermissionType = string;
interface Spec extends TurboModule {
  readonly checkPermission: (permission: PermissionType) => Promise<boolean>;
  readonly requestPermission: (permission: PermissionType) => Promise<PermissionStatus>;
  readonly shouldShowRequestPermissionRationale: (permission: string) => Promise<boolean>;
  readonly requestMultiplePermissions: (permissions: PermissionType[]) => Promise<{
    [permission: string]: PermissionStatus;
  }>;
}
export type { PermissionStatus };
export type { PermissionType };
export type { Spec };
declare const $f2tExportDefault: null | undefined | Spec;
export default $f2tExportDefault;