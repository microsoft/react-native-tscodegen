# ts-parsec

ts-parsec is a parser combinator for TypeScript. It provides the following features:

- **Tokenizer based on regular expressions**. This tokenizer is designed for convenience. For some cases its performance may be unsatisfying. In this case, you could write your own tokenizer. It is very easy to plug your tokenizer into ts-parsec.
- **Parser combinators**.
- The ability to support recursive syntax.

You are recommended to learn [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) before using this library.

## Getting Started

There is a good example in `test/TestRecursiveParser.ts`. But here I have a much more simple example. For example, you want to parse a list of numbers like this:

```plain-text
123, 456.789, 0
```

A number could be an integer or a decimal. Numbers are separated by commas. Spaces are ignored. So there are obviously 3 kinds of tokens:

```typescript
enum TokenKind {
    Number,
    Comma,
    Space
}
```

The easiest way to write a tokenizer is using regular expressions, so that you use `buildLexer` function.

```typescript
const tokenizer = buildLexer([
    [true, /^\d+(\.\d+)?/g, TokenKind.Number],
    [true, /^\,/g, TokenKind.Comma],
    [false, /^\s+/g, TokenKind.Space]
]);
```

Here `false` means that, after the tokenizer recognize this token, it is thrown away from the token stream. You don't read this token from the token stream.

Now, you need to define your parser:

```typescript
const numberListParser = list_sc(tok(TokenKind.Number), str(','));
```

`list_sc` means that the parser will try to consume tokens as much as possible.
If you use `list` instead of `list_sc`, you could get multiple results, which means, if you input `1,2,3`, you could get 3 results: `1`, `1,2`, `1,2,3.`.
This is a very useful feature when you need to deal with some ambiguity inside a bigger parser, but we don't need it here.

But at this moment, `numberListParser` doesn't give you a number array, it gives you a structure that **topological equivalent** to the syntax you provided. You need one more step to convert it to a number array:

```typescript
const numberListParser = apply(
    list_sc(tok(TokenKind.Number), str(',')),
    (tokens: Token<TokenKind.Number>[]]) => {
        return tokens.map((token: Token<TokenKind.Number>) => {
            return +token.text;
        });
    });
```

`apply` means that, you are not satisfy with the direct result of the parser, you want to transform it to your favorite data structure. Here you need a number array.

So let's try it!

```typescript
const numberArray = expectSingleResult(expectEOF(numberListParser.parse(tokenizer.parse('123, 456.789, 0'))));
```

Now you get: `[123, 456.789, 0]`!

After calling `expectSingleResult(expectEOF(x))`, you choose the best result among multiple ones returned from the parser. If all tokens are not consumed, you will get an exception, with details about where goes wrong in your input.

Don't forget to import all of these symbols!

```typescript
import {apply, buildLexer, expectEOF, expectSingleResult, list_sc, str, tok, Token} from 'ts-parsec`;
```

## Tokenizer

You could use `buildLexer` to create a tokenizer from regular expressions. If you want to write your own tokenizer, just create a linked list of `Token<T>` type. Usually `T` is the tag of tokens, just like `TokenKind` in the example.

```typescript
export interface Token<T> {
    readonly kind: T;
    readonly text: string;
    readonly pos: TokenPosition;
    readonly next: Token<T> | undefined;
}
```

`pos` is very important. During parsing, parser combinator will hit many errors, because it is very common that a small part of the parser combinator find itself encounter an unexpected token. In this case, the parser combinator returns an error with `pos`. A bigger parser combinator will then turn to another choise (for example, in `alt`, or `list_sc`). If all choices are all failed, it compares all errors that is returned from these choices, and return one that has consumed the most tokens.

When you write your own tokenizer, please take very carefully to generate `pos`. But if you use `buildLexer`, you just forget all of these details.

`buildLexer` consumes an array of a 3-element-tuple. Let's take a look at the example again:

```typescript
const tokenizer = buildLexer([
    [true, /^\d+(\.\d+)?/g, TokenKind.Number],
    [true, /^\,/g, TokenKind.Comma],
    [false, /^\s+/g, TokenKind.Space]
]);
```

There are 3 elements in each line. The first one indicates whether the tokenizer want to keep the token in the token stream or not. Here we don't care about spaces, so we set false. So that the token stream only has numbers and commas.

It is very common possible that, multiple token definitions match the prefix of the input from a position. At this moment, `buildLexer` will pick the longest one. If there are still multiple longest tokens with the same size, `buildLexer` will pick one that appears eariler in the array passing to `buildLexer`.

For example:

```typescript
const tokenizer = buildLexer([
    [true, /^true/g, 0],
    [true, /^\w+/g, 1],,
    [false, /^\s+/g, 2]
]);
```

If you gives `true trueLies`, 1st and 2nd both match `true`. But the 1st one appears eariler than then 2nd one in the array passing to `buildLexer`, so 1st wins.
And then you get to `trueLies` after skipping a space, 1st and 2nd both match the prefix of the input again. But 1st matches `true`, 2nd matches `trueLies`, 2nd is longer, so 2nd wins.

For some languages, like VB.NET, it has context sensitive tokenizers. You could embed an XML in the code, and definitely XML and VB.NET has two different set of token definitions. `buildLexer` could not handle this case. If you have such need, you could:

- Write a manual tokenizer.
- Tell me and I add more features to the library for you.
- Make a pull request!

## Parser Combinators

## Recursive Syntax

## Utilities
