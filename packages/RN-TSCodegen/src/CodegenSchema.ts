
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from react-native/packages/react-native-codegen/src/CodegenSchema.js

'use strict';

export type PlatformType =
  | 'iOS'
  | 'android';

export type SchemaType = Readonly<{
  modules: Readonly<{
    [hasteModuleName: string]: ComponentSchema | NativeModuleSchema;
  }>;
}>;

export type DoubleTypeAnnotation = Readonly<{
  type: 'DoubleTypeAnnotation';
}>;

export type FloatTypeAnnotation = Readonly<{
  type: 'FloatTypeAnnotation';
}>;

export type BooleanTypeAnnotation = Readonly<{
  type: 'BooleanTypeAnnotation';
}>;

export type Int32TypeAnnotation = Readonly<{
  type: 'Int32TypeAnnotation';
}>;

export type StringTypeAnnotation = Readonly<{
  type: 'StringTypeAnnotation';
}>;

export type StringEnumTypeAnnotation = Readonly<{
  type: 'StringEnumTypeAnnotation';
  options: ReadonlyArray<string>;
}>;

export type VoidTypeAnnotation = Readonly<{
  type: 'VoidTypeAnnotation';
}>;

export type ObjectTypeAnnotation<T> = Readonly<{
  type: 'ObjectTypeAnnotation';
  properties: ReadonlyArray<NamedShape<T>>;
}>;

export type FunctionTypeAnnotation<P, R> = Readonly<{
  type: 'FunctionTypeAnnotation';
  params: ReadonlyArray<NamedShape<P>>;
  returnTypeAnnotation: R;
}>;

export type NamedShape<T> = Readonly<{
  name: string;
  optional: boolean;
  typeAnnotation: T;
}>;

export type ComponentSchema = Readonly<{
  type: 'Component';
  components: Readonly<{
    [componentName: string]: ComponentShape;
  }>;
}>;

export type ComponentShape = Readonly<OptionsShape & {
  extendsProps: ReadonlyArray<ExtendsPropsShape>;
  events: ReadonlyArray<EventTypeShape>;
  props: ReadonlyArray<NamedShape<PropTypeAnnotation>>;
  commands: ReadonlyArray<NamedShape<CommandTypeAnnotation>>;
}>;

export type OptionsShape = Readonly<{
  interfaceOnly?: boolean;
  paperComponentName?: string;
  excludedPlatforms?: ReadonlyArray<PlatformType>;
  paperComponentNameDeprecated?: string;
}>;

export type ExtendsPropsShape = Readonly<{
  type: 'ReactNativeBuiltInType';
  knownTypeName: 'ReactNativeCoreViewProps';
}>;

export type EventTypeShape = Readonly<{
  name: string;
  bubblingType:
    | 'direct'
    | 'bubble';
  optional: boolean;
  paperTopLevelNameDeprecated?: string;
  typeAnnotation: Readonly<{
    type: 'EventTypeAnnotation';
    argument?: ObjectTypeAnnotation<EventTypeAnnotation>;
  }>;
}>;

export interface ObjectTypeAnnotation_EventTypeAnnotation extends ObjectTypeAnnotation<EventTypeAnnotation> {}

export type EventTypeAnnotation =
  | BooleanTypeAnnotation
  | StringTypeAnnotation
  | DoubleTypeAnnotation
  | FloatTypeAnnotation
  | Int32TypeAnnotation
  | StringEnumTypeAnnotation
  | ObjectTypeAnnotation_EventTypeAnnotation;

export interface ObjectTypeAnnotation_PropTypeAnnotation extends ObjectTypeAnnotation<PropTypeAnnotation> {}

export type PropTypeAnnotation =
  | Readonly<{
      type: 'BooleanTypeAnnotation';
      default:
        | boolean
        | null;
    }>
  | Readonly<{
      type: 'StringTypeAnnotation';
      default:
        | string
        | null;
    }>
  | Readonly<{
      type: 'DoubleTypeAnnotation';
      default: number;
    }>
  | Readonly<{
      type: 'FloatTypeAnnotation';
      default:
        | number
        | null;
    }>
  | Readonly<{
      type: 'Int32TypeAnnotation';
      default: number;
    }>
  | Readonly<{
      type: 'StringEnumTypeAnnotation';
      default: string;
      options: ReadonlyArray<string>;
    }>
  | Readonly<{
      type: 'Int32EnumTypeAnnotation';
      default: number;
      options: ReadonlyArray<number>;
    }>
  | ReservedPropTypeAnnotation
  | ObjectTypeAnnotation_PropTypeAnnotation
  | Readonly<{
      type: 'ArrayTypeAnnotation';
      elementType:
        | BooleanTypeAnnotation
        | StringTypeAnnotation
        | DoubleTypeAnnotation
        | FloatTypeAnnotation
        | Int32TypeAnnotation
        | Readonly<{
            type: 'StringEnumTypeAnnotation';
            default: string;
            options: ReadonlyArray<string>;
          }>
        | ObjectTypeAnnotation<PropTypeAnnotation>
        | ReservedPropTypeAnnotation
        | Readonly<{
            type: 'ArrayTypeAnnotation';
            elementType: ObjectTypeAnnotation<PropTypeAnnotation>;
          }>;
    }>;

