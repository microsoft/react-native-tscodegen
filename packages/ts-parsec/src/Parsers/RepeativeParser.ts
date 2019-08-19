// tslint:disable:no-constant-condition
// tslint:disable:no-increment-decrement
// tslint:disable:prefer-for-of

import { Token } from '../Lexer';
import { Parser, ParseResult } from './ParserInterface';

export function rep<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    const reprParser = repr(p);
    return {
        parse(token: Token<TKind>): ParseResult<TKind, TResult[]>[] {
            return reprParser.parse(token).reverse();
        }
    };
}

export function rep_sc<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    return {
        parse(token: Token<TKind>): ParseResult<TKind, TResult[]>[] {
            let result: ParseResult<TKind, TResult[]>[] = [{ nextToken: token, result: [] }];
            while (true) {
                const steps = result;
                result = [];
                for (const step of steps) {
                    const followings = p.parse(step.nextToken);
                    for (const following of followings) {
                        result.push({
                            nextToken: following.nextToken,
                            result: step.result.concat([following.result])
                        });
                    }
                }

                if (result.length === 0) {
                    result = steps;
                    break;
                }
            }
            return result;
        }
    };
}

export function repr<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    return {
        parse(token: Token<TKind>): ParseResult<TKind, TResult[]>[] {
            const result: ParseResult<TKind, TResult[]>[] = [{ nextToken: token, result: [] }];
            for (let i = 0; i < result.length; i++) {
                const step = result[i];
                const followings = p.parse(step.nextToken);
                for (const following of followings) {
                    result.push({
                        nextToken: following.nextToken,
                        result: step.result.concat([following.result])
                    });
                }
            }
            return result;
        }
    };
}
