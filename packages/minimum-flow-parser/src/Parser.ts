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

function applyMixed(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'mixed' };
}

function applyEmpty(value: Token): ast.Type {
  return { kind: 'PrimitiveType', name: 'empty' };
}

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
    undefined | [Token, undefined | Token],
    ast.Type,
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
      parameters: optionalParameters.map((prop: [undefined | [Token, undefined | Token], ast.Type]) => {
        if (prop[0] === undefined) {
          return {
            name: '',
            optional: false,
            parameterType: prop[1]
          };
        } else {
          return {
            name: prop[0][0].text,
            optional: prop[0][1] !== undefined,
            parameterType: prop[1]
          };
        }
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
  Token | undefined,
  ast.Type,
  ast.Type
]): ast.ObjectIndexer {
  const [isReadonly, keyName, keyType, valueType] = value;
  return {
    kind: 'Indexer',
    isReadonly: isReadonly !== undefined,
    keyName: keyName === undefined ? undefined : keyName.text,
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

function applyGenericParameter(value: [
  undefined | Token,
  Token,
  undefined | ast.Type
]): ast.GenericParameter {
  const [, name, baseType] = value;
  if (baseType === undefined) {
    return { name: name.text };
  } else {
    return { name: name.text, baseType };
  }
}

function applyGenericHeader(value: ast.GenericParameter[]): ast.GenericHeader {
  return { parameters: value };
}

function applyTypeAliasDecl(value: [
  undefined | {/*export*/ },
  Token,
  undefined | ast.GenericHeader,
  ast.Type
]): ast.Declaration {
  const [hasExport, name, generic, aliasedType] = value;
  if (generic === undefined) {
    return {
      kind: 'TypeAliasDecl',
      hasExport: hasExport !== undefined,
      name: name.text,
      aliasedType
    };
  } else {
    return {
      kind: 'TypeAliasDecl',
      hasExport: hasExport !== undefined,
      name: name.text,
      generic,
      aliasedType
    };
  }
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

function applyEnumDecl(value: [
  undefined | {/*export*/ },
  Token,
  [Token, undefined | Token][]
]): ast.Declaration {
  const [hasExport, name, items] = value;
  return {
    kind: 'EnumDecl',
    hasExport: hasExport !== undefined,
    name: name.text,
    members: items.map((item: [Token, undefined | Token]): ast.EnumItem => {
      const [itemName, itemValue] = item;
      const result: ast.EnumItem = { name: itemName.text };
      if (itemValue !== undefined) {
        result.value = { kind: 'LiteralType', text: itemValue.text };
      }
      return result;
    })
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
export const TYPE_FUNCTION = rule<TokenKind, ast.Type>();
export const TYPE_TERM = rule<TokenKind, ast.Type>();
export const TYPE_ARRAY = rule<TokenKind, ast.Type>();
export const TYPE = rule<TokenKind, ast.Type>();
export const EXPR_TERM = rule<TokenKind, ast.Expression>();
export const EXPR = rule<TokenKind, ast.Expression>();
export const GENERIC = rule<TokenKind, ast.GenericHeader>();
export const DECL = rule<TokenKind, ast.Declaration>();
export const STAT = rule<TokenKind, ast.Statement>();
export const PROGRAM = rule<TokenKind, ast.FlowProgram>();

function createObjectSyntax(): Parser<TokenKind, ast.ObjectType> {
  // syntax: {...}
  // syntax: {|...|}
  return apply(
    kmid(
      str('{'),
      seq(
        opt_sc(str('|')),
        opt_sc(list_sc(
          alt(
            // syntax: ...TYPE
            kright(str('...'), TYPE),
            // syntax: [+]NAME:TYPE
            // syntax: [+]NAME(params):return
            apply(
              seq(
                opt_sc(str('+')),
                IDENTIFIER,
                opt_sc(str('?')),
                alt(kright(str(':'), TYPE), TYPE_FUNCTION)
              ),
              applyObjectTypeProp
            ),

            // syntax: [NAME:TYPE]:TYPE
            // syntax: +[NAME:TYPE]:TYPE
            apply(
              seq(
                kleft(opt_sc(str('+')), str('[')),
                opt_sc(kleft(IDENTIFIER, str(':'))),
                TYPE,
                kright(
                  seq(str(']'), str(':')),
                  TYPE
                )
              ),
              applyObjectIndexer
            )
          ),
          opt_sc(alt(str(';'), str(','))) // demo issue: missing delimiter between members
        ))
      ),
      seq(
        opt_sc(alt(str(';'), str(','))),
        opt_sc(str('...')), // ... at the end of an object type
        opt_sc(str(',')), // extra "," after ...
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

TYPE_FUNCTION.setPattern(
  // syntax: (a:TYPE, TYPE)=>TYPE
  // syntax: (a:TYPE, TYPE): TYPE
  apply(
    seq(
      kright(
        str('('),
        opt_sc(
          kleft(
            list_sc(
              seq(
                opt_sc(kleft(seq(tok(TokenKind.Identifier), opt_sc(str('?'))), str(':'))),
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
          alt(seq(str('='), str('>')), str(':'))
        ),
        TYPE
      )
    ),
    applyFunctionType
  )
);

TYPE_TERM.setPattern(
  alt(
    alt(
      // syntax: mixed
      apply(str('mixed'), applyMixed),
      // syntax: empty
      apply(str('empty'), applyEmpty),
      // syntax: void
      apply(str('void'), applyVoid),
      // syntax: number
      apply(str('number'), applyNumber),
      // syntax: string
      apply(str('string'), applyString),
      // syntax: boolean
      apply(str('boolean'), applyBoolean),
      // syntax: 'STRING' 123 true false undefined null
      apply(
        alt(tok(TokenKind.StringLiteral), tok(TokenKind.NumberLiteral), str('true'), str('false'), str('undefined'), str('null')),
        applyLiteralType
      ),
      // syntax: ?TYPE
      apply(kright(str('?'), TYPE), applyOptionalType),
      // syntax: (TYPE)
      apply(kmid(str('('), TYPE, str(')')), applyParenType),
      TYPE_FUNCTION
    ),
    alt(
      // syntax: $ReadOnlyArray<TYPE>
      apply(
        kmid(
          seq(str('$ReadOnlyArray'), str('<')),
          kleft(TYPE, opt_sc(str(','))), // demo issue: $ReadOnlyArray<T,>
          str('>')
        ),
        applyReadonlyArrayType
      ),
      // syntax: $ReadOnly<TYPE>
      apply(
        kmid(
          seq(str('$ReadOnly'), str('<')),
          opt_sc(kleft(TYPE, opt_sc(str(',')))), // demo issue: $ReadOnly<>, $ReadOnly<T,>
          str('>')
        ),
        applyDecoratedGenericType
      ),
      // syntax: A[.B ...][<TYPE, ...>]
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
    // syntax: [TYPE, ...]
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
  // syntax: TYPE[]
  lrec_sc(
    TYPE_TERM,
    apply(seq(str('['), str(']')), applyArrayTypeLrec),
    applyTypeLrec
  )
);

TYPE.setPattern(
  // syntax: A|B|C
  // syntax: |A|B|C
  lrec_sc(
    apply(kright(opt_sc(str('|')), TYPE_ARRAY), applyUnionHead),
    apply(kright(str('|'), TYPE_ARRAY), applyUnionTypeLrec),
    applyTypeLrec
  )
);

EXPR_TERM.setPattern(
  alt(
    // syntax: 'STRING' 123 true false undefined null
    apply(
      alt(tok(TokenKind.StringLiteral), tok(TokenKind.NumberLiteral), str('true'), str('false'), str('undefined'), str('null')),
      applyLiteralExpr),
    // syntax: A[.B ...][<TYPE, ...>]
    apply(
      seq(
        list_sc(IDENTIFIER, str('.')),
        opt_sc(kmid(str('<'), list_sc(TYPE, str(',')), str('>')))
      ),
      applyExprReference
    ),
    // syntax: {NAME:EXPR, ...}
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
    // syntax: [EXPR, ...]
    apply(
      kmid(
        str('['),
        list_sc(EXPR, str(',')),
        str(']')
      ),
      applyArrayLiteralExpr
    ),
    // syntax: (EXPR)
    apply(kmid(str('('), EXPR, str(')')), applyParenExpr)
  )
);

EXPR.setPattern(
  // syntax: EXPR:TYPE
  // syntax: EXPR(EXPR, ...)
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

GENERIC.setPattern(
  // <T, +U:TYPE>
  apply(
    kmid(
      str('<'),
      list_sc(
        apply(
          seq(
            opt_sc(str('+')),
            IDENTIFIER,
            opt_sc(kright(str(':'), TYPE))
          ),
          applyGenericParameter
        ),
        str(',')
      ),
      seq(opt_sc(str(',')), str('>'))
    ),
    applyGenericHeader
  )
);

DECL.setPattern(
  alt(
    // syntax: [export] type NAME = TYPE;
    apply(
      seq(
        kleft(
          opt_sc(str('export')),
          str('type')
        ),
        IDENTIFIER,
        opt_sc(GENERIC),
        kmid(
          str('='),
          TYPE,
          opt_sc(str(';')) // demo issue: missing ';' after type
        )
      ),
      applyTypeAliasDecl
    ),
    // export interface NAME [extends TYPE, ...] {...}
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
    ),
    // export enum NAME {...}
    apply(
      seq(
        kleft(
          opt_sc(str('export')),
          str('enum')
        ),
        IDENTIFIER,
        kmid(
          str('{'),
          kleft(
            list_sc(
              seq(
                IDENTIFIER,
                opt_sc(
                  kright(
                    str('='),
                    alt(tok(TokenKind.StringLiteral), tok(TokenKind.NumberLiteral))
                  )
                )
              ),
              str(',')
            ),
            opt_sc(str(','))
          ),
          str('}')
        )
      ),
      applyEnumDecl
    )
  )
);

STAT.setPattern(
  alt(
    DECL,
    // syntax: use strict;
    apply(seq(str(`'use strict'`), str(';')), applyUseStrictStat),
    alt(
      // syntax: const NAME = require('PATH');
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
      // syntax: import * as NAME from 'PATH';
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
      // syntax: import NAME from 'PATH';
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
      // syntax: import [type] {[type] NAME, ...} from 'PATH';
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
    // syntax: export const NAME = EXPR;
    apply(
      seq(
        kright(seq(str('export'), str('const')), tok(TokenKind.Identifier)),
        kmid(str('='), EXPR, str(';'))
      ),
      applyExportEqualStat
    ),
    // syntax: export default EXPR;
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
