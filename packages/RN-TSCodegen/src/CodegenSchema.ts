
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// Automatically generated from react-native/packages/react-native-codegen/src/CodegenSchema.js
// Targeting react-native 1000.0.0

'use strict';

export type PlatformType =
  | 'iOS'
  | 'android';

export interface SchemaType {
  readonly modules: {
    [hasteModuleName: string]: ComponentSchema | NativeModuleSchema;
  };
}

export interface DoubleTypeAnnotation {
  readonly type: 'DoubleTypeAnnotation';
}

export interface FloatTypeAnnotation {
  readonly type: 'FloatTypeAnnotation';
}

export interface BooleanTypeAnnotation {
  readonly type: 'BooleanTypeAnnotation';
}

export interface Int32TypeAnnotation {
  readonly type: 'Int32TypeAnnotation';
}

export interface StringTypeAnnotation {
  readonly type: 'StringTypeAnnotation';
}

export interface StringEnumTypeAnnotation {
  readonly type: 'StringEnumTypeAnnotation';
  readonly options: readonly string[];
}

export interface VoidTypeAnnotation {
  readonly type: 'VoidTypeAnnotation';
}

export interface ObjectTypeAnnotation<T> {
  readonly type: 'ObjectTypeAnnotation';
  readonly properties: readonly NamedShape<T>[];
}

export interface FunctionTypeAnnotation<P, R> {
  readonly type: 'FunctionTypeAnnotation';
  readonly params: readonly NamedShape<P>[];
  readonly returnTypeAnnotation: R;
}

export interface NamedShape<T> {
  readonly name: string;
  readonly optional: boolean;
  readonly typeAnnotation: T;
}

export interface ComponentSchema {
  readonly type: 'Component';
  readonly components: {
    [componentName: string]: ComponentShape;
  };
}

export interface ComponentShape extends OptionsShape {
  readonly extendsProps: readonly ExtendsPropsShape[];
  readonly events: readonly EventTypeShape[];
  readonly props: readonly NamedShape<PropTypeAnnotation>[];
  readonly commands: readonly NamedShape<CommandTypeAnnotation>[];
}

export interface OptionsShape {
  readonly interfaceOnly?: boolean;
  readonly paperComponentName?: string;
  readonly excludedPlatforms?: readonly PlatformType[];
  readonly paperComponentNameDeprecated?: string;
}

export interface ExtendsPropsShape {
  readonly type: 'ReactNativeBuiltInType';
  readonly knownTypeName: 'ReactNativeCoreViewProps';
}

export interface EventTypeShape {
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
}

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

export interface ReservedPropTypeAnnotation {
  readonly type: 'ReservedPropTypeAnnotation';
  readonly name:
    | 'ColorPrimitive'
    | 'ImageSourcePrimitive'
    | 'PointPrimitive'
    | 'EdgeInsetsPrimitive';
}

export type CommandTypeAnnotation = FunctionTypeAnnotation<CommandParamTypeAnnotation, VoidTypeAnnotation>;

export type CommandParamTypeAnnotation =
  | ReservedTypeAnnotation
  | BooleanTypeAnnotation
  | Int32TypeAnnotation
  | DoubleTypeAnnotation
  | FloatTypeAnnotation
  | StringTypeAnnotation;

export interface ReservedTypeAnnotation {
  readonly type: 'ReservedTypeAnnotation';
  readonly name: 'RootTag';
}

export type Nullable<T extends NativeModuleTypeAnnotation> =
  | NullableTypeAnnotation<T>
  | T;

export interface NullableTypeAnnotation<T extends NativeModuleTypeAnnotation> {
  readonly type: 'NullableTypeAnnotation';
  readonly typeAnnotation: T;
}

export interface NativeModuleSchema {
  readonly type: 'NativeModule';
  readonly aliases: NativeModuleAliasMap;
  readonly spec: NativeModuleSpec;
  readonly moduleNames: readonly string[];
  readonly excludedPlatforms?: readonly PlatformType[];
}

export interface NativeModuleSpec {
  readonly properties: readonly NativeModulePropertyShape[];
}

export type NativeModulePropertyShape = NamedShape<Nullable<NativeModuleFunctionTypeAnnotation>>;

export interface NativeModuleAliasMap {
  readonly [aliasName: string]: NativeModuleObjectTypeAnnotation;
}

export type NativeModuleFunctionTypeAnnotation = FunctionTypeAnnotation<Nullable<NativeModuleParamTypeAnnotation>, Nullable<NativeModuleReturnTypeAnnotation>>;

export type NativeModuleObjectTypeAnnotation = ObjectTypeAnnotation<Nullable<NativeModuleBaseTypeAnnotation>>;

export interface NativeModuleArrayTypeAnnotation<T extends Nullable<NativeModuleBaseTypeAnnotation>> {
  readonly type: 'ArrayTypeAnnotation';
  readonly elementType?: T;
}

export interface NativeModuleStringTypeAnnotation {
  readonly type: 'StringTypeAnnotation';
}

export interface NativeModuleNumberTypeAnnotation {
  readonly type: 'NumberTypeAnnotation';
}

export interface NativeModuleInt32TypeAnnotation {
  readonly type: 'Int32TypeAnnotation';
}

export interface NativeModuleDoubleTypeAnnotation {
  readonly type: 'DoubleTypeAnnotation';
}

export interface NativeModuleFloatTypeAnnotation {
  readonly type: 'FloatTypeAnnotation';
}

export interface NativeModuleBooleanTypeAnnotation {
  readonly type: 'BooleanTypeAnnotation';
}

export interface NativeModuleEnumDeclaration {
  readonly type: 'EnumDeclaration';
  readonly memberType:
    | 'NumberTypeAnnotation'
    | 'StringTypeAnnotation';
}

export interface NativeModuleGenericObjectTypeAnnotation {
  readonly type: 'GenericObjectTypeAnnotation';
}

export interface NativeModuleTypeAliasTypeAnnotation {
  readonly type: 'TypeAliasTypeAnnotation';
  readonly name: string;
}

export interface NativeModulePromiseTypeAnnotation {
  readonly type: 'PromiseTypeAnnotation';
}

export type UnionTypeAnnotationMemberType =
  | 'NumberTypeAnnotation'
  | 'ObjectTypeAnnotation'
  | 'StringTypeAnnotation';

export interface NativeModuleUnionTypeAnnotation {
  readonly type: 'UnionTypeAnnotation';
  readonly memberType: UnionTypeAnnotationMemberType;
}

export interface NativeModuleMixedTypeAnnotation {
  readonly type: 'MixedTypeAnnotation';
}

export type NativeModuleBaseTypeAnnotation =
  | NativeModuleStringTypeAnnotation
  | NativeModuleNumberTypeAnnotation
  | NativeModuleInt32TypeAnnotation
  | NativeModuleDoubleTypeAnnotation
  | NativeModuleFloatTypeAnnotation
  | NativeModuleBooleanTypeAnnotation
  | NativeModuleEnumDeclaration
  | NativeModuleGenericObjectTypeAnnotation
  | ReservedTypeAnnotation
  | NativeModuleTypeAliasTypeAnnotation
  | NativeModuleArrayTypeAnnotation<Nullable<NativeModuleBaseTypeAnnotation>>
  | NativeModuleObjectTypeAnnotation
  | NativeModuleUnionTypeAnnotation
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

