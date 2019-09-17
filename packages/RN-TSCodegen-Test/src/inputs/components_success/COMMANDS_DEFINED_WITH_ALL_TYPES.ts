
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/COMMANDS_DEFINED_WITH_ALL_TYPES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {Float} from 'react-native-tscodegen-types';
import {Double} from 'react-native-tscodegen-types';
import {Int32} from 'react-native-tscodegen-types';
import * as React from '../../lib/React';
import {NativeComponent} from '../../lib/codegenNativeComponent';
import codegenNativeComponent from '../../lib/codegenNativeComponent';
import codegenNativeCommands from '../../lib/codegenNativeCommands';
import {ViewProps} from '../../lib/ViewPropTypes';
'use strict';

export type ModuleProps = Readonly<ViewProps & {
}>;

type NativeType = NativeComponent<ModuleProps>;

interface NativeCommands {
  hotspotUpdate(viewRef: React.ElementRef<NativeType>, x: Int32, y: Int32): void;
  scrollTo(viewRef: React.ElementRef<NativeType>, x: Float, y: Int32, z: Double, animated: boolean): void;
}

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate', 'scrollTo']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeType);


