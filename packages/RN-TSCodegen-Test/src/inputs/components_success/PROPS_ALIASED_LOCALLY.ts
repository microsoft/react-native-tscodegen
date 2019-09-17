
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/PROPS_ALIASED_LOCALLY.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
'use strict';

type DeepSpread = Readonly<{
  otherStringProp: string;
}>;

export type PropsInFile = Readonly<DeepSpread & {
  isEnabled: boolean;
  label: string;
}>;

export type ModuleProps = Readonly<ViewProps & PropsInFile & {
  localType: Readonly<PropsInFile & {
  }>;
  localArr: ReadonlyArray<PropsInFile>;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


