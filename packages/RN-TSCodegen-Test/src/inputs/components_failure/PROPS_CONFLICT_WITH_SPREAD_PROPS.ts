
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/PROPS_CONFLICT_WITH_SPREAD_PROPS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {ViewProps} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/react-native';

type PropsInFile = Readonly<{
  isEnabled: boolean;
}>;

export type ModuleProps = Readonly<ViewProps & PropsInFile & {
  isEnabled: boolean;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


