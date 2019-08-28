
// Automatically generated from EventNestedObjectPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {BubblingEventHandler} from '../../lib/CodegenTypes';
import {Int32} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

import {ViewProps} from '../../lib/../../../../../Libraries/Components/View/ViewPropTypes';

import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';

type OnChangeEvent = Readonly<{
  location: {
    source: {
      url: string;
    };
    x: Int32;
    y: Int32;
  };
}>;

type NativeProps = Readonly<ViewProps & {
  disabled?: WithDefault<boolean, false>;
  onChange?: (ReactNull | BubblingEventHandler<OnChangeEvent>);
}>;

export default (codegenNativeComponent<NativeProps>('EventNestedObjectPropsNativeComponentView') as NativeComponentType<NativeProps>);


