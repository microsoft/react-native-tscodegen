
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/COMMANDS_DEFINED_WITH_MISMATCHED_METHOD_NAMES.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {Int32} from 'react-native-tscodegen-types';
import {React} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
import {codegenNativeCommands} from 'react-native-tscodegen-types';
'use strict';

import {HostComponent} from '../../lib/react-native';

interface NativeCommands {
  hotspotUpdate(viewRef: React.Ref<'RCTView'>, x: Int32, y: Int32): void;
  scrollTo(viewRef: React.Ref<'RCTView'>, y: Int32, animated: boolean): void;
}

export type ModuleProps = Readonly<ViewProps & {
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['scrollTo']
});

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


