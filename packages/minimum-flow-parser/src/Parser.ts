// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:no-duplicate-imports

import * as parsec from 'ts-parsec';
import { Parser, rep_sc, rule } from 'ts-parsec';
import { alt, apply, list_sc, lrec_sc, opt_sc, seq, str, tok } from 'ts-parsec';
import * as ast from './AST';
import { TokenKind } from './Tokenizer';

type Token = parsec.Token<TokenKind>;

/*****************************************************************
 * Types (apply)
 ****************************************************************/

function applyVoid(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'void' };
}

function applyNumber(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'number' };
}

function applyString(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'string' };
}

function applyBoolean(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'boolean' };
}

function applyLiteralType(value: Token): ast.Type {
  return { kind: 'LiteralType', text: value.text };
}

function applyOptionalType(value: [{/*?*/ }, ast.Type]): ast.Type {
  const elementType = value[1];
  if (elementType.kind === 'OptionalType') {
    return elementType;
  } else {
    return { kind: 'OptionalType', elementType };
  }
}

function applyFunctionType(value: [
  {/*(*/ },
  undefined | [
    [
      undefined | [
        Token,
        {/*:*/ }
      ],
      ast.Type
    ][],
    undefined | {/*,*/ }
  ],
  {/*)*/ },
  {/*=*/ },
  {/*>*/ },
  ast.Type
]): ast.Type {
  const [, optionalParameters, , , , returnType] = value;
  if (optionalParameters === undefined) {
    return {
      kind: 'FunctionType',
      returnType,
      parameters: []
    };
  } else {
    return {
      kind: 'FunctionType',
      returnType,
      parameters: optionalParameters[0].map((prop: [undefined | [Token, {/*:*/ }], ast.Type]) => {
        return {
          name: prop[0] === undefined ? '' : prop[0][0].text,
          parameterType: prop[1]
        };
      })
    };
  }
}

function applyParenType(value: [
  {/*(*/ },
  ast.Type,
  {/*)*/ }
]): ast.Type {
  return {
    kind: 'ParenType',
    elementType: value[1]
  };
}

function applyReadonlyArrayType(value: [
  {/*$ReadOnlyArray*/ },
  {/*<*/ },
  ast.Type,
  {/*>*/ }
]): ast.Type {
  return {
    kind: 'ArrayType',
    isReadonly: true,
    elementType: value[2]
  };
}

function applyDecoratedGenericType(value: [
  {/*$ReadOnly*/ },
  {/*<*/ },
  undefined | ast.Type,
  {/*>*/ }
]): ast.Type {
  return {
    kind: 'DecoratedGenericType',
    elementType: (value[2] === undefined ? { kind: 'LiteralType', text: 'undefined' } : value[2]),
    name: '$ReadOnly'
  };
}

function applyTypeReference(value: [
  Token[],
  undefined | [
    {/*<*/ },
    ast.Type[],
    undefined | {/*,*/ },
    {/*>*/ }
  ]
]): ast.Type {
  const [names, typeArguments] = value;

  let entity: ast.EntityName | undefined;
  for (const name of names) {
    if (entity === undefined) {
      entity = name.text;
    } else {
      entity = { parent: entity, name: name.text };
    }
  }

  if (typeArguments === undefined) {
    return {
      kind: 'TypeReference',
      name: <ast.EntityName>entity,
      typeArguments: []
    };
  } else {
    return {
      kind: 'TypeReference',
      name: <ast.EntityName>entity,
      typeArguments: typeArguments[1]
    };
  }
}

function applyTupleType(value: [
  {/*[*/ },
  ast.Type[],
  {/*]*/ }
]): ast.Type {
  return {
    kind: 'TupleType',
    types: value[1]
  };
}

function applyObjectTypeMixin(value: [
  {/*...*/ },
  ast.Type
]): ast.Type {
  return value[1];
}

function applyObjectTypeProp(value: [
  undefined | {/*+*/ },
  Token,
  undefined | {/*?*/ },
  undefined | {/*:*/ },
  ast.Type
]): ast.ObjectProp {
  const [isReadonly, name, isOptional, , propType] = value;
  return {
    kind: 'Prop',
    isReadonly: isReadonly !== undefined,
    name: name.text,
    isOptional: isOptional !== undefined,
    propType
  };
}

