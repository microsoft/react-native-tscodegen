// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Token } from '../Lexer';
import { Parser, ParserOutput, unableToConsumeToken } from './ParserInterface';

export function nil<T>(): Parser<T, undefined> {
    return {
        parse(token: Token<T> | undefined): ParserOutput<T, undefined> {
            return {
                candidates: [{
                    nextToken: token,
                    result: undefined
                }],
                successful: true,
                error: undefined
            };
        }
    };
}

export function str<T>(toMatch: string): Parser<T, Token<T>> {
    return {
        parse(token: Token<T> | undefined): ParserOutput<T, Token<T>> {
            if (token === undefined || token.text !== toMatch) {
                return {
                    successful: false,
                    error: unableToConsumeToken(token)
                };
            }
            return {
                candidates: [{
                    nextToken: token.next,
                    result: token
                }],
                successful: true,
                error: undefined
            };
        }
    };
}

export function tok<T>(toMatch: T): Parser<T, Token<T>> {
    return {
        parse(token: Token<T> | undefined): ParserOutput<T, Token<T>> {
            if (token === undefined || token.kind !== toMatch) {
                return {
                    successful: false,
                    error: unableToConsumeToken(token)
                };
            }
            return {
                candidates: [{
                    nextToken: token.next,
                    result: token
                }],
                successful: true,
                error: undefined
            };
        }
    };
}
