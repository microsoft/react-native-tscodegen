
// Automatically copied from PointPropNativeComponent.js
// (/react-native/packages/react-native-codegen/e2e/__test_fixtures__)
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

import type {PointValue} from '../../../../../Libraries/StyleSheet/StyleSheetTypes';
import type {ViewProps} from '../../../../../Libraries/Components/View/ViewPropTypes';
import codegenNativeComponent from '../../../../../Libraries/Utilities/codegenNativeComponent';
import type {HostComponent} from '../../../../../Libraries/Renderer/shims/ReactNativeTypes';

type NativeProps = $ReadOnly<{|
  ...ViewProps,

  // Props
  startPoint?: PointValue,
|}>;

export default (codegenNativeComponent<NativeProps>(
  'PointPropNativeComponentView',
): HostComponent<NativeProps>);
