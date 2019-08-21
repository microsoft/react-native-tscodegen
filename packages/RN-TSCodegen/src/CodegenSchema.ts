
// Automatically generated from react-native/packages/react-native-codegen/src/CodegenSchema.js

'use strict';

export type CommandsFunctionTypeAnnotation = Readonly<{
  type: 'FunctionTypeAnnotation';
  params: ReadonlyArray<CommandsFunctionTypeParamAnnotation>;
}>;

export type CommandsFunctionTypeParamAnnotation = Readonly<{
  name: string;
  typeAnnotation: CommandsTypeAnnotation;
}>;

export type CommandsTypeAnnotation =
  | BooleanTypeAnnotation
  | Int32TypeAnnotation
  | DoubleTypeAnnotation
  | FloatTypeAnnotation
  | StringTypeAnnotation;

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

export type ObjectPropertyType =
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
      properties: ReadonlyArray<ObjectPropertyType>;
    }>;

export type PropTypeTypeAnnotation =
  | Readonly<{
      type: 'BooleanTypeAnnotation';
      default: boolean;
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
      default: number;
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
      type: 'NativePrimitiveTypeAnnotation';
      name:
        | 'ColorPrimitive'
        | 'ImageSourcePrimitive'
        | 'PointPrimitive';
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
            type: 'NativePrimitiveTypeAnnotation';
            name:
              | 'ColorPrimitive'
              | 'ImageSourcePrimitive'
              | 'PointPrimitive';
          }>;
    }>;

export type PropTypeShape = Readonly<{
  name: string;
  optional: boolean;
  typeAnnotation: PropTypeTypeAnnotation;
}>;

export type PrimitiveTypeAnnotationType =
  | 'StringTypeAnnotation'
  | 'NumberTypeAnnotation'
  | 'Int32TypeAnnotation'
  | 'DoubleTypeAnnotation'
  | 'FloatTypeAnnotation'
  | 'BooleanTypeAnnotation'
  | 'GenericObjectTypeAnnotation';

export type PrimitiveTypeAnnotation = Readonly<{
  type: PrimitiveTypeAnnotationType;
}>;

export type FunctionTypeAnnotationParamTypeAnnotation =
  | Readonly<{
      type:
        | 'AnyTypeAnnotation'
        | 'FunctionTypeAnnotation'
        | PrimitiveTypeAnnotationType;
    }>
  | Readonly<{
      type: 'ArrayTypeAnnotation';
      elementType: (undefined | FunctionTypeAnnotationParamTypeAnnotation);
    }>
  | Readonly<{
      type: 'ObjectTypeAnnotation';
      properties: (undefined | ReadonlyArray<ObjectParamTypeAnnotation>);
    }>;

export type FunctionTypeAnnotationReturnArrayElementType = FunctionTypeAnnotationParamTypeAnnotation;

export type ObjectParamTypeAnnotation = Readonly<{
  optional: boolean;
  name: string;
  typeAnnotation: FunctionTypeAnnotationParamTypeAnnotation;
}>;

export type FunctionTypeAnnotationReturn =
  | Readonly<{
      nullable: boolean;
      type:
        | PrimitiveTypeAnnotationType
        | 'VoidTypeAnnotation'
        | 'GenericPromiseTypeAnnotation';
    }>
  | Readonly<{
      nullable: boolean;
      type: 'ArrayTypeAnnotation';
      elementType: (undefined | FunctionTypeAnnotationReturnArrayElementType);
    }>
  | Readonly<{
      nullable: boolean;
      type: 'ObjectTypeAnnotation';
      properties: (undefined | ReadonlyArray<ObjectParamTypeAnnotation>);
    }>;

export type FunctionTypeAnnotationParam = Readonly<{
  nullable: boolean;
  name: string;
  typeAnnotation: FunctionTypeAnnotationParamTypeAnnotation;
}>;

export type FunctionTypeAnnotation = Readonly<{
  type: 'FunctionTypeAnnotation';
  params: ReadonlyArray<FunctionTypeAnnotationParam>;
  returnTypeAnnotation: FunctionTypeAnnotationReturn;
  optional: boolean;
}>;

export type MethodTypeShape = Readonly<{
  name: string;
  typeAnnotation: FunctionTypeAnnotation;
}>;

export type NativeModuleShape = Readonly<{
  properties: ReadonlyArray<MethodTypeShape>;
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
      properties: ReadonlyArray<ObjectPropertyType>;
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
    [module: string]: Readonly<{
      components?: Readonly<{
        [component: string]: ComponentShape;
      }>;
      nativeModules?: Readonly<{
        [nativeModule: string]: NativeModuleShape;
      }>;
    }>;
  }>;
}>;

