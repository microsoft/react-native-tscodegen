
// Automatically generated from MultiNativePropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

import {PointValue, ColorValue} from '../../lib/../../../../../Libraries/StyleSheet/StyleSheetTypes';

import {ImageSource} from '../../lib/../../../../../Libraries/Image/ImageSource';

import {ViewProps} from '../../lib/../../../../../Libraries/Components/View/ViewPropTypes';

import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';

type NativeProps = Readonly<ViewProps & {
  thumbImage?: ImageSource;
  color?: ColorValue;
  thumbTintColor?: ColorValue;
  point?: PointValue;
}>;

export default (codegenNativeComponent<NativeProps>('MultiNativePropNativeComponentView') as NativeComponentType<NativeProps>);


