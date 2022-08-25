
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from react-native/packages/react-native-codegen/src/CodegenSchema.js
// Targeting react-native 0.70.0-rc.3

'use strict';

export type PlatformType =
  | 'iOS'
  | 'android';

export type SchemaType = {
  readonly modules: {
    [hasteModuleName: string]: ComponentSchema | NativeModuleSchema;
  };
};

export type DoubleTypeAnnotation = {
  readonly type: 'DoubleTypeAnnotation';
};

export type FloatTypeAnnotation = {
  readonly type: 'FloatTypeAnnotation';
};

export type BooleanTypeAnnotation = {
  readonly type: 'BooleanTypeAnnotation';
};

export type Int32TypeAnnotation = {
  readonly type: 'Int32TypeAnnotation';
};

export type StringTypeAnnotation = {
  readonly type: 'StringTypeAnnotation';
};

export type StringEnumTypeAnnotation = {
  readonly type: 'StringEnumTypeAnnotation';
  readonly options: readonly string[];
};

export type VoidTypeAnnotation = {
  readonly type: 'VoidTypeAnnotation';
};

export type ObjectTypeAnnotation<T> = {
  readonly type: 'ObjectTypeAnnotation';
  readonly properties: readonly NamedShape<T>[];
};

export type FunctionTypeAnnotation<P, R> = {
  readonly type: 'FunctionTypeAnnotation';
  readonly params: readonly NamedShape<P>[];
  readonly returnTypeAnnotation: R;
};

export type NamedShape<T> = {
  readonly name: string;
  readonly optional: boolean;
  readonly typeAnnotation: T;
};

export type ComponentSchema = {
  readonly type: 'Component';
  readonly components: {
    [componentName: string]: ComponentShape;
  };
};

export type ComponentShape = OptionsShape & {
  readonly extendsProps: readonly ExtendsPropsShape[];
  readonly events: readonly EventTypeShape[];
  readonly props: readonly NamedShape<PropTypeAnnotation>[];
  readonly commands: readonly NamedShape<CommandTypeAnnotation>[];
};

export type OptionsShape = {
  readonly interfaceOnly?: boolean;
  readonly paperComponentName?: string;
  readonly excludedPlatforms?: readonly PlatformType[];
  readonly paperComponentNameDeprecated?: string;
};

export type ExtendsPropsShape = {
  readonly type: 'ReactNativeBuiltInType';
  readonly knownTypeName: 'ReactNativeCoreViewProps';
};

export type EventTypeShape = {
  readonly name: string;
  readonly bubblingType:
    | 'direct'
    | 'bubble';
  readonly optional: boolean;
  readonly paperTopLevelNameDeprecated?: string;
  readonly typeAnnotation: {
    readonly type: 'EventTypeAnnotation';
    readonly argument?: ObjectTypeAnnotation<EventTypeAnnotation>;
  };
};

export type EventTypeAnnotation =
  | BooleanTypeAnnotation
  | StringTypeAnnotation
  | DoubleTypeAnnotation
  | FloatTypeAnnotation
  | Int32TypeAnnotation
  | StringEnumTypeAnnotation
  | ObjectTypeAnnotation<EventTypeAnnotation>;

export type PropTypeAnnotation =
  | {
      readonly type: 'BooleanTypeAnnotation';
      readonly default:
        | boolean
        | null;
    }
  | {
      readonly type: 'StringTypeAnnotation';
      readonly default:
        | string
        | null;
    }
  | {
      readonly type: 'DoubleTypeAnnotation';
      readonly default: number;
    }
  | {
      readonly type: 'FloatTypeAnnotation';
      readonly default:
        | number
        | null;
    }
  | {
      readonly type: 'Int32TypeAnnotation';
      readonly default: number;
    }
  | {
      readonly type: 'StringEnumTypeAnnotation';
      readonly default: string;
      readonly options: readonly string[];
    }
  | {
      readonly type: 'Int32EnumTypeAnnotation';
      readonly default: number;
      readonly options: readonly number[];
    }
  | ReservedPropTypeAnnotation
  | ObjectTypeAnnotation<PropTypeAnnotation>
  | {
      readonly type: 'ArrayTypeAnnotation';
      readonly elementType:
        | BooleanTypeAnnotation
        | StringTypeAnnotation
        | DoubleTypeAnnotation
        | FloatTypeAnnotation
        | Int32TypeAnnotation
        | {
            readonly type: 'StringEnumTypeAnnotation';
            readonly default: string;
            readonly options: readonly string[];
          }
        | ObjectTypeAnnotation<PropTypeAnnotation>
        | ReservedPropTypeAnnotation
        | {
            readonly type: 'ArrayTypeAnnotation';
            readonly elementType: ObjectTypeAnnotation<PropTypeAnnotation>;
          };
    };

