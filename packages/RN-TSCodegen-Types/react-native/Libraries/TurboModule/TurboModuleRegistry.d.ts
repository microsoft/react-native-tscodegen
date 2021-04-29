// @flow
import { TurboModule } from "./RCTExport";
declare function get<T extends TurboModule>(name: string): null | undefined | T;
declare function getEnforcing<T extends TurboModule>(name: string): T;
export { get };
export { getEnforcing };