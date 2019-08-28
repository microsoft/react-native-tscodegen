
// Automatically generated from EnumPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {WithDefault} from '../../lib/CodegenTypes';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

import {ViewProps} from '../../lib/../../../../../Libraries/Components/View/ViewPropTypes';

import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';

type NativeProps = Readonly<ViewProps & {
  alignment?: WithDefault<'top' | 'center' | 'bottom-right', 'center'>;
}>;

export default (codegenNativeComponent<NativeProps>('EnumPropNativeComponentView') as NativeComponentType<NativeProps>);


