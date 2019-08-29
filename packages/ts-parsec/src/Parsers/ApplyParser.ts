// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Token } from '../Lexer';
import { Parser, ParseResult, ParserOutput } from './ParserInterface';

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
