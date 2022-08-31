
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/ONE_OF_EACH_PROP_EVENT_DEFAULT_AND_OPTIONS_NO_CAST.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ViewProps} from 'react-native';
import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  boolean_default_true_optional_both?: WithDefault<boolean, true>;
  onDirectEventDefinedInlineNull: DirectEventHandler<null>;
  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
}>;

export default codegenNativeComponent<ModuleProps>('Module', {
  interfaceOnly: true,
  excludedPlatforms: ['android'],
  paperComponentName: 'RCTModule'
});


