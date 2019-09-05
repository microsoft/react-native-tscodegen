// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Token } from '../Lexer';
import { betterError, ParseError, Parser, ParseResult, ParserOutput, resultOrError } from './ParserInterface';

// CodegenOverloadings:Begin

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

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>,
    p8: Parser<TKind, T8>,
    p9: Parser<TKind, T9>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>,
    p8: Parser<TKind, T8>,
    p9: Parser<TKind, T9>,
    p10: Parser<TKind, T10>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>,
    p8: Parser<TKind, T8>,
    p9: Parser<TKind, T9>,
    p10: Parser<TKind, T10>,
    p11: Parser<TKind, T11>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>,
    p8: Parser<TKind, T8>,
    p9: Parser<TKind, T9>,
    p10: Parser<TKind, T10>,
    p11: Parser<TKind, T11>,
    p12: Parser<TKind, T12>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>,
    p8: Parser<TKind, T8>,
    p9: Parser<TKind, T9>,
    p10: Parser<TKind, T10>,
    p11: Parser<TKind, T11>,
    p12: Parser<TKind, T12>,
    p13: Parser<TKind, T13>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>,
    p8: Parser<TKind, T8>,
    p9: Parser<TKind, T9>,
    p10: Parser<TKind, T10>,
    p11: Parser<TKind, T11>,
    p12: Parser<TKind, T12>,
    p13: Parser<TKind, T13>,
    p14: Parser<TKind, T14>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>,
    p8: Parser<TKind, T8>,
    p9: Parser<TKind, T9>,
    p10: Parser<TKind, T10>,
    p11: Parser<TKind, T11>,
    p12: Parser<TKind, T12>,
    p13: Parser<TKind, T13>,
    p14: Parser<TKind, T14>,
    p15: Parser<TKind, T15>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15)>;

export function alt<TKind, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(
    p1: Parser<TKind, T1>,
    p2: Parser<TKind, T2>,
    p3: Parser<TKind, T3>,
    p4: Parser<TKind, T4>,
    p5: Parser<TKind, T5>,
    p6: Parser<TKind, T6>,
    p7: Parser<TKind, T7>,
    p8: Parser<TKind, T8>,
    p9: Parser<TKind, T9>,
    p10: Parser<TKind, T10>,
    p11: Parser<TKind, T11>,
    p12: Parser<TKind, T12>,
    p13: Parser<TKind, T13>,
    p14: Parser<TKind, T14>,
    p15: Parser<TKind, T15>,
    p16: Parser<TKind, T16>
): Parser<TKind, (T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10 | T11 | T12 | T13 | T14 | T15 | T16)>;

// CodegenOverloadings:End

export function alt(...ps: Parser<void, {}>[]): Parser<void, {}> {
    return {
        parse(token: Token<void> | undefined): ParserOutput<void, {}> {
            let error: ParseError | undefined;
            let result: ParseResult<void, {}>[] = [];
            let successful = false;
            for (const p of ps) {
                const output = p.parse(token);
                error = betterError(error, output.error);

                if (output.successful) {
                    result = result.concat(output.candidates);
                    successful = true;
                }
            }
            return resultOrError(result, error, successful);
        }
    };
}
