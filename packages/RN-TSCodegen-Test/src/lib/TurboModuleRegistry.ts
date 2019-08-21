// \react-native\Libraries\TurboModule\TurboModuleRegistry.js

import { TurboModule } from './RCTExport';

export function getEnforcing<T extends TurboModule>(name: string): T {
  throw 'Not implemented';
}