
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from components_success/COMMANDS_AND_EVENTS_TYPES_EXPORTED.flow.js
// (/react-native/packages/react-native-codegen/src/parsers/flow/components/__test_fixtures__/fixtures.js)

import {ViewProps} from 'react-native';
import {HostComponent} from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {BubblingEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import {Float} from 'react-native/Libraries/Types/CodegenTypes';
import {Double} from 'react-native/Libraries/Types/CodegenTypes';
import {Int32} from 'react-native/Libraries/Types/CodegenTypes';
import * as React from 'react';
'use strict';

export interface EventInFile {
  readonly boolean_required: boolean;
  readonly boolean_optional_key?: boolean;
  readonly boolean_optional_value: (undefined | null | boolean);
  readonly boolean_optional_both?: (undefined | null | boolean);
  readonly string_required: string;
  readonly string_optional_key?: string;
  readonly string_optional_value: (undefined | null | string);
  readonly string_optional_both?: (undefined | null | string);
  readonly double_required: Double;
  readonly double_optional_key?: Double;
  readonly double_optional_value: (undefined | null | Double);
  readonly double_optional_both?: (undefined | null | Double);
  readonly float_required: Float;
  readonly float_optional_key?: Float;
  readonly float_optional_value: (undefined | null | Float);
  readonly float_optional_both?: (undefined | null | Float);
  readonly int32_required: Int32;
  readonly int32_optional_key?: Int32;
  readonly int32_optional_value: (undefined | null | Int32);
  readonly int32_optional_both?: (undefined | null | Int32);
  readonly enum_required: ('small' | 'large');
  readonly enum_optional_key?: ('small' | 'large');
  readonly enum_optional_value: (undefined | null | ('small' | 'large'));
  readonly enum_optional_both?: (undefined | null | ('small' | 'large'));
  readonly object_required: {
    boolean_required: boolean;
  };
  readonly object_optional_key?: {
    string_optional_key?: string;
  };
  readonly object_optional_value: (undefined | null | {
    float_optional_value: (undefined | null | Float);
  });
  readonly object_optional_both?: (undefined | null | {
    int32_optional_both?: (undefined | null | Int32);
  });
  readonly object_required_nested_2_layers: {
    object_optional_nested_1_layer?: (undefined | null | {
      boolean_required: Int32;
      string_optional_key?: string;
      double_optional_value: (undefined | null | Double);
      float_optional_value: (undefined | null | Float);
      int32_optional_both?: (undefined | null | Int32);
    });
  };
  readonly object_readonly_required: Readonly<{
    boolean_required: boolean;
  }>;
  readonly object_readonly_optional_key?: Readonly<{
    string_optional_key?: string;
  }>;
  readonly object_readonly_optional_value: (undefined | null | Readonly<{
    float_optional_value: (undefined | null | Float);
  }>);
  readonly object_readonly_optional_both?: (undefined | null | Readonly<{
    int32_optional_both?: (undefined | null | Int32);
  }>);
}

export type Boolean = boolean;

export type Int = Int32;

export type Void = void;

export type ModuleProps = Readonly<ViewProps & {
  onBubblingEventDefinedInline: BubblingEventHandler<EventInFile>;
  onBubblingEventDefinedInlineWithPaperName: BubblingEventHandler<EventInFile, 'paperBubblingEventDefinedInlineWithPaperName'>;
  onDirectEventDefinedInline: DirectEventHandler<EventInFile>;
  onDirectEventDefinedInlineWithPaperName: DirectEventHandler<EventInFile, 'paperDirectEventDefinedInlineWithPaperName'>;
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


