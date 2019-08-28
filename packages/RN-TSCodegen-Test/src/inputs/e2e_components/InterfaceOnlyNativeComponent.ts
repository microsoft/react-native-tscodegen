
// Automatically generated from InterfaceOnlyNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {BubblingEventHandler} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

import {ViewProps} from '../../lib/../../../../../Libraries/Components/View/ViewPropTypes';

import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';

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


