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
  kind: 'Prop';
  isReadonly: boolean;
  isOptional: boolean;
  name: string;
  propType: Type;
}

export interface ObjectIndexer {
  kind: 'Indexer';
  isReadonly: boolean;
  keyName: string;
  keyType: Type;
  valueType: Type;
}

export type ObjectMember = ObjectProp | ObjectIndexer;

export interface ObjectType {
  kind: 'ObjectType';
  isExact: boolean;
  mixinTypes: Type[];
  members: ObjectMember[];
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

export type EntityName = string | {
  parent: EntityName;
  name: string;
};

export interface TypeReference {
  kind: 'TypeReference';
  name: EntityName;
  typeArguments: Type[];
}

export interface ParenType {
  kind: 'ParenType';
  elementType: Type;
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
  | TypeReference
  | ParenType
  ;

export interface DeclarationBase {
  hasExport: boolean;
  name: string;
}

export interface TypeAliasDecl extends DeclarationBase {
  kind: 'TypeAliasDecl';
  aliasedType: Type;
}

export type Declaration =
  | TypeAliasDecl
  ;

export type UseStrictStatement = {
  kind: 'UseStrictStat';
};

export type Statement =
  | Declaration
  | UseStrictStatement
  ;

export interface FlowProgram {
  statements: Statement[];
}
