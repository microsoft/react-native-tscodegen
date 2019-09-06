// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// tslint:disable:no-duplicate-imports

import * as parsec from 'typescript-parsec';
import { Parser, rep_sc, rule } from 'typescript-parsec';
import { alt, apply, kleft, kmid, kright, list_sc, lrec_sc, opt_sc, seq, str, tok } from 'typescript-parsec';
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

function applyOptionalType(value: ast.Type): ast.Type {
  if (value.kind === 'OptionalType') {
    return value;
  } else {
    return { kind: 'OptionalType', elementType: value };
  }
}

function applyFunctionType(value: [
  undefined | [
    undefined | Token,
    ast.Type
  ][],
  ast.Type
]): ast.Type {
  const [optionalParameters, returnType] = value;
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
      parameters: optionalParameters.map((prop: [undefined | Token, ast.Type]) => {
        const nameColon = prop[0];
        return {
          name: nameColon === undefined ? '' : nameColon.text,
          parameterType: prop[1]
        };
      })
    };
  }
}

function applyParenType(value: ast.Type): ast.Type {
  return {
    kind: 'ParenType',
    elementType: value
  };
}

function applyReadonlyArrayType(value: ast.Type): ast.Type {
  return {
    kind: 'ArrayType',
    isReadonly: true,
    elementType: value
  };
}

function applyDecoratedGenericType(value: undefined | ast.Type): ast.Type {
  return {
    kind: 'DecoratedGenericType',
    elementType: (value === undefined ? { kind: 'LiteralType', text: 'undefined' } : value),
    name: '$ReadOnly'
  };
}

function applyTypeReference(value: [
  Token[],
  undefined | ast.Type[]
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
      typeArguments
    };
  }
}

function applyTupleType(value: ast.Type[]): ast.Type {
  return {
    kind: 'TupleType',
    types: value
  };
}

function applyObjectTypeProp(value: [
  undefined | {/*+*/ },
  Token,
  undefined | {/*?*/ },
  ast.Type
]): ast.ObjectProp {
  const [isReadonly, name, isOptional, propType] = value;
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
  Token,
  ast.Type,
  ast.Type
]): ast.ObjectIndexer {
  const [isReadonly, keyName, keyType, valueType] = value;
  return {
    kind: 'Indexer',
    isReadonly: isReadonly !== undefined,
    keyName: keyName.text,
    keyType,
    valueType
  };
}

function applyObjectType(value: [
  undefined | {/*|*/ },
  undefined | (ast.Type | ast.ObjectMember)[]
]): ast.ObjectType {
  const [isExact, members] = value;
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

function applyUnionHead(value: ast.Type): ast.Type {
  return value;
}

function applyUnionTypeLrec(value: ast.Type): ast.UnionType {
  return {
    kind: 'UnionType',
    elementTypes: [value]
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
  undefined | ast.Type[]
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
      typeArguments
    };
  }
}

function applyObjectLiteralExpr(value: [
  Token,
  ast.Expression
][]): ast.Expression {
  return {
    kind: 'ObjectLiteralExpr',
    properties: value.map((prop: [Token, ast.Expression]) => {
      return {
        key: prop[0].text,
        value: prop[1]
      };
    })
  };
}

function applyArrayLiteralExpr(value: ast.Expression[]): ast.Expression {
  return {
    kind: 'ArrayLiteralExpr',
    values: value
  };
}

function applyParenExpr(value: ast.Expression): ast.Expression {
  return {
    kind: 'ParenExpr',
    expr: value
  };
}

function applyTypeCastExprLrec(value: ast.Type): ast.TypeCastExpr {
  return {
    kind: 'TypeCastExpr',
    expr: <ast.Expression><unknown>undefined,
    toType: value
  };
}

