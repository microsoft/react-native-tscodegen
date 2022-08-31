
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/ONE_OF_EACH_PROP_EVENT_DEFAULT_AND_OPTIONS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  boolean_default_true_optional_both?: WithDefault<boolean, true>;
  onDirectEventDefinedInlineNull: DirectEventHandler<null>;
  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
}>;

export default (codegenNativeComponent<ModuleProps>('Module', {
  interfaceOnly: true,
  paperComponentName: 'RCTModule'
}) as HostComponent<ModuleProps>);


