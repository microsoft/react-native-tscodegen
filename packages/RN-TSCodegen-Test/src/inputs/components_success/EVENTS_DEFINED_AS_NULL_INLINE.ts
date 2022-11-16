
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

interface ModuleProps extends ViewProps {
  readonly onDirectEventDefinedInlineNull: DirectEventHandler<null>;
  readonly onDirectEventDefinedInlineNullOptionalKey?: DirectEventHandler<null>;
  readonly onDirectEventDefinedInlineNullOptionalValue: (undefined | null | DirectEventHandler<null>);
  readonly onDirectEventDefinedInlineNullOptionalBoth?: DirectEventHandler<null>;
  readonly onDirectEventDefinedInlineNullWithPaperName?: (undefined | null | DirectEventHandler<null, 'paperDirectEventDefinedInlineNullWithPaperName'>);
  readonly onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
  readonly onBubblingEventDefinedInlineNullOptionalKey?: BubblingEventHandler<null>;
  readonly onBubblingEventDefinedInlineNullOptionalValue: (undefined | null | BubblingEventHandler<null>);
  readonly onBubblingEventDefinedInlineNullOptionalBoth?: (undefined | null | BubblingEventHandler<null>);
  readonly onBubblingEventDefinedInlineNullWithPaperName?: (undefined | null | BubblingEventHandler<null, 'paperBubblingEventDefinedInlineNullWithPaperName'>);
}

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


