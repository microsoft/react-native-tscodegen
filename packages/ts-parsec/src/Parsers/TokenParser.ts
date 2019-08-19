import { Token } from '../Lexer';
import { Parser, ParserOutput, unableToConsumeToken } from './ParserInterface';

export function nil<T>(): Parser<T, undefined> {
    return {
        parse(token: Token<T> | undefined): ParserOutput<T, undefined> {
            return [{
                nextToken: token,
                result: undefined
            }];
        }
    };
}

export function str<T>(toMatch: string): Parser<T, Token<T>> {
    return {
        parse(token: Token<T> | undefined): ParserOutput<T, Token<T>> {
            if (token === undefined || token.text !== toMatch) {
                return unableToConsumeToken(token);
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
        parse(token: Token<T> | undefined): ParserOutput<T, Token<T>> {
            if (token === undefined || token.kind !== toMatch) {
                return unableToConsumeToken(token);
            }
            return [{
                nextToken: token.next,
                result: token
            }];
        }
    };
}
