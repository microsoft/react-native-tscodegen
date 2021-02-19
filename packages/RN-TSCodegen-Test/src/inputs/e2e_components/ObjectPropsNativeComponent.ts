
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from ObjectPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {Float} from 'react-native-tscodegen-types';
import {Int32} from 'react-native-tscodegen-types';
import {ReactNull} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {ImageSource} from 'react-native-tscodegen-types';
import {ColorValue} from 'react-native-tscodegen-types';
import {PointValue} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {HostComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
'use strict';

import {ColorValue} from '../../lib/../../../../../Libraries/StyleSheet/StyleSheet';

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
    point: (ReactNull | PointValue);
  }>;
}>;

export default (codegenNativeComponent<NativeProps>('ObjectPropsNativeComponent') as HostComponent<NativeProps>);


