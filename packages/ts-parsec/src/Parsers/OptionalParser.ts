import { Token } from '../Lexer';
import { alt } from './AlternativeParser';
import { Parser, ParserOutput } from './ParserInterface';
import { nil } from './TokenParser';

export function opt<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult | undefined> {
    return alt(p, nil<TKind>());
}

export function opt_sc<TKind, TResult>(p: Parser<TKind, TResult>): Parser<TKind, TResult | undefined> {
    return {
        parse(token: Token<TKind> | undefined): ParserOutput<TKind, TResult | undefined> {
            const output = p.parse(token);
            if (output.successful) {
                return output;
            } else {
                return {
                    candidates: [{
                        nextToken: token,
                        result: undefined
                    }],
                    successful: true,
                    error: output.error
                };
            }
        }
    };
}
