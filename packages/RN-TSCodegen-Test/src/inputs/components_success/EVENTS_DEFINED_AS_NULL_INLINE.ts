
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/EVENTS_DEFINED_AS_NULL_INLINE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {ReactNull} from 'react-native-tscodegen-types';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  onDirectEventDefinedInlineNull: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalKey?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalValue: (ReactNull | DirectEventHandler<null>);
  onDirectEventDefinedInlineNullOptionalBoth?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullWithPaperName?: (ReactNull | DirectEventHandler<null, 'paperDirectEventDefinedInlineNullWithPaperName'>);
  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalKey?: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalValue: (ReactNull | BubblingEventHandler<null>);
  onBubblingEventDefinedInlineNullOptionalBoth?: (ReactNull | BubblingEventHandler<null>);
  onBubblingEventDefinedInlineNullWithPaperName?: (ReactNull | BubblingEventHandler<null, 'paperBubblingEventDefinedInlineNullWithPaperName'>);
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


