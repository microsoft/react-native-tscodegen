import { Token } from '../Lexer';
import { Parser, ParseResult } from './ParserInterface';

export function str<T>(toMatch: string): Parser<T, Token<T>> {
    return {
        parse(token: Token<T>): ParseResult<T, Token<T>>[] {
            if (token === undefined || token.text !== toMatch) {
                return [];
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
        parse(token: Token<T>): ParseResult<T, Token<T>>[] {
            if (token === undefined || token.kind !== toMatch) {
                return [];
            }
            return [{
                nextToken: token.next,
                result: token
            }];
        }
    };
}
