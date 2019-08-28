
// Automatically generated from NativeNullableTurboModule.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ReactNull} from '../../lib/CodegenTypes';
import {TurboModule} from '../../lib/RCTExport'
import * as TurboModuleRegistry from '../../lib/TurboModuleRegistry';
'use strict';

export interface Spec extends TurboModule {
  getBool(a: (ReactNull | boolean)): (ReactNull | boolean);
  getNumber(a: (ReactNull | number)): (ReactNull | number);
  getString(a: (ReactNull | number)): (ReactNull | string);
  getArray(a: (ReactNull | Array<any>)): (ReactNull | Array<any>);
  getObject(a: (ReactNull | Object)): (ReactNull | Object);
  getValueWithPromise(): (ReactNull | Promise<string>);
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);


