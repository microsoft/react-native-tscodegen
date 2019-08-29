
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/EVENTS_DEFINED_AS_NULL_INLINE.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {BubblingEventHandler} from '../../lib/CodegenTypes';
import {DirectEventHandler} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
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

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


