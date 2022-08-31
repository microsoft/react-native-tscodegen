
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/COMMANDS_DEFINED_WITH_ALL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import {Double} from 'react-native/Libraries/Types/CodegenTypes';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {RootTag} from 'react-native-tscodegen-types';
import * as React from 'react';
'use strict';

export type ModuleProps = Readonly<ViewProps & {
}>;

type NativeType = HostComponent<ModuleProps>;

interface NativeCommands {
  handleRootTag(viewRef: React.ElementRef<NativeType>, rootTag: RootTag): void;
  hotspotUpdate(viewRef: React.ElementRef<NativeType>, x: Int32, y: Int32): void;
  scrollTo(viewRef: React.ElementRef<NativeType>, x: Float, y: Int32, z: Double, animated: boolean): void;
}

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['handleRootTag', 'hotspotUpdate', 'scrollTo']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeType);


