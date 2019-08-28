
// Automatically generated from components_failure/PROPS_CONFLICT_WITH_SPREAD_PROPS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

import {ViewProps} from '../../lib/ViewPropTypes';

type PropsInFile = Readonly<{
  isEnabled: boolean;
}>;

export type ModuleProps = Readonly<ViewProps & PropsInFile & {
  isEnabled: boolean;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


