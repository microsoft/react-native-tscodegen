
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/EVENTS_DEFINED_AS_NULL_INLINE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  onDirectEventDefinedInlineNull: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalKey?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullOptionalValue: (undefined | null | DirectEventHandler<null>);
  onDirectEventDefinedInlineNullOptionalBoth?: DirectEventHandler<null>;
  onDirectEventDefinedInlineNullWithPaperName?: (undefined | null | DirectEventHandler<null, 'paperDirectEventDefinedInlineNullWithPaperName'>);
  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalKey?: BubblingEventHandler<null>;
  onBubblingEventDefinedInlineNullOptionalValue: (undefined | null | BubblingEventHandler<null>);
  onBubblingEventDefinedInlineNullOptionalBoth?: (undefined | null | BubblingEventHandler<null>);
  onBubblingEventDefinedInlineNullWithPaperName?: (undefined | null | BubblingEventHandler<null, 'paperBubblingEventDefinedInlineNullWithPaperName'>);
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