function applyObjectIndexer(value: [
  undefined | {/*+*/ },
  {/*[*/ },
  Token,
  {/*:*/ },
  ast.Type,
  {/*]*/ },
  {/*:*/ },
  ast.Type
]): ast.ObjectIndexer {
  const [isReadonly, , keyName, , keyType, , , valueType] = value;
  return {
    kind: 'Indexer',
    isReadonly: isReadonly !== undefined,
    keyName: keyName.text,
    keyType,
    valueType
  };
}

function applyObjectType(value: [
  {/*{*/ },
  undefined | {/*|*/ },
  undefined | (ast.Type | ast.ObjectMember)[],
  undefined | {/*,*/ },
  undefined | {/*|*/ },
  {/*}*/ }
]): ast.ObjectType {
  const [, isExact, members] = value;
  return {
    kind: 'ObjectType',
    isExact: isExact !== undefined,
    mixinTypes: members === undefined ? [] : <ast.Type[]>members.filter((member: ast.Type | ast.ObjectMember) => {
      return member.kind !== 'Prop' && member.kind !== 'Indexer';
    }),
    members: members === undefined ? [] : <ast.ObjectMember[]>members.filter((member: ast.Type | ast.ObjectMember) => {
      return member.kind === 'Prop' || member.kind === 'Indexer';
    })
  };
}

function applyArrayTypeLrec(value: [
  {/*[*/ },
  {/*]*/ }
]): ast.ArrayType {
  return {
    kind: 'ArrayType',
    isReadonly: false,
    elementType: <ast.Type><unknown>undefined
  };
}

function applyUnionHead(value: [
  undefined | {/*|*/ },
  ast.Type
]): ast.Type {
  return value[1];
}

function applyUnionTypeLrec(value: [
  {/*|*/ },
  ast.Type
]): ast.UnionType {
  return {
    kind: 'UnionType',
    elementTypes: [value[1]]
  };
}

function applyTypeLrec(first: ast.Type, second: ast.ArrayType | ast.UnionType): ast.Type {
  switch (second.kind) {
    case 'ArrayType': {
      second.elementType = first;
      return second;
    }
    case 'UnionType': {
      if (first.kind === 'UnionType') {
        first.elementTypes.push(...second.elementTypes);
        return first;
      } else {
        second.elementTypes.unshift(first);
        return second;
      }
    }
    default: throw new Error(`Unrecognized type AST.`);
  }
}

/*****************************************************************
 * Expressions (apply)
 ****************************************************************/

function applyLiteralExpr(value: Token): ast.Expression {
  return { kind: 'LiteralExpr', text: value.text };
}

function applyExprReference(value: [
  Token[],
  undefined | [
    {/*<*/ },
    ast.Type[],
    {/*>*/ }
  ]
]): ast.Expression {
  const [names, typeArguments] = value;

  let entity: ast.EntityName | undefined;
  for (const name of names) {
    if (entity === undefined) {
      entity = name.text;
    } else {
      entity = { parent: entity, name: name.text };
    }
  }

  if (typeArguments === undefined) {
    return {
      kind: 'ExprReference',
      name: <ast.EntityName>entity,
      typeArguments: []
    };
  } else {
    return {
      kind: 'ExprReference',
      name: <ast.EntityName>entity,
      typeArguments: typeArguments[1]
    };
  }
}

function applyObjectLiteralExpr(value: [
  {/*{*/ },
  [Token, {/*:*/ }, ast.Expression][],
  undefined | {/*,*/ },
  {/*}*/ }
]): ast.Expression {
  return {
    kind: 'ObjectLiteralExpr',
    properties: value[1].map((prop: [Token, {/*:*/ }, ast.Expression]) => {
      return {
        key: prop[0].text,
        value: prop[2]
      };
    })
  };
}

function applyArrayLiteralExpr(value: [
  {/*[*/ },
  ast.Expression[],
  {/*]*/ }
]): ast.Expression {
  return {
    kind: 'ArrayLiteralExpr',
    values: value[1]
  };
}