export type ReservedPropTypeAnnotation = {
  readonly type: 'ReservedPropTypeAnnotation';
  readonly name:
    | 'ColorPrimitive'
    | 'ImageSourcePrimitive'
    | 'PointPrimitive'
    | 'EdgeInsetsPrimitive';
};

export type CommandTypeAnnotation = FunctionTypeAnnotation<CommandParamTypeAnnotation, VoidTypeAnnotation>;

export type CommandParamTypeAnnotation =
  | ReservedTypeAnnotation
  | BooleanTypeAnnotation
  | Int32TypeAnnotation
  | DoubleTypeAnnotation
  | FloatTypeAnnotation
  | StringTypeAnnotation;

export type ReservedTypeAnnotation = {
  readonly type: 'ReservedTypeAnnotation';
  readonly name: 'RootTag';
};

export type Nullable<T extends NativeModuleTypeAnnotation> =
  | NullableTypeAnnotation<T>
  | T;

export type NullableTypeAnnotation<T extends NativeModuleTypeAnnotation> = {
  readonly type: 'NullableTypeAnnotation';
  readonly typeAnnotation: T;
};

export type NativeModuleSchema = {
  readonly type: 'NativeModule';
  readonly aliases: NativeModuleAliasMap;
  readonly spec: NativeModuleSpec;
  readonly moduleNames: readonly string[];
  readonly excludedPlatforms?: readonly PlatformType[];
};

export type NativeModuleSpec = {
  readonly properties: readonly NativeModulePropertyShape[];
};

export type NativeModulePropertyShape = NamedShape<Nullable<NativeModuleFunctionTypeAnnotation>>;

export type NativeModuleAliasMap = {
  [aliasName: string]: NativeModuleObjectTypeAnnotation;
};

export type NativeModuleFunctionTypeAnnotation = FunctionTypeAnnotation<Nullable<NativeModuleParamTypeAnnotation>, Nullable<NativeModuleReturnTypeAnnotation>>;

export type NativeModuleObjectTypeAnnotation = ObjectTypeAnnotation<Nullable<NativeModuleBaseTypeAnnotation>>;

export type NativeModuleArrayTypeAnnotation<T extends Nullable<NativeModuleBaseTypeAnnotation>> = {
  readonly type: 'ArrayTypeAnnotation';
  readonly elementType?: T;
};

export type NativeModuleStringTypeAnnotation = {
  readonly type: 'StringTypeAnnotation';
};

export type NativeModuleNumberTypeAnnotation = {
  readonly type: 'NumberTypeAnnotation';
};

export type NativeModuleInt32TypeAnnotation = {
  readonly type: 'Int32TypeAnnotation';
};

export type NativeModuleDoubleTypeAnnotation = {
  readonly type: 'DoubleTypeAnnotation';
};

export type NativeModuleFloatTypeAnnotation = {
  readonly type: 'FloatTypeAnnotation';
};

export type NativeModuleBooleanTypeAnnotation = {
  readonly type: 'BooleanTypeAnnotation';
};

export type NativeModuleGenericObjectTypeAnnotation = {
  readonly type: 'GenericObjectTypeAnnotation';
};

export type NativeModuleTypeAliasTypeAnnotation = {
  readonly type: 'TypeAliasTypeAnnotation';
  readonly name: string;
};

export type NativeModulePromiseTypeAnnotation = {
  readonly type: 'PromiseTypeAnnotation';
};

export type NativeModuleMixedTypeAnnotation = {
  readonly type: 'MixedTypeAnnotation';
};

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
  | NativeModuleArrayTypeAnnotation<Nullable<NativeModuleBaseTypeAnnotation>>
  | NativeModuleObjectTypeAnnotation
  | NativeModuleMixedTypeAnnotation;

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

