
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/PROP_NUMBER_TYPE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {ViewProps} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/react-native';

export type ModuleProps = Readonly<ViewProps & {
  someProp: number;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