function applyParenExpr(value: [
  {/*(*/ },
  ast.Expression,
  {/*)*/ }
]): ast.Expression {
  return {
    kind: 'ParenExpr',
    expr: value[1]
  };
}

function applyTypeCastExprLrec(value: [
  {/*:*/ },
  ast.Type
]): ast.TypeCastExpr {
  return {
    kind: 'TypeCastExpr',
    expr: <ast.Expression><unknown>undefined,
    toType: value[1]
  };
}

function applyCallExprLrec(value: [
  {/*(*/ },
  undefined | [
    ast.Expression[],
    undefined | {/*,*/ }
  ],
  {/*)*/ }
]): ast.CallExpr {
  if (value[1] === undefined) {
    return {
      kind: 'CallExpr',
      expr: <ast.Expression><unknown>undefined,
      funcArguments: []
    };
  } else {
    return {
      kind: 'CallExpr',
      expr: <ast.Expression><unknown>undefined,
      funcArguments: value[1][0]
    };
  }
}

function applyExprLrec(first: ast.Expression, second: ast.TypeCastExpr | ast.CallExpr): ast.Expression {
  second.expr = first;
  return second;
}

/*****************************************************************
 * Declarations (apply)
 ****************************************************************/

function applyTypeAliasDecl(value: [
  undefined | {/*export*/ },
  {/*type*/ },
  Token,
  {/*=*/ },
  ast.Type,
  undefined | {/*?*/ }
]): ast.Declaration {
  const [hasExport, , name, , aliasedType] = value;
  return {
    kind: 'TypeAliasDecl',
    hasExport: hasExport !== undefined,
    name: name.text,
    aliasedType
  };
}

function applyInterfaceDecl(value: [
  undefined | {/*export*/ },
  {/*interface*/ },
  Token,
  undefined | [
    {/*extends*/ },
    ast.Type[]
  ],
  ast.ObjectType
]): ast.Declaration {
  const [hasExport, , name, baseTypes, interfaceType] = value;
  return {
    kind: 'InterfaceDecl',
    hasExport: hasExport !== undefined,
    name: name.text,
    baseTypes: baseTypes === undefined ? [] : baseTypes[1],
    interfaceType
  };
}

/*****************************************************************
 * Statements (apply)
 ****************************************************************/

function applyUseStrictStat(value: [
  {/*'use strict'*/ },
  {/*;*/ }
]): ast.Statement {
  return {
    kind: 'UseStrictStat'
  };
}

function applyImportEqualStat(value: [
  {/*const*/ },
  Token,
  {/*=*/ },
  {/*require*/ },
  {/*(*/ },
  Token,
  {/*)*/ },
  {/*;*/ }
]): ast.Statement {
  const [, name, , , , source] = value;
  return {
    kind: 'ImportEqualStat',
    name: name.text,
    source: source.text
  };
}

function applyImportAsStat(value: [
  {/*import*/ },
  {/* * */ },
  {/*as*/ },
  Token,
  {/*from*/ },
  Token,
  {/*;*/ }
]): ast.Statement {
  const [, , , name, , source] = value;
  return {
    kind: 'ImportAsStat',
    name: name.text,
    source: source.text
  };
}

function applyImportSingleStat(value: [
  {/*import*/ },
  Token,
  {/*from*/ },
  Token,
  {/*;*/ }
]): ast.Statement {
  const [, name, , source] = value;
  return {
    kind: 'ImportSingleStat',
    name: name.text,
    source: source.text
  };
}

function applyImportNameStat(value: [
  {/*import*/ },
  undefined | {/*type*/ },
  {/*{*/ },
  [
    undefined | {/*type*/ },
    Token
  ][],
  undefined | {/*,*/ },
  {/*}*/ },
  {/*from*/ },
  Token,
  {/*;*/ }
]): ast.Statement {
  const [, , , names, , , , source] = value;
  return {
    kind: 'ImportNameStat',
    names: names.map((item: [undefined | {}, Token]) => { return item[1].text; }),
    source: source.text
  };
}

