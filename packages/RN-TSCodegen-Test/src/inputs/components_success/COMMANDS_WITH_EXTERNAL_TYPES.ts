
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/COMMANDS_WITH_EXTERNAL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {Int32} from 'react-native-tscodegen-types';
import {React} from 'react-native-tscodegen-types';
import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import codegenNativeCommands from '../../lib/codegenNativeCommands';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

export type Boolean = boolean;

export type Int = Int32;

export type Void = void;

export type ModuleProps = Readonly<ViewProps & {
}>;

type NativeType = NativeComponent<ModuleProps>;

export type ScrollTo = (viewRef: React.ElementRef<NativeType>, y: Int, animated: Boolean) => Void;

interface NativeCommands {
  readonly scrollTo: ScrollTo;
}

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['scrollTo']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeType);


