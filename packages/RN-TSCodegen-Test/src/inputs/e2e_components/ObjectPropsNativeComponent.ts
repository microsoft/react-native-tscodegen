
// Automatically generated from ObjectPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Float} from '../../lib/CodegenTypes';
import {Int32} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ImageSource} from '../../lib/ImageSource';
import {ColorValue} from '../../lib/StyleSheetTypes';
import {PointValue} from '../../lib/StyleSheetTypes';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

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


