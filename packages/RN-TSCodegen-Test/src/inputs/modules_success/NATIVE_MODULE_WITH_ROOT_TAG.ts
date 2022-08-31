
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from modules_success/NATIVE_MODULE_WITH_ROOT_TAG.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/modules/__test_fixtures__/fixtures.js)

import {TurboModule} from 'react-native'
import {TurboModuleRegistry} from 'react-native';
import {RootTag} from 'react-native-tscodegen-types';
'use strict';

export interface Spec extends TurboModule {
  getRootTag(rootTag: RootTag): RootTag;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule');


