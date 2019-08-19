import { Token } from '../Lexer';
import { betterError, ParseError, Parser, ParseResult, resultOrError, succeeded } from './ParserInterface';

export function alt<TKind, T1, T2>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>
): Parser<TKind, (T1 | T2)>;

export function alt<TKind, T1, T2, T3>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>
): Parser<TKind, (T1 | T2 | T3)>;

export function alt<TKind, T1, T2, T3, T4>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>
): Parser<TKind, (T1 | T2 | T3 | T4)>;

export function alt<TKind, T1, T2, T3, T4, T5>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7, T8>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>,
    p8: Parser<TKind, T8>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8)>;

export function alt(...ps: Parser<void, {}>[]): Parser<void, {}> {
    return {
        parse(token: Token<void> | undefined): ParseResult<void, {}>[] | ParseError {
            let error: ParseError | undefined;
            let result: ParseResult<void, {}>[] = [];
            for (const p of ps) {
                const choices = p.parse(token);
                if (succeeded(choices)) {
                    result = result.concat();
                } else {
                    error = betterError(error, choices);
                }
            }
            return resultOrError(result, error);
        }
    };
}
