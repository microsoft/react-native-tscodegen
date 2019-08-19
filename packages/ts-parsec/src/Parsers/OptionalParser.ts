import { Token } from '../Lexer';
import { alt } from './AlternativeParser';
import { failed, Parser, ParserOutput } from './ParserInterface';
import { nil } from './TokenParser';

export function opt<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult | undefined> {
    return alt(p, nil<TKind>());
}

export function opt_sc<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult | undefined> {
    const nilParser = nil<TKind>();
    return {
        parse(token: Token<TKind> | undefined): ParserOutput<TKind, TResult | undefined> {
            const result = p.parse(token);
            if (failed(result)) {
                return nilParser.parse(token);
            } else {
                return result;
            }
        }
    };
}
