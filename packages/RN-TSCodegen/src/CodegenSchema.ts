
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from react-native/packages/react-native-codegen/src/CodegenSchema.js

'use strict';

export type PlatformType =
  | 'iOS'
  | 'android';

export type CommandsFunctionTypeAnnotation = Readonly<{
  type: 'FunctionTypeAnnotation';
  params: ReadonlyArray<CommandsFunctionTypeParamAnnotation>;
}>;

export type CommandsFunctionTypeParamAnnotation = Readonly<{
  name: string;
  typeAnnotation: CommandsTypeAnnotation;
}>;

export type CommandsTypeAnnotation =
  | ReservedFunctionValueTypeAnnotation
  | BooleanTypeAnnotation
  | Int32TypeAnnotation
  | DoubleTypeAnnotation
  | FloatTypeAnnotation
  | StringTypeAnnotation;

export type ReservedFunctionValueTypeAnnotation = Readonly<{
  type: 'ReservedFunctionValueTypeAnnotation';
  name: ReservedFunctionValueTypeName;
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

export type EventObjectPropertyType =
  | Readonly<{
      type: 'BooleanTypeAnnotation';
      name: string;
      optional: boolean;
    }>
  | Readonly<{
      type: 'StringTypeAnnotation';
      name: string;
      optional: boolean;
    }>
  | Readonly<{
      type: 'DoubleTypeAnnotation';
      name: string;
      optional: boolean;
    }>
  | Readonly<{
      type: 'FloatTypeAnnotation';
      name: string;
      optional: boolean;
    }>
  | Readonly<{
      type: 'Int32TypeAnnotation';
      name: string;
      optional: boolean;
    }>
  | Readonly<{
      type: 'StringEnumTypeAnnotation';
      name: string;
      optional: boolean;
      options: ReadonlyArray<{
        name: string;
      }>;
    }>
  | Readonly<{
      type: 'ObjectTypeAnnotation';
      name: string;
      optional: boolean;
      properties: ReadonlyArray<EventObjectPropertyType>;
    }>;

export type PropTypeTypeAnnotation =
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
      options: ReadonlyArray<{
        name: string;
      }>;
    }>
  | Readonly<{
      type: 'Int32EnumTypeAnnotation';
      default: number;
      options: ReadonlyArray<{
        value: number;
      }>;
    }>
  | Readonly<{
      type: 'ReservedPropTypeAnnotation';
      name:
        | 'ColorPrimitive'
        | 'ImageSourcePrimitive'
        | 'PointPrimitive'
        | 'EdgeInsetsPrimitive';
    }>
  | Readonly<{
      type: 'ObjectTypeAnnotation';
      properties: ReadonlyArray<PropTypeShape>;
    }>
  | Readonly<{
      type: 'ArrayTypeAnnotation';
      elementType:
        | Readonly<{
            type: 'BooleanTypeAnnotation';
          }>
        | Readonly<{
            type: 'StringTypeAnnotation';
          }>
        | Readonly<{
            type: 'DoubleTypeAnnotation';
          }>
        | Readonly<{
            type: 'FloatTypeAnnotation';
          }>
        | Readonly<{
            type: 'Int32TypeAnnotation';
          }>
        | Readonly<{
            type: 'StringEnumTypeAnnotation';
            default: string;
            options: ReadonlyArray<{
              name: string;
            }>;
          }>
        | Readonly<{
            type: 'ObjectTypeAnnotation';
            properties: ReadonlyArray<PropTypeShape>;
          }>
        | Readonly<{
            type: 'ReservedPropTypeAnnotation';
            name:
              | 'ColorPrimitive'
              | 'ImageSourcePrimitive'
              | 'PointPrimitive'
              | 'EdgeInsetsPrimitive';
          }>
        | Readonly<{
            type: 'ArrayTypeAnnotation';
            elementType: Readonly<{
              type: 'ObjectTypeAnnotation';
              properties: ReadonlyArray<PropTypeShape>;
            }>;
          }>;
    }>;

