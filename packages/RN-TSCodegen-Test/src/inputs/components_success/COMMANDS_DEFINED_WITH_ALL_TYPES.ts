
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/COMMANDS_DEFINED_WITH_ALL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {Float} from 'react-native-tscodegen-types';
import {Double} from 'react-native-tscodegen-types';
import {Int32} from 'react-native-tscodegen-types';
import {React} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {HostComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
import {codegenNativeCommands} from 'react-native-tscodegen-types';
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


