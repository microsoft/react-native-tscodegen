
// Automatically generated from InterfaceOnlyNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {BubblingEventHandler} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type NativeProps = Readonly<ViewProps & {
  accessibilityHint?: WithDefault<string, ''>;
  onChange?: (ReactNull | BubblingEventHandler<Readonly<{
    value: boolean;
  }>>);
}>;

export default (codegenNativeComponent<NativeProps>('InterfaceOnlyNativeComponentView', {
  interfaceOnly: true,
  paperComponentName: 'RCTInterfaceOnlyComponent'
}) as NativeComponentType<NativeProps>);


