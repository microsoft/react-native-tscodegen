import { Token } from '../Lexer';
import { Parser, ParseResult, ParserOutput, succeeded } from './ParserInterface';

export function apply<TKind, TFrom, TTo>(p: Parser<TKind, TFrom>, callback: (value: TFrom) => TTo): Parser<TKind, TTo> {
    return {
        parse(token: Token<TKind>): ParserOutput<TKind, TTo> {
            const result = p.parse(token);
            if (succeeded(result)) {
                return result.map((value: ParseResult<TKind, TFrom>) => {
                    return {
                        nextToken: value.nextToken,
                        result: callback(value.result)
                    };
                });
            } else {
                return result;
            }
        }
    };
}
