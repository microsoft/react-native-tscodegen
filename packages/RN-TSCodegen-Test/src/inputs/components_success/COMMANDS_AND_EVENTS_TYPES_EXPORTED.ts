
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
import {ReactNull} from 'react-native-tscodegen-types';
import * as React from 'react';
'use strict';

export type EventInFile = Readonly<{
  boolean_required: boolean;
  boolean_optional_key?: boolean;
  boolean_optional_value: (ReactNull | boolean);
  boolean_optional_both?: (ReactNull | boolean);
  string_required: string;
  string_optional_key?: string;
  string_optional_value: (ReactNull | string);
  string_optional_both?: (ReactNull | string);
  double_required: Double;
  double_optional_key?: Double;
  double_optional_value: (ReactNull | Double);
  double_optional_both?: (ReactNull | Double);
  float_required: Float;
  float_optional_key?: Float;
  float_optional_value: (ReactNull | Float);
  float_optional_both?: (ReactNull | Float);
  int32_required: Int32;
  int32_optional_key?: Int32;
  int32_optional_value: (ReactNull | Int32);
  int32_optional_both?: (ReactNull | Int32);
  enum_required: ('small' | 'large');
  enum_optional_key?: ('small' | 'large');
  enum_optional_value: (ReactNull | ('small' | 'large'));
  enum_optional_both?: (ReactNull | ('small' | 'large'));
  object_required: {
    boolean_required: boolean;
  };
  object_optional_key?: {
    string_optional_key?: string;
  };
  object_optional_value: (ReactNull | {
    float_optional_value: (ReactNull | Float);
  });
  object_optional_both?: (ReactNull | {
    int32_optional_both?: (ReactNull | Int32);
  });
  object_required_nested_2_layers: {
    object_optional_nested_1_layer?: (ReactNull | {
      boolean_required: Int32;
      string_optional_key?: string;
      double_optional_value: (ReactNull | Double);
      float_optional_value: (ReactNull | Float);
      int32_optional_both?: (ReactNull | Int32);
    });
  };
  object_readonly_required: Readonly<{
    boolean_required: boolean;
  }>;
  object_readonly_optional_key?: Readonly<{
    string_optional_key?: string;
  }>;
  object_readonly_optional_value: (ReactNull | Readonly<{
    float_optional_value: (ReactNull | Float);
  }>);
  object_readonly_optional_both?: (ReactNull | Readonly<{
    int32_optional_both?: (ReactNull | Int32);
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


