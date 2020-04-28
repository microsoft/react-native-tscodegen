
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/PROP_ARRAY_ENUM_INT.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/react-native';

export type ModuleProps = Readonly<ViewProps & {
  someProp?: WithDefault<ReadonlyArray<0 | 1>, 0>;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


