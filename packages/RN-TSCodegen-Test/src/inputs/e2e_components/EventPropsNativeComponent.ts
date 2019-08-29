
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from EventPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {BubblingEventHandler} from '../../lib/CodegenTypes';
import {DirectEventHandler} from '../../lib/CodegenTypes';
import {Float} from '../../lib/CodegenTypes';
import {Int32} from '../../lib/CodegenTypes';
import {ReactNull} from '../../lib/CodegenTypes';
import {WithDefault} from '../../lib/CodegenTypes';
import {NativeComponentType} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

type OnChangeEvent = Readonly<{
  value: boolean;
  source?: string;
  progress: (ReactNull | Int32);
  scale?: (ReactNull | Float);
}>;

type OnEventDirect = Readonly<{
  value: boolean;
}>;

type OnOrientationChangeEvent = Readonly<{
  orientation:
    | 'landscape'
    | 'portrait';
}>;

type NativeProps = Readonly<ViewProps & {
  disabled?: WithDefault<boolean, false>;
  onChange?: (ReactNull | BubblingEventHandler<OnChangeEvent, 'paperDirectName'>);
  onEventDirect?: (ReactNull | DirectEventHandler<OnEventDirect>);
  onEventDirectWithPaperName?: (ReactNull | DirectEventHandler<OnEventDirect, 'paperDirectName'>);
  onOrientationChange?: (ReactNull | DirectEventHandler<OnOrientationChangeEvent, 'paperBubblingName'>);
  onEnd?: (ReactNull | BubblingEventHandler<null>);
  onEventBubblingWithPaperName?: (ReactNull | BubblingEventHandler<null, 'paperBubblingName'>);
}>;

export default (codegenNativeComponent<NativeProps>('EventPropsNativeComponentView') as NativeComponentType<NativeProps>);


