
// Automatically generated from components_failure_PROPS_CONFLICT_NAMES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {NativeComponent} from '../lib/codegenNativeComponent';
import codegenNativeComponent from '../lib/codegenNativeComponent';
'use strict';

import {ViewProps} from '../lib/ViewPropTypes';

export type ModuleProps = Readonly<ViewProps & {
  isEnabled: string;
  isEnabled: boolean;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


