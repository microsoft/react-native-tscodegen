
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/COMMANDS_WITH_EXTERNAL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {Int32} from 'react-native-tscodegen-types';
import {React} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
import {codegenNativeCommands} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/react-native';

export type Boolean = boolean;

export type Int = Int32;

export type Void = void;

export type ModuleProps = Readonly<ViewProps & {
}>;

type NativeType = HostComponent<ModuleProps>;

export type ScrollTo = (viewRef: React.ElementRef<NativeType>, y: Int, animated: Boolean) => Void;

interface NativeCommands {
  readonly scrollTo: ScrollTo;
}

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['scrollTo']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeType);


