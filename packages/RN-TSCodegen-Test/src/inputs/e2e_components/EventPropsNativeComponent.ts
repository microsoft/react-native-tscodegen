
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from EventPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {WithDefault} from 'react-native/Libraries/Types/CodegenTypes';
type OnChangeEvent = Readonly<{
  value: boolean;
  source?: string;
  progress: (undefined | null | Int32);
  scale?: (undefined | null | Float);
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
  onChange?: (undefined | null | BubblingEventHandler<OnChangeEvent, 'paperDirectName'>);
  onEventDirect?: (undefined | null | DirectEventHandler<OnEventDirect>);
  onEventDirectWithPaperName?: (undefined | null | DirectEventHandler<OnEventDirect, 'paperDirectName'>);
  onOrientationChange?: (undefined | null | DirectEventHandler<OnOrientationChangeEvent, 'paperBubblingName'>);
  onEnd?: (undefined | null | BubblingEventHandler<null>);
  onEventBubblingWithPaperName?: (undefined | null | BubblingEventHandler<null, 'paperBubblingName'>);
}>;

export default (codegenNativeComponent<NativeProps>('EventPropsNativeComponentView') as HostComponent<NativeProps>);


