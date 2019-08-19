import { Token } from '../Lexer';
import { Parser, ParserOutput } from './ParserInterface';

export interface Rule<TKind, TResult> extends Parser<TKind, TResult> {
    setPattern(parser: Parser<TKind, TResult>): void;
}

class RuleImpl<TKind, TResult> implements Rule<TKind, TResult> {
    private parser: Parser<TKind, TResult>;

    constructor() {
        // nothing
    }

    public setPattern(parser: Parser<TKind, TResult>): void {
        this.parser = parser;
    }

    public parse(token: Token<TKind> | undefined): ParserOutput<TKind, TResult> {
        if (this.parser === undefined) {
            throw new Error(`Rule has not been initialized. setPattern is required before calling parse.`);
        }
        return this.parser.parse(token);
    }
}

export function rule<TKind, TResult>(): Rule<TKind, TResult> {
    return new RuleImpl<TKind, TResult>();
}
