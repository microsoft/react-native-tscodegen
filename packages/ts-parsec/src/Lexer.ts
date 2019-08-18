// tslint:disable:no-constant-condition
// tslint:disable:no-null-keyword

export interface Token<T> {
    readonly kind: T;
    readonly text: string;
    readonly next: Token<T> | undefined;
}

export interface Lexer<T> {
    parse(input: string): Token<T>;
}

class TokenImpl<T> implements Token<T> {
    private nextToken: Token<T> | undefined | null;

    constructor(
        private readonly lexer: LexerImpl<T>,
        private readonly input: string,
        public kind: T,
        public text: string,
        public index: number,
        public discarded: boolean
    ) {
    }

    public get next(): Token<T> | undefined {
        if (this.nextToken === undefined) {
            this.nextToken = this.lexer.parseNextAvailable(this.input, this.index + this.text.length);
            if (this.nextToken === undefined) {
                this.nextToken = null;
            }
        }

        return this.nextToken === null ? undefined : this.nextToken;
    }
}

class LexerImpl<T> implements Lexer<T> {
    constructor(public rules: [boolean, RegExp, T][]) {
        for (const rule of this.rules) {
            if (rule[1].source[0] !== '^') {
                throw new Error(`Regular expression patterns for a tokenizer should start with "$":${rule[1].source}`);
            }
            if (!rule[1].global) {
                throw new Error(`Regular expression patterns for a tokenizer should be global:${rule[1].source}`);
            }
        }
    }

    public parse(input: string): TokenImpl<T> | undefined {
        return this.parseNextAvailable(input, 0);
    }

    public parseNext(input: string, index: number): TokenImpl<T> | undefined {
        if (index === input.length) {
            return undefined;
        }

        for (const [discarded, regexp, kind] of this.rules) {
            regexp.lastIndex = index;
            if (regexp.test(input)) {
                const text = input.substring(index, regexp.lastIndex);
                return new TokenImpl<T>(this, input, kind, text, index, discarded);
            }
        }

        throw new Error(`Unable to tokenize the rest of the input: ${input.substr(index)}`);
    }

    public parseNextAvailable(input: string, index: number): TokenImpl<T> | undefined {
        let token: TokenImpl<T>;
        while (true) {
            token = this.parseNext(input, token === undefined ? index : token.index + token.text.length);
            if (token === undefined) {
                return undefined;
            } else if (!token.discarded) {
                return token;
            }
        }
    }
}

export function buildLexer<T>(rules: [boolean, RegExp, T][]): Lexer<T> {
    return new LexerImpl<T>(rules);
}
