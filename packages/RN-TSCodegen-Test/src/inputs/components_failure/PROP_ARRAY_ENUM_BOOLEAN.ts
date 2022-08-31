
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/PROP_ARRAY_ENUM_BOOLEAN.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

export type ModuleProps = Readonly<ViewProps & {
  someProp?: WithDefault<ReadonlyArray<false | true>, false>;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


