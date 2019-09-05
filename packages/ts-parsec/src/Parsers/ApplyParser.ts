// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Token } from '../Lexer';
import { Parser, ParseResult, ParserOutput } from './ParserInterface';
import { seq } from './SequencialParser';

export function apply<TKind, TFrom, TTo>(p: Parser<TKind, TFrom>, callback: (value: TFrom) => TTo): Parser<TKind, TTo> {
    return {
        parse(token: Token<TKind>): ParserOutput<TKind, TTo> {
            const output = p.parse(token);
            if (output.successful) {
                return {
                    candidates: output.candidates.map((value: ParseResult<TKind, TFrom>) => {
                        return {
                            nextToken: value.nextToken,
                            result: callback(value.result)
                        };
                    }),
                    successful: true,
                    error: output.error
                };
            } else {
                return output;
            }
        }
    };
}

export function kleft<TKind, T1, T2>(p1: Parser<TKind, T1>, p2: Parser<TKind, T2>): Parser<TKind, T1> {
    return apply(seq(p1, p2), (value: [T1, T2]) => { return value[0]; });
}

export function kright<TKind, T1, T2>(p1: Parser<TKind, T1>, p2: Parser<TKind, T2>): Parser<TKind, T2> {
    return apply(seq(p1, p2), (value: [T1, T2]) => { return value[1]; });
}

export function kmid<TKind, T1, T2, T3>(p1: Parser<TKind, T1>, p2: Parser<TKind, T2>, p3: Parser<TKind, T3>): Parser<TKind, T2> {
    return apply(seq(p1, p2, p3), (value: [T1, T2, T3]) => { return value[1]; });
}