export type ReservedPropTypeAnnotation = Readonly<{
  type: 'ReservedPropTypeAnnotation';
  name:
    | 'ColorPrimitive'
    | 'ImageSourcePrimitive'
    | 'PointPrimitive'
    | 'EdgeInsetsPrimitive';
}>;

export type CommandTypeAnnotation = FunctionTypeAnnotation<CommandParamTypeAnnotation, VoidTypeAnnotation>;

export type CommandParamTypeAnnotation =
  | ReservedTypeAnnotation
  | BooleanTypeAnnotation
  | Int32TypeAnnotation
  | DoubleTypeAnnotation
  | FloatTypeAnnotation
  | StringTypeAnnotation;

export type ReservedTypeAnnotation = Readonly<{
  type: 'ReservedTypeAnnotation';
  name: 'RootTag';
}>;

export type Nullable<T extends NativeModuleTypeAnnotation> =
  | NullableTypeAnnotation<T>
  | T;

export type NullableTypeAnnotation<T extends NativeModuleTypeAnnotation> = Readonly<{
  type: 'NullableTypeAnnotation';
  typeAnnotation: T;
}>;

export type NativeModuleSchema = Readonly<{
  type: 'NativeModule';
  aliases: NativeModuleAliasMap;
  spec: NativeModuleSpec;
  moduleNames: ReadonlyArray<string>;
  excludedPlatforms?: ReadonlyArray<PlatformType>;
}>;

export type NativeModuleSpec = Readonly<{
  properties: ReadonlyArray<NativeModulePropertyShape>;
}>;

export type NativeModulePropertyShape = NamedShape<Nullable<NativeModuleFunctionTypeAnnotation>>;

export type NativeModuleAliasMap = Readonly<{
  [aliasName: string]: NativeModuleObjectTypeAnnotation;
}>;

export interface NativeModuleFunctionTypeAnnotation extends FunctionTypeAnnotation<Nullable<NativeModuleParamTypeAnnotation>, Nullable<NativeModuleReturnTypeAnnotation>> {}

export interface NativeModuleObjectTypeAnnotation extends ObjectTypeAnnotation<Nullable<NativeModuleBaseTypeAnnotation>> {}

export type NativeModuleArrayTypeAnnotation<T extends Nullable<NativeModuleBaseTypeAnnotation>> = Readonly<{
  type: 'ArrayTypeAnnotation';
  elementType?: T;
}>;

export type NativeModuleStringTypeAnnotation = Readonly<{
  type: 'StringTypeAnnotation';
}>;

export type NativeModuleNumberTypeAnnotation = Readonly<{
  type: 'NumberTypeAnnotation';
}>;

export type NativeModuleInt32TypeAnnotation = Readonly<{
  type: 'Int32TypeAnnotation';
}>;

export type NativeModuleDoubleTypeAnnotation = Readonly<{
  type: 'DoubleTypeAnnotation';
}>;

export type NativeModuleFloatTypeAnnotation = Readonly<{
  type: 'FloatTypeAnnotation';
}>;

export type NativeModuleBooleanTypeAnnotation = Readonly<{
  type: 'BooleanTypeAnnotation';
}>;

export type NativeModuleGenericObjectTypeAnnotation = Readonly<{
  type: 'GenericObjectTypeAnnotation';
}>;

export type NativeModuleTypeAliasTypeAnnotation = Readonly<{
  type: 'TypeAliasTypeAnnotation';
  name: string;
}>;

export type NativeModulePromiseTypeAnnotation = Readonly<{
  type: 'PromiseTypeAnnotation';
}>;

export interface NativeModuleArrayTypeAnnotation_Nullable_NativeModuleBaseTypeAnnotation extends NativeModuleArrayTypeAnnotation<Nullable<NativeModuleBaseTypeAnnotation>> {}

export type NativeModuleBaseTypeAnnotation =
  | NativeModuleStringTypeAnnotation
  | NativeModuleNumberTypeAnnotation
  | NativeModuleInt32TypeAnnotation
  | NativeModuleDoubleTypeAnnotation
  | NativeModuleFloatTypeAnnotation
  | NativeModuleBooleanTypeAnnotation
  | NativeModuleGenericObjectTypeAnnotation
  | ReservedTypeAnnotation
  | NativeModuleTypeAliasTypeAnnotation
  | NativeModuleArrayTypeAnnotation_Nullable_NativeModuleBaseTypeAnnotation
  | NativeModuleObjectTypeAnnotation;

export type NativeModuleParamTypeAnnotation =
  | NativeModuleBaseTypeAnnotation
  | NativeModuleParamOnlyTypeAnnotation;

export type NativeModuleReturnTypeAnnotation =
  | NativeModuleBaseTypeAnnotation
  | NativeModuleReturnOnlyTypeAnnotation;

export type NativeModuleTypeAnnotation =
  | NativeModuleBaseTypeAnnotation
  | NativeModuleParamOnlyTypeAnnotation
  | NativeModuleReturnOnlyTypeAnnotation;

export type NativeModuleParamOnlyTypeAnnotation = NativeModuleFunctionTypeAnnotation;

export type NativeModuleReturnOnlyTypeAnnotation =
  | NativeModulePromiseTypeAnnotation
  | VoidTypeAnnotation;
