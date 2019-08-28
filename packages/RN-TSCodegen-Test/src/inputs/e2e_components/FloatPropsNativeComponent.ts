
// Automatically generated from FloatPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Float} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

import {ViewProps} from '../../lib/../../../../../Libraries/Components/View/ViewPropTypes';

import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';

type NativeProps = Readonly<ViewProps & {
  blurRadius: Float;
  blurRadius2?: WithDefault<Float, 0.001>;
  blurRadius3?: WithDefault<Float, 2.1>;
  blurRadius4?: WithDefault<Float, 0>;
  blurRadius5?: WithDefault<Float, 1>;
  blurRadius6?: WithDefault<Float, -0.0>;
}>;

export default (codegenNativeComponent<NativeProps>('FloatPropsNativeComponentView') as NativeComponentType<NativeProps>);


