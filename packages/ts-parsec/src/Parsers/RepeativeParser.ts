// tslint:disable:no-constant-condition
// tslint:disable:no-increment-decrement
// tslint:disable:prefer-for-of

import { Token } from '../Lexer';
import { apply } from './ApplyParser';
import { betterError, ParseError, Parser, ParseResult, ParserOutput, resultOrError } from './ParserInterface';
import { seq } from './SequencialParser';

export function rep<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    const reprParser = repr(p);
    return {
        parse(token: Token<TKind>): ParserOutput<TKind, TResult[]> {
            const output = reprParser.parse(token);
            if (output.successful) {
                return {
                    candidates: output.candidates.reverse(),
                    successful: true,
                    error: output.error
                };
            } else {
                return output;
            }
        }
    };
}

export function rep_sc<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    return {
        parse(token: Token<TKind>): ParserOutput<TKind, TResult[]> {
            let error: ParseError | undefined;
            let result: ParseResult<TKind, TResult[]>[] = [{ nextToken: token, result: [] }];

            while (true) {
                const steps = result;
                result = [];
                for (const step of steps) {
                    const output = p.parse(step.nextToken);
                    error = betterError(error, output.error);

                    if (output.successful) {
                        for (const candidate of output.candidates) {
                            if (candidate.nextToken !== step.nextToken) {
                                result.push({
                                    nextToken: candidate.nextToken,
                                    result: step.result.concat([candidate.result])
                                });
                            }
                        }
                    }
                }

                if (result.length === 0) {
                    result = steps;
                    break;
                }
            }
            return resultOrError(result, error, true);
        }
    };
}

export function repr<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult[]> {
    return {
        parse(token: Token<TKind>): ParserOutput<TKind, TResult[]> {
            let error: ParseError | undefined;
            const result: ParseResult<TKind, TResult[]>[] = [{ nextToken: token, result: [] }];

            for (let i = 0; i < result.length; i++) {
                const step = result[i];
                const output = p.parse(step.nextToken);
                error = betterError(error, output.error);

                if (output.successful) {
                    for (const candidate of output.candidates) {
                        if (candidate.nextToken !== step.nextToken) {
                            result.push({
                                nextToken: candidate.nextToken,
                                result: step.result.concat([candidate.result])
                            });
                        }
                    }
                }
            }
            return resultOrError(result, error, true);
        }
    };
}

function applyList<TResult, TSeparator>(value: [TResult, [TSeparator, TResult][]]): TResult[] {
    return [value[0]].concat(value[1].map((pair: [TSeparator, TResult]) => { return pair[1]; }));
}

export function list<TKind, TResult, TSeparator>(p: Parser<TKind, TResult>, s: Parser<TKind, TSeparator>): Parser<TKind, TResult[]> {
    return apply(seq(p, rep(seq(s, p))), applyList);
}

export function list_sc<TKind, TResult, TSeparator>(p: Parser<TKind, TResult>, s: Parser<TKind, TSeparator>): Parser<TKind, TResult[]> {
    return apply(seq(p, rep_sc(seq(s, p))), applyList);
}

function applyLrec<TResult, TFirst extends TResult, TSecond>(callback: (a: TResult, b: TSecond) => TResult): (value: [TFirst, TSecond[]]) => TResult {
    return (value: [TFirst, TSecond[]]): TResult => {
        let result: TResult = value[0];
        for (const tail of value[1]) {
            result = callback(result, tail);
        }
        return result;
    };
}

export function lrec<TKind, TResult, TFirst extends TResult, TSecond>(p: Parser<TKind, TFirst>, q: Parser<TKind, TSecond>, callback: (a: TResult, b: TSecond) => TResult): Parser<TKind, TResult> {
    return apply(seq(p, rep(q)), applyLrec(callback));
}

export function lrec_sc<TKind, TResult, TFirst extends TResult, TSecond>(p: Parser<TKind, TFirst>, q: Parser<TKind, TSecond>, callback: (a: TResult, b: TSecond) => TResult): Parser<TKind, TResult> {
    return apply(seq(p, rep_sc(q)), applyLrec(callback));
}
