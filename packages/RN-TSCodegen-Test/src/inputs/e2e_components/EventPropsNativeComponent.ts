
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from EventPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)

import {BubblingEventHandler} from 'react-native-tscodegen-types';
import {DirectEventHandler} from 'react-native-tscodegen-types';
import {Float} from 'react-native-tscodegen-types';
import {Int32} from 'react-native-tscodegen-types';
import {ReactNull} from 'react-native-tscodegen-types';
import {WithDefault} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {HostComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
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

export default (codegenNativeComponent<NativeProps>('EventPropsNativeComponentView') as HostComponent<NativeProps>);


