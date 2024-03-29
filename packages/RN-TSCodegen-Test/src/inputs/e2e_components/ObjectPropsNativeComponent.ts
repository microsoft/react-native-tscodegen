
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from ObjectPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ColorValue} from 'react-native';
import {ImageSourcePropType as ImageSource} from 'react-native';
import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
import {PointValue} from 'react-native-tscodegen-types';
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
    intEnumProp?: WithDefault<0 | 1, 0>;
  }>;
  objectArrayProp: ObjectArrayPropType;
  objectPrimitiveRequiredProp: Readonly<{
    image: ImageSource;
    color?: ColorValue;
    point: (undefined | null | PointValue);
  }>;
}>;

export default (codegenNativeComponent<NativeProps>('ObjectPropsNativeComponent') as HostComponent<NativeProps>);


