
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_failure/COMMANDS_DEFINED_WITH_NULLABLE_REF.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/failures.js)

import {Int32} from 'react-native-tscodegen-types';
import {ReactNull} from 'react-native-tscodegen-types';
import {React} from 'react-native-tscodegen-types';
import {ViewProps} from 'react-native-tscodegen-types';
import {NativeComponent} from 'react-native-tscodegen-types';
import {codegenNativeComponent} from 'react-native-tscodegen-types';
import {codegenNativeCommands} from 'react-native-tscodegen-types';
'use strict';

interface NativeCommands {
  hotspotUpdate(viewRef: (ReactNull | React.Ref<'RCTView'>), x: Int32, y: Int32): void;
}

export type ModuleProps = Readonly<ViewProps & {
}>;

export const Commands = codegenNativeCommands<NativeCommands>({
  supportedCommands: ['hotspotUpdate']
});

export default (codegenNativeComponent<ModuleProps>('Module') as NativeComponent<ModuleProps>);


