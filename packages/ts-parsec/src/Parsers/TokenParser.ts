import { Token } from '../Lexer';
import { ParseError, Parser, ParseResult } from './ParserInterface';

export function nil<T>(): Parser<T, undefined> {
    return {
        parse(token: Token<T> | undefined): ParseResult<T, undefined>[] | ParseError {
            return [{
                nextToken: token,
                result: undefined
            }];
        }
    };
}

export function str<T>(toMatch: string): Parser<T, Token<T>> {
    return {
        parse(token: Token<T> | undefined): ParseResult<T, Token<T>>[] | ParseError {
            if (token === undefined || token.text !== toMatch) {
                return {
                    kind: 'Error',
                    pos: token === undefined ? undefined : token.pos,
                    message: `Unable to consume token: ${token === undefined ? '<END-OF-FILE>' : token.text}`
                };
            }
            return [{
                nextToken: token.next,
                result: token
            }];
        }
    };
}

export function tok<T>(toMatch: T): Parser<T, Token<T>> {
    return {
        parse(token: Token<T> | undefined): ParseResult<T, Token<T>>[] | ParseError {
            if (token === undefined || token.kind !== toMatch) {
                return {
                    kind: 'Error',
                    pos: token === undefined ? undefined : token.pos,
                    message: `Unable to consume token: ${token === undefined ? '<END-OF-FILE>' : token.text}`
                };
            }
            return [{
                nextToken: token.next,
                result: token
            }];
        }
    };
}
