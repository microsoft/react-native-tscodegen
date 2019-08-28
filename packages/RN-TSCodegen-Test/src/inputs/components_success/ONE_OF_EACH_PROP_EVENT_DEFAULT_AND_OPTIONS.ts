
// Automatically generated from components_success/ONE_OF_EACH_PROP_EVENT_DEFAULT_AND_OPTIONS.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {BubblingEventHandler} from '../../lib/CodegenTypes';
import {DirectEventHandler} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type ModuleProps = Readonly<ViewProps & {
  boolean_default_true_optional_both?: WithDefault<boolean, true>;
  onDirectEventDefinedInlineNull: DirectEventHandler<null>;
  onBubblingEventDefinedInlineNull: BubblingEventHandler<null>;
}>;

export default (codegenNativeComponent<ModuleProps>('Module', {
  interfaceOnly: true,
  paperComponentName: 'RCTModule'
}) as NativeComponent<ModuleProps>);