function applyExportEqualStat(value: [
  {/*export*/ },
  {/*const*/ },
  Token,
  {/*=*/ },
  ast.Expression,
  {/*;*/ }
]): ast.Statement {
  const [, , name, , expr] = value;
  return {
    kind: 'ExportEqualStat',
    name: name.text,
    expr
  };
}

function applyExportDefaultStat(value: [
  {/*export*/ },
  {/*default*/ },
  ast.Expression,
  {/*;*/ }
]): ast.Statement {
  return {
    kind: 'ExportDefaultStat',
    expr: value[2]
  };
}

/*****************************************************************
 * Flow Program AST (apply)
 ****************************************************************/

function applyProgram(value: ast.Statement[]): ast.FlowProgram {
  return {
    statements: value
  };
}

/*****************************************************************
 * Syntax
 ****************************************************************/

export const IDENTIFIER = rule<TokenKind, Token>();
export const TYPE_TERM = rule<TokenKind, ast.Type>();
export const TYPE_ARRAY = rule<TokenKind, ast.Type>();
export const TYPE = rule<TokenKind, ast.Type>();
export const EXPR_TERM = rule<TokenKind, ast.Expression>();
export const EXPR = rule<TokenKind, ast.Expression>();
export const DECL = rule<TokenKind, ast.Declaration>();
export const STAT = rule<TokenKind, ast.Statement>();
export const PROGRAM = rule<TokenKind, ast.FlowProgram>();

function createObjectSyntax(): Parser<TokenKind, ast.ObjectType> {
  return apply(
    seq(
      str('{'),
      opt_sc(str('|')),
      opt_sc(list_sc(
        alt(
          apply(
            seq(str('...'), TYPE),
            applyObjectTypeMixin
          ),
          apply(
            seq(opt_sc(str('+')), IDENTIFIER, opt_sc(str('?')), opt_sc(/* test case bug */str(':')), TYPE),
            applyObjectTypeProp
          ),
          apply(
            seq(opt_sc(str('+')), str('['), IDENTIFIER, str(':'), TYPE, str(']'), str(':'), TYPE),
            applyObjectIndexer
          )
        ),
        opt_sc(/* test case bug */alt(/* test case bug */str(';'), str(',')))
      )),
      opt_sc(/* test case bug */alt(/* test case bug */str(';'), str(','))),
      opt_sc(str('|')),
      str('}')
    ),
    applyObjectType
  );
}

IDENTIFIER.setPattern(
  alt(
    tok(TokenKind.KEYWORD_type),
    tok(TokenKind.Identifier)
  )
);

TYPE_TERM.setPattern(
  alt(
    alt(
      apply(str('void'), applyVoid),
      apply(str('number'), applyNumber),
      apply(str('string'), applyString),
      apply(str('boolean'), applyBoolean),
      apply(
        alt(tok(TokenKind.StringLiteral), tok(TokenKind.NumberLiteral), str('true'), str('false'), str('undefined'), str('null')),
        applyLiteralType
      ),
      apply(seq(str('?'), TYPE), applyOptionalType),
      apply(
        seq(
          str('('),
          opt_sc(
            seq(
              list_sc(
                seq(
                  opt_sc(/* test case bug */seq(tok(TokenKind.Identifier), str(':'))),
                  TYPE),
                alt(/* test case bug */str(';'), str(','))
              ),
              opt_sc(/* test case bug */alt(/* test case bug */str(';'), str(',')))
            )
          ),
          str(')'),
          str('='),
          str('>'),
          TYPE
        ),
        applyFunctionType
      ),
      apply(seq(str('('), TYPE, str(')')), applyParenType)
    ),
    alt(
      apply(seq(str('$ReadOnlyArray'), str('<'), TYPE, str('>')), applyReadonlyArrayType),
      apply(seq(str('$ReadOnly'), str('<'), opt_sc(/* test case bug */TYPE), str('>')), applyDecoratedGenericType),
      apply(
        seq(
          list_sc(IDENTIFIER, str('.')),
          opt_sc(seq(str('<'), list_sc(TYPE, str(',')), opt_sc(/* test case bug */str(',')), str('>')))
        ),
        applyTypeReference
      )
    ),
    apply(
      seq(
        str('['),
        list_sc(TYPE, str(',')),
        str(']')
      ),
      applyTupleType
    ),
    createObjectSyntax()
  )
);