function applyCallExprLrec(value: undefined | ast.Expression[]): ast.CallExpr {
  if (value === undefined) {
    return {
      kind: 'CallExpr',
      expr: <ast.Expression><unknown>undefined,
      funcArguments: []
    };
  } else {
    return {
      kind: 'CallExpr',
      expr: <ast.Expression><unknown>undefined,
      funcArguments: value
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
  Token,
  ast.Type
]): ast.Declaration {
  const [hasExport, name, aliasedType] = value;
  return {
    kind: 'TypeAliasDecl',
    hasExport: hasExport !== undefined,
    name: name.text,
    aliasedType
  };
}

function applyInterfaceDecl(value: [
  undefined | {/*export*/ },
  Token,
  undefined | ast.Type[],
  ast.ObjectType
]): ast.Declaration {
  const [hasExport, name, baseTypes, interfaceType] = value;
  return {
    kind: 'InterfaceDecl',
    hasExport: hasExport !== undefined,
    name: name.text,
    baseTypes: baseTypes === undefined ? [] : baseTypes,
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
  Token,
  Token
]): ast.Statement {
  const [name, source] = value;
  return {
    kind: 'ImportEqualStat',
    name: name.text,
    source: source.text
  };
}

function applyImportAsStat(value: [
  Token,
  Token
]): ast.Statement {
  const [name, source] = value;
  return {
    kind: 'ImportAsStat',
    name: name.text,
    source: source.text
  };
}

function applyImportSingleStat(value: [
  Token,
  Token
]): ast.Statement {
  const [name, source] = value;
  return {
    kind: 'ImportSingleStat',
    name: name.text,
    source: source.text
  };
}

function applyImportNameStat(value: [
  Token[],
  Token
]): ast.Statement {
  const [names, source] = value;
  return {
    kind: 'ImportNameStat',
    names: names.map((item: Token) => { return item.text; }),
    source: source.text
  };
}

function applyExportEqualStat(value: [
  Token,
  ast.Expression
]): ast.Statement {
  const [name, expr] = value;
  return {
    kind: 'ExportEqualStat',
    name: name.text,
    expr
  };
}

function applyExportDefaultStat(value: ast.Expression): ast.Statement {
  return {
    kind: 'ExportDefaultStat',
    expr: value
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
    kmid(
      str('{'),
      seq(
        opt_sc(str('|')),
        opt_sc(list_sc(
          alt(
            kright(str('...'), TYPE),
            apply(
              seq(
                opt_sc(str('+')),
                IDENTIFIER,
                opt_sc(str('?')),
                kright(str(':'), TYPE)
              ),
              applyObjectTypeProp
            ),
            apply(
              seq(
                kleft(opt_sc(str('+')), str('[')),
                kleft(IDENTIFIER, str(':')),
                TYPE,
                kright(
                  seq(str(']'), str(':')),
                  TYPE
                )
              ),
              applyObjectIndexer
            )
          ),
          alt(str(';'), str(','))
        ))
      ),
      seq(
        opt_sc(alt(str(';'), str(','))),
        opt_sc(str('|')),
        str('}')
      )
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
      apply(kright(str('?'), TYPE), applyOptionalType),
      apply(
        seq(
          kright(
            str('('),
            opt_sc(
              kleft(
                list_sc(
                  seq(
                    opt_sc(kleft(tok(TokenKind.Identifier), str(':'))),
                    TYPE
                  ),
                  alt(str(';'), str(','))
                ),
                opt_sc(alt(str(';'), str(',')))
              )
            )
          ),
          kright(
            seq(
              str(')'),
              str('='),
              str('>')
            ),
            TYPE
          )
        ),
        applyFunctionType
      ),
      apply(kmid(str('('), TYPE, str(')')), applyParenType)
    ),
    alt(
      apply(
        kmid(
          seq(str('$ReadOnlyArray'), str('<')),
          TYPE,
          str('>')
        ),
        applyReadonlyArrayType
      ),
      apply(
        kmid(
          seq(str('$ReadOnly'), str('<')),
          opt_sc(/* test case bug */TYPE),
          str('>')
        ),
        applyDecoratedGenericType
      ),
      apply(
        seq(
          list_sc(IDENTIFIER, str('.')),
          opt_sc(
            kmid(
              str('<'),
              list_sc(TYPE, str(',')),
              seq(opt_sc(str(',')), str('>'))
            )
          )
        ),
        applyTypeReference
      )
    ),
    apply(
      kmid(
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
    apply(kright(opt_sc(str('|')), TYPE_ARRAY), applyUnionHead),
    apply(kright(str('|'), TYPE_ARRAY), applyUnionTypeLrec),
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
        opt_sc(kmid(str('<'), list_sc(TYPE, str(',')), str('>')))
      ),
      applyExprReference
    ),
    apply(
      kmid(
        str('{'),
        list_sc(
          seq(kleft(tok(TokenKind.Identifier), str(':')), EXPR),
          str(',')
        ),
        seq(opt_sc(str(',')), str('}'))
      ),
      applyObjectLiteralExpr
    ),
    apply(
      kmid(
        str('['),
        list_sc(EXPR, str(',')),
        str(']')
      ),
      applyArrayLiteralExpr
    ),
    apply(kmid(str('('), EXPR, str(')')), applyParenExpr)
  )
);

EXPR.setPattern(
  lrec_sc(
    EXPR_TERM,
    alt(
      apply(kright(str(':'), TYPE), applyTypeCastExprLrec),
      apply(
        kmid(
          str('('),
          opt_sc(
            kleft(
              list_sc(EXPR, str(',')),
              opt_sc(str(','))
            )
          ),
          str(')')
        ),
        applyCallExprLrec
      )
    ),
    applyExprLrec
  )
);

DECL.setPattern(
  alt(
    apply(
      seq(
        kleft(
          opt_sc(str('export')),
          str('type')
        ),
        IDENTIFIER,
        kmid(
          str('='),
          TYPE,
          str(';')
        )
      ),
      applyTypeAliasDecl
    ),
    apply(
      seq(
        kleft(
          opt_sc(str('export')),
          str('interface')
        ),
        IDENTIFIER,
        opt_sc(
          kright(str('extends'), list_sc(TYPE, str(',')))
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
          kright(
            str('const'),
            tok(TokenKind.Identifier)
          ),
          kmid(
            seq(
              str('='),
              str('require'),
              str('(')
            ),
            tok(TokenKind.StringLiteral),
            seq(
              str(')'),
              str(';')
            )
          )
        ),
        applyImportEqualStat
      ),
      apply(
        seq(
          kright(
            seq(
              str('import'),
              str('*'),
              str('as')
            ),
            tok(TokenKind.Identifier)
          ),
          kmid(
            str('from'),
            tok(TokenKind.StringLiteral),
            str(';')
          )
        ),
        applyImportAsStat
      ),
      apply(
        seq(
          kright(
            str('import'),
            tok(TokenKind.Identifier)
          ),
          kmid(
            str('from'),
            tok(TokenKind.StringLiteral),
            str(';')
          )
        ),
        applyImportSingleStat
      ),
      apply(
        seq(
          kright(
            seq(
              str('import'),
              opt_sc(str('type')),
              str('{')
            ),
            list_sc(
              kright(opt_sc(str('type')), tok(TokenKind.Identifier)),
              str(',')
            )
          ),
          kmid(
            seq(
              opt_sc(str(',')),
              str('}'),
              str('from')
            ),
            tok(TokenKind.StringLiteral),
            str(';')
          )
        ),
        applyImportNameStat)
    ),
    apply(
      seq(
        kright(seq(str('export'), str('const')), tok(TokenKind.Identifier)),
        kmid(str('='), EXPR, str(';'))
      ),
      applyExportEqualStat
    ),
    apply(
      kmid(
        seq(str('export'), str('default')),
        EXPR,
        str(';')
      ),
      applyExportDefaultStat
    )
  )
);

PROGRAM.setPattern(apply(rep_sc(STAT), applyProgram));
