// tslint:disable:no-empty-interface

/*****************************************************************
 * Types
 ****************************************************************/

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

export interface ParenExpr {
  kind: 'ParenExpr';
  expr: Expression;
}

export type Expression =
  | LiteralExpr
  | ExprReference
  | CallExpr
  | TypeCastExpr
  | ParenExpr
  ;

/*****************************************************************
 * Declarations
 ****************************************************************/

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

/*****************************************************************
 * Statements
 ****************************************************************/

export type UseStrictStatement = {
  kind: 'UseStrictStat';
};

export type ImportNamespaceStatement = {
  kind: 'ImportEqualStat' | 'ImportAsStat';
  name: string;
  source: string;
};

export type ImportNameStatement = {
  kind: 'ImportNameStat';
  names: string[];
  source: string;
};

export type ExportDefaultStatement = {
  kind: 'ExportDefaultStat';
  expr: Expression;
};

export type Statement =
  | Declaration
  | UseStrictStatement
  | ImportNamespaceStatement
  | ImportNameStatement
  | ExportDefaultStatement
  ;

/*****************************************************************
 * Flow Program AST
 ****************************************************************/

export interface FlowProgram {
  statements: Statement[];
}
