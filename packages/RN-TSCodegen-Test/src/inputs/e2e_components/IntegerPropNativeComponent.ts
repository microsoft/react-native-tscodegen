
// Automatically generated from IntegerPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Int32} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

import {ViewProps} from '../../lib/../../../../../Libraries/Components/View/ViewPropTypes';

import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';

type NativeProps = Readonly<ViewProps & {
  progress1?: WithDefault<Int32, 0>;
  progress2?: WithDefault<Int32, -1>;
  progress3?: WithDefault<Int32, 10>;
}>;

export default (codegenNativeComponent<NativeProps>('IntegerPropNativeComponentView') as NativeComponentType<NativeProps>);


