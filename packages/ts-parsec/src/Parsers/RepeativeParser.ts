// tslint:disable:no-constant-condition
// tslint:disable:no-increment-decrement
// tslint:disable:prefer-for-of

import { Token } from '../Lexer';
import { betterError, ParseError, Parser, ParseResult, resultOrError, succeeded } from './ParserInterface';

export function rep<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    const reprParser = repr(p);
    return {
        parse(token: Token<TKind>): ParseResult<TKind, TResult[]>[] | ParseError {
            const result = reprParser.parse(token);
            return succeeded(result) ? result.reverse() : result;
        }
    };
}

export function rep_sc<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    return {
        parse(token: Token<TKind>): ParseResult<TKind, TResult[]>[] | ParseError {
            let error: ParseError | undefined;
            let result: ParseResult<TKind, TResult[]>[] = [{ nextToken: token, result: [] }];

            while (true) {
                const steps = result;
                result = [];
                for (const step of steps) {
                    const followings = p.parse(step.nextToken);
                    if (succeeded(followings)) {
                        for (const following of followings) {
                            result.push({
                                nextToken: following.nextToken,
                                result: step.result.concat([following.result])
                            });
                        }
                    } else {
                        error = betterError(error, followings);
                    }
                }

                if (result.length === 0) {
                    result = steps;
                    break;
                }
            }
            return resultOrError(result, error);
        }
    };
}

export function repr<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    return {
        parse(token: Token<TKind>): ParseResult<TKind, TResult[]>[] | ParseError {
            let error: ParseError | undefined;
            const result: ParseResult<TKind, TResult[]>[] = [{ nextToken: token, result: [] }];

            for (let i = 0; i < result.length; i++) {
                const step = result[i];
                const followings = p.parse(step.nextToken);
                if (succeeded(followings)) {
                    for (const following of followings) {
                        result.push({
                            nextToken: following.nextToken,
                            result: step.result.concat([following.result])
                        });
                    }
                } else {
                    error = betterError(error, followings);
                }
            }
            return resultOrError(result, error);
        }
    };
}
