// tslint:disable:no-empty-interface

export interface Type {
}

export interface PrimitiveType<T> extends Type {
  kind: 'PrimitiveType';
  typeName: T;
}

export type NullType = PrimitiveType<'null'>;
export type NumberType = PrimitiveType<'number'>;
export type StringType = PrimitiveType<'string'>;
export type BooleanType = PrimitiveType<'boolean'>;

export interface StringLiteralType extends Type {
  kind: 'StringLiteralType';
  text: string;
}

export interface OptionalType extends Type {
  kind: 'OptionalType';
  elementType: Type;
}

export interface ArrayType extends Type {
  kind: 'ArrayType';
  elementType: Type;
  isReadonly: boolean;
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

export interface ObjectType extends Type {
  kind: 'ObjectType';
  isExact: boolean;
  mixinTypes: Type[];
  properties: ObjectProp[];
  indexers: ObjectIndexer[];
}

export interface DecoratedGenericType extends Type {
  kind: 'DecoratedGenericType';
  elementType: Type;
  name: '$ReadOnly';
}

export interface UnionType extends Type {
  kind: 'UnionType';
  elementTypes: Type[];
}

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
