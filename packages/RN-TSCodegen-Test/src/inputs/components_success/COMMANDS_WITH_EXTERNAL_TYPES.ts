
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/COMMANDS_WITH_EXTERNAL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import * as React from 'react';
'use strict';

export type Boolean = boolean;

export type Int = Int32;

export type Void = void;

export interface ModuleProps extends ViewProps {
}

type NativeType = HostComponent<ModuleProps>;

export type ScrollTo = (viewRef: React.ElementRef<NativeType>, y: Int, animated: Boolean) => Void;

interface NativeCommands {
  readonly scrollTo: ScrollTo;
}

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['scrollTo']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeType);


