import { Token } from '../Lexer';
import { alt } from './AlternativeParser';
import { Parser, ParseResult } from './ParserInterface';
import { nil } from './TokenParser';

export function opt<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult | undefined> {
    return alt(p, nil<TKind>());
}

export function opt_sc<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult | undefined> {
    return {
        parse(token: Token<TKind> | undefined): ParseResult<TKind, TResult | undefined>[] {
            const result = p.parse(token);
            if (result.length === 0) {
                return nil<TKind>().parse(token);
            } else {
                return result;
            }
        }
    };
}
