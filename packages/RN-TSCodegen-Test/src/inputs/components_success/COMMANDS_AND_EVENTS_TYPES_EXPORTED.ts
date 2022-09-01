
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

export type EventInFile = Readonly<{
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: (undefined | null | boolean);
  boolean_optional_both?: (undefined | null | boolean);
  string_required: string;
  string_optional_key?: string;
  string_optional_value: (undefined | null | string);
  string_optional_both?: (undefined | null | string);
  double_required: Double;
  double_optional_key?: Double;
  double_optional_value: (undefined | null | Double);
  double_optional_both?: (undefined | null | Double);
  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: (undefined | null | Float);
  float_optional_both?: (undefined | null | Float);
  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: (undefined | null | Int32);
  int32_optional_both?: (undefined | null | Int32);
  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: (undefined | null | ('small' | 'large'));
  enum_optional_both?: (undefined | null | ('small' | 'large'));
  object_required: {
    boolean_required: boolean;
  };
  object_optional_key?: {
    string_optional_key?: string;
  };
  object_optional_value: (undefined | null | {
    float_optional_value: (undefined | null | Float);
  });
  object_optional_both?: (undefined | null | {
    int32_optional_both?: (undefined | null | Int32);
  });
  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: (undefined | null | {
      boolean_required: Int32;
      string_optional_key?: string;
      double_optional_value: (undefined | null | Double);
      float_optional_value: (undefined | null | Float);
      int32_optional_both?: (undefined | null | Int32);
    });
  };
  object_readonly_required: Readonly<{
    boolean_required: boolean;
  }>;
  object_readonly_optional_key?: Readonly<{
    string_optional_key?: string;
  }>;
  object_readonly_optional_value: (undefined | null | Readonly<{
    float_optional_value: (undefined | null | Float);
  }>);
  object_readonly_optional_both?: (undefined | null | Readonly<{
    int32_optional_both?: (undefined | null | Int32);
  }>);
}>;

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


