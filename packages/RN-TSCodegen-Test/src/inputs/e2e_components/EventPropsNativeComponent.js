
// Automatically copied from EventPropsNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

import type {
  Int32,
  Float,
  BubblingEventHandler,
  DirectEventHandler,
  WithDefault,
} from '../../../../../Libraries/Types/CodegenTypes';
import type {ViewProps} from '../../../../../Libraries/Components/View/ViewPropTypes';
import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';
import type {HostComponent} from '../../../../../Libraries/Renderer/shims/ReactNativeTypes';

type OnChangeEvent = $ReadOnly<{|
  value: boolean,
  source?: string,
  progress: ?Int32,
  scale?: ?Float,
|}>;

type OnEventDirect = $ReadOnly<{|
  value: boolean,
|}>;

type OnOrientationChangeEvent = $ReadOnly<{|
  orientation: 'landscape' | 'portrait',
|}>;

type NativeProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  disabled?: WithDefault<boolean, false>,

  // Events
  onChange?: ?BubblingEventHandler<OnChangeEvent, 'paperDirectName'>,
  onEventDirect?: ?DirectEventHandler<OnEventDirect>,
  onEventDirectWithPaperName?: ?DirectEventHandler<
    OnEventDirect,
    'paperDirectName',
  >,
  onOrientationChange?: ?DirectEventHandler<
    OnOrientationChangeEvent,
    'paperBubblingName',
  >,
  onEnd?: ?BubblingEventHandler<null>,
  onEventBubblingWithPaperName?: ?BubblingEventHandler<
    null,
    'paperBubblingName',
  >,
|}>;

export default (codegenNativeComponent<NativeProps>(
  'EventPropsNativeComponentView',
): HostComponent<NativeProps>);
