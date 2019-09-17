
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/NON_OPTIONAL_KEY_WITH_DEFAULT_VALUE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {Float} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

export type ModuleProps = Readonly<ViewProps & {
  required_key_with_default: WithDefault<Float, 1.0>;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


