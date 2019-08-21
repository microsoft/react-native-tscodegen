// tslint:disable:no-empty-interface

export interface PrimitiveType<T> {
  kind: 'PrimitiveType';
  name: T;
}

export type NullType = PrimitiveType<'null'>;
export type NumberType = PrimitiveType<'number'>;
export type StringType = PrimitiveType<'string'>;
export type BooleanType = PrimitiveType<'boolean'>;

export interface LiteralType {
  kind: 'LiteralType';
  text: string;
}

export interface OptionalType {
  kind: 'OptionalType';
  elementType: Type;
}

export interface ArrayType {
  kind: 'ArrayType';
  isReadonly: boolean;
  elementType: Type;
}

export interface ObjectProp {
  name: string;
  isOptional: boolean;
  propType: Type;
}

export interface ObjectIndexer {
  keyName: string;
  keyType: Type;
  valueType: Type;
}

export interface ObjectType {
  kind: 'ObjectType';
  isExact: boolean;
  mixinTypes: Type[];
  properties: ObjectProp[];
  indexers: ObjectIndexer[];
}

export interface DecoratedGenericType {
  kind: 'DecoratedGenericType';
  elementType: Type;
  name: '$ReadOnly';
}

export interface UnionType {
  kind: 'UnionType';
  elementTypes: Type[];
}

export interface TypeReference {
  kind: 'TypeReference';
  name: string;
  typeArguments: Type[];
}

export type Type =
  | NullType
  | NumberType
  | StringType
  | BooleanType
  | LiteralType
  | OptionalType
  | ArrayType
  | ObjectType
  | DecoratedGenericType
  | UnionType
  | TypeReference;

export interface Statement {
}

export interface Declaration extends Statement {
  hasExport: boolean;
  name: string;
}

export interface TypeAliasDecl extends Declaration {
  kind: 'TypeAliasDecl';
  alisedType: Type;
}

export interface FlowProgram {
  statements: Statement[];
}
