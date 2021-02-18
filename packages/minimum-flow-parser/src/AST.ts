// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:no-empty-interface

/*****************************************************************
 * Types
 ****************************************************************/

export interface PrimitiveType<T> {
  kind: 'PrimitiveType';
  name: T;
}

export type VoidType = PrimitiveType<'void'>;
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

export interface TupleType {
  kind: 'TupleType';
  types: Type[];
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

export interface FunctionType {
  kind: 'FunctionType';
  returnType: Type;
  parameters: { name: string; parameterType: Type }[];
}

export interface ParenType {
  kind: 'ParenType';
  elementType: Type;
}

export type Type =
  | VoidType
  | NumberType
  | StringType
  | BooleanType
  | LiteralType
  | OptionalType
  | ArrayType
  | TupleType
  | ObjectType
  | DecoratedGenericType
  | UnionType
  | TypeReference
  | FunctionType
  | ParenType
  ;

/*****************************************************************
 * Expressions
 ****************************************************************/

export interface LiteralExpr {
  kind: 'LiteralExpr';
  text: string;
}

export interface ExprReference {
  kind: 'ExprReference';
  name: EntityName;
  typeArguments: Type[];
}

export interface TypeCastExpr {
  kind: 'TypeCastExpr';
  expr: Expression;
  toType: Type;
}

export interface CallExpr {
  kind: 'CallExpr';
  expr: Expression;
  funcArguments: Expression[];
}

export interface ObjectLiteralExpr {
  kind: 'ObjectLiteralExpr';
  properties: { key: string; value: Expression }[];
}

export interface ArrayLiteralExpr {
  kind: 'ArrayLiteralExpr';
  values: Expression[];
}

export interface ParenExpr {
  kind: 'ParenExpr';
  expr: Expression;
}

export type Expression =
  | LiteralExpr
  | ExprReference
  | TypeCastExpr
  | CallExpr
  | ObjectLiteralExpr
  | ArrayLiteralExpr
  | ParenExpr
  ;

/*****************************************************************
 * Declarations
 ****************************************************************/

export interface GenericParameter {
  name: string;
  baseType?: Type;
}

export interface GenericHeader {
  parameters: GenericParameter[];
}

export interface DeclarationBase {
  hasExport: boolean;
  name: string;
  generic?: GenericHeader;
}

export interface TypeAliasDecl extends DeclarationBase {
  kind: 'TypeAliasDecl';
  aliasedType: Type;
}

export interface InterfaceDecl extends DeclarationBase {
  kind: 'InterfaceDecl';
  baseTypes: Type[];
  interfaceType: ObjectType;
}

export type Declaration =
  | TypeAliasDecl
  | InterfaceDecl
  ;

/*****************************************************************
 * Statements
 ****************************************************************/

export interface UseStrictStatement {
  kind: 'UseStrictStat';
}

export interface ImportNamespaceStatement {
  kind: 'ImportEqualStat' | 'ImportAsStat' | 'ImportSingleStat';
  name: string;
  source: string;
}

export interface ImportNameStatement {
  kind: 'ImportNameStat';
  names: string[];
  source: string;
}

export interface ExportEqualStatement {
  kind: 'ExportEqualStat';
  name: string;
  expr: Expression;
}

export interface ExportDefaultStatement {
  kind: 'ExportDefaultStat';
  expr: Expression;
}

export type Statement =
  | Declaration
  | UseStrictStatement
  | ImportNamespaceStatement
  | ImportNameStatement
  | ExportEqualStatement
  | ExportDefaultStatement
  ;

/*****************************************************************
 * Flow Program AST
 ****************************************************************/

export interface FlowProgram {
  statements: Statement[];
}
