
// Automatically generated from ObjectPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Float} from '../../lib/CodegenTypes';
import {Int32} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

import {ViewProps} from '../../lib/../../../../../Libraries/Components/View/ViewPropTypes';

import {ImageSource} from '../../lib/../../../../../Libraries/Image/ImageSource';

import {PointValue, ColorValue} from '../../lib/../../../../../Libraries/StyleSheet/StyleSheetTypes';

import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';

type ObjectArrayPropType = Readonly<{
  array: ReadonlyArray<string>;
}>;

type NativeProps = Readonly<ViewProps & {
  objectProp?: Readonly<{
    stringProp?: WithDefault<string, ''>;
    booleanProp: boolean;
    floatProp: Float;
    intProp: Int32;
    stringEnumProp?: WithDefault<'small' | 'large', 'small'>;
  }>;
  objectArrayProp: ObjectArrayPropType;
  objectPrimitiveRequiredProp: Readonly<{
    image: ImageSource;
    color?: ColorValue;
    point: (ReactNull | PointValue);
  }>;
}>;

export default (codegenNativeComponent<NativeProps>('ObjectPropsNativeComponent') as NativeComponentType<NativeProps>);


