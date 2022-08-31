
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/COMMANDS_DEFINED_WITHOUT_REF.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
import {codegenNativeCommands} from 'react-native-tscodegen-types';
'use strict';

interface NativeCommands {
  hotspotUpdate(x: Int32, y: Int32): void;
}

export type ModuleProps = Readonly<ViewProps & {
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate']
});

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