export type PropTypeShape = Readonly<{
  name: string;
  optional: boolean;
  typeAnnotation: PropTypeTypeAnnotation;
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
    argument?: Readonly<{
      type: 'ObjectTypeAnnotation';
      properties: ReadonlyArray<EventObjectPropertyType>;
    }>;
  }>;
}>;

export type CommandTypeShape = Readonly<{
  name: string;
  optional: boolean;
  typeAnnotation: CommandsFunctionTypeAnnotation;
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

export type ComponentShape = Readonly<OptionsShape & {
  extendsProps: ReadonlyArray<ExtendsPropsShape>;
  events: ReadonlyArray<EventTypeShape>;
  props: ReadonlyArray<PropTypeShape>;
  commands: ReadonlyArray<CommandTypeShape>;
}>;

export type SchemaType = Readonly<{
  modules: Readonly<{
    [hasteModuleName: string]: ComponentSchema | NativeModuleSchema;
  }>;
}>;

export type ComponentSchema = Readonly<{
  type: 'Component';
  components: Readonly<{
    [componentName: string]: ComponentShape;
  }>;
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
  properties: ReadonlyArray<NativeModulePropertySchema>;
}>;

export type NativeModulePropertySchema = Readonly<{
  name: string;
  optional: boolean;
  typeAnnotation: Nullable<NativeModuleFunctionTypeAnnotation>;
}>;

export type NativeModuleAliasMap = Readonly<{
  [aliasName: string]: NativeModuleObjectTypeAnnotation;
}>;

export type NativeModuleFunctionTypeAnnotation = Readonly<{
  type: 'FunctionTypeAnnotation';
  params: ReadonlyArray<NativeModuleMethodParamSchema>;
  returnTypeAnnotation: Nullable<NativeModuleReturnTypeAnnotation>;
}>;

export type NativeModuleMethodParamSchema = Readonly<{
  name: string;
  optional: boolean;
  typeAnnotation: Nullable<NativeModuleParamTypeAnnotation>;
}>;

export type NativeModuleObjectTypeAnnotation = Readonly<{
  type: 'ObjectTypeAnnotation';
  properties: ReadonlyArray<NativeModuleObjectTypeAnnotationPropertySchema>;
}>;

export type NativeModuleObjectTypeAnnotationPropertySchema = Readonly<{
  name: string;
  optional: boolean;
  typeAnnotation: Nullable<NativeModuleBaseTypeAnnotation>;
}>;

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

export type NativeModuleReservedFunctionValueTypeAnnotation = Readonly<{
  type: 'ReservedFunctionValueTypeAnnotation';
  name: ReservedFunctionValueTypeName;
}>;

export type NativeModuleTypeAliasTypeAnnotation = Readonly<{
  type: 'TypeAliasTypeAnnotation';
  name: string;
}>;

export type NativeModulePromiseTypeAnnotation = Readonly<{
  type: 'PromiseTypeAnnotation';
}>;

export type NativeModuleVoidTypeAnnotation = Readonly<{
  type: 'VoidTypeAnnotation';
}>;

export type NativeModuleBaseTypeAnnotation =
  | NativeModuleStringTypeAnnotation
  | NativeModuleNumberTypeAnnotation
  | NativeModuleInt32TypeAnnotation
  | NativeModuleDoubleTypeAnnotation
  | NativeModuleFloatTypeAnnotation
  | NativeModuleBooleanTypeAnnotation
  | NativeModuleGenericObjectTypeAnnotation
  | NativeModuleReservedFunctionValueTypeAnnotation
  | NativeModuleTypeAliasTypeAnnotation
  | NativeModuleArrayTypeAnnotation<Nullable<NativeModuleBaseTypeAnnotation>>
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
  | NativeModuleVoidTypeAnnotation;

export type ReservedFunctionValueTypeName = 'RootTag';

