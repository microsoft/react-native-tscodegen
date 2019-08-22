
// Automatically generated from components_failure_NULLABLE_WITH_DEFAULT.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {Float} from '../lib/CodegenTypes';
import {ReactNull} from '../lib/CodegenTypes';
import {WithDefault} from '../lib/CodegenTypes';
import {NativeComponent} from '../lib/codegenNativeComponent';
import codegenNativeComponent from '../lib/codegenNativeComponent';
'use strict';

import {ViewProps} from '../lib/ViewPropTypes';

export type ModuleProps = Readonly<ViewProps & {
  nullable_with_default: (ReactNull | WithDefault<Float, 1.0>);
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


