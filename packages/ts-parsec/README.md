# ts-parsec

ts-parsec is a parser combinator for TypeScript. It provides the following features:

- **Tokenizer based on regular expressions**. This tokenizer is designed for convenience. For some cases its performance may be unsatisfying. In this case, you could write your own tokenizer. It is very easy to plug your tokenizer into ts-parsec.
- **Parser combinators**.
- The ability to support recursive syntax.

You are recommended to learn [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) before using this library.

## Getting Started

There is a good example in `test/TestRecursiveParser.ts`. But here I have a much more simple example. For example, you want to parse a list of numbers like this:

```plaintext
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

You define a `LL parser` by `EBNF`, and then translate it using parser combinators. All parser combinators could return multiple results, except those ends with `_sc`, which means `short cut`.
Short cut combinators returns the best result, even if it could fail the whole parser.
You need to choose them wisely.

At this moment, ts-parsec provides the following combinators:

- `nil`: Consumes no token and return `undefined`. When I say "it returns `undefined`", it doesn't mean the function return undefined, it means that `returnValue.candidates[something].result` is `undefined`. In most of the cases, you don't need to deal with multiple results by yourself, this is why you want to call `exceptSingleResult` and `expectEOF`. They will be explained later.
- `str('x')`: Consumes a token that is `'x'`.
- `tok(x)`: Consumes a token whose `kind` is `x`. If you use `buildLexer`, these values of `x` is put in the 3rd place of each line.
- `seq(a,b,c)`: Consumes tokens that matches `a`, `b` and then `c`. It returns a tuple, containing results from `a`, `b` and `c` in order. You could put 2-12 arguments in `seq`.
- `alt(a,b,c)`: Consumes tokens that matches `a`, `b` or `c`. It returns a union type, which could be the result of `a`, `b` or `c`. If multiple parsers in `alt` matches, they are all returned. You could put 2-12 arguments in `alt`.
- `apply(x, f)`: Consumes tokens that matches `x`, and if it succeeds, passs all result to `f`, and returns what `f` returns.
- `opt_sc(x)`: Consumes tokens that matches `x`, and if it fails, returns `undefined`.
- `opt(x)`: Consumes tokens that matches `x`. If it succeeds, returns the result and `undefined`. If it fails, returns `undefined`.
- `rep_sc(x)`: Consumes tokens that matches `x`. It will try multiple times, until it fails. It returns an array of all results from `x` in order. If `x` fails in the first try, it returns `[]`.
- `rep(x)` and `repr(x)`: Just like `rep_sc`, but it returns all possible arrays. For example, if `x` succeeds 3 times, rep returns `[[x1, x2, x3], [x1, x2], [x1], []]`. `repr` returns the same array in a reverse order.
- `list(x,d)` and `list_sc(x,d)`: It works like `rep(x)` and `rep_sc(x)`, but you can specify a delimiter between `x`.
- `lrec(a,b,f)` and `lrec_sc(a,b,f)`: It works like `apply(seq(a, rep(b)), F(f))` and `apply(seq(a, rep_sc(b), F(f))`. This parser requires `a` succeed. If `b` succeeds multiple times, `f(a,b)` will be called for multiple times. Details will be explained in **Recursive Syntax**.

## Recursive Syntax

Recursive syntax is also very common. Sometimes you need to parse a tree, not just a list, so `lrec`, `lrec_sc` and `rule` is your friend.

You are recommended to read `test/TestRecursiveParser.ts` if you have never learnt about `EBNF`.

### Left Recursive

`lrec` and `lrec_sc` means **Left Recursive (with Short Cut)**. They work in the same way, except that `lrec_sc` returns a single result which consumes tokens as much as possible, `lrec` returns multiple results just like `rep`.

Left recursive is a special kind of recursive, usually it appears in left-associated binary operator. In `test/TestRecursiveParser.ts`, there are `TERM`, `FACTOR` and `EXP`.

#### TERM

`TERM` is very straight forward. It parses `1`, `+1`, `-1`, or `(something)`.

#### FACTOR

`FACTOR` is a left recursive parser. It consumes `1`, `1*2` or `1*2*3`. For `1*2*3...`, tt is very clear that the structure is `1`, `*2`, `*3`... . And let's look at how `FACTOR` is implemented:

```typescript
lrec_sc(
    TERM,
    seq(
        alt(str('*'), str('/')),
        TERM
    ),
    applyBinary
)
```

According to the description above, `lrec_sc(a,b,f)` is `apply(seq(a, rep_sc(b)), F(f))`. So `FACTOR` will first need to parse `1`, and then it parses `*2`, `*3`, until it fails.

At this moment, you get a result like `['1', ['*2', '*3']]`. And then `f` is called in this way: `f(f('1', '*2'), '*3')`. This is what `F(f)` does here.

It is very cleared that, the way it calls `f` is left-associated, so this is a left recursive parser.

There is no need to have a right recursive parser function, because you could just call this parser inside itself, by using `rule`, which will be explained later.

#### EXP

Splitting `+`, `-` and `*`, `/` to `EXP` and `FACTOR` and letting `EXP` call `FACTOR` is a common trick to specify operator precedence. If you need to parse C++, which has about 20 levels of operator precedence, you will need to have 20 `EXP`s calling each other.

### Recursive

`EXP` calls `FACTOR`, `FACTOR` calls `TERM`, and `TERM` finally calls `EXP` again. This is recursive. You are not able to do this in one parser combinator expression. This is why you need `rule`. `rule` returns a parser, you can set another parser to it later by calling the `setPattern` member function.
When defining `TERM`, `EXP` is not yet defined, there is no problem!. After `EXP.setPattern` is called, `TERM` will know.

## Utilities

- `expectEOF` looks into all results that returned at the same time, and pick all that consumes all tokens. If there is any result that fail to consume all tokens, an error will be generated as a hint.
- `expectSingleResult` will see if there is only one result in the result list. If not, a `TokenError` is thrown.
