// \react-native\Libraries\Types\CodegenTypes.js

import { SyntheticEvent } from './CoreEventTypes';

// because XNotExported is not exported, so the only possible value it could be assigned to outside of this module is T
// if I don't write the code in this way, the TypeScript type checker won't give me the alias information
class FloatNotExported { private constructor() { } };
class DoubleNotExported { private constructor() { } };
class Int32NotExported { private constructor() { } };
class WithDefaultNotExported<T>{ private constructor() { } };

export type Float = number | FloatNotExported;
export type Double = number | DoubleNotExported;
export type Int32 = number | Int32NotExported;

export type BubblingEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type DirectEventHandler<T, PaperName extends string | {} = {}> = (event: SyntheticEvent<T>) => void | Promise<void>;
export type NotString = {};
export type Stringish = string;

export class ReactNull { private constructor() { } }
export type WithDefault<T, V> = ReactNull | T | WithDefaultNotExported<V>;
