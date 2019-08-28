
// Automatically generated from ArrayPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Float} from '../../lib/CodegenTypes';
import {Int32} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

import {PointValue, ColorValue} from '../../lib/../../../../../Libraries/StyleSheet/StyleSheetTypes';

import {ImageSource} from '../../lib/../../../../../Libraries/Image/ImageSource';

import {ViewProps} from '../../lib/../../../../../Libraries/Components/View/ViewPropTypes';

import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';

type NativeProps = Readonly<ViewProps & {
  names?: ReadonlyArray<string>;
  disableds?: ReadonlyArray<boolean>;
  progress?: ReadonlyArray<Int32>;
  radii?: ReadonlyArray<Float>;
  colors?: ReadonlyArray<ColorValue>;
  srcs?: ReadonlyArray<ImageSource>;
  points?: ReadonlyArray<PointValue>;
  sizes?: WithDefault<ReadonlyArray<'small' | 'large'>, 'small'>;
  object?: ReadonlyArray<Readonly<{
    prop: string;
  }>>;
}>;

export default (codegenNativeComponent<NativeProps>('ArrayPropsNativeComponentView') as NativeComponentType<NativeProps>);


