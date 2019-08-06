
// tslint:disable:no-reserved-keywords
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

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
  | StringTypeAnnotation;

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

type PropTypeTypeAnnotation =
  | Readonly<{
      type: 'BooleanTypeAnnotation';
      default: boolean;
    }>
  | Readonly<{
      type: 'StringTypeAnnotation';
      default: string | null;
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
      name: 'ColorPrimitive' | 'ImageSourcePrimitive' | 'PointPrimitive';
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
            type: 'NativePrimitiveTypeAnnotation';
            name: 'ColorPrimitive' | 'ImageSourcePrimitive' | 'PointPrimitive';
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
  | 'FloatTypeAnnotation'
  | 'BooleanTypeAnnotation'
  | 'GenericObjectTypeAnnotation';

export type PrimitiveTypeAnnotation = Readonly<{
  type: PrimitiveTypeAnnotationType;
}>;

export type FunctionTypeAnnotationParamTypeAnnotation =
  | Readonly<{
      type: 'AnyTypeAnnotation' | PrimitiveTypeAnnotationType;
    }>
  | Readonly<{
      type: 'ArrayTypeAnnotation';
      elementType: null | undefined | FunctionTypeAnnotationParamTypeAnnotation;
    }>
  | Readonly<{
      type: 'ObjectTypeAnnotation';
      properties: null | undefined | ReadonlyArray<ObjectParamTypeAnnotation>;
    }>
  | Readonly<{
      type: 'FunctionTypeAnnotation';
      params: ReadonlyArray<FunctionTypeAnnotationParam>;
      returnTypeAnnotation: FunctionTypeAnnotationReturn;
    }>;

export type FunctionTypeAnnotationReturnArrayElementType = FunctionTypeAnnotationParamTypeAnnotation;

export type ObjectParamTypeAnnotation = Readonly<{
  optional: boolean;
  name: string;
  typeAnnotation: FunctionTypeAnnotationParamTypeAnnotation;
}>;

export type FunctionTypeAnnotationReturn =
  | Readonly<{
      type: PrimitiveTypeAnnotationType | 'VoidTypeAnnotation';
    }>
  | Readonly<{
      type: 'ArrayTypeAnnotation';
      elementType: null | undefined | FunctionTypeAnnotationReturnArrayElementType;
    }>
  | Readonly<{
      type: 'GenericPromiseTypeAnnotation';
      resolvedType: FunctionTypeAnnotationReturn;
    }>
  | Readonly<{
      type: 'ObjectTypeAnnotation';
      properties: null | undefined | ReadonlyArray<ObjectParamTypeAnnotation>;
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
  bubblingType: 'direct' | 'bubble';
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

  // Use for components with no current paper rename in progress
  // Does not check for new name
  paperComponentName?: string;

  // Use for components currently being renamed in paper
  // Will use new name if it is available and fallback to this name
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