TYPE_ARRAY.setPattern(
  lrec_sc(
    TYPE_TERM,
    apply(seq(str('['), str(']')), applyArrayTypeLrec),
    applyTypeLrec
  )
);

TYPE.setPattern(
  lrec_sc(
    apply(seq(opt_sc(str('|')), TYPE_ARRAY), applyUnionHead),
    apply(seq(str('|'), TYPE_ARRAY), applyUnionTypeLrec),
    applyTypeLrec
  )
);

EXPR_TERM.setPattern(
  alt(
    apply(
      alt(tok(TokenKind.StringLiteral), tok(TokenKind.NumberLiteral), str('true'), str('false'), str('undefined'), str('null')),
      applyLiteralExpr),
    apply(
      seq(
        list_sc(IDENTIFIER, str('.')),
        opt_sc(seq(str('<'), list_sc(TYPE, str(',')), str('>')))
      ),
      applyExprReference
    ),
    apply(
      seq(
        str('{'),
        list_sc(seq(tok(TokenKind.Identifier), str(':'), EXPR), str(',')), opt_sc(/* test case bug */str(',')),
        str('}')),
      applyObjectLiteralExpr
    ),
    apply(
      seq(
        str('['),
        list_sc(EXPR, str(',')),
        str(']')
      ),
      applyArrayLiteralExpr
    ),
    apply(seq(str('('), EXPR, str(')')), applyParenExpr)
  )
);

EXPR.setPattern(
  lrec_sc(
    EXPR_TERM,
    alt(
      apply(seq(str(':'), TYPE), applyTypeCastExprLrec),
      apply(seq(str('('), opt_sc(seq(list_sc(EXPR, str(',')), opt_sc(/* test case bug */str(',')))), str(')')), applyCallExprLrec)
    ),
    applyExprLrec
  )
);

DECL.setPattern(
  alt(
    apply(
      seq(
        opt_sc(str('export')),
        str('type'),
        IDENTIFIER,
        str('='),
        TYPE,
        opt_sc(/* test case bug */str(';'))
      ),
      applyTypeAliasDecl
    ),
    apply(
      seq(
        opt_sc(str('export')),
        str('interface'),
        IDENTIFIER,
        opt_sc(
          seq(str('extends'), list_sc(TYPE, str(',')))
        ),
        createObjectSyntax()
      ),
      applyInterfaceDecl
    )
  )
);

STAT.setPattern(
  alt(
    DECL,
    apply(seq(str(`'use strict'`), str(';')), applyUseStrictStat),
    alt(
      apply(
        seq(
          str('const'),
          tok(TokenKind.Identifier),
          str('='),
          str('require'),
          str('('),
          tok(TokenKind.StringLiteral),
          str(')'),
          str(';')
        ),
        applyImportEqualStat
      ),
      apply(
        seq(
          str('import'),
          str('*'),
          str('as'),
          tok(TokenKind.Identifier),
          str('from'),
          tok(TokenKind.StringLiteral),
          str(';')
        ),
        applyImportAsStat
      ),
      apply(
        seq(
          str('import'),
          tok(TokenKind.Identifier),
          str('from'),
          tok(TokenKind.StringLiteral),
          str(';')
        ),
        applyImportSingleStat
      ),
      apply(
        seq(
          str('import'),
          opt_sc(str('type')),
          str('{'),
          list_sc(seq(opt_sc(str('type')), tok(TokenKind.Identifier)), str(',')),
          opt_sc(/* test case bug */str(',')),
          str('}'),
          str('from'),
          tok(TokenKind.StringLiteral),
          str(';')
        ),
        applyImportNameStat)
    ),
    apply(seq(str('export'), str('const'), tok(TokenKind.Identifier), str('='), EXPR, str(';')), applyExportEqualStat),
    apply(seq(str('export'), str('default'), EXPR, str(';')), applyExportDefaultStat)
  )
);

PROGRAM.setPattern(apply(rep_sc(STAT), applyProgram));
