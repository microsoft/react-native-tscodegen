import { Token } from '../Lexer';
import { Parser, ParseResult } from './ParserInterface';

export function apply<TKind, TFrom, TTo>(p: Parser<TKind, TFrom>, callback: (value: TFrom) => TTo): Parser<TKind, TTo> {
    return {
        parse(token: Token<TKind>): ParseResult<TKind, TTo>[] {
            return p.parse(token).map((value: ParseResult<TKind, TFrom>) => {
                return {
                    nextToken: value.nextToken,
                    result: callback(value.result)
                };
            });
        }
    };
}
