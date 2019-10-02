// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TurboModule, TurboModuleRegistry } from 'react-native-tscodegen-types';

export interface Spec extends TurboModule {
  getHello(name: string): string;
}

// tslint:disable-next-line
export default (TurboModuleRegistry.getEnforcing<Spec>('SampleTurboModule') as Spec);
