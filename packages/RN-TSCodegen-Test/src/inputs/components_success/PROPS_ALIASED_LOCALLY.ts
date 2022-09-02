
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/PROPS_ALIASED_LOCALLY.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
'use strict';

interface DeepSpread {
  readonly otherStringProp: string;
}

export interface PropsInFile extends DeepSpread {
  readonly isEnabled: boolean;
  readonly label: string;
}

export type ModuleProps = Readonly<ViewProps & PropsInFile & {
  localType: Readonly<PropsInFile & {
  }>;
  localArr: ReadonlyArray<PropsInFile>;
}>;

export default (codegenNativeComponent<ModuleProps>('Module') as HostComponent<ModuleProps>);


